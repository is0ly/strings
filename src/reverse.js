export default function reverse(string) {
  if (typeof string !== 'string') {
    return 'No valid arguments given!';
  }
  const tempString = [...string.toLowerCase()];
  return tempString
    .reduce((a, i) => {
      a.unshift(i);
      return a;
    }, [])
    .join('');
}
