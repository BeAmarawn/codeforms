export function transformToMaskString(str) {
  const mask = str.replace(/#/g, '*');
  return mask;
}
