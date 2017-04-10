// import React from 'react'
var React = require('react');
// import {render} from 'react-dom'
var render = require('react-dom').render;

export function MyLibrary() {
    console.log('inside my library');
}

export function otherLibraryFunction() {
    console.log('other library function');
}

// Other file
import {MyLibrary, otherLibraryFunction} from './libFile';

var obj = {
    MyLibrary: function() {},
    otherLibraryFunction: function() {}
}

var {MyLibrary, otherLibraryFunction} = obj;

// default export
export default function MyLibrary() {
    console.log('inside my library');
}

import MyLibrary from './libFile';