import { hext, transparencyToHex, convertToSixDigitHex } from '../index';

describe('hext library', () => {
    test("hext outputs with transperancy", () => {
        expect(hext('#ff0000', 87)).toBe(`#ff0000${hardCodedHexReference(87)}`);
    })
    test("hext converts from shorthand and outputs with transperancy", () => {
        expect(hext('#f00', 87)).toBe(`#ff0000${hardCodedHexReference(87)}`);
    })
    test("hext throws error due to invalid length", () => {
        const error = 'Hex codes must be 6 (full) or 3 (shorthand) characters.'
        expect(() => {
            hext('#f0000000', 87)
        }).toThrowError(error);
        expect(() => {
            hext('#00', 87)
        }).toThrowError(error);
    })
    test("transperancyToHex gets just the hex code", () => {
        expect(transparencyToHex(32)).toBe(hardCodedHexReference(32));
    })
    test("convertToSixDigitHex covnerts shorthand to full 6 digits", () => {
        expect(convertToSixDigitHex('f00')).toBe('ff0000');
    })
})

export const hardCodedHexReference = (percentage: number) => {
  const hexes = [
    '00',
    '03',
    '05',
    '08',
    '0A',
    '0D',
    '0F',
    '12',
    '14',
    '17',
    '1A',
    '1C',
    '1F',
    '21',
    '24',
    '26',
    '29',
    '2B',
    '2E',
    '30',
    '33',
    '36',
    '38',
    '3B',
    '3D',
    '40',
    '42',
    '45',
    '47',
    '4A',
    '4D',
    '4F',
    '52',
    '54',
    '57',
    '59',
    '5C',
    '5E',
    '61',
    '63',
    '66',
    '69',
    '6B',
    '6E',
    '70',
    '73',
    '75',
    '78',
    '7A',
    '7D',
    '80',
    '82',
    '85',
    '87',
    '8A',
    '8C',
    '8F',
    '91',
    '94',
    '96',
    '99',
    '9C',
    '9E',
    'A1',
    'A3',
    'A6',
    'A8',
    'AB',
    'AD',
    'B0',
    'B3',
    'B5',
    'B8',
    'BA',
    'BD',
    'BF',
    'C2',
    'C4',
    'C7',
    'C9',
    'CC',
    'CF',
    'D1',
    'D4',
    'D6',
    'D9',
    'DB',
    'DE',
    'E0',
    'E3',
    'E6',
    'E8',
    'EB',
    'ED',
    'F0',
    'F2',
    'F5',
    'F7',
    'FA',
    'FC',
    'FF',
  ];
  return hexes[percentage];
};