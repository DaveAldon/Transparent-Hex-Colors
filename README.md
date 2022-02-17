# hext
[![NPM Version](https://img.shields.io/npm/v/@davealdon/hext.svg)](https://www.npmjs.com/package/@davealdon/hext)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

Get hex colors with transparency based on opacity percentage. *Wow!* **No more rgb mixed with hex!**

### Install
`npm install @davealdon/hext`
or
`yarn add @davealdon/hext`

Then pass your hex color (string), and the percentage (number):
```ts
import { hext } from '@davealdon/hext';

const hexColor = hext('#ff0000', 30);

console.log(hexColor); // #ff00004D
```

This will output the color with the transparency code tacked onto the end. It's pretty simple!

### Additional API usage

There's are a couple more functions available to you that hext uses to output the whole color code:

| function      | usage | description |
| ----------- | ----------- | ----------- |
| hext | `hext('#ff0000', 30) // #ff00004D` | Returns entire hex code with transparency |
| transparencyToHex      | `transparencyToHex(30) // 4D` | Returns only the transparency code. Does not include hash |
| convertToSixDigitHex   | `convertToSixDigitHex("ff0") // ffff00` | Converts a shorthand hex code and returns the full 6 character code. Does not include hash |


