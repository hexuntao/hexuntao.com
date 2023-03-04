---
title: 检查字符串是否为有效颜色
---

# 检查字符串是否为有效颜色

_仅适用于客户端，不适用于 Node.js_

简单的颜色验证器功能

```js
let isValidColor = (color) => {
  let otpNode = new Option()
  otpNode.style.color = color

  return !!otpNode.style.color
}
```

用法

```js
// 有效 颜色值
isValidColor('purple') // true
isValidColor('burlywood') // true
isValidColor('lightsalmon') // true
isValidColor('rgb(255, 255, 255)') // true
isValidColor('rgba(255, 255, 255, .5)') // true
isValidColor('#ccc') // true
isValidColor('hsl(100, 0%, 18%)') // true

// 无效 颜色值
isValidColor('not-a-color-name') // false
isValidColor('dark gray') // false. 应为“darkgray”
isValidColor('rgb(255, 255, 255, 1, 1)') // false
isValidColor('#ccczzz') // false
```

兼容部分字符：

`unset`, `initial`,  `inherit` 之类的字符串也是有效值，所以如果要排除这些字符串，只需稍微更改函数即可`currentcolor`：`transparent`

```js
let isValidColor = (color) => {
  let otpNode = new Option()
  otpNode.style.color = color

  return !!otpNode.style.color && !/(unset|initial|inherit|currentcolor|transparent)/i.test(color)
}

isValidColor('rgb(-1, 255, 255)') // true
isValidColor('none') // false
isValidColor('initial') // false
isValidColor('gray') // true
```
