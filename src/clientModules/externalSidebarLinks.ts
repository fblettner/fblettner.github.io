// Force specific sidebar `link` items to open in a new tab.
//
// Docusaurus 3's `SidebarItemLink` does not pass `target` through to the
// rendered <Link> — and even if we set the DOM attribute later, React Router
// still intercepts the click because it reads the React `target` prop, not
// the live DOM attribute. So we install a capture-phase click handler that
// blocks React's delegated handler with stopImmediatePropagation and opens
// the new tab manually.

const NEW_TAB_HREFS = new Set([
  '/nomaubl/api-reference/',
  '/fr/nomaubl/api-reference/',
]);

const INSTALLED = '__newTabHandlerInstalled';

function normalize(href: string): string {
  return href.endsWith('/') ? href : href + '/';
}

function tag(anchor: HTMLAnchorElement) {
  if ((anchor as unknown as Record<string, unknown>)[INSTALLED]) return;
  (anchor as unknown as Record<string, unknown>)[INSTALLED] = true;

  anchor.setAttribute('target', '_blank');
  anchor.setAttribute('rel', 'noopener noreferrer');

  anchor.addEventListener(
    'click',
    (event) => {
      // Let browser handle modifier-clicks naturally (Cmd/Ctrl-click etc.).
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (event.button !== 0) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      window.open(anchor.href, '_blank', 'noopener,noreferrer');
    },
    true, // capture phase — runs before React Router's delegated handler
  );
}

function tagSidebarLinks() {
  if (typeof document === 'undefined') return;
  const anchors = document.querySelectorAll<HTMLAnchorElement>('a.menu__link');
  anchors.forEach((a) => {
    const href = a.getAttribute('href');
    if (!href) return;
    if (NEW_TAB_HREFS.has(normalize(href))) tag(a);
  });
}

export function onRouteDidUpdate() {
  // The sidebar may rerender between docs routes; re-tag any new anchors.
  tagSidebarLinks();
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', tagSidebarLinks);
}
