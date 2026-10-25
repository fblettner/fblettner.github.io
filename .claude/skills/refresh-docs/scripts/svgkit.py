"""Dark-card SVG mockups in the style of the existing NomaUBL docs (invoices.md)."""

SANS = "system-ui, sans-serif"
MONO = "ui-monospace, monospace"


def esc(t):
    return str(t).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("{", "&#123;").replace("}", "&#125;").replace("*", "·")


def tw(text, fs=10, mono=False):
    return len(str(text)) * fs * (0.62 if mono else 0.56)


class Svg:
    def __init__(self, pfx, width, height):
        self.p, self.W, self.H = pfx, width, height
        self.o = []

    def add(self, s):
        self.o.append("  " + s)

    def gap(self):
        self.o.append("")

    # ── primitives ──────────────────────────────────────────────────────────
    def card(self, x, y, w, h):
        self.add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="14" fill="url(#{self.p}-g-card)" stroke="#1f2937" strokeWidth="1.4"/>')

    def card_behind(self, x, y, w, h):
        """Card drawn behind everything already emitted (size known at the end)."""
        self.o.insert(0, f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="14" fill="url(#{self.p}-g-card)" stroke="#1f2937" strokeWidth="1.4"/>')

    def panel(self, x, y, w, h, tone=None, rx=8):
        if tone == "blue":
            self.add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>')
        elif tone == "dark":
            self.add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>')
        else:
            self.add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>')

    def hline(self, x1, x2, y):
        self.add(f'<line x1="{x1}" y1="{y}" x2="{x2}" y2="{y}" stroke="#1f2937" strokeWidth="1"/>')

    def text(self, x, y, t, fs=10, color="#cbd5e1", bold=False, mono=False, anchor=None, ls=None, italic=False):
        a = f' textAnchor="{anchor}"' if anchor else ""
        b = ' fontWeight="700"' if bold else ""
        l = f' letterSpacing="{ls}"' if ls else ""
        i = ' fontStyle="italic"' if italic else ""
        self.add(f'<text x="{x}" y="{y}" fill="{color}" fontSize="{fs}"{b}{l}{i}{a} fontFamily="{MONO if mono else SANS}">{esc(t)}</text>')

    def title(self, x, y, t):
        self.text(x, y, t, fs=13, color="#e2e8f0", bold=True)

    def muted(self, x, y, t, fs=9.5):
        self.text(x, y, t, fs=fs, color="#94a3b8")

    def label(self, x, y, t):
        self.text(x, y, t.upper(), fs=9, color="#64748b", ls="0.04em")

    def section(self, x, y, t):
        self.text(x, y, t.upper(), fs=9, color="#cbd5e1", bold=True, ls="0.06em")

    def button(self, x, y, label, kind="ghost", w=None, h=22, mono=False, fs=10):
        w = w or int(tw(label, fs, mono) + 22)
        fills = {
            "ghost": ('#1e293b', '#334155', '#94a3b8', False),
            "primary": (f'url(#{self.p}-g-blue)', '#4a9eff', '#e2e8f0', True),
            "danger": ('rgba(255,69,58,0.08)', 'rgba(255,69,58,0.40)', '#f87171', False),
            "input": ('#0a0e1a', '#334155', '#94a3b8', False),
            "placeholder": ('#0a0e1a', '#334155', '#475569', False),
            "active": ('rgba(74,158,255,0.18)', '#4a9eff', '#4a9eff', True),
            "tab": ('rgba(255,255,255,0.04)', '#334155', '#94a3b8', False),
        }
        f, s, c, b = fills[kind]
        self.add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="5" fill="{f}" stroke="{s}" strokeWidth="1"/>')
        if kind in ("input", "placeholder"):
            self.text(x + 10, y + h / 2 + 3.5, label, fs=fs, color=c, mono=mono)
        else:
            self.text(x + w / 2, y + h / 2 + 3.5, label, fs=fs, color=c, bold=b, mono=mono, anchor="middle")
        return x + w

    def chip(self, x, y, label, tone="grey", w=None, h=18, fs=9, bold=True):
        w = w or int(tw(label, fs) + 18)
        tones = {
            "blue": ("rgba(74,158,255,0.18)", "rgba(74,158,255,0.40)", "#4a9eff"),
            "green": ("rgba(50,215,75,0.18)", "rgba(50,215,75,0.40)", "#4ade80"),
            "red": ("rgba(255,69,58,0.18)", "rgba(255,69,58,0.40)", "#f87171"),
            "orange": ("rgba(255,159,10,0.18)", "rgba(255,159,10,0.40)", "#fb923c"),
            "purple": ("rgba(168,85,247,0.18)", "rgba(168,85,247,0.40)", "#c084fc"),
            "grey": ("rgba(255,255,255,0.06)", "#334155", "#94a3b8"),
        }
        f, s, c = tones[tone]
        self.add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{h/2}" fill="{f}" stroke="{s}" strokeWidth="1"/>')
        self.text(x + w / 2, y + h / 2 + 3.2, label, fs=fs, color=c, bold=bold, anchor="middle")
        return x + w

    def check(self, x, y, label, on=True, fs=10, color="#cbd5e1"):
        self.add(f'<rect x="{x}" y="{y-9}" width="11" height="11" rx="2" fill="{"rgba(74,158,255,0.25)" if on else "#0a0e1a"}" stroke="{"#4a9eff" if on else "#475569"}" strokeWidth="1"/>')
        if on:
            self.add(f'<path d="M{x+2.5},{y-3.5} L{x+4.8},{y-1.2} L{x+8.8},{y-6}" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>')
        self.text(x + 17, y, label, fs=fs, color=color)
        return x + 17 + tw(label, fs)

    def segmented(self, x, y, labels, active=0, h=24, fs=10):
        ws = [int(tw(l, fs) + 24) for l in labels]
        total = sum(ws)
        self.add(f'<rect x="{x}" y="{y}" width="{total}" height="{h}" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>')
        cx = x
        for i, (l, w) in enumerate(zip(labels, ws)):
            if i == active:
                self.add(f'<rect x="{cx+1}" y="{y+1}" width="{w-2}" height="{h-2}" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>')
            elif i > 0:
                self.add(f'<line x1="{cx}" y1="{y+5}" x2="{cx}" y2="{y+h-5}" stroke="#334155" strokeWidth="1"/>')
            self.text(cx + w / 2, y + h / 2 + 3.5, l, fs=fs, color="#4a9eff" if i == active else "#94a3b8", bold=i == active, anchor="middle")
            cx += w
        return x + total

    def table(self, x, y, w, cols, rows, row_h=26, head_h=28, fs=9.5):
        """cols: list of (label, width). rows: list of list of cells; a cell is str or (str, tone) for a pill or (str, 'link'/'mono'/'muted')."""
        self.add(f'<rect x="{x}" y="{y}" width="{w}" height="{head_h}" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>')
        cx = x + 10
        for lab, cw in cols:
            self.text(cx, y + head_h / 2 + 3, lab.upper(), fs=8.5, color="#cbd5e1", bold=True, ls="0.04em")
            cx += cw
        ry = y + head_h + 4
        for k, r in enumerate(rows):
            fill = "#0d1220" if k == 0 else "rgba(255,255,255,0.02)"
            self.add(f'<rect x="{x}" y="{ry}" width="{w}" height="{row_h}" rx="6" fill="{fill}" stroke="#1f2937" strokeWidth="1"/>')
            cx = x + 10
            for (lab, cw), cell in zip(cols, r):
                tone = None
                if isinstance(cell, tuple):
                    cell, tone = cell
                if tone in ("blue", "green", "red", "orange", "grey", "purple"):
                    self.chip(cx, ry + (row_h - 16) / 2, cell, tone, h=16, fs=8.5)
                elif tone == "link":
                    self.text(cx, ry + row_h / 2 + 3.5, cell, fs=fs, color="#4a9eff")
                elif tone == "mono":
                    self.text(cx, ry + row_h / 2 + 3.5, cell, fs=fs, color="#cbd5e1", mono=True)
                elif tone == "muted":
                    self.text(cx, ry + row_h / 2 + 3.5, cell, fs=fs, color="#64748b")
                else:
                    self.text(cx, ry + row_h / 2 + 3.5, cell, fs=fs)
                cx += cw
            ry += row_h + 4
        return ry

    def callout(self, x, y, w, head, sub, tx, ty, h=34):
        side_left = x + w < tx
        self.add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>')
        self.add(f'<text x="{x+10}" y="{y+15}" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="{SANS}">{esc(head)}</text>')
        self.add(f'<text x="{x+10}" y="{y+28}" fill="currentColor" fontSize="9" fontFamily="{SANS}" opacity="0.7">{esc(sub)}</text>')
        sx = x + w if side_left else x
        self.add(f'<line x1="{sx}" y1="{y+h/2}" x2="{tx}" y2="{ty}" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#{self.p}-arrow)"/>')

    # ── output ──────────────────────────────────────────────────────────────
    def render(self):
        p = self.p
        head = [
            f'<svg viewBox="0 0 {self.W} {self.H}" xmlns="http://www.w3.org/2000/svg" style={{{{maxWidth: \'100%\', height: \'auto\', margin: \'24px 0\', display: \'block\'}}}}>',
            "  <defs>",
            f'    <marker id="{p}-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>',
            f'    <linearGradient id="{p}-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>',
            f'    <linearGradient id="{p}-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>',
            "  </defs>",
            "",
        ]
        return "\n".join(head + self.o + ["</svg>"])


def _box(self, x, y, w, h, title, sub=None, tone=None):
    fills = {None: ("rgba(255,255,255,0.03)", "#334155", "#e2e8f0"), "blue": ("rgba(74,158,255,0.12)", "#4a9eff", "#4a9eff"),
             "green": ("rgba(50,215,75,0.10)", "rgba(50,215,75,0.50)", "#4ade80"), "orange": ("rgba(255,159,10,0.10)", "rgba(255,159,10,0.50)", "#fb923c"),
             "purple": ("rgba(168,85,247,0.10)", "rgba(168,85,247,0.50)", "#c084fc")}
    f, s, c = fills[tone]
    self.add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="8" fill="{f}" stroke="{s}" strokeWidth="1.2"/>')
    if sub:
        self.text(x + w / 2, y + h / 2 - 3, title, fs=10.5, color=c, bold=True, anchor="middle")
        self.text(x + w / 2, y + h / 2 + 12, sub, fs=8.5, color="#94a3b8", anchor="middle")
    else:
        self.text(x + w / 2, y + h / 2 + 4, title, fs=10.5, color=c, bold=True, anchor="middle")


def _arrow(self, x1, y1, x2, y2, dashed=False, color="#64748b"):
    d = ' strokeDasharray="4 3"' if dashed else ""
    self.add(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" strokeWidth="1.4"{d} markerEnd="url(#{self.p}-flow)"/>')


Svg.box = _box
Svg.arrow = _arrow
_render0 = Svg.render


def _render(self):
    out = _render0(self)
    m = f'    <marker id="{self.p}-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>\n  </defs>'
    return out.replace("  </defs>", m, 1)


Svg.render = _render


def _kpi(self, x, y, w, h, label, value, delta=None, delta_tone="green", sub=None):
    """Headline figure card: small uppercase label, big value, optional change and sub-line."""
    self.panel(x, y, w, h)
    self.text(x + 12, y + 18, label.upper(), fs=8.5, color="#64748b", ls="0.04em")
    self.text(x + 12, y + 44, value, fs=17, color="#e2e8f0", bold=True)
    if delta:
        col = {"green": "#4ade80", "red": "#f87171", "grey": "#94a3b8"}[delta_tone]
        self.text(x + w - 12, y + 44, delta, fs=9.5, color=col, bold=True, anchor="end")
    if sub:
        self.text(x + 12, y + h - 10, sub, fs=8.5, color="#94a3b8")


def _stacked_bars(self, x, y, w, h, series, colors, labels=None):
    """Stacked vertical bars. series: list of bars, each a list of values (same length as colors)."""
    n = len(series)
    mx = max(sum(b) for b in series) or 1
    bw = w / n
    for i, bar in enumerate(series):
        top = y + h
        for v, c in zip(bar, colors):
            hh = v / mx * (h - 14)
            top -= hh
            self.add(f'<rect x="{x + i * bw + bw * 0.18:.1f}" y="{top:.1f}" width="{bw * 0.64:.1f}" height="{hh:.1f}" fill="{c}" fillOpacity="0.85"/>')
        if labels:
            self.text(x + i * bw + bw / 2, y + h + 11, labels[i], fs=8, color="#64748b", anchor="middle")


def _legend(self, x, y, items):
    """items: list of (label, color); returns the end x."""
    for lab, c in items:
        self.add(f'<rect x="{x}" y="{y - 8}" width="9" height="9" rx="2" fill="{c}"/>')
        self.text(x + 13, y, lab, fs=8.5, color="#94a3b8")
        x += 13 + tw(lab, 8.5) + 12
    return x


Svg.kpi = _kpi
Svg.stacked_bars = _stacked_bars
Svg.legend = _legend
