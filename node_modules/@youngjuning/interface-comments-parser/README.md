# @youngjuning/interface-comments-parser

> WIP: This is an initial draft, API is not stable

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]

[npm-image]: https://img.shields.io/npm/v/@youngjuning/interface-comments-parser.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@youngjuning/interface-comments-parser
[travis-image]: https://img.shields.io/travis/youngjuning/interface-comments-parser.svg?style=flat-square
[travis-url]: https://travis-ci.org/youngjuning/interface-comments-parser
[codecov-image]: https://codecov.io/gh/youngjuning/interface-comments-parser/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/youngjuning/interface-comments-parser

```bash
$ yarn add -D @youngjuning/interface-comments-parser
```

## Usage

### Parse

You can use `parse` to parse file.

```js
const path = require("path");
const { parse } = require("@youngjuning/interface-comments-parser");

parse(path.resolve(__dirname, "./demo.ts"), "DemoProps");
```

### GetFieldMeta

```js
const path = require("path");
const { parse, getFieldMeta } = require("@youngjuning/interface-comments-parser");

const result = parse(path.resolve(__dirname, "./demo.ts"), "DemoProps");
const meta = result.map(o => getFieldMeta(o, "zh-CN"));
```

## Type

```typescript
export interface IField {
  /**
   * @language en-US
   * @description name of fields
   */
  /**
   * @language zh-CN
   * @description 字段名
   */
  name: string;

  /**
   * @language zh-CN
   * @description 字段是否可选(即有没有问号)
   */
  optional: string;

  /**
   * @language zh-CN
   * @description 字段类型
   */
  types: string;

  /**
   * @language zh-CN
   * @description 字段信息，用户备注。
   */
  meta?: IFieldMeta;
}

export interface IMeta {
  [key: string]: string;
}

export interface IFieldMeta {
  base: IMeta;
  i18n: {
    [language: string]: IMeta;
  };
}
```

## API

### parse(filePath: string, name: string): IField[];

### getFieldMeta(field: IField, language?: string): IMeta;
