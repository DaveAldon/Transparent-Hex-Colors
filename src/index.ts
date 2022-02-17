export const hext = (hexCode: string, opacityPercentage: number) => {
  const hexWithoutHash = hexCode.replace('#', '');
  if(hexWithoutHash.length !== 6 && hexWithoutHash.length !== 3) {
    throw new Error('Hex codes must be 6 (full) or 3 (shorthand) characters.');
  }
  const formattedLength = hexWithoutHash.length;
  const formattedHexCode = formattedLength === 3 ? convertToSixDigitHex(hexWithoutHash) : hexWithoutHash;
  return `#${formattedHexCode}${transparencyToHex(opacityPercentage)}`;
};

export const transparencyToHex = (opacityPercentage: number) => {
  const intValue = Math.round((opacityPercentage / 100) * 255);
  const hexValue = intValue.toString(16);
  return hexValue.padStart(2, '0').toUpperCase();
};

export const convertToSixDigitHex = (hex: string) => {
  return hex
    .split('')
    .map((char) => `${char}${char}`)
    .join('');
};
