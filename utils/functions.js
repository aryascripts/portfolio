export function getReadableDate(epoch) {
  const d = new Date(epoch);
  return d.toLocaleDateString('en-us', {month: 'short', year: 'numeric'});
}
