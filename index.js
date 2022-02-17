module.exports = function hext(hexCode, opacityPercentage) {
    const hexWithoutHash = hexCode.replace('#', '');
    const formattedLength = hexWithoutHash.length
    const formattedHexCode = formattedLength === 3 ? convertToSixDigitHex(hexWithoutHash) : hexWithoutHash;
    return `#${formattedHexCode}${transparencyToHex(opacityPercentage)}`;
}

module.exports = function transparencyToHex(opacityPercentage) {
    const intValue = Math.round(opacityPercentage / 100 * 255);
    const hexValue = intValue.toString(16);
    return hexValue.padStart(2, '0').toUpperCase();
}

module.exports = function convertToSixDigitHex(hex) {
    return hex.split('').map(char => `${char}${char}`).join('');
}