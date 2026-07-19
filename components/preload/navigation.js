/**
 * @param {string} href
 * @param {string} currentHref
 * @returns {string | null}
 */
export function getInternalDestination(href, currentHref) {
  const destination = new URL(href, currentHref);
  const current = new URL(currentHref);

  if (
    destination.origin !== current.origin ||
    (destination.pathname === current.pathname && destination.search === current.search)
  ) return null;

  return `${destination.pathname}${destination.search}${destination.hash}`;
}
