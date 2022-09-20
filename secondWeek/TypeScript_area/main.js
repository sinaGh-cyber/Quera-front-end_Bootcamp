"use strict";
exports.__esModule = true;
var SHAPES = {
    square: function (a) { return a * a; },
    circle: function (r) { return Math.PI * r * r; },
    triangle: function (a, h) { return (a * h) / 2; },
    rectangle: function (a, b) { return a * b; }
};
function getAreaFunctions(shapes) {
    return shapes.map(function (shape) { return SHAPES[shape]; });
}
exports["default"] = getAreaFunctions;
