# react-native-uikit

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Modules](#Modules)
- [Contribute](#Contributors)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm installl react-native-uikit
$ # OR
$ yarn add react-native-uikit
```
## Usage

```js
import React, {Component} from 'react';
import {View} from 'react-native';
import {Deck} from 'react-native-uikit';

export class YourComponent extends Component {
    render () {
    return (
        <View>
          <Deck counts={5} />
          <Deck counts={2} />
          <Deck counts={1} />
        </View>
    )
}
```
## Modules
- Deck


### Contributors
* [@opencodes] - Rajesh Kumar Jha
* [@ujjwal] - Ujjwal Kumar
## License

MIT
    

[@opencodes]: <https://github.com/opencodes>
