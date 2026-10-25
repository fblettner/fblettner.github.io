"""Render a JSX-style SVG to PNG with headless Chrome to check it visually.

    import preview; preview.shot(svg_string, "/abs/path/out.png", 1250, 500)
Always pass an ABSOLUTE output path.
"""
import re, subprocess, sys, os

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ATTR = {"fontSize": "font-size", "fontWeight": "font-weight", "fontFamily": "font-family", "textAnchor": "text-anchor",
        "strokeWidth": "stroke-width", "strokeDasharray": "stroke-dasharray", "letterSpacing": "letter-spacing",
        "stopColor": "stop-color", "stopOpacity": "stop-opacity", "markerEnd": "marker-end", "fontStyle": "font-style"}


def to_html(jsx):
    s = re.sub(r"style=\{\{.*?\}\}", 'style="max-width:100%"', jsx)
    for a, b in ATTR.items():
        s = s.replace(a + "=", b + "=")
    return f"<html><body style='margin:16px;background:#fff;color:#1c1e21;font-family:system-ui'>{s}</body></html>"


def shot(jsx, out, width=1200, height=900):
    html = out.replace(".png", ".html")
    open(html, "w").write(to_html(jsx))
    subprocess.run([CHROME, "--headless", "--disable-gpu", "--hide-scrollbars", f"--window-size={width},{height}",
                    f"--screenshot={out}", "file://" + html], capture_output=True)
