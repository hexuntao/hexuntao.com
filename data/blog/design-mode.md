---
title: "Js设计模式"
date: "2022-11-22"
tags: ['javascript']
draft: true
summary: "draft"
authors: ["default"]
---

## 单例模式

保证一个类仅有一个实例（已经定义（内存中存在）了则直接返回，未定义则创建实例），并提供一个访问它的全局访问点。
就是说：只要创建了，就不会更改了，以后一直读取都是它。

```js
function A(opt) {
  this.name = opt.name;
}
A.prototype.funA = function () {
  return this.name + ' 这是单例！';
};
var func = (function () {
  var instance = null;
  return function (opt) {
    if (!instance) {
      // 保证只创建一个实例
      instance = new A(opt);
    }
    return instance;
  };
})();
var a = func({ name: '这个模式是：' }); // 需要时创建，而不是立即
```

简单封装一下：

```js
var getInstance = function (fn) {
  var instance = null;
  return function () {
    return instance || (instance = fn.call(this, arguments));
  };
};
```

## 工厂模式

通俗来说通过工厂方法替代 new 操作一种方式，如

```js
function func(opt) {
  var obj = new Object();
  obj.name = opt.name;
  obj.fn = function () {
    return obj.name + ' welcome！';
  };
  return obj;
}
var a = func({ name: 'vvmily' });
a.fn(); // vvmily welcome！
```

或者

```js
class A {
  funA(name) {
    return new B(name);
  }
}
class B {
  constructor(name) {
    this.name = name;
  }
}
var a = new A();

var aFn = a.funA('vvmily');
console.log(aFn.name); // vvmily

var bFn = a.funA('vvmily1');
console.log(bFn.name); // vvmily1
```

## 发布-订阅模式（观察者模式）

一对多的关系，一：发布者，多：订阅（观察者），发布者（数据改变）发出消息并推送给订阅者执行相应的操作。

这个模式，很像一个小系统一样，observer 就是系统，使用时只关心`observer.subscribe('a',callback)和observer.publish('a', value)`即可。

下面举个例子说一下，有状态 statusA 和 statusB，他们想让状态改变之后接收发布者发布的状态，故需要先订阅：

```js
// 观察者
const observer = {
  subscribes: [],
  // 订阅集合
  // 订阅
  subscribe: function (type, fn) {
    if (!this.subscribes[type]) {
      this.subscribes[type] = [];
    }
    // 收集订阅者的处理
    typeof fn === 'function' && this.subscribes[type].push(fn);
  },
  // 发布
  publish: function () {
    let type = [].shift.call(arguments); // 获取订阅者（名称）
    // 多个行为
    let fns = this.subscribes[type];

    //发送n个通知,循环处理调用
    for (var i = 0; i < fns.length; ++i) {
      fns[i].apply(this, arguments);
    }
  },
  remove: function (type, fn) {
    // 删除全部
    if (typeof type === 'undefined') {
      this.subscribes = [];
      return;
    }
    const fns = this.subscribes[type];
    // 遍历删除
    for (var i = 0; i < fns.length; ++i) {
      if (fns[i] === fn) {
        fns.splice(i, 1);
      }
    }
  },
};
// A订阅了某进度
observer.subscribe('statusA', function (status) {
  console.log(status, 'statusA');
});
// B订阅了某进度
observer.subscribe('statusB', function (status) {
  console.log(status, 'statusB');
});
// 进度结果出来了，需要发布通知，告诉已经订阅的A和B
observer.publish('statusA', 1); // 进度1
observer.publish('statusA', 2); // 进度2

// 删除订阅
observer.remove('statusA');
```

## 代理模式

为一个对象提供一个代用品，当操作对象时，需要经过替代品去操作源对象

代理模式主要有三种：保护代理、虚拟代理、缓存代理。
就是说：代理就是一个中间商的作用，交易双方不直接交涉；很经典，在框架，如 Vue 中大量使用。

保护代理，对主体加工，或者保护作用

```js
// 主体，发送消息
function proxyScore(score) {
  return score / 100;
}
// 代理，对数据进行过滤
function proxyScore(score) {
  if (score > 60) {
    sendMsg(msg);
  } else {
    // 统一处理，干点啥
    return 0;
  }
}
proxyScore(98); // 0.98
```

虚拟代理，经典防抖函数实现

这里随手写一下吧，比如滚动则会这样使用`window.onscroll = proxyHandle`

```js
function debounce(fn, delay = 300) {
  let timer = null;
  return function () {
    const arg = arguments;
    // 每次操作时，清除上次的定时器
    clearTimeout(timer);
    timer = null;
    // 定义新的定时器，一段时间后进行操作
    timer = setTimeout(function () {
      fn.apply(this, arg);
    }, delay);
  };
}
// 代理
const proxyHandle = (function () {
  return debounce(e => {
    // 干点啥
  }, 500);
})();
```

缓存代理，可以为一些开销大的运算结果提供暂时的缓存，提升效率

```js
// 主体
function strs() {
  const arg = [].slice.call(arguments);
  console.log('strs');
  return arg.join('-');
}

// 代理
var proxyStrs = (function () {
  let cache = [];
  return function () {
    let arg = [].slice.call(arguments).join('-');
    if (cache.includes(arg)) {
      // 存在，则直接从内存中读取
      return cache[arg];
    } else {
      cache.push(arg);
      return strs.apply(this, arguments);
    }
  };
})();
console.log(
  strs('a', 'b', 'c'),
  strs('a', 'b', 'c'),
  proxyStrs('a', 'b', 'c'),
  proxyStrs('a', 'b', 'c')
); // strs()执行三次
```
