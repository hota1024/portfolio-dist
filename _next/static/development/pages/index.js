(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "../tiny-canvas/lib/abstracts/Component/index.js":
/*!*******************************************************!*\
  !*** ../tiny-canvas/lib/abstracts/Component/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Component class.
 */
class Component {
    /**
     * Call on frame start.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onFrameStart() { }
    /**
     * Call on frame end.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onFrameEnd() { }
}
exports.Component = Component;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/abstracts/index.js":
/*!*********************************************!*\
  !*** ../tiny-canvas/lib/abstracts/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Component */ "../tiny-canvas/lib/abstracts/Component/index.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/class/TinyGame/index.js":
/*!**************************************************!*\
  !*** ../tiny-canvas/lib/class/TinyGame/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = __webpack_require__(/*! ../../helpers */ "../tiny-canvas/lib/helpers/index.js");
/**
 * TinyGame class.
 */
class TinyGame {
    /**
     * TinyGame constructor.
     *
     * @param renderer
     * @param inputManager
     * @param ticker
     */
    constructor(renderer, inputManager, ticker) {
        /**
         * Components.
         */
        this.components = [];
        // Set components.
        this.renderer = renderer;
        this.inputManager = inputManager;
        this.ticker = ticker;
        // Register components.
        this.register(this.renderer);
        this.register(this.inputManager);
        this.register(this.ticker);
        // Set ticker callback.
        this.ticker.setCallback(this.onFrameWrapper.bind(this));
    }
    /**
     * Cursor.
     */
    get cursor() {
        return this.cursorPos();
    }
    /**
     * Mouse.
     */
    get mouse() {
        return {
            leftPressed: this.leftPressed(),
            leftUp: this.leftUp(),
            leftDown: this.leftDown()
        };
    }
    /**
     * Width.
     */
    get width() {
        return this.renderer.width;
    }
    /**
     * Height.
     */
    get height() {
        return this.renderer.height;
    }
    /**
     * Center position.
     */
    get center() {
        return {
            x: this.renderer.width / 2,
            y: this.renderer.height / 2
        };
    }
    /**
     * Left top position.
     */
    get leftTop() {
        return {
            x: 0,
            y: 0
        };
    }
    /**
     * Right top position.
     */
    get rightTop() {
        return {
            x: this.width,
            y: 0
        };
    }
    /**
     * Left bottom position.
     */
    get leftBottom() {
        return {
            x: 0,
            y: this.height
        };
    }
    /**
     * Right bottom position.
     */
    get rightBottom() {
        return {
            x: this.width,
            y: this.height
        };
    }
    /**
     * Register a component.
     *
     * @param component
     */
    register(component) {
        this.components.push(component);
    }
    /**
     * onFrame wrapper.
     */
    onFrameWrapper() {
        this.components.forEach(component => component.onFrameStart());
        this.onFrame();
        this.components.forEach(component => component.onFrameEnd());
    }
    /**
     * Call on frame.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onFrame() { }
    /**
     * Start application.
     */
    start() {
        this.ticker.start();
    }
    /**
     * Fill rect.
     *
     * @param args
     */
    fillRect(...args) {
        if (helpers_1.isPoint2D(args[0])) {
            if (helpers_1.isPoint2D(args[1])) {
                return this.renderer.fillRect(args[0].x, args[0].y, args[1].x, args[1].y, args[2]);
            }
            else {
                return this.renderer.fillRect(args[0].x, args[0].y, args[1], args[2], args[3]);
            }
        }
        else {
            if (helpers_1.isPoint2D(args[2])) {
                return this.renderer.fillRect(args[0], args[1], args[2].x, args[3].y, args[4]);
            }
            else {
                return this.renderer.fillRect(args[0], args[1], args[2], args[3], args[4]);
            }
        }
    }
    /**
     * Fill rect.
     *
     * @param args
     */
    strokeRect(...args) {
        if (helpers_1.isPoint2D(args[0])) {
            if (helpers_1.isPoint2D(args[1])) {
                return this.renderer.strokeRect(args[0].x, args[0].y, args[1].x, args[1].y, args[2], args[3]);
            }
            else {
                return this.renderer.strokeRect(args[0].x, args[0].y, args[1], args[2], args[3], args[4]);
            }
        }
        else {
            if (helpers_1.isPoint2D(args[2])) {
                return this.renderer.strokeRect(args[0], args[1], args[2].x, args[3].y, args[4], args[5]);
            }
            else {
                return this.renderer.strokeRect(args[0], args[1], args[2], args[3], args[4], args[5]);
            }
        }
    }
    /**
     * Draw filled circle.
     *
     * @param args
     */
    fillCircle(...args) {
        if (helpers_1.isPoint2D(args[0])) {
            return this.renderer.fillCircle(args[0].x, args[0].y, args[1], args[2]);
        }
        else {
            return this.renderer.fillCircle(args[0], args[1], args[2], args[3]);
        }
    }
    /**
     * Draw stroked circle.
     *
     * @param args
     */
    strokeCircle(...args) {
        if (helpers_1.isPoint2D(args[0])) {
            return this.renderer.strokeCircle(args[0].x, args[0].y, args[2], args[3], args[4]);
        }
        else {
            return this.renderer.strokeCircle(args[0], args[1], args[2], args[3], args[4]);
        }
    }
    /**
     * Draw line.
     *
     * @param args
     */
    line(...args) {
        if (typeof args[0] === 'number' && typeof args[1] === 'number') {
            if (helpers_1.isPoint2D(args[2])) {
                // line(x0, y0, Point2D, color, lineWidth)
                return this.renderer.line(args[0], args[1], args[2].x, args[2].y, args[3], args[4], args[5]);
            }
            else {
                // line(x0, y0, x1, y1, color, lineWidth)
                return this.renderer.line(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
        }
        if (helpers_1.isPoint2D(args[0])) {
            if (helpers_1.isPoint2D(args[1])) {
                // line(Point2D, Point2D, color, lineWidth)
                return this.renderer.line(args[0].x, args[0].y, args[1].x, args[1].y, args[2], args[3], args[4]);
            }
            else {
                // line(Point2D, x1, y1, color, lineWidth)
                return this.renderer.line(args[0].x, args[0].y, args[1], args[2], args[3], args[4], args[5]);
            }
        }
    }
    /**
     * Draw filled polygon.
     *
     * @param args
     */
    fillPolygon(...args) {
        if (helpers_1.isPoint2D(args[0])) {
            return this.renderer.fillPolygon(args[0].x, args[0].y, args[1], args[2], args[3], args[4]);
        }
        else {
            return this.renderer.fillPolygon(args[0], args[1], args[2], args[3], args[4], args[5]);
        }
    }
    /**
     * Draw stroked polygon.
     *
     * @param args
     */
    strokePolygon(...args) {
        if (helpers_1.isPoint2D(args[0])) {
            return this.renderer.strokePolygon(args[0].x, args[0].y, args[1], args[2], args[3], args[4], args[5]);
        }
        else {
            return this.renderer.strokePolygon(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
    }
    /**
     * Draw filled text.
     *
     * @param args
     */
    fillText(...args) {
        if (helpers_1.isPoint2D(args[1])) {
            this.renderer.fillText(args[0], args[1].x, args[1].y, args[2], args[3], args[4], args[5]);
        }
        else {
            this.renderer.fillText(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
    }
    /**
     * Draw stroked text.
     *
     * @param args
     */
    strokeText(...args) {
        if (helpers_1.isPoint2D(args[1])) {
            this.renderer.strokeText(args[0], args[1].x, args[2].y, args[3], args[4], args[5], args[6], args[7]);
        }
        else {
            this.renderer.strokeText(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
        }
    }
    /**
     * Fill vertices.
     */
    fillVertices(...args) {
        if (typeof args[0] !== 'object') {
            throw new Error('TinyGame#fillVertices first argument must be array.');
        }
        if (helpers_1.isPoint2D(args[0][0])) {
            return this.renderer.fillVertices(this.pointsToVertices(args[0]), args[1]);
        }
        else {
            return this.renderer.fillVertices(args[0], args[1]);
        }
    }
    /**
     * Stroke vertices.
     */
    strokeVertices(...args) {
        if (typeof args[0] !== 'object') {
            throw new Error('TinyGame#strokeVertices first argument must be array.');
        }
        if (helpers_1.isPoint2D(args[0][0])) {
            return this.renderer.strokeVertices(this.pointsToVertices(args[0]), args[1], args[2]);
        }
        else {
            return this.renderer.strokeVertices(args[0], args[1], args[2]);
        }
    }
    /**
     * Convert point array to vertices data.
     */
    pointsToVertices(points) {
        return points.map(({ x, y }) => [x, y]);
    }
    /**
     * Rotate.
     *
     * @param x
     * @param y
     * @param angle
     */
    rotate(x, y, angle) {
        this.renderer.rotate(x, y, angle);
    }
    /**
     * Returns cursor position.
     */
    cursorPos() {
        return this.inputManager.cursorPos();
    }
    /**
     * Returns whether mouse left clicking.
     */
    leftPressed() {
        return this.inputManager.leftPressed();
    }
    /**
     * Returns whether mouse left up.
     */
    leftUp() {
        return this.inputManager.leftUp();
    }
    /**
     * Returns whether mouse left down.
     */
    leftDown() {
        return this.inputManager.leftDown();
    }
    /**
     * Returns whether key pressed.
     */
    keyPressed(code) {
        return this.inputManager.keyPressed(code);
    }
    /**
     * Returns whether key up.
     */
    keyUp(code) {
        return this.inputManager.keyUp(code);
    }
    /**
     * Returns whether key down.
     */
    keyDown(code) {
        return this.inputManager.keyDown(code);
    }
}
exports.TinyGame = TinyGame;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/class/TinyGrid/index.js":
/*!**************************************************!*\
  !*** ../tiny-canvas/lib/class/TinyGrid/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grids_1 = __webpack_require__(/*! ../../impls/grids */ "../tiny-canvas/lib/impls/grids/index.js");
const helpers_1 = __webpack_require__(/*! ../../helpers */ "../tiny-canvas/lib/helpers/index.js");
/*
 * TinyGrid class.
 */
class TinyGrid {
    /**
     * TinyGrid constructor.
     *
     * @param args
     */
    constructor(...args) {
        if (typeof args[0] === 'number') {
            this.grid = new grids_1.Grid(args[0], args[1]);
        }
        else {
            this.grid = new grids_1.Grid(args[0][0].length, args[0].length);
            this.setData(args[0]);
        }
    }
    /**
     * Width.
     */
    get width() {
        return this.grid.width;
    }
    /**
     * Height.
     */
    get height() {
        return this.grid.height;
    }
    /**
     * Number of items.
     */
    get count() {
        return this.grid.count;
    }
    /**
     * Get point data.
     *
     * @param args
     */
    get(...args) {
        if (helpers_1.isPoint2D(args[0])) {
            return this.grid.get(args[0].x, args[0].y);
        }
        else {
            return this.grid.get(args[0], args[1]);
        }
    }
    /**
     * Get point data.
     *
     * @param args
     */
    set(...args) {
        if (helpers_1.isPoint2D(args[0])) {
            this.grid.set(args[0].x, args[0].y, args[1]);
        }
        else {
            this.grid.set(args[0], args[1], args[2]);
        }
        return this;
    }
    /**
     * Fill data.
     *
     * @param data
     */
    fill(data) {
        this.grid.fill(data);
        return this;
    }
    /**
     * Each data.
     *
     * @param callback
     */
    each(callback) {
        this.grid.each(callback);
        return this;
    }
    /**
     * Set each data.
     *
     * @param callback
     */
    setEach(callback) {
        this.grid.setEach(callback);
        return this;
    }
    /**
     * Map data.
     *
     * @param callback
     */
    map(callback) {
        const mapped = this.grid.map(callback);
        const result = new TinyGrid(this.width, this.height).setEach((x, y) => mapped.get(x, y));
        return result;
    }
    /**
     * Every data.
     *
     * @param callback
     */
    every(callback) {
        return this.grid.every(callback);
    }
    /**
     * Some data.
     *
     * @param callback
     */
    some(callback) {
        return this.grid.some(callback);
    }
    /**
     * Set data.
     *
     * @param lines
     */
    setData(lines) {
        this.grid.map((x, y) => {
            return lines[y][x];
        });
        return this;
    }
    /**
     * Clone the grid.
     */
    clone() {
        return new TinyGrid(this.width, this.height).setEach((x, y) => this.get(x, y));
    }
    /**
     * Create grid from data.
     *
     * @param lines
     */
    static FromData(lines) {
        return new TinyGrid(lines);
    }
}
exports.TinyGrid = TinyGrid;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/class/index.js":
/*!*****************************************!*\
  !*** ../tiny-canvas/lib/class/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./TinyGame */ "../tiny-canvas/lib/class/TinyGame/index.js"));
__export(__webpack_require__(/*! ./TinyGrid */ "../tiny-canvas/lib/class/TinyGrid/index.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/helpers/index.js":
/*!*******************************************!*\
  !*** ../tiny-canvas/lib/helpers/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./isPoint2D */ "../tiny-canvas/lib/helpers/isPoint2D/index.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/helpers/isPoint2D/index.js":
/*!*****************************************************!*\
  !*** ../tiny-canvas/lib/helpers/isPoint2D/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns whether value is Point2D.
 *
 * @param value
 */
function isPoint2D(value) {
    return (typeof value === 'object' &&
        typeof value.x === 'number' &&
        typeof value.y === 'number');
}
exports.isPoint2D = isPoint2D;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/impls/grids/Grid/index.js":
/*!****************************************************!*\
  !*** ../tiny-canvas/lib/impls/grids/Grid/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Grid class.
 */
class Grid {
    /**
     * Grid constructor.
     *
     * @param width
     * @param height
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data = [];
        for (let i = 0; i < this.count; ++i) {
            this.data.push(undefined);
        }
    }
    /**
     * Number of items.
     */
    get count() {
        return this.width * this.height;
    }
    /**
     * Get point data.
     *
     * @param x
     * @param y
     */
    get(x, y) {
        if (x < 0 || x > this.width - 1 || y < 0 || y > this.height - 1)
            return undefined;
        return this.data[this.getPointIndex(x, y)];
    }
    /**
     * Set point data.
     *
     * @param x
     * @param y
     * @param data
     */
    set(x, y, data) {
        this.data[this.getPointIndex(x, y)] = data;
        return this;
    }
    /**
     * Fill data.
     *
     * @param data
     */
    fill(data) {
        for (let i = 0; i < this.count; ++i) {
            this.data[i] = data;
        }
        return this;
    }
    /**
     * Each data.
     *
     * @param callback
     */
    each(callback) {
        for (let y = 0; y < this.height; ++y) {
            for (let x = 0; x < this.width; ++x) {
                callback(x, y, this.get(x, y));
            }
        }
        return this;
    }
    /**
     * Set each data.
     *
     * @param callback
     */
    setEach(callback) {
        for (let y = 0; y < this.height; ++y) {
            for (let x = 0; x < this.width; ++x) {
                this.set(x, y, callback(x, y, this.get(x, y)));
            }
        }
        return this;
    }
    /**
     * Map data.
     *
     * @param callback
     */
    map(callback) {
        const result = new Grid(this.width, this.height).setEach((x, y) => callback(x, y, this.get(x, y)));
        return result;
    }
    /**
     * Every data.
     *
     * @param callback
     */
    every(callback) {
        for (let y = 0; y < this.height; ++y) {
            for (let x = 0; x < this.width; ++x) {
                if (callback(x, y, this.get(x, y)) === false)
                    return;
            }
        }
        return true;
    }
    /**
     * Some data.
     *
     * @param callback
     */
    some(callback) {
        for (let y = 0; y < this.height; ++y) {
            for (let x = 0; x < this.width; ++x) {
                if (callback(x, y, this.get(x, y)))
                    return true;
            }
        }
        return false;
    }
    /**
     * Returns point index.
     *
     * @param x
     * @param y
     */
    getPointIndex(x, y) {
        return y * this.width + x;
    }
}
exports.Grid = Grid;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/impls/grids/index.js":
/*!***********************************************!*\
  !*** ../tiny-canvas/lib/impls/grids/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Grid */ "../tiny-canvas/lib/impls/grids/Grid/index.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/impls/index.js":
/*!*****************************************!*\
  !*** ../tiny-canvas/lib/impls/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./inputManagers */ "../tiny-canvas/lib/impls/inputManagers/index.js"));
__export(__webpack_require__(/*! ./renderers */ "../tiny-canvas/lib/impls/renderers/index.js"));
__export(__webpack_require__(/*! ./tickers */ "../tiny-canvas/lib/impls/tickers/index.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/impls/inputManagers/CanvasInputManager/index.js":
/*!**************************************************************************!*\
  !*** ../tiny-canvas/lib/impls/inputManagers/CanvasInputManager/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const abstracts_1 = __webpack_require__(/*! ../../../abstracts */ "../tiny-canvas/lib/abstracts/index.js");
const types_1 = __webpack_require__(/*! ../../../types */ "../tiny-canvas/lib/types/index.js");
/*
 * CanvasInputManager class.
 */
class CanvasInputManager extends abstracts_1.Component {
    /**
     * CanvasInputManager constructor.
     *
     * @param canvas
     */
    constructor(canvas) {
        super();
        /**
         * Mouse left pressed.
         */
        this.mLeftPressed = false;
        /**
         * Mouse left down.
         */
        this.mLeftDown = false;
        /**
         * Mouse left up.
         */
        this.mLeftUp = false;
        /**
         * Cursor position.
         */
        this.mCursorPos = {
            x: 0,
            y: 0
        };
        this.mKeysState = {};
        Object.keys(types_1.KeyCode).forEach(code => {
            this.mKeysState[code] = {
                isPressed: false,
                isUp: false,
                isDown: false
            };
        });
        canvas.addEventListener('mousedown', () => {
            this.mLeftPressed = true;
            this.mLeftDown = true;
        });
        canvas.addEventListener('mouseup', () => {
            this.mLeftPressed = false;
            this.mLeftDown = false;
        });
        canvas.addEventListener('mousemove', event => {
            const rect = canvas.getBoundingClientRect();
            this.mCursorPos.x = event.clientX - rect.left;
            this.mCursorPos.y = event.clientY - rect.top;
        });
        document.addEventListener('keydown', event => {
            if (typeof this.mKeysState[event.code] === 'undefined')
                return;
            const state = this.mKeysState[event.code];
            state.isPressed = true;
            state.isDown = true;
        });
        document.addEventListener('keyup', event => {
            if (typeof this.mKeysState[event.code] === 'undefined')
                return;
            const state = this.mKeysState[event.code];
            state.isPressed = false;
            state.isUp = true;
        });
    }
    /**
     * Returns cursor position.
     */
    cursorPos() {
        return {
            x: this.mCursorPos.x,
            y: this.mCursorPos.y
        };
    }
    /**
     * Returns whether mouse left clicking.
     */
    leftPressed() {
        return this.mLeftPressed;
    }
    /**
     * Returns whether mouse left up.
     */
    leftUp() {
        return this.mLeftUp;
    }
    /**
     * Returns whether mouse left down.
     */
    leftDown() {
        return this.mLeftDown;
    }
    /**
     * Returns whether key pressed.
     */
    keyPressed(code) {
        return this.mKeysState[code].isPressed;
    }
    /**
     * Returns whether key up.
     */
    keyUp(code) {
        return this.mKeysState[code].isUp;
    }
    /**
     * Returns whether key down.
     */
    keyDown(code) {
        return this.mKeysState[code].isDown;
    }
    /**
     * Call on frame end.
     */
    onFrameEnd() {
        this.mLeftDown = false;
        this.mLeftUp = false;
        Object.keys(this.mKeysState).forEach(key => {
            this.mKeysState[key].isUp = false;
            this.mKeysState[key].isDown = false;
        });
    }
}
exports.CanvasInputManager = CanvasInputManager;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/impls/inputManagers/index.js":
/*!*******************************************************!*\
  !*** ../tiny-canvas/lib/impls/inputManagers/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./CanvasInputManager */ "../tiny-canvas/lib/impls/inputManagers/CanvasInputManager/index.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/impls/renderers/CanvasPreRenderer/index.js":
/*!*********************************************************************!*\
  !*** ../tiny-canvas/lib/impls/renderers/CanvasPreRenderer/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const abstracts_1 = __webpack_require__(/*! ../../../abstracts */ "../tiny-canvas/lib/abstracts/index.js");
/*
 * CanvasPreRenderer class.
 */
class CanvasPreRenderer extends abstracts_1.Component {
    /**
     * CanvasRenderer constructor.
     *
     * @param canvas
     */
    constructor(canvas) {
        super();
        this.canvas = canvas;
        const preRenderingCanvas = document.createElement('canvas');
        const preRenderingContext = preRenderingCanvas.getContext('2d');
        const context = canvas.getContext('2d');
        if (!preRenderingContext) {
            throw new Error('[tiny-canvas] Canvas rendering context is not defined.');
        }
        if (!context) {
            throw new Error('[tiny-canvas] Canvas rendering context is not defined.');
        }
        this.preRenderingCanvas = preRenderingCanvas;
        this.originalContext = context;
        this.context = preRenderingContext; // Intercept.
        this.context.save(); // Save initial state.
    }
    /**
     * Width.
     */
    get width() {
        return this.canvas.width;
    }
    /**
     * Height.
     */
    get height() {
        return this.canvas.height;
    }
    /**
     * On frame start.
     */
    onFrameStart() {
        this.preRenderingCanvas.width = this.canvas.width;
        this.preRenderingCanvas.height = this.canvas.height;
    }
    /**
     * On frame end.
     */
    onFrameEnd() {
        this.originalContext.drawImage(this.preRenderingCanvas, 0, 0);
    }
    /**
     * Draw filled rect.
     *
     * @param x
     * @param y
     * @param width
     * @param height
     * @param color
     */
    fillRect(x, y, width, height, color) {
        this.restore();
        this.setFillStyle(color);
        this.context.fillRect(x, y, width, height);
    }
    /**
     * Draw filled rect.
     *
     * @param x
     * @param y
     * @param width
     * @param height
     * @param color
     * @param lineWidth
     */
    strokeRect(x, y, width, height, color, lineWidth) {
        this.restore();
        this.setStroke(color, lineWidth);
        this.context.strokeRect(x, y, width, height);
    }
    /**
     * Draw filled circle.
     *
     * @param x
     * @param y
     * @param radius
     * @param color
     */
    fillCircle(x, y, radius, color) {
        this.restore();
        this.setFillStyle(color);
        this.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2);
        this.fill();
    }
    /**
     * Draw stroked circle.
     *
     * @param x
     * @param y
     * @param radius
     * @param color
     * @param lineWidth
     */
    strokeCircle(x, y, radius, color, lineWidth) {
        this.restore();
        this.setStroke(color, lineWidth);
        this.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2);
        this.stroke();
    }
    /**
     * Draw line.
     *
     * @param x0
     * @param y0
     * @param x1
     * @param y1
     * @param color
     * @param lineWidth
     * @param lineCap
     */
    line(x0, y0, x1, y1, color, lineWidth, lineCap) {
        this.setStroke(color, lineWidth);
        this.setLineCap(lineCap);
        this.beginPath();
        this.moveTo(x0, y0);
        this.context.lineTo(x1, y1);
        this.closePath();
        this.stroke();
    }
    /**
     * Draw filled polygon.
     *
     * @param x
     * @param y
     * @param radius
     * @param corners
     * @param offsetAngle
     * @param color
     */
    fillPolygon(x, y, radius, corners, offsetAngle, color) {
        this.setFillStyle(color);
        this.beginPath();
        let degree = offsetAngle;
        for (let i = 0; i < corners; ++i) {
            const rad = (degree / 360) * Math.PI * 2;
            const ax = x + Math.cos(rad) * radius;
            const ay = y + Math.sin(rad) * radius;
            if (i === 0) {
                this.moveTo(ax, ay);
            }
            else {
                this.context.lineTo(ax, ay);
            }
            degree += 360 / corners;
        }
        this.fill();
    }
    /**
     * Draw stroked polygon.
     *
     * @param x
     * @param y
     * @param radius
     * @param corners
     * @param offsetAngle
     * @param color
     * @param lineWidth
     */
    strokePolygon(x, y, radius, corners, offsetAngle, color, lineWidth) {
        this.setStroke(color, lineWidth);
        this.beginPath();
        let degree = (offsetAngle * 180) / Math.PI;
        for (let i = 0; i < corners + 1; ++i) {
            // const rad = (degree / 360) * Math.PI * 2
            const rad = (degree * Math.PI) / 180;
            const ax = x + Math.cos(rad) * radius;
            const ay = y + Math.sin(rad) * radius;
            if (i === 0) {
                this.moveTo(ax, ay);
            }
            else {
                this.context.lineTo(ax, ay);
            }
            degree += 360 / corners;
        }
        this.stroke();
    }
    /**
     * Draw filled text.
     *
     * @param text
     * @param x
     * @param y
     * @param font
     * @param size
     * @param align
     * @param color
     */
    fillText(text, x, y, font, size, align, color) {
        this.setFillStyle(color);
        this.setFont(font, size);
        this.context.textAlign = align;
        this.context.fillText(text, x, y);
    }
    /**
     * Draw stroked text.
     *
     * @param text
     * @param x
     * @param y
     * @param font
     * @param size
     * @param align
     * @param color
     */
    strokeText(text, x, y, font, size, align, color, lineWidth) {
        this.setStroke(color, lineWidth);
        this.setFont(font, size);
        this.context.textAlign = align;
        this.context.strokeText(text, x, y);
    }
    /**
     * Rotate.
     *
     * @param x
     * @param y
     * @param angle
     */
    rotate(x, y, angle) {
        this.context.translate(x, y);
        this.context.rotate(angle);
    }
    /**
     * Stroke vertices.
     *
     * @param vertices
     * @param color
     * @param lineWidth
     */
    strokeVertices(vertices, color, lineWidth) {
        // If vertices count is smaller than 2, no draw.
        if (vertices.length < 2)
            return;
        this.setStroke(color, lineWidth);
        this.moveTo(vertices[0][0], vertices[0][1]);
        this.beginPath();
        for (const vertex of vertices) {
            this.lineTo(vertex[0], vertex[1]);
        }
        this.stroke();
    }
    /**
     * Fill vertices.
     *
     * @param vertices
     * @param color
     */
    fillVertices(vertices, color) {
        // If vertices count is smaller than 2, no draw.
        if (vertices.length < 2)
            return;
        this.setFillStyle(color);
        this.beginPath();
        this.moveTo(vertices[0][0], vertices[0][1]);
        for (const vertex of vertices.slice(1)) {
            this.lineTo(vertex[0], vertex[1]);
        }
        this.fill();
    }
    /**
     * Set font.
     *
     * @param fontFamily
     * @param size
     */
    setFont(fontFamily, size) {
        this.context.font = `${size}px "${fontFamily}"`;
    }
    /**
     * Set line cap.
     *
     * @param cap
     */
    setLineCap(cap) {
        this.context.lineCap = cap;
    }
    /**
     * Set context line width.
     *
     * @param width
     */
    setLineWidth(width) {
        this.context.lineWidth = width;
    }
    /**
     * Set context fill style.
     *
     * @param style
     */
    setFillStyle(style) {
        this.context.fillStyle = style;
    }
    /**
     * Set context stroke style.
     *
     * @param style
     */
    setStrokeStyle(style) {
        this.context.strokeStyle = style;
    }
    /**
     * Set context stroke style and line width.
     *
     * @param style
     * @param lineWidth
     */
    setStroke(style, lineWidth) {
        this.setStrokeStyle(style);
        this.setLineWidth(lineWidth);
    }
    /**
     * Restore context state.
     */
    restore() {
        this.context.restore();
    }
    /**
     * Begin path.
     */
    beginPath() {
        this.context.beginPath();
    }
    /**
     * Close path.
     */
    closePath() {
        this.context.closePath();
    }
    /**
     * Fill.
     */
    fill() {
        this.context.fill();
    }
    /**
     * Stroke.
     */
    stroke() {
        this.context.stroke();
    }
    /**
     * Move to.
     *
     * @param x
     * @param y
     */
    moveTo(x, y) {
        this.context.moveTo(x, y);
    }
    /**
     * Line to.
     *
     * @param x
     * @param y
     */
    lineTo(x, y) {
        this.context.lineTo(x, y);
    }
}
exports.CanvasPreRenderer = CanvasPreRenderer;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/impls/renderers/CanvasRenderer/index.js":
/*!******************************************************************!*\
  !*** ../tiny-canvas/lib/impls/renderers/CanvasRenderer/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const abstracts_1 = __webpack_require__(/*! ../../../abstracts */ "../tiny-canvas/lib/abstracts/index.js");
/*
 * CanvasRenderer class.
 */
class CanvasRenderer extends abstracts_1.Component {
    /**
     * CanvasRenderer constructor.
     *
     * @param canvas
     */
    constructor(canvas) {
        super();
        this.canvas = canvas;
        const context = canvas.getContext('2d');
        if (!context) {
            throw new Error('[tiny-canvas] Canvas rendering context is not defined.');
        }
        this.context = context;
        this.context.save(); // Save initial state.
    }
    /**
     * Width.
     */
    get width() {
        return this.canvas.width;
    }
    /**
     * Height.
     */
    get height() {
        return this.canvas.height;
    }
    /**
     * Draw filled rect.
     *
     * @param x
     * @param y
     * @param width
     * @param height
     * @param color
     */
    fillRect(x, y, width, height, color) {
        this.restore();
        this.setFillStyle(color);
        this.context.fillRect(x, y, width, height);
    }
    /**
     * Draw filled rect.
     *
     * @param x
     * @param y
     * @param width
     * @param height
     * @param color
     * @param lineWidth
     */
    strokeRect(x, y, width, height, color, lineWidth) {
        this.restore();
        this.setStroke(color, lineWidth);
        this.context.strokeRect(x, y, width, height);
    }
    /**
     * Draw filled circle.
     *
     * @param x
     * @param y
     * @param radius
     * @param color
     */
    fillCircle(x, y, radius, color) {
        this.restore();
        this.setFillStyle(color);
        this.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2);
        this.fill();
    }
    /**
     * Draw stroked circle.
     *
     * @param x
     * @param y
     * @param radius
     * @param color
     * @param lineWidth
     */
    strokeCircle(x, y, radius, color, lineWidth) {
        this.restore();
        this.setStroke(color, lineWidth);
        this.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2);
        this.stroke();
    }
    /**
     * Draw line.
     *
     * @param x0
     * @param y0
     * @param x1
     * @param y1
     * @param color
     * @param lineWidth
     * @param lineCap
     */
    line(x0, y0, x1, y1, color, lineWidth, lineCap) {
        this.setStroke(color, lineWidth);
        this.setLineCap(lineCap);
        this.beginPath();
        this.moveTo(x0, y0);
        this.context.lineTo(x1, y1);
        this.closePath();
        this.stroke();
    }
    /**
     * Draw filled polygon.
     *
     * @param x
     * @param y
     * @param radius
     * @param corners
     * @param offsetAngle
     * @param color
     */
    fillPolygon(x, y, radius, corners, offsetAngle, color) {
        this.setFillStyle(color);
        this.beginPath();
        let degree = offsetAngle;
        for (let i = 0; i < corners; ++i) {
            const rad = (degree / 360) * Math.PI * 2;
            const ax = x + Math.cos(rad) * radius;
            const ay = y + Math.sin(rad) * radius;
            if (i === 0) {
                this.moveTo(ax, ay);
            }
            else {
                this.context.lineTo(ax, ay);
            }
            degree += 360 / corners;
        }
        this.fill();
    }
    /**
     * Draw stroked polygon.
     *
     * @param x
     * @param y
     * @param radius
     * @param corners
     * @param offsetAngle
     * @param color
     * @param lineWidth
     */
    strokePolygon(x, y, radius, corners, offsetAngle, color, lineWidth) {
        this.setStroke(color, lineWidth);
        this.beginPath();
        let degree = (offsetAngle * 180) / Math.PI;
        for (let i = 0; i < corners + 1; ++i) {
            // const rad = (degree / 360) * Math.PI * 2
            const rad = (degree * Math.PI) / 180;
            const ax = x + Math.cos(rad) * radius;
            const ay = y + Math.sin(rad) * radius;
            if (i === 0) {
                this.moveTo(ax, ay);
            }
            else {
                this.context.lineTo(ax, ay);
            }
            degree += 360 / corners;
        }
        this.stroke();
    }
    /**
     * Draw filled text.
     *
     * @param text
     * @param x
     * @param y
     * @param font
     * @param size
     * @param align
     * @param color
     */
    fillText(text, x, y, font, size, align, color) {
        this.setFillStyle(color);
        this.setFont(font, size);
        this.context.textAlign = align;
        this.context.fillText(text, x, y);
    }
    /**
     * Draw stroked text.
     *
     * @param text
     * @param x
     * @param y
     * @param font
     * @param size
     * @param align
     * @param color
     */
    strokeText(text, x, y, font, size, align, color, lineWidth) {
        this.setStroke(color, lineWidth);
        this.setFont(font, size);
        this.context.textAlign = align;
        this.context.strokeText(text, x, y);
    }
    /**
     * Rotate.
     *
     * @param x
     * @param y
     * @param angle
     */
    rotate(x, y, angle) {
        this.context.translate(x, y);
        this.context.rotate(angle);
    }
    /**
     * Stroke vertices.
     *
     * @param vertices
     * @param color
     * @param lineWidth
     */
    strokeVertices(vertices, color, lineWidth) {
        // If vertices count is smaller than 2, no draw.
        if (vertices.length < 2)
            return;
        this.setStroke(color, lineWidth);
        this.moveTo(vertices[0][0], vertices[0][1]);
        this.beginPath();
        for (const vertex of vertices) {
            this.lineTo(vertex[0], vertex[1]);
        }
        this.stroke();
    }
    /**
     * Fill vertices.
     *
     * @param vertices
     * @param color
     */
    fillVertices(vertices, color) {
        // If vertices count is smaller than 2, no draw.
        if (vertices.length < 2)
            return;
        this.setFillStyle(color);
        this.beginPath();
        this.moveTo(vertices[0][0], vertices[0][1]);
        for (const vertex of vertices.slice(1)) {
            this.lineTo(vertex[0], vertex[1]);
        }
        this.fill();
    }
    /**
     * Set font.
     *
     * @param fontFamily
     * @param size
     */
    setFont(fontFamily, size) {
        this.context.font = `${size}px "${fontFamily}"`;
    }
    /**
     * Set line cap.
     *
     * @param cap
     */
    setLineCap(cap) {
        this.context.lineCap = cap;
    }
    /**
     * Set context line width.
     *
     * @param width
     */
    setLineWidth(width) {
        this.context.lineWidth = width;
    }
    /**
     * Set context fill style.
     *
     * @param style
     */
    setFillStyle(style) {
        this.context.fillStyle = style;
    }
    /**
     * Set context stroke style.
     *
     * @param style
     */
    setStrokeStyle(style) {
        this.context.strokeStyle = style;
    }
    /**
     * Set context stroke style and line width.
     *
     * @param style
     * @param lineWidth
     */
    setStroke(style, lineWidth) {
        this.setStrokeStyle(style);
        this.setLineWidth(lineWidth);
    }
    /**
     * Restore context state.
     */
    restore() {
        this.context.restore();
    }
    /**
     * Begin path.
     */
    beginPath() {
        this.context.beginPath();
    }
    /**
     * Close path.
     */
    closePath() {
        this.context.closePath();
    }
    /**
     * Fill.
     */
    fill() {
        this.context.fill();
    }
    /**
     * Stroke.
     */
    stroke() {
        this.context.stroke();
    }
    /**
     * Move to.
     *
     * @param x
     * @param y
     */
    moveTo(x, y) {
        this.context.moveTo(x, y);
    }
    /**
     * Line to.
     *
     * @param x
     * @param y
     */
    lineTo(x, y) {
        this.context.lineTo(x, y);
    }
}
exports.CanvasRenderer = CanvasRenderer;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/impls/renderers/index.js":
/*!***************************************************!*\
  !*** ../tiny-canvas/lib/impls/renderers/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./CanvasPreRenderer */ "../tiny-canvas/lib/impls/renderers/CanvasPreRenderer/index.js"));
__export(__webpack_require__(/*! ./CanvasRenderer */ "../tiny-canvas/lib/impls/renderers/CanvasRenderer/index.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/impls/tickers/AnimationFrameRequestTicker/index.js":
/*!*****************************************************************************!*\
  !*** ../tiny-canvas/lib/impls/tickers/AnimationFrameRequestTicker/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const abstracts_1 = __webpack_require__(/*! ../../../abstracts */ "../tiny-canvas/lib/abstracts/index.js");
/*
 * AnimationFrameRequestTicker class
 */
class AnimationFrameRequestTicker extends abstracts_1.Component {
    constructor() {
        super(...arguments);
        /**
         * Whether is started.
         */
        this.started = false;
        /**
         * Current frames.
         */
        this.mCurrentFrames = 0;
    }
    /**
     * Set callback function.
     *
     * @param callback
     */
    setCallback(callback) {
        this.callback = callback;
    }
    /**
     * Start tick.
     */
    start() {
        if (this.started)
            return;
        this.started = true;
        requestAnimationFrame(this.callbackWrapper.bind(this));
    }
    /**
     * Callback wrapper function.
     */
    callbackWrapper() {
        this.callback();
        ++this.mCurrentFrames;
        requestAnimationFrame(this.callbackWrapper.bind(this));
    }
    /**
     * End tick.
     */
    end() {
        this.started = false;
    }
    /**
     * Current frames.
     */
    currentFrames() {
        return this.mCurrentFrames;
    }
    /**
     * Whether is started.
     */
    isStarted() {
        return this.started;
    }
    /**
     * Whether is ended.
     */
    isEnded() {
        return !this.started;
    }
}
exports.AnimationFrameRequestTicker = AnimationFrameRequestTicker;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/impls/tickers/index.js":
/*!*************************************************!*\
  !*** ../tiny-canvas/lib/impls/tickers/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./AnimationFrameRequestTicker */ "../tiny-canvas/lib/impls/tickers/AnimationFrameRequestTicker/index.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/index.js":
/*!***********************************!*\
  !*** ../tiny-canvas/lib/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./class */ "../tiny-canvas/lib/class/index.js"));
__export(__webpack_require__(/*! ./helpers */ "../tiny-canvas/lib/helpers/index.js"));
__export(__webpack_require__(/*! ./impls */ "../tiny-canvas/lib/impls/index.js"));
__export(__webpack_require__(/*! ./types */ "../tiny-canvas/lib/types/index.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/types/KeyCode/index.js":
/*!*************************************************!*\
  !*** ../tiny-canvas/lib/types/KeyCode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * KeyCode enum
 */
var KeyCode;
(function (KeyCode) {
    KeyCode["A"] = "KeyA";
    KeyCode["B"] = "KeyB";
    KeyCode["C"] = "KeyC";
    KeyCode["D"] = "KeyD";
    KeyCode["E"] = "KeyE";
    KeyCode["F"] = "KeyF";
    KeyCode["G"] = "KeyG";
    KeyCode["H"] = "KeyH";
    KeyCode["I"] = "KeyI";
    KeyCode["J"] = "KeyJ";
    KeyCode["K"] = "KeyK";
    KeyCode["L"] = "KeyL";
    KeyCode["M"] = "KeyM";
    KeyCode["N"] = "KeyN";
    KeyCode["O"] = "KeyO";
    KeyCode["P"] = "KeyP";
    KeyCode["Q"] = "KeyQ";
    KeyCode["R"] = "KeyR";
    KeyCode["S"] = "KeyS";
    KeyCode["T"] = "KeyT";
    KeyCode["U"] = "KeyU";
    KeyCode["V"] = "KeyV";
    KeyCode["W"] = "KeyW";
    KeyCode["X"] = "KeyX";
    KeyCode["Y"] = "KeyY";
    KeyCode["Z"] = "KeyZ";
    KeyCode["ShiftLeft"] = "ShiftLeft";
    KeyCode["ControlLeft"] = "ControlLeft";
    KeyCode["Space"] = "Space";
    KeyCode["ArrowUp"] = "ArrowUp";
    KeyCode["ArrowDown"] = "ArrowDown";
    KeyCode["ArrowLeft"] = "ArrowLeft";
    KeyCode["ArrowRight"] = "ArrowRight";
})(KeyCode = exports.KeyCode || (exports.KeyCode = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/types/LinaCap/index.js":
/*!*************************************************!*\
  !*** ../tiny-canvas/lib/types/LinaCap/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * LineCap enum.
 */
var LineCap;
(function (LineCap) {
    LineCap["Butt"] = "butt";
    LineCap["Round"] = "round";
})(LineCap = exports.LineCap || (exports.LineCap = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/types/TextAlign/index.js":
/*!***************************************************!*\
  !*** ../tiny-canvas/lib/types/TextAlign/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * TextAlign enum.
 */
var TextAlign;
(function (TextAlign) {
    TextAlign["Start"] = "start";
    TextAlign["End"] = "end";
    TextAlign["Left"] = "left";
    TextAlign["Right"] = "right";
    TextAlign["Center"] = "center";
})(TextAlign = exports.TextAlign || (exports.TextAlign = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../tiny-canvas/lib/types/index.js":
/*!*****************************************!*\
  !*** ../tiny-canvas/lib/types/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./KeyCode */ "../tiny-canvas/lib/types/KeyCode/index.js"));
__export(__webpack_require__(/*! ./LinaCap */ "../tiny-canvas/lib/types/LinaCap/index.js"));
__export(__webpack_require__(/*! ./TextAlign */ "../tiny-canvas/lib/types/TextAlign/index.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");


function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/;
var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.13.0\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fad', 'fab', 'fa'].indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    maskId: node.getAttribute('data-fa-mask-id'),
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    var headers = {};

    if (_typeof(WINDOW.FontAwesomeKitConfig) === 'object' && typeof window.FontAwesomeKitConfig.token === 'string') {
      headers['fa-kit-token'] = WINDOW.FontAwesomeKitConfig.token;
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      titleId = nodeMeta.titleId,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      maskId = nodeMeta.maskId,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        maskId: maskId,
        title: title,
        titleId: titleId,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(content.length === 3 ? content.substr(1, 1) : content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@fortawesome/react-fontawesome/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fortawesome/react-fontawesome/index.es.js ***!
  \*****************************************************************/
/*! exports provided: FontAwesomeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIcon", function() { return FontAwesomeIcon; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var spin = props.spin,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-spin': spin,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, ["style"]);

  mixins.attrs['style'] = _objectSpread2({}, mixins.attrs['style'], {}, existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2({}, mixins.attrs, {}, remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = "development" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

// Normalize icon arguments
function normalizeIconArgs(icon) {
  // if the icon is null, there's nothing to do
  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (_typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}

// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

function FontAwesomeIcon(props) {
  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["icon"])(iconLookup, _objectSpread2({}, classes, {}, transform, {}, mask, {
    symbol: symbol,
    title: title
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {};
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  border: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mask: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  fixedWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  flip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['horizontal', 'vertical', 'both']),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  listItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  pull: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['right', 'left']),
  pulse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([90, 180, 270]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  symbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  transform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  swapOpacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  title: '',
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement);




/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toVal(mix) {
	var k, y, str='';
	if (mix) {
		if (typeof mix === 'object') {
			if (Array.isArray(mix)) {
				for (k=0; k < mix.length; k++) {
					if (mix[k] && (y = toVal(mix[k]))) {
						str && (str += ' ');
						str += y;
					}
				}
			} else {
				for (k in mix) {
					if (mix[k] && (y = toVal(k))) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else if (typeof mix !== 'boolean' && !mix.call) {
			str && (str += ' ');
			str += mix;
		}
	}
	return str;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
	var i=0, x, str='';
	while (i < arguments.length) {
		if (x = toVal(arguments[i++])) {
			str && (str += ' ');
			str += x
		}
	}
	return str;
});


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fhotaka%2FDesktop%2FGithub%2Fhota1024%2Fportfolio%2Fsrc%2Fpages%2Findex.tsx!./":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fhotaka%2FDesktop%2FGithub%2Fhota1024%2Fportfolio%2Fsrc%2Fpages%2Findex.tsx ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx")
      if(true) {
        module.hot.accept(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/Button.tsx":
/*!***********************************!*\
  !*** ./src/components/Button.tsx ***!
  \***********************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _this = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/Button.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Button = function Button(props) {
  var onClick = function onClick() {
    props.onClick();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.href ? __jsx("a", {
    href: props.href,
    target: "__blank",
    onClick: onClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2712896067", [props.background, props.color]]]) + " " + (Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('button', props.className) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, props.children) : __jsx("button", {
    onClick: onClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2712896067", [props.background, props.color]]]) + " " + (Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('button', props.className) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2712896067",
    dynamic: [props.background, props.color],
    __self: _this
  }, ".button.__jsx-style-dynamic-selector{border:none;border-radius:3px;background:".concat(props.background, ";color:").concat(props.color, ";-webkit-text-decoration:none;text-decoration:none;min-width:200px;font-size:1.05rem;padding:0.5em;-webkit-transition:260ms;transition:260ms;cursor:pointer;box-shadow:0 2px 4px rgba(0,0,0,0.1);}.button.__jsx-style-dynamic-selector:hover{box-shadow:0 2px 16px rgba(0,0,0,0.1);}.button.__jsx-style-dynamic-selector:active{box-shadow:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0J1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JrQixBQUd1QixBQWM2QixBQUl6QixZQWpCRSxJQWtCcEIsY0FqQjBDLFFBYTFDLGdDQVpxQyxtQ0FDZCxrREFDTCxnQkFDRSxrQkFDSixjQUNHLDBDQUNGLGVBQ3lCLHFDQUMxQyIsImZpbGUiOiIvVXNlcnMvaG90YWthL0Rlc2t0b3AvR2l0aHViL2hvdGExMDI0L3BvcnRmb2xpby9zcmMvY29tcG9uZW50cy9CdXR0b24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5cbmV4cG9ydCBjb25zdCBCdXR0b246IEZDPHtcbiAgYmFja2dyb3VuZD86IHN0cmluZ1xuICBjb2xvcj86IHN0cmluZ1xuICBocmVmPzogc3RyaW5nXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZFxufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBwcm9wcy5vbkNsaWNrKClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwcm9wcy5ocmVmID8gKFxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnYnV0dG9uJywgcHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBocmVmPXtwcm9wcy5ocmVmfVxuICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvYT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbHN4KCdidXR0b24nLCBwcm9wcy5jbGFzc05hbWUpfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMuYmFja2dyb3VuZH07XG4gICAgICAgICAgY29sb3I6ICR7cHJvcHMuY29sb3J9O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAyNjBtcztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b246aG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICBjb2xvcjogJyM0MDQwNDAnLFxuICBvbkNsaWNrOiAoKSA9PiB2b2lkIDAsXG59XG4iXX0= */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/Button.tsx */")));
};
Button.defaultProps = {
  background: 'white',
  color: '#404040',
  onClick: function onClick() {
    return void 0;
  }
};

/***/ }),

/***/ "./src/components/Dialog.tsx":
/*!***********************************!*\
  !*** ./src/components/Dialog.tsx ***!
  \***********************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./src/components/Button.tsx");
var _this = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/Dialog.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Dialog = function Dialog(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.body.style.overflow = props.show ? 'hidden' : '';
  }, [props.show]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3859001825", [props.background, props.color]]]) + " " + (Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('dialog-wrap', props.show && 'is-show') || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3859001825", [props.background, props.color]]]) + " " + "dialog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3859001825", [props.background, props.color]]]) + " " + "dialog-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, props.children), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    background: props.color,
    color: props.background,
    onClick: props.onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "\u3068\u3058\u308B"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3859001825",
    dynamic: [props.background, props.color],
    __self: _this
  }, ".dialog-wrap.__jsx-style-dynamic-selector{position:fixed;left:0;top:0;width:100%;height:100%;z-index:9999;opacity:0;visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dialog-wrap.is-show.__jsx-style-dynamic-selector{opacity:1;visibility:visible;}.dialog.__jsx-style-dynamic-selector{width:90%;max-width:600px;box-shadow:0 0 32px rgba(0,0,0,0.3);padding:1em;border-radius:3px;background:".concat(props.background, ";color:").concat(props.color, ";}.dialog-content.__jsx-style-dynamic-selector{margin-bottom:16px;margin-top:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0RpYWxvZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJrQixBQUcwQixBQWNMLEFBS0EsQUFVUyxVQWRBLEFBS0gsS0FuQlQsSUE2QlMsR0E1QlYsSUFtQmlDLEVBbEI1QixDQWFiLE1BZUEsSUEzQmMsWUFDQyxXQWlCRCxFQWhCRixVQUNRLEFBZ0JBLGtCQWZMLEFBZ0IyQix3Q0FDTCxrQ0FoQlosQ0FpQnpCLGtHQWhCcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0RpYWxvZy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nXG5cbmV4cG9ydCBjb25zdCBEaWFsb2c6IEZDPHtcbiAgc2hvdzogYm9vbGVhblxuICBvbkNsb3NlPzogKCkgPT4gdm9pZFxuICBiYWNrZ3JvdW5kPzogc3RyaW5nXG4gIGNvbG9yPzogc3RyaW5nXG59PiA9IChwcm9wcykgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBwcm9wcy5zaG93ID8gJ2hpZGRlbicgOiAnJ1xuICB9LCBbcHJvcHMuc2hvd10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2RpYWxvZy13cmFwJywgcHJvcHMuc2hvdyAmJiAnaXMtc2hvdycpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy1jb250ZW50XCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJhY2tncm91bmQ9e3Byb3BzLmNvbG9yfVxuICAgICAgICAgICAgY29sb3I9e3Byb3BzLmJhY2tncm91bmR9XG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOOBqOOBmOOCi1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5kaWFsb2ctd3JhcCB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaWFsb2ctd3JhcC5pcy1zaG93IHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGlhbG9nIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDMycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtwcm9wcy5iYWNrZ3JvdW5kfTtcbiAgICAgICAgICBjb2xvcjogJHtwcm9wcy5jb2xvcn07XG4gICAgICAgIH1cblxuICAgICAgICAuZGlhbG9nLWNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbkRpYWxvZy5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQgMCxcbiAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgY29sb3I6ICcjNDA0MDQwJyxcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/Dialog.tsx */")));
};
Dialog.defaultProps = {
  onClose: function onClose() {
    return void 0;
  },
  background: 'white',
  color: '#404040'
};

/***/ }),

/***/ "./src/components/HomeBackground.tsx":
/*!*******************************************!*\
  !*** ./src/components/HomeBackground.tsx ***!
  \*******************************************/
/*! exports provided: HomeBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBackground", function() { return HomeBackground; });
/* harmony import */ var _babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/construct */ "./node_modules/@babel/runtime/helpers/esm/construct.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tiny_canvas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tiny-canvas */ "../tiny-canvas/lib/index.js");
/* harmony import */ var tiny_canvas__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tiny_canvas__WEBPACK_IMPORTED_MODULE_10__);









var _this3 = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/HomeBackground.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var RGBToRGBA = function RGBToRGBA(color, alpha) {
  return "rgba(".concat(color.join(','), ",").concat(alpha, ")");
};

var Shape = /*#__PURE__*/function () {
  function Shape(x, y, size, angle, speed, color) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Shape);

    this.x = x;
    this.y = y;
    this.size = size;
    this.angle = angle;
    this.speed = speed;
    this.color = color;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "fade", 0);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Shape, [{
    key: "update",
    value: function update(game) {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      this.fade += 1 / 60;
      this.fade = Math.min(this.fade, 1);
      var overArea = this.size;
      return this.x > -overArea && this.x < game.width + overArea && this.y > -overArea && this.y < game.height + overArea;
    }
  }]);

  return Shape;
}();

var CircleShape = /*#__PURE__*/function (_Shape) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CircleShape, _Shape);

  var _super = _createSuper(CircleShape);

  function CircleShape() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, CircleShape);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(CircleShape, [{
    key: "draw",
    value: function draw(game) {
      game.strokeCircle(this.x, this.y, this.size, RGBToRGBA(this.color, this.fade), 4);
    }
  }]);

  return CircleShape;
}(Shape);

var TriangleShape = /*#__PURE__*/function (_Shape2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(TriangleShape, _Shape2);

  var _super2 = _createSuper(TriangleShape);

  function TriangleShape() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, TriangleShape);

    return _super2.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(TriangleShape, [{
    key: "draw",
    value: function draw(game) {
      game.strokePolygon(this.x, this.y, this.size, 3, this.angle, RGBToRGBA(this.color, this.fade), 4);
    }
  }]);

  return TriangleShape;
}(Shape);

var SquareShape = /*#__PURE__*/function (_Shape3) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SquareShape, _Shape3);

  var _super3 = _createSuper(SquareShape);

  function SquareShape() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, SquareShape);

    return _super3.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(SquareShape, [{
    key: "draw",
    value: function draw(game) {
      game.strokePolygon(this.x, this.y, this.size, 4, this.angle, RGBToRGBA(this.color, this.fade), 4);
    }
  }]);

  return SquareShape;
}(Shape);

var CrossShape = /*#__PURE__*/function (_Shape4) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CrossShape, _Shape4);

  var _super4 = _createSuper(CrossShape);

  function CrossShape() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, CrossShape);

    return _super4.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(CrossShape, [{
    key: "draw",
    value: function draw(game) {
      var angle = this.angle;

      for (var i = 0; i < 4; ++i) {
        game.line(this.x, this.y, this.x + Math.cos(angle) * this.size, this.y + Math.sin(angle) * this.size, RGBToRGBA(this.color, this.fade), 4, tiny_canvas__WEBPACK_IMPORTED_MODULE_10__["LineCap"].Round);
        angle += Math.PI / 2;
      }
    }
  }]);

  return CrossShape;
}(Shape);

var Background = /*#__PURE__*/function (_TinyGame) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Background, _TinyGame);

  var _super5 = _createSuper(Background);

  function Background(canvas) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Background);

    _this = _super5.call(this, // new CanvasRenderer(canvas),
    new tiny_canvas__WEBPACK_IMPORTED_MODULE_10__["CanvasPreRenderer"](canvas), new tiny_canvas__WEBPACK_IMPORTED_MODULE_10__["CanvasInputManager"](document.body), new tiny_canvas__WEBPACK_IMPORTED_MODULE_10__["AnimationFrameRequestTicker"]());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "context", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "ripples", []);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "shapes", []);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "maxShapes", 5);

    _this.context = canvas.getContext('2d');

    for (var i = 0; i < _this.maxShapes; ++i) {
      _this.generateRandomShape();
    }

    window['bgGame'] = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this);
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Background, [{
    key: "generateRandomShape",
    value: function generateRandomShape() {
      var colors = [[187, 222, 251], [200, 230, 201], [255, 224, 178], [209, 196, 233]];
      var data = [Math.random() * this.width, Math.random() * this.height, Math.random() * 64 + 16, Math.random() * Math.PI * 2 - Math.PI, 0.5 + Math.random() * 3, colors[Math.floor(Math.random() * colors.length)]];
      var shapeType = Math.floor(Math.random() * 4);

      if (shapeType === 0) {
        this.shapes.push(Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_0__["default"])(CircleShape, data));
      } else if (shapeType === 1) {
        this.shapes.push(Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_0__["default"])(TriangleShape, data));
      } else if (shapeType === 2) {
        this.shapes.push(Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_0__["default"])(SquareShape, data));
      } else if (shapeType === 3) {
        this.shapes.push(Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_0__["default"])(CrossShape, data));
      }
    }
  }, {
    key: "onFrame",
    value: function onFrame() {
      this.update();
      this.draw();
    }
  }, {
    key: "update",
    value: function update() {
      // if (this.mouse.leftDown) {
      //   this.ripples.push({
      //     ...this.cursor,
      //     size: 0,
      //     maxSize: 128,
      //     // color: [187, 222, 251],
      //     color: [255, 255, 255],
      //   })
      // }
      // this.updateRipples()
      this.updateShapes();
    }
  }, {
    key: "draw",
    value: function draw() {
      // this.fillRect(0, 0, this.width, this.height, 'transparent')
      this.context.clearRect(0, 0, this.width, this.height);
      var length = Math.min(this.width, this.height) / 1.3;
      this.fillVertices([[0, 0], [length, 0], [0, length]], 'rgba(200,230,201,0.8)');
      this.fillVertices([[this.rightBottom.x, this.rightBottom.y], [this.rightBottom.x - length, this.rightBottom.y], [this.rightBottom.x, this.rightBottom.y - length]], 'rgba(187,222,251,0.8)');
      this.drawRipples();
      this.drawShapes();
    }
  }, {
    key: "updateShapes",
    value: function updateShapes() {
      var _this2 = this;

      this.shapes = this.shapes.filter(function (shape) {
        return shape.update(_this2);
      });

      for (var i = 0; i < this.maxShapes - this.shapes.length; ++i) {
        this.generateRandomShape();
      }
    }
  }, {
    key: "drawShapes",
    value: function drawShapes() {
      var _iterator = _createForOfIteratorHelper(this.shapes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var shape = _step.value;
          shape.draw(this);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "updateRipples",
    value: function updateRipples() {
      this.ripples = this.ripples.filter(function (ripple) {
        ripple.size += 2;
        return ripple.size <= ripple.maxSize;
      });
    }
  }, {
    key: "drawRipples",
    value: function drawRipples() {
      var _iterator2 = _createForOfIteratorHelper(this.ripples),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ripple = _step2.value;
          this.fillCircle(ripple.x, ripple.y, ripple.size, "rgb(".concat(ripple.color.join(','), ",").concat(1 - ripple.size / ripple.maxSize, ")"));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return Background;
}(tiny_canvas__WEBPACK_IMPORTED_MODULE_10__["TinyGame"]);

var HomeBackground = function HomeBackground() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(0),
      width = _useState[0],
      setWidth = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(0),
      height = _useState2[0],
      setHeight = _useState2[1];

  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    var updateSize = function updateSize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    updateSize();
    window.addEventListener('resize', function () {
      updateSize();
    });
    var background = new Background(canvasRef.current);
    background.start();
    window['background'] = background;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1213653104",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 7
    }
  }, __jsx("canvas", {
    width: width,
    height: height,
    ref: canvasRef,
    className: "jsx-1213653104",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "1213653104",
    __self: _this3
  }, "div.jsx-1213653104{width:100%;height:100vh;}canvas.jsx-1213653104{background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0hvbWVCYWNrZ3JvdW5kLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrU2tCLEFBR3NCLEFBS1ksV0FKVixZQUtmLENBSkEiLCJmaWxlIjoiL1VzZXJzL2hvdGFrYS9EZXNrdG9wL0dpdGh1Yi9ob3RhMTAyNC9wb3J0Zm9saW8vc3JjL2NvbXBvbmVudHMvSG9tZUJhY2tncm91bmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBUaW55R2FtZSxcbiAgQ2FudmFzUHJlUmVuZGVyZXIsXG4gIENhbnZhc0lucHV0TWFuYWdlcixcbiAgQW5pbWF0aW9uRnJhbWVSZXF1ZXN0VGlja2VyLFxuICBMaW5lQ2FwLFxufSBmcm9tICd0aW55LWNhbnZhcydcblxuY29uc3QgUkdCVG9SR0JBID0gKGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sIGFscGhhOiBudW1iZXIpID0+XG4gIGByZ2JhKCR7Y29sb3Iuam9pbignLCcpfSwke2FscGhhfSlgXG5cbmludGVyZmFjZSBSaXBwbGUge1xuICB4OiBudW1iZXJcbiAgeTogbnVtYmVyXG4gIHNpemU6IG51bWJlclxuICBtYXhTaXplOiBudW1iZXJcbiAgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXVxufVxuXG50eXBlIFNoYXBlUGFyYW1zID0gW1xuICBudW1iZXIsXG4gIG51bWJlcixcbiAgbnVtYmVyLFxuICBudW1iZXIsXG4gIG51bWJlcixcbiAgW251bWJlciwgbnVtYmVyLCBudW1iZXJdXG5dXG5cbmludGVyZmFjZSBTaGFwZUludGVyZmFjZSB7XG4gIHg6IG51bWJlclxuICB5OiBudW1iZXJcbiAgc2l6ZTogbnVtYmVyXG4gIGFuZ2xlOiBudW1iZXJcbiAgc3BlZWQ6IG51bWJlclxuICBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdXG5cbiAgdXBkYXRlKGdhbWU6IEJhY2tncm91bmQpOiBib29sZWFuXG5cbiAgZHJhdyhnYW1lOiBCYWNrZ3JvdW5kKTogdm9pZFxufVxuXG5hYnN0cmFjdCBjbGFzcyBTaGFwZSBpbXBsZW1lbnRzIFNoYXBlSW50ZXJmYWNlIHtcbiAgZmFkZSA9IDBcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgeDogbnVtYmVyLFxuICAgIHB1YmxpYyB5OiBudW1iZXIsXG4gICAgcHVibGljIHNpemU6IG51bWJlcixcbiAgICBwdWJsaWMgYW5nbGU6IG51bWJlcixcbiAgICBwdWJsaWMgc3BlZWQ6IG51bWJlcixcbiAgICBwdWJsaWMgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXVxuICApIHt9XG5cbiAgdXBkYXRlKGdhbWU6IEJhY2tncm91bmQpIHtcbiAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiB0aGlzLnNwZWVkXG4gICAgdGhpcy55ICs9IE1hdGguc2luKHRoaXMuYW5nbGUpICogdGhpcy5zcGVlZFxuXG4gICAgdGhpcy5mYWRlICs9IDEgLyA2MFxuICAgIHRoaXMuZmFkZSA9IE1hdGgubWluKHRoaXMuZmFkZSwgMSlcblxuICAgIGNvbnN0IG92ZXJBcmVhID0gdGhpcy5zaXplXG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54ID4gLW92ZXJBcmVhICYmXG4gICAgICB0aGlzLnggPCBnYW1lLndpZHRoICsgb3ZlckFyZWEgJiZcbiAgICAgIHRoaXMueSA+IC1vdmVyQXJlYSAmJlxuICAgICAgdGhpcy55IDwgZ2FtZS5oZWlnaHQgKyBvdmVyQXJlYVxuICAgIClcbiAgfVxuXG4gIGFic3RyYWN0IGRyYXcoZ2FtZTogQmFja2dyb3VuZCk6IHZvaWRcbn1cblxuY2xhc3MgQ2lyY2xlU2hhcGUgZXh0ZW5kcyBTaGFwZSB7XG4gIGRyYXcoZ2FtZTogQmFja2dyb3VuZCkge1xuICAgIGdhbWUuc3Ryb2tlQ2lyY2xlKFxuICAgICAgdGhpcy54LFxuICAgICAgdGhpcy55LFxuICAgICAgdGhpcy5zaXplLFxuICAgICAgUkdCVG9SR0JBKHRoaXMuY29sb3IsIHRoaXMuZmFkZSksXG4gICAgICA0XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIFRyaWFuZ2xlU2hhcGUgZXh0ZW5kcyBTaGFwZSB7XG4gIGRyYXcoZ2FtZTogQmFja2dyb3VuZCkge1xuICAgIGdhbWUuc3Ryb2tlUG9seWdvbihcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMueSxcbiAgICAgIHRoaXMuc2l6ZSxcbiAgICAgIDMsXG4gICAgICB0aGlzLmFuZ2xlLFxuICAgICAgUkdCVG9SR0JBKHRoaXMuY29sb3IsIHRoaXMuZmFkZSksXG4gICAgICA0XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIFNxdWFyZVNoYXBlIGV4dGVuZHMgU2hhcGUge1xuICBkcmF3KGdhbWU6IEJhY2tncm91bmQpIHtcbiAgICBnYW1lLnN0cm9rZVBvbHlnb24oXG4gICAgICB0aGlzLngsXG4gICAgICB0aGlzLnksXG4gICAgICB0aGlzLnNpemUsXG4gICAgICA0LFxuICAgICAgdGhpcy5hbmdsZSxcbiAgICAgIFJHQlRvUkdCQSh0aGlzLmNvbG9yLCB0aGlzLmZhZGUpLFxuICAgICAgNFxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBDcm9zc1NoYXBlIGV4dGVuZHMgU2hhcGUge1xuICBkcmF3KGdhbWU6IEJhY2tncm91bmQpIHtcbiAgICBsZXQgYW5nbGUgPSB0aGlzLmFuZ2xlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgIGdhbWUubGluZShcbiAgICAgICAgdGhpcy54LFxuICAgICAgICB0aGlzLnksXG4gICAgICAgIHRoaXMueCArIE1hdGguY29zKGFuZ2xlKSAqIHRoaXMuc2l6ZSxcbiAgICAgICAgdGhpcy55ICsgTWF0aC5zaW4oYW5nbGUpICogdGhpcy5zaXplLFxuICAgICAgICBSR0JUb1JHQkEodGhpcy5jb2xvciwgdGhpcy5mYWRlKSxcbiAgICAgICAgNCxcbiAgICAgICAgTGluZUNhcC5Sb3VuZFxuICAgICAgKVxuICAgICAgYW5nbGUgKz0gTWF0aC5QSSAvIDJcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIFRpbnlHYW1lIHtcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG5cbiAgcmlwcGxlczogUmlwcGxlW10gPSBbXVxuXG4gIHNoYXBlczogU2hhcGVbXSA9IFtdXG5cbiAgbWF4U2hhcGVzID0gNVxuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBzdXBlcihcbiAgICAgIC8vIG5ldyBDYW52YXNSZW5kZXJlcihjYW52YXMpLFxuICAgICAgbmV3IENhbnZhc1ByZVJlbmRlcmVyKGNhbnZhcyksXG4gICAgICBuZXcgQ2FudmFzSW5wdXRNYW5hZ2VyKGRvY3VtZW50LmJvZHkgYXMgSFRNTENhbnZhc0VsZW1lbnQpLFxuICAgICAgbmV3IEFuaW1hdGlvbkZyYW1lUmVxdWVzdFRpY2tlcigpXG4gICAgKVxuICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4U2hhcGVzOyArK2kpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVSYW5kb21TaGFwZSgpXG4gICAgfVxuXG4gICAgd2luZG93WydiZ0dhbWUnXSA9IHRoaXNcbiAgfVxuXG4gIGdlbmVyYXRlUmFuZG9tU2hhcGUoKSB7XG4gICAgY29uc3QgY29sb3JzOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl1bXSA9IFtcbiAgICAgIFsxODcsIDIyMiwgMjUxXSxcbiAgICAgIFsyMDAsIDIzMCwgMjAxXSxcbiAgICAgIFsyNTUsIDIyNCwgMTc4XSxcbiAgICAgIFsyMDksIDE5NiwgMjMzXSxcbiAgICBdXG4gICAgY29uc3QgZGF0YTogU2hhcGVQYXJhbXMgPSBbXG4gICAgICBNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCxcbiAgICAgIE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodCxcbiAgICAgIE1hdGgucmFuZG9tKCkgKiA2NCArIDE2LFxuICAgICAgTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyIC0gTWF0aC5QSSxcbiAgICAgIDAuNSArIE1hdGgucmFuZG9tKCkgKiAzLFxuICAgICAgY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXSxcbiAgICBdXG4gICAgY29uc3Qgc2hhcGVUeXBlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNClcblxuICAgIGlmIChzaGFwZVR5cGUgPT09IDApIHtcbiAgICAgIHRoaXMuc2hhcGVzLnB1c2gobmV3IENpcmNsZVNoYXBlKC4uLmRhdGEpKVxuICAgIH0gZWxzZSBpZiAoc2hhcGVUeXBlID09PSAxKSB7XG4gICAgICB0aGlzLnNoYXBlcy5wdXNoKG5ldyBUcmlhbmdsZVNoYXBlKC4uLmRhdGEpKVxuICAgIH0gZWxzZSBpZiAoc2hhcGVUeXBlID09PSAyKSB7XG4gICAgICB0aGlzLnNoYXBlcy5wdXNoKG5ldyBTcXVhcmVTaGFwZSguLi5kYXRhKSlcbiAgICB9IGVsc2UgaWYgKHNoYXBlVHlwZSA9PT0gMykge1xuICAgICAgdGhpcy5zaGFwZXMucHVzaChuZXcgQ3Jvc3NTaGFwZSguLi5kYXRhKSlcbiAgICB9XG4gIH1cblxuICBvbkZyYW1lKCkge1xuICAgIHRoaXMudXBkYXRlKClcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIGlmICh0aGlzLm1vdXNlLmxlZnREb3duKSB7XG4gICAgLy8gICB0aGlzLnJpcHBsZXMucHVzaCh7XG4gICAgLy8gICAgIC4uLnRoaXMuY3Vyc29yLFxuICAgIC8vICAgICBzaXplOiAwLFxuICAgIC8vICAgICBtYXhTaXplOiAxMjgsXG4gICAgLy8gICAgIC8vIGNvbG9yOiBbMTg3LCAyMjIsIDI1MV0sXG4gICAgLy8gICAgIGNvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgICAvLyB0aGlzLnVwZGF0ZVJpcHBsZXMoKVxuICAgIHRoaXMudXBkYXRlU2hhcGVzKClcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgLy8gdGhpcy5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgJ3RyYW5zcGFyZW50JylcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuXG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5taW4odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpIC8gMS4zXG4gICAgdGhpcy5maWxsVmVydGljZXMoXG4gICAgICBbXG4gICAgICAgIFswLCAwXSxcbiAgICAgICAgW2xlbmd0aCwgMF0sXG4gICAgICAgIFswLCBsZW5ndGhdLFxuICAgICAgXSxcbiAgICAgICdyZ2JhKDIwMCwyMzAsMjAxLDAuOCknXG4gICAgKVxuICAgIHRoaXMuZmlsbFZlcnRpY2VzKFxuICAgICAgW1xuICAgICAgICBbdGhpcy5yaWdodEJvdHRvbS54LCB0aGlzLnJpZ2h0Qm90dG9tLnldLFxuICAgICAgICBbdGhpcy5yaWdodEJvdHRvbS54IC0gbGVuZ3RoLCB0aGlzLnJpZ2h0Qm90dG9tLnldLFxuICAgICAgICBbdGhpcy5yaWdodEJvdHRvbS54LCB0aGlzLnJpZ2h0Qm90dG9tLnkgLSBsZW5ndGhdLFxuICAgICAgXSxcbiAgICAgICdyZ2JhKDE4NywyMjIsMjUxLDAuOCknXG4gICAgKVxuICAgIHRoaXMuZHJhd1JpcHBsZXMoKVxuICAgIHRoaXMuZHJhd1NoYXBlcygpXG4gIH1cblxuICB1cGRhdGVTaGFwZXMoKSB7XG4gICAgdGhpcy5zaGFwZXMgPSB0aGlzLnNoYXBlcy5maWx0ZXIoKHNoYXBlKSA9PiBzaGFwZS51cGRhdGUodGhpcykpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4U2hhcGVzIC0gdGhpcy5zaGFwZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVSYW5kb21TaGFwZSgpXG4gICAgfVxuICB9XG5cbiAgZHJhd1NoYXBlcygpIHtcbiAgICBmb3IgKGNvbnN0IHNoYXBlIG9mIHRoaXMuc2hhcGVzKSB7XG4gICAgICBzaGFwZS5kcmF3KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUmlwcGxlcygpIHtcbiAgICB0aGlzLnJpcHBsZXMgPSB0aGlzLnJpcHBsZXMuZmlsdGVyKChyaXBwbGUpID0+IHtcbiAgICAgIHJpcHBsZS5zaXplICs9IDJcblxuICAgICAgcmV0dXJuIHJpcHBsZS5zaXplIDw9IHJpcHBsZS5tYXhTaXplXG4gICAgfSlcbiAgfVxuXG4gIGRyYXdSaXBwbGVzKCkge1xuICAgIGZvciAoY29uc3QgcmlwcGxlIG9mIHRoaXMucmlwcGxlcykge1xuICAgICAgdGhpcy5maWxsQ2lyY2xlKFxuICAgICAgICByaXBwbGUueCxcbiAgICAgICAgcmlwcGxlLnksXG4gICAgICAgIHJpcHBsZS5zaXplLFxuICAgICAgICBgcmdiKCR7cmlwcGxlLmNvbG9yLmpvaW4oJywnKX0sJHsxIC0gcmlwcGxlLnNpemUgLyByaXBwbGUubWF4U2l6ZX0pYFxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgSG9tZUJhY2tncm91bmQgPSAoKSA9PiB7XG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZVNpemUgPSAoKSA9PiB7XG4gICAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgIHNldEhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgfVxuXG4gICAgdXBkYXRlU2l6ZSgpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdXBkYXRlU2l6ZSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZChjYW52YXNSZWYuY3VycmVudClcbiAgICBiYWNrZ3JvdW5kLnN0YXJ0KClcbiAgICB3aW5kb3dbJ2JhY2tncm91bmQnXSA9IGJhY2tncm91bmRcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Y2FudmFzIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IHJlZj17Y2FudmFzUmVmfT48L2NhbnZhcz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cblxuICAgICAgICBjYW52YXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/HomeBackground.tsx */"));
};

/***/ }),

/***/ "./src/components/MyDetail.tsx":
/*!*************************************!*\
  !*** ./src/components/MyDetail.tsx ***!
  \*************************************/
/*! exports provided: MyDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDetail", function() { return MyDetail; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _this = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/MyDetail.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var MyDetail = function MyDetail() {
  var fields = [{
    name: '本名',
    content: '納本穂高（おくもと ほたか）'
  }, {
    name: '活動名',
    content: ['hota1024', 'ほた']
  }, {
    name: '生まれた日',
    content: '2003年10月24日'
  }, {
    name: '住んでるところ',
    content: '静岡県'
  }, {
    name: '性格',
    content: ['マイペース', 'ぴょんぴょん', '過集中']
  }, {
    name: '好きなこと',
    content: ['プログラミング', 'ゲーム', 'アニメ鑑賞', '漫画', '読書', '登山']
  }, {
    name: '好きなもの',
    content: ['紅茶', 'コーヒー', '甘いもの', 'ちょっと辛いもの', 'かわいいもの', 'かっこいいもの', 'シンプルなもの']
  }, {
    name: '好きな作品',
    content: ['やはり俺の青春ラブコメは間違っている', '物語シリーズ', 'ご注文はうさぎですか？', 'まちカドまぞく', 'ドラえもん']
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1651015112" + " " + "hobbies",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, fields.map(function (field, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-1651015112" + " " + "hobby-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }, __jsx("h4", {
      className: "jsx-1651015112" + " " + (Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(index === 0 && 'first', index === fields.length - 1 && 'last') || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, field.name), __jsx("p", {
      className: "jsx-1651015112" + " " + (Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(index === 0 && 'first', index === fields.length - 1 && 'last') || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, Array.isArray(field.content) ? field.content.join(', ') : field.content));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1651015112",
    __self: _this
  }, ".hobbies.jsx-1651015112{max-width:600px;margin:32px auto;box-shadow:0 0 64px rgba(0,0,0,0.2);}.hobbies.jsx-1651015112 *.jsx-1651015112{font-size:13px;font-weight:600;box-sizing:border-box;}.hobby-item.jsx-1651015112{margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}h4.jsx-1651015112{width:30%;padding:1em;background:#bbdefb;border-right:dashed 1px #404040;border-bottom:dashed 1px #404040;text-align:center;font-style:normal;margin:0;}p.jsx-1651015112{width:70%;padding:1em;background:white;border-bottom:dashed 1px #404040;font-style:normal;margin:0;text-align:left;}h4.first.jsx-1651015112{border-top-left-radius:3px;}p.first.jsx-1651015112{border-top-right-radius:3px;}h4.last.jsx-1651015112{border-bottom:none;border-bottom-left-radius:3px;}p.last.jsx-1651015112{border-bottom:none;border-bottom-right-radius:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL015RGV0YWlsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRmtCLEFBRzJCLEFBTUQsQUFNTixBQU9DLEFBV0EsQUFVaUIsQUFJQyxBQUlULEFBS0EsU0F4Q04sQ0FPRCxBQVdBLEtBeEJJLENBTkMsR0FnRGEsQUFLQyxHQWpDWixBQVdGLEtBU25CLENBSUEsR0FyQ3dCLEVBTmlCLE1BK0JOLEVBWEQsUUE0QmxDLENBS0EsR0E5Q0EsZ0JBTkEsR0ErQm9CLENBWGUsVUFUbEIsT0FxQk4sU0FDTyxPQVpFLFNBYXBCLFNBWm9CLGdCQVZLLEVBV2QsU0FDWCx3RkFYQSIsImZpbGUiOiIvVXNlcnMvaG90YWthL0Rlc2t0b3AvR2l0aHViL2hvdGExMDI0L3BvcnRmb2xpby9zcmMvY29tcG9uZW50cy9NeURldGFpbC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG50eXBlIEZpZWxkID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nIHwgc3RyaW5nW11cbn1cblxuZXhwb3J0IGNvbnN0IE15RGV0YWlsID0gKCkgPT4ge1xuICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ+acrOWQjScsXG4gICAgICBjb250ZW50OiAn57SN5pys56mC6auY77yI44GK44GP44KC44GoIOOBu+OBn+OBi++8iScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAn5rS75YuV5ZCNJyxcbiAgICAgIGNvbnRlbnQ6IFsnaG90YTEwMjQnLCAn44G744GfJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAn55Sf44G+44KM44Gf5pelJyxcbiAgICAgIGNvbnRlbnQ6ICcyMDAz5bm0MTDmnIgyNOaXpScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAn5L2P44KT44Gn44KL44Go44GT44KNJyxcbiAgICAgIGNvbnRlbnQ6ICfpnZnlsqHnnIwnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ+aAp+agvCcsXG4gICAgICBjb250ZW50OiBbJ+ODnuOCpOODmuODvOOCuScsICfjgbTjgofjgpPjgbTjgofjgpMnLCAn6YGO6ZuG5LitJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAn5aW944GN44Gq44GT44GoJyxcbiAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgJ+ODl+ODreOCsOODqeODn+ODs+OCsCcsXG4gICAgICAgICfjgrLjg7zjg6AnLFxuICAgICAgICAn44Ki44OL44Oh6ZGR6LOeJyxcbiAgICAgICAgJ+a8q+eUuycsXG4gICAgICAgICfoqq3mm7gnLFxuICAgICAgICAn55m75bGxJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAn5aW944GN44Gq44KC44GuJyxcbiAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgJ+e0heiMticsXG4gICAgICAgICfjgrPjg7zjg5Ljg7wnLFxuICAgICAgICAn55SY44GE44KC44GuJyxcbiAgICAgICAgJ+OBoeOCh+OBo+OBqOi+m+OBhOOCguOBricsXG4gICAgICAgICfjgYvjgo/jgYTjgYTjgoLjga4nLFxuICAgICAgICAn44GL44Gj44GT44GE44GE44KC44GuJyxcbiAgICAgICAgJ+OCt+ODs+ODl+ODq+OBquOCguOBricsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ+WlveOBjeOBquS9nOWTgScsXG4gICAgICBjb250ZW50OiBbXG4gICAgICAgICfjgoTjga/jgorkv7rjga7pnZLmmKXjg6njg5bjgrPjg6Hjga/plpPpgZXjgaPjgabjgYTjgosnLFxuICAgICAgICAn54mp6Kqe44K344Oq44O844K6JyxcbiAgICAgICAgJ+OBlOazqOaWh+OBr+OBhuOBleOBjuOBp+OBmeOBi++8nycsXG4gICAgICAgICfjgb7jgaHjgqvjg4njgb7jgZ7jgY8nLFxuICAgICAgICAn44OJ44Op44GI44KC44KTJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9iYmllc1wiPlxuICAgICAgICB7ZmllbGRzLm1hcCgoZmllbGQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJob2JieS1pdGVtXCI+XG4gICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgIGluZGV4ID09PSAwICYmICdmaXJzdCcsXG4gICAgICAgICAgICAgICAgaW5kZXggPT09IGZpZWxkcy5sZW5ndGggLSAxICYmICdsYXN0J1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZmllbGQubmFtZX1cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgaW5kZXggPT09IDAgJiYgJ2ZpcnN0JyxcbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gZmllbGRzLmxlbmd0aCAtIDEgJiYgJ2xhc3QnXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KGZpZWxkLmNvbnRlbnQpXG4gICAgICAgICAgICAgICAgPyBmaWVsZC5jb250ZW50LmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICA6IGZpZWxkLmNvbnRlbnR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhvYmJpZXMge1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzMnB4IGF1dG87XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDY0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvYmJpZXMgKiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ob2JieS1pdGVtIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoNCB7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogI2JiZGVmYjtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IGRhc2hlZCAxcHggIzQwNDA0MDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgMXB4ICM0MDQwNDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgMXB4ICM0MDQwNDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaDQuZmlyc3Qge1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAuZmlyc3Qge1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoNC5sYXN0IHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAubGFzdCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/MyDetail.tsx */"));
};

/***/ }),

/***/ "./src/components/MyHistory.tsx":
/*!**************************************!*\
  !*** ./src/components/MyHistory.tsx ***!
  \**************************************/
/*! exports provided: MyHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHistory", function() { return MyHistory; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timeline */ "./src/components/Timeline.tsx");
var _this = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/MyHistory.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var MyHistory = function MyHistory() {
  var items = [{
    date: '2013/9',
    content: 'Scratchコミュニティに参加'
  }, {
    date: '2015',
    content: 'Vine LinuxでC言語の学習を開始'
  }, {
    date: '2017/3',
    content: 'RESASアプリコンテスト ジェイティービー賞受賞'
  }, {
    date: '2019/4',
    content: 'コードアカデミー高等学校 入学'
  }, {
    date: '2020/2',
    content: 'ジュニアプロコン2020 in 静岡 高校生ソフトウェア部門優勝'
  }, {
    date: '2020/3',
    content: 'HackForSpringに参加'
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Timeline__WEBPACK_IMPORTED_MODULE_2__["Timeline"], {
    items: items,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2085888330",
    __self: _this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL015SGlzdG9yeS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NrQiIsImZpbGUiOiIvVXNlcnMvaG90YWthL0Rlc2t0b3AvR2l0aHViL2hvdGExMDI0L3BvcnRmb2xpby9zcmMvY29tcG9uZW50cy9NeUhpc3RvcnkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZWxpbmUsIFRpbWVsaW5lUHJvcHMgfSBmcm9tICcuL1RpbWVsaW5lJ1xuXG5leHBvcnQgY29uc3QgTXlIaXN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBpdGVtczogVGltZWxpbmVQcm9wc1snaXRlbXMnXSA9IFtcbiAgICB7XG4gICAgICBkYXRlOiAnMjAxMy85JyxcbiAgICAgIGNvbnRlbnQ6ICdTY3JhdGNo44Kz44Of44Ol44OL44OG44Kj44Gr5Y+C5YqgJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGRhdGU6ICcyMDE1JyxcbiAgICAgIGNvbnRlbnQ6ICdWaW5lIExpbnV444GnQ+iogOiqnuOBruWtpue/kuOCkumWi+WniycsXG4gICAgfSxcbiAgICB7XG4gICAgICBkYXRlOiAnMjAxNy8zJyxcbiAgICAgIGNvbnRlbnQ6ICdSRVNBU+OCouODl+ODquOCs+ODs+ODhuOCueODiCDjgrjjgqfjgqTjg4bjgqPjg7zjg5Pjg7zos57lj5fos54nLFxuICAgIH0sXG4gICAge1xuICAgICAgZGF0ZTogJzIwMTkvNCcsXG4gICAgICBjb250ZW50OiAn44Kz44O844OJ44Ki44Kr44OH44Of44O86auY562J5a2m5qChIOWFpeWtpicsXG4gICAgfSxcbiAgICB7XG4gICAgICBkYXRlOiAnMjAyMC8yJyxcbiAgICAgIGNvbnRlbnQ6ICfjgrjjg6Xjg4vjgqLjg5fjg63jgrPjg7MyMDIwIGluIOmdmeWyoSDpq5jmoKHnlJ/jgr3jg5Xjg4jjgqbjgqfjgqLpg6jploDlhKrli50nLFxuICAgIH0sXG4gICAge1xuICAgICAgZGF0ZTogJzIwMjAvMycsXG4gICAgICBjb250ZW50OiAnSGFja0ZvclNwcmluZ+OBq+WPguWKoCcsXG4gICAgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUaW1lbGluZSBpdGVtcz17aXRlbXN9IC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/MyHistory.tsx */"));
};

/***/ }),

/***/ "./src/components/MySkills.tsx":
/*!*************************************!*\
  !*** ./src/components/MySkills.tsx ***!
  \*************************************/
/*! exports provided: MySkills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySkills", function() { return MySkills; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SkillCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SkillCard */ "./src/components/SkillCard.tsx");


var _this = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/MySkills.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var MySkills = function MySkills() {
  var skills = [{
    name: 'React',
    logoSrc: '/react.svg',
    color: '#61DAFB',
    background: '#20232A',
    detail: 'Facebook製のフロントエンドフレームワークです。最近はTypeScriptを使うことが多いためVue.jsよりもこちらを使うことが多いです。'
  }, {
    name: 'Vue.js',
    logoSrc: '/vue.svg',
    color: '#4DBA87',
    background: 'white',
    detail: 'コミュニティーが開発しているフロントエンドフレームワークです。Laravelと組み合わせて簡単なCMSを開発していました。'
  }, {
    name: 'TypeScript',
    logoSrc: '/typescript.svg',
    color: '#235a97',
    background: 'white',
    detail: 'Microsoftが開発しているAltJSです。JavaScriptい「型」という概念を付け加えた言語です。書きやすさと安全性から積極的に使用するようにしています。'
  }, {
    name: 'Laravel',
    logoSrc: '/laravel.svg',
    color: '#fb503b',
    background: 'white',
    detail: 'サーバーサイドの言語であるPHPのフルスタックフレームワークです。ルーターやBlade（テンプレートライブラリ）、Artisan（CLI）などをはじめ様々な便利な機能があります。簡単なAPIを作ったりCMSを作る際に利用しました。'
  }, {
    name: 'Nuxt.js',
    logoSrc: '/nuxt.svg',
    color: 'white',
    background: '#2F495E',
    detail: 'Vue.jsのためのフレームワークです。ルーティングをディレクトリ構造から生成してくれるため、スムーズに開発を行うことができます。Laravelと組み合わせて簡単なCMSを開発していました。'
  }, {
    name: 'Next.js',
    logoSrc: '/nextjs.svg',
    color: 'black',
    background: 'white',
    detail: 'Reactのためのフレームワークです。ルーティングをディレクトリ構造から生成してくれるため、スムーズに開発を行うことができます。最近はVue.jsよりもReactを使うことが多いのでNuxt.jsではなくNext.jsを利用しています。'
  }, {
    name: 'Unity',
    logoSrc: '/unity.svg',
    color: '#222C37',
    background: 'white',
    detail: '2D/3D向けのゲームエンジンです。プログラムの設計に向いているC#を用いてプログラミングするため、スムーズかつ保守性が高い作品を作ることができます。'
  }, {
    name: 'OpenSiv3D',
    logoSrc: '/opensiv3d.png',
    color: '#4290E2',
    background: '#fafafa',
    detail: 'C++を用いたユニバーサールなアプリケーションを開発するためのライブラリです。オブジェクト指向的なAPIや豊富なヘルパー、当たり判定などが用意されているため素早く作品を開発することができます。'
  }, {
    name: 'SASS/SCSS',
    logoSrc: '/sass.svg',
    color: '#CF649A',
    background: '#FFFFFF',
    detail: 'CSSを拡張した構文の言語です。CSSにはない関数や繰り返しをはじめ、様々な機能があります。'
  }, {
    name: 'Vuetify',
    logoSrc: '/vuetify.svg',
    color: '#AEDDFF',
    background: '#121212',
    detail: 'Vue.jsのためのマテリアルデザインフレームです。Material Designのコンポーネントが一式実装されているため、スムーズに作品を開発することができます。簡単なCMSの開発に使用しました。'
  }, {
    name: 'Material-UI',
    logoSrc: '/material-ui.svg',
    color: '#00B0FF',
    background: '#212121',
    detail: 'Reactのためのマテリアルデザインフレームです。Material Designのコンポーネントが一式実装されているため、スムーズに作品を開発することができます。Reactらしい使い方ができるのでとても気に入っています。'
  }, {
    name: 'Adobe Illustrator',
    logoSrc: '/ai.svg',
    color: '#F37021',
    background: '#360100',
    detail: 'Adobe社が開発しているベクターイメージなどを作るためのソフトです。自分のアイコンやアプリのアイコンの作成に利用しています。'
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1027900108" + " " + "cssgrid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, skills.map(function (skill) {
    return __jsx(_SkillCard__WEBPACK_IMPORTED_MODULE_3__["SkillCard"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: skill.name
    }, skill, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1027900108",
    __self: _this
  }, ".cssgrid.jsx-1027900108{display:grid;grid-template-columns:repeat(auto-fit,minmax(96px,1fr));-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;gap:32px;}@media screen and (min-width:375px){.cssgrid.jsx-1027900108{min-width:200px;}}@media screen and (min-width:578px){.cssgrid.jsx-1027900108{min-width:300px;}}@media screen and (min-width:934px){.cssgrid.jsx-1027900108{min-width:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL015U2tpbGxzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SGtCLEFBR3dCLEFBUUssQUFNQSxBQU1BLGFBbkJ3QyxHQVExRCxBQU1BLEFBTUEscURBbkJ1QixtR0FDZCxTQUNYIiwiZmlsZSI6Ii9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL015U2tpbGxzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNraWxsQ2FyZCB9IGZyb20gJy4vU2tpbGxDYXJkJ1xuXG50eXBlIFNraWxsRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGxvZ29TcmM6IHN0cmluZ1xuICBjb2xvcjogc3RyaW5nXG4gIGJhY2tncm91bmQ6IHN0cmluZ1xuICBkZXRhaWw/OiBzdHJpbmdcbiAgYmVnaW5uZXI/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBNeVNraWxscyA9ICgpID0+IHtcbiAgY29uc3Qgc2tpbGxzOiBTa2lsbERhdGFbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbG9nb1NyYzogJy9yZWFjdC5zdmcnLFxuICAgICAgY29sb3I6ICcjNjFEQUZCJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjMjAyMzJBJyxcbiAgICAgIGRldGFpbDpcbiAgICAgICAgJ0ZhY2Vib29r6KO944Gu44OV44Ot44Oz44OI44Ko44Oz44OJ44OV44Os44O844Og44Ov44O844Kv44Gn44GZ44CC5pyA6L+R44GvVHlwZVNjcmlwdOOCkuS9v+OBhuOBk+OBqOOBjOWkmuOBhOOBn+OCgVZ1ZS5qc+OCiOOCiuOCguOBk+OBoeOCieOCkuS9v+OBhuOBk+OBqOOBjOWkmuOBhOOBp+OBmeOAgicsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxvZ29TcmM6ICcvdnVlLnN2ZycsXG4gICAgICBjb2xvcjogJyM0REJBODcnLFxuICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgIGRldGFpbDpcbiAgICAgICAgJ+OCs+ODn+ODpeODi+ODhuOCo+ODvOOBjOmWi+eZuuOBl+OBpuOBhOOCi+ODleODreODs+ODiOOCqOODs+ODieODleODrOODvOODoOODr+ODvOOCr+OBp+OBmeOAgkxhcmF2ZWzjgajntYTjgb/lkIjjgo/jgZvjgabnsKHljZjjgapDTVPjgpLplovnmbrjgZfjgabjgYTjgb7jgZfjgZ/jgIInLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1R5cGVTY3JpcHQnLFxuICAgICAgbG9nb1NyYzogJy90eXBlc2NyaXB0LnN2ZycsXG4gICAgICBjb2xvcjogJyMyMzVhOTcnLFxuICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgIGRldGFpbDpcbiAgICAgICAgJ01pY3Jvc29mdOOBjOmWi+eZuuOBl+OBpuOBhOOCi0FsdEpT44Gn44GZ44CCSmF2YVNjcmlwdOOBhOOAjOWei+OAjeOBqOOBhOOBhuamguW/teOCkuS7mOOBkeWKoOOBiOOBn+iogOiqnuOBp+OBmeOAguabuOOBjeOChOOBmeOBleOBqOWuieWFqOaAp+OBi+OCieepjealteeahOOBq+S9v+eUqOOBmeOCi+OCiOOBhuOBq+OBl+OBpuOBhOOBvuOBmeOAgicsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsb2dvU3JjOiAnL2xhcmF2ZWwuc3ZnJyxcbiAgICAgIGNvbG9yOiAnI2ZiNTAzYicsXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgZGV0YWlsOlxuICAgICAgICAn44K144O844OQ44O844K144Kk44OJ44Gu6KiA6Kqe44Gn44GC44KLUEhQ44Gu44OV44Or44K544K/44OD44Kv44OV44Os44O844Og44Ov44O844Kv44Gn44GZ44CC44Or44O844K/44O844KEQmxhZGXvvIjjg4bjg7Pjg5fjg6zjg7zjg4jjg6njgqTjg5bjg6njg6rvvInjgIFBcnRpc2Fu77yIQ0xJ77yJ44Gq44Gp44KS44Gv44GY44KB5qeY44CF44Gq5L6/5Yip44Gq5qmf6IO944GM44GC44KK44G+44GZ44CC57Ch5Y2Y44GqQVBJ44KS5L2c44Gj44Gf44KKQ01T44KS5L2c44KL6Zqb44Gr5Yip55So44GX44G+44GX44Gf44CCJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdOdXh0LmpzJyxcbiAgICAgIGxvZ29TcmM6ICcvbnV4dC5zdmcnLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBiYWNrZ3JvdW5kOiAnIzJGNDk1RScsXG4gICAgICBkZXRhaWw6XG4gICAgICAgICdWdWUuanPjga7jgZ/jgoHjga7jg5Xjg6zjg7zjg6Djg6/jg7zjgq/jgafjgZnjgILjg6vjg7zjg4bjgqPjg7PjgrDjgpLjg4fjgqPjg6zjgq/jg4jjg6rmp4vpgKDjgYvjgonnlJ/miJDjgZfjgabjgY/jgozjgovjgZ/jgoHjgIHjgrnjg6Djg7zjgrrjgavplovnmbrjgpLooYzjgYbjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJMYXJhdmVs44Go57WE44G/5ZCI44KP44Gb44Gm57Ch5Y2Y44GqQ01T44KS6ZaL55m644GX44Gm44GE44G+44GX44Gf44CCJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdOZXh0LmpzJyxcbiAgICAgIGxvZ29TcmM6ICcvbmV4dGpzLnN2ZycsXG4gICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICBkZXRhaWw6XG4gICAgICAgICdSZWFjdOOBruOBn+OCgeOBruODleODrOODvOODoOODr+ODvOOCr+OBp+OBmeOAguODq+ODvOODhuOCo+ODs+OCsOOCkuODh+OCo+ODrOOCr+ODiOODquani+mAoOOBi+OCieeUn+aIkOOBl+OBpuOBj+OCjOOCi+OBn+OCgeOAgeOCueODoOODvOOCuuOBq+mWi+eZuuOCkuihjOOBhuOBk+OBqOOBjOOBp+OBjeOBvuOBmeOAguacgOi/keOBr1Z1ZS5qc+OCiOOCiuOCglJlYWN044KS5L2/44GG44GT44Go44GM5aSa44GE44Gu44GnTnV4dC5qc+OBp+OBr+OBquOBj05leHQuanPjgpLliKnnlKjjgZfjgabjgYTjgb7jgZnjgIInLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1VuaXR5JyxcbiAgICAgIGxvZ29TcmM6ICcvdW5pdHkuc3ZnJyxcbiAgICAgIGNvbG9yOiAnIzIyMkMzNycsXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgZGV0YWlsOlxuICAgICAgICAnMkQvM0TlkJHjgZHjga7jgrLjg7zjg6Djgqjjg7Pjgrjjg7PjgafjgZnjgILjg5fjg63jgrDjg6njg6Djga7oqK3oqIjjgavlkJHjgYTjgabjgYTjgotDI+OCkueUqOOBhOOBpuODl+ODreOCsOODqeODn+ODs+OCsOOBmeOCi+OBn+OCgeOAgeOCueODoOODvOOCuuOBi+OBpOS/neWuiOaAp+OBjOmrmOOBhOS9nOWTgeOCkuS9nOOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAgicsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnT3BlblNpdjNEJyxcbiAgICAgIGxvZ29TcmM6ICcvb3BlbnNpdjNkLnBuZycsXG4gICAgICBjb2xvcjogJyM0MjkwRTInLFxuICAgICAgYmFja2dyb3VuZDogJyNmYWZhZmEnLFxuICAgICAgZGV0YWlsOlxuICAgICAgICAnQysr44KS55So44GE44Gf44Om44OL44OQ44O844K144O844Or44Gq44Ki44OX44Oq44Kx44O844K344On44Oz44KS6ZaL55m644GZ44KL44Gf44KB44Gu44Op44Kk44OW44Op44Oq44Gn44GZ44CC44Kq44OW44K444Kn44Kv44OI5oyH5ZCR55qE44GqQVBJ44KE6LGK5a+M44Gq44OY44Or44OR44O844CB5b2T44Gf44KK5Yik5a6a44Gq44Gp44GM55So5oSP44GV44KM44Gm44GE44KL44Gf44KB57Sg5pep44GP5L2c5ZOB44KS6ZaL55m644GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdTQVNTL1NDU1MnLFxuICAgICAgbG9nb1NyYzogJy9zYXNzLnN2ZycsXG4gICAgICBjb2xvcjogJyNDRjY0OUEnLFxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxuICAgICAgZGV0YWlsOlxuICAgICAgICAnQ1NT44KS5ouh5by144GX44Gf5qeL5paH44Gu6KiA6Kqe44Gn44GZ44CCQ1NT44Gr44Gv44Gq44GE6Zai5pWw44KE57mw44KK6L+U44GX44KS44Gv44GY44KB44CB5qeY44CF44Gq5qmf6IO944GM44GC44KK44G+44GZ44CCJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdWdWV0aWZ5JyxcbiAgICAgIGxvZ29TcmM6ICcvdnVldGlmeS5zdmcnLFxuICAgICAgY29sb3I6ICcjQUVEREZGJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjMTIxMjEyJyxcbiAgICAgIGRldGFpbDpcbiAgICAgICAgJ1Z1ZS5qc+OBruOBn+OCgeOBruODnuODhuODquOCouODq+ODh+OCtuOCpOODs+ODleODrOODvOODoOOBp+OBmeOAgk1hdGVyaWFsIERlc2lnbuOBruOCs+ODs+ODneODvOODjeODs+ODiOOBjOS4gOW8j+Wun+ijheOBleOCjOOBpuOBhOOCi+OBn+OCgeOAgeOCueODoOODvOOCuuOBq+S9nOWTgeOCkumWi+eZuuOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAguewoeWNmOOBqkNNU+OBrumWi+eZuuOBq+S9v+eUqOOBl+OBvuOBl+OBn+OAgicsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTWF0ZXJpYWwtVUknLFxuICAgICAgbG9nb1NyYzogJy9tYXRlcmlhbC11aS5zdmcnLFxuICAgICAgY29sb3I6ICcjMDBCMEZGJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjMjEyMTIxJyxcbiAgICAgIGRldGFpbDpcbiAgICAgICAgJ1JlYWN044Gu44Gf44KB44Gu44Oe44OG44Oq44Ki44Or44OH44K244Kk44Oz44OV44Os44O844Og44Gn44GZ44CCTWF0ZXJpYWwgRGVzaWdu44Gu44Kz44Oz44Od44O844ON44Oz44OI44GM5LiA5byP5a6f6KOF44GV44KM44Gm44GE44KL44Gf44KB44CB44K544Og44O844K644Gr5L2c5ZOB44KS6ZaL55m644GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCUmVhY3TjgonjgZfjgYTkvb/jgYTmlrnjgYzjgafjgY3jgovjga7jgafjgajjgabjgoLmsJfjgavlhaXjgaPjgabjgYTjgb7jgZnjgIInLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Fkb2JlIElsbHVzdHJhdG9yJyxcbiAgICAgIGxvZ29TcmM6ICcvYWkuc3ZnJyxcbiAgICAgIGNvbG9yOiAnI0YzNzAyMScsXG4gICAgICBiYWNrZ3JvdW5kOiAnIzM2MDEwMCcsXG4gICAgICBkZXRhaWw6XG4gICAgICAgICdBZG9iZeekvuOBjOmWi+eZuuOBl+OBpuOBhOOCi+ODmeOCr+OCv+ODvOOCpOODoeODvOOCuOOBquOBqeOCkuS9nOOCi+OBn+OCgeOBruOCveODleODiOOBp+OBmeOAguiHquWIhuOBruOCouOCpOOCs+ODs+OChOOCouODl+ODquOBruOCouOCpOOCs+ODs+OBruS9nOaIkOOBq+WIqeeUqOOBl+OBpuOBhOOBvuOBmeOAgicsXG4gICAgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3NzZ3JpZFwiPlxuICAgICAgICB7c2tpbGxzLm1hcCgoc2tpbGwpID0+IChcbiAgICAgICAgICA8U2tpbGxDYXJkIGtleT17c2tpbGwubmFtZX0gey4uLnNraWxsfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jc3NncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoOTZweCwgMWZyKSk7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIHtcbiAgICAgICAgICAuY3NzZ3JpZCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3OHB4KSB7XG4gICAgICAgICAgLmNzc2dyaWQge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MzRweCkge1xuICAgICAgICAgIC5jc3NncmlkIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/MySkills.tsx */"));
};

/***/ }),

/***/ "./src/components/MyWorks.tsx":
/*!************************************!*\
  !*** ./src/components/MyWorks.tsx ***!
  \************************************/
/*! exports provided: MyWorks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorks", function() { return MyWorks; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WorkCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkCard */ "./src/components/WorkCard.tsx");


var _this = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/MyWorks.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var MyWorks = function MyWorks() {
  var works = [{
    name: 'MaterialJump Next',
    description: '矢印キーでタイミングよく床を移動させ、プレイヤーを上へ上げていくシンプルで気持ちいいアクションゲーム。',
    image: '/materialjumpnext.png',
    href: 'https://scratch.mit.edu/projects/357137675/',
    background: '#81D4FA'
  }, {
    name: 'FlappyBOX',
    description: '右から迫ってくる障害物をジャンプで避ける、シンプルな3Dアクションゲーム。',
    image: '/flappybox.png',
    href: 'https://scratch.mit.edu/projects/205200338/',
    background: '#000000'
  }, {
    name: 'Quro',
    description: 'JavaScript/TypeScript向けのDiscordボットフレームワークです。リクエスト→処理→レスポンスの流れでボットを開発することを可能にする。',
    image: '/quro.png',
    href: 'https://github.com/hota1024/quro',
    background: '#2C2F33'
  }, {
    name: 'Bisco.js',
    description: 'JavaScript向けのDiscordボットライブラリです。Discord上で動くゲームを作るのに特化していて、またコマンドの定義を直感的にすることができます。',
    image: '/bisco.png',
    href: 'https://scrapbox.io/bisco/',
    background: '#2C2F33'
  }, {
    name: 'Kuro-chan[WIP]',
    description: 'Discord上のOSSコミュニティ向けのボットです。Githubとの連携やプログラマに嬉しい機能があります。',
    image: '/kuro.png',
    href: 'https://github.com/kuro-chan-bot',
    background: 'white'
  }, {
    name: 'CoderDojo Shizuoka Bot[WIP]',
    description: 'DiscordのCoderDojo静岡コミュニティのボットです。connpassの開催情報を元にCoderDojo静岡に関する情報を情報を発信してくれます。',
    image: '/coderdojoshizuokabot.png',
    href: '#',
    background: 'white'
  }, {
    name: 'CoderDojo静岡',
    description: 'CoderDojo静岡という場所でユースメンターとして参加し、ボランティアで子どもたちにプログラミングを教えています。',
    image: '/coderdojo-shizuoka.png',
    href: 'https://coderdojo-shizuoka.org/',
    background: 'white'
  }, {
    name: 'HackForSpring',
    description: 'COVID-19で休校になった小中学生を対象に、同級生と先輩と共にプログラミングの講座や様子を配信したプロジェクトです。',
    image: '/hackforspring.png',
    href: 'https://sites.google.com/castalia.co.jp/hackforspring',
    background: 'white'
  }, {
    name: '静岡YLT',
    description: '静岡の学生クリエーターのコミュニティです。LTやもくもく回を中心に活動しています。',
    image: '/shizuoka-ylt.png',
    href: 'https://shizuoka-ylt.connpass.com/',
    background: 'white'
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-4114398090" + " " + "works",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, works.map(function (work) {
    return __jsx(_WorkCard__WEBPACK_IMPORTED_MODULE_3__["WorkCard"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: work.name
    }, work, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4114398090",
    __self: _this
  }, ".works.jsx-4114398090{display:grid;grid-template-columns:repeat(auto-fit,minmax(256px,1fr));-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;gap:32px;}@media screen and (min-width:256px){.works.jsx-4114398090{min-width:256px;}}@media screen and (min-width:544px){.works.jsx-4114398090{min-width:544px;}}@media screen and (min-width:832px){.works.jsx-4114398090{min-width:832px;}}@media screen and (min-width:1120px){.works.jsx-4114398090{min-width:1120px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL015V29ya3MudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGa0IsQUFHd0IsQUFRSyxBQU1BLEFBTUEsQUFNQyxhQXpCd0MsR0FRM0QsQUFNQSxBQU1BLENBTUEscURBekJ1QixtR0FDZCxTQUNYIiwiZmlsZSI6Ii9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL015V29ya3MudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV29ya0NhcmQsIFdvcmtDYXJkUHJvcHMgfSBmcm9tICcuL1dvcmtDYXJkJ1xuXG5leHBvcnQgY29uc3QgTXlXb3JrcyA9ICgpID0+IHtcbiAgY29uc3Qgd29ya3M6IFdvcmtDYXJkUHJvcHNbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnTWF0ZXJpYWxKdW1wIE5leHQnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICfnn6LljbDjgq3jg7zjgafjgr/jgqTjg5/jg7PjgrDjgojjgY/luorjgpLnp7vli5XjgZXjgZvjgIHjg5fjg6zjgqTjg6Tjg7zjgpLkuIrjgbjkuIrjgZLjgabjgYTjgY/jgrfjg7Pjg5fjg6vjgafmsJfmjIHjgaHjgYTjgYTjgqLjgq/jgrfjg6fjg7PjgrLjg7zjg6DjgIInLFxuICAgICAgaW1hZ2U6ICcvbWF0ZXJpYWxqdW1wbmV4dC5wbmcnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vc2NyYXRjaC5taXQuZWR1L3Byb2plY3RzLzM1NzEzNzY3NS8nLFxuICAgICAgYmFja2dyb3VuZDogJyM4MUQ0RkEnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0ZsYXBweUJPWCcsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ+WPs+OBi+OCiei/q+OBo+OBpuOBj+OCi+manOWus+eJqeOCkuOCuOODo+ODs+ODl+OBp+mBv+OBkeOCi+OAgeOCt+ODs+ODl+ODq+OBqjNE44Ki44Kv44K344On44Oz44Ky44O844Og44CCJyxcbiAgICAgIGltYWdlOiAnL2ZsYXBweWJveC5wbmcnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vc2NyYXRjaC5taXQuZWR1L3Byb2plY3RzLzIwNTIwMDMzOC8nLFxuICAgICAgYmFja2dyb3VuZDogJyMwMDAwMDAnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1F1cm8nLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdKYXZhU2NyaXB0L1R5cGVTY3JpcHTlkJHjgZHjga5EaXNjb3Jk44Oc44OD44OI44OV44Os44O844Og44Ov44O844Kv44Gn44GZ44CC44Oq44Kv44Ko44K544OI4oaS5Yem55CG4oaS44Os44K544Od44Oz44K544Gu5rWB44KM44Gn44Oc44OD44OI44KS6ZaL55m644GZ44KL44GT44Go44KS5Y+v6IO944Gr44GZ44KL44CCJyxcbiAgICAgIGltYWdlOiAnL3F1cm8ucG5nJyxcbiAgICAgIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vaG90YTEwMjQvcXVybycsXG4gICAgICBiYWNrZ3JvdW5kOiAnIzJDMkYzMycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQmlzY28uanMnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdKYXZhU2NyaXB05ZCR44GR44GuRGlzY29yZOODnOODg+ODiOODqeOCpOODluODqeODquOBp+OBmeOAgkRpc2NvcmTkuIrjgafli5XjgY/jgrLjg7zjg6DjgpLkvZzjgovjga7jgavnibnljJbjgZfjgabjgYTjgabjgIHjgb7jgZ/jgrPjg57jg7Pjg4njga7lrprnvqnjgpLnm7TmhJ/nmoTjgavjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIInLFxuICAgICAgaW1hZ2U6ICcvYmlzY28ucG5nJyxcbiAgICAgIGhyZWY6ICdodHRwczovL3NjcmFwYm94LmlvL2Jpc2NvLycsXG4gICAgICBiYWNrZ3JvdW5kOiAnIzJDMkYzMycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnS3Vyby1jaGFuW1dJUF0nLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdEaXNjb3Jk5LiK44GuT1NT44Kz44Of44Ol44OL44OG44Kj5ZCR44GR44Gu44Oc44OD44OI44Gn44GZ44CCR2l0aHVi44Go44Gu6YCj5pC644KE44OX44Ot44Kw44Op44Oe44Gr5ayJ44GX44GE5qmf6IO944GM44GC44KK44G+44GZ44CCJyxcbiAgICAgIGltYWdlOiAnL2t1cm8ucG5nJyxcbiAgICAgIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20va3Vyby1jaGFuLWJvdCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NvZGVyRG9qbyBTaGl6dW9rYSBCb3RbV0lQXScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0Rpc2NvcmTjga5Db2RlckRvam/pnZnlsqHjgrPjg5/jg6Xjg4vjg4bjgqPjga7jg5zjg4Pjg4jjgafjgZnjgIJjb25ucGFzc+OBrumWi+WCrOaDheWgseOCkuWFg+OBq0NvZGVyRG9qb+mdmeWyoeOBq+mWouOBmeOCi+aDheWgseOCkuaDheWgseOCkueZuuS/oeOBl+OBpuOBj+OCjOOBvuOBmeOAgicsXG4gICAgICBpbWFnZTogJy9jb2RlcmRvam9zaGl6dW9rYWJvdC5wbmcnLFxuICAgICAgaHJlZjogJyMnLFxuICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDb2RlckRvam/pnZnlsqEnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdDb2RlckRvam/pnZnlsqHjgajjgYTjgYbloLTmiYDjgafjg6bjg7zjgrnjg6Hjg7Pjgr/jg7zjgajjgZfjgablj4LliqDjgZfjgIHjg5zjg6njg7Pjg4bjgqPjgqLjgaflrZDjganjgoLjgZ/jgaHjgavjg5fjg63jgrDjg6njg5/jg7PjgrDjgpLmlZnjgYjjgabjgYTjgb7jgZnjgIInLFxuICAgICAgaW1hZ2U6ICcvY29kZXJkb2pvLXNoaXp1b2thLnBuZycsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9jb2RlcmRvam8tc2hpenVva2Eub3JnLycsXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0hhY2tGb3JTcHJpbmcnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdDT1ZJRC0xOeOBp+S8keagoeOBq+OBquOBo+OBn+Wwj+S4reWtpueUn+OCkuWvvuixoeOBq+OAgeWQjOe0mueUn+OBqOWFiOi8qeOBqOWFseOBq+ODl+ODreOCsOODqeODn+ODs+OCsOOBruism+W6p+OChOanmOWtkOOCkumFjeS/oeOBl+OBn+ODl+ODreOCuOOCp+OCr+ODiOOBp+OBmeOAgicsXG4gICAgICBpbWFnZTogJy9oYWNrZm9yc3ByaW5nLnBuZycsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9zaXRlcy5nb29nbGUuY29tL2Nhc3RhbGlhLmNvLmpwL2hhY2tmb3JzcHJpbmcnLFxuICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICfpnZnlsqFZTFQnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICfpnZnlsqHjga7lrabnlJ/jgq/jg6rjgqjjg7zjgr/jg7zjga7jgrPjg5/jg6Xjg4vjg4bjgqPjgafjgZnjgIJMVOOChOOCguOBj+OCguOBj+WbnuOCkuS4reW/g+OBq+a0u+WLleOBl+OBpuOBhOOBvuOBmeOAgicsXG4gICAgICBpbWFnZTogJy9zaGl6dW9rYS15bHQucG5nJyxcbiAgICAgIGhyZWY6ICdodHRwczovL3NoaXp1b2thLXlsdC5jb25ucGFzcy5jb20vJyxcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya3NcIj5cbiAgICAgICAge3dvcmtzLm1hcCgod29yaykgPT4gKFxuICAgICAgICAgIDxXb3JrQ2FyZCBrZXk9e3dvcmsubmFtZX0gey4uLndvcmt9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndvcmtzIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjU2cHgsIDFmcikpO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGdhcDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1NnB4KSB7XG4gICAgICAgICAgLndvcmtzIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjU2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQ0cHgpIHtcbiAgICAgICAgICAud29ya3Mge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA1NDRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MzJweCkge1xuICAgICAgICAgIC53b3JrcyB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDgzMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMjBweCkge1xuICAgICAgICAgIC53b3JrcyB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDExMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/MyWorks.tsx */"));
};

/***/ }),

/***/ "./src/components/SkillCard.tsx":
/*!**************************************!*\
  !*** ./src/components/SkillCard.tsx ***!
  \**************************************/
/*! exports provided: SkillCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillCard", function() { return SkillCard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./src/components/Dialog.tsx");
var _this = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/SkillCard.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var SkillCard = function SkillCard(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      showDialog = _useState[0],
      setShowDialog = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
    style: {
      color: props.color,
      background: props.background
    },
    onClick: function onClick() {
      return setShowDialog(true);
    },
    className: "jsx-3192749796" + " " + "skill-card-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3192749796",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.logoSrc,
    width: "32",
    className: "jsx-3192749796",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx("h5", {
    className: "jsx-3192749796",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, props.name))), __jsx(_Dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    show: showDialog,
    onClose: function onClose() {
      return setShowDialog(false);
    },
    background: props.background,
    color: props.color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3192749796" + " " + "detail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.logoSrc,
    width: "128px",
    className: "jsx-3192749796",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-3192749796",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("h5", {
    style: {
      fontSize: '1.5rem',
      textAlign: 'center'
    },
    className: "jsx-3192749796",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, props.name), __jsx("p", {
    style: {
      padding: '1em'
    },
    className: "jsx-3192749796",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, props.detail))), __jsx("hr", {
    color: props.color,
    className: "jsx-3192749796" + " " + "divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3192749796",
    __self: _this
  }, ".detail.jsx-3192749796{text-align:center;margin:0;}.skill-card-wrap.jsx-3192749796{border:none;border-radius:3px;width:96px;height:96px;font-size:1em;cursor:pointer;display:grid;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:auto;min-width:0;box-shadow:0 4px 4px rgba(0,0,0,0.2);-webkit-transition:300ms;transition:300ms;}.skill-card-wrap.jsx-3192749796:hover{box-shadow:0 8px 32px rgba(0,0,0,0.2);}h5.jsx-3192749796{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL1NraWxsQ2FyZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNrQixBQUc2QixBQUtOLEFBZ0I2QixBQUloQyxTQUNYLEdBcEJvQixNQUxULFNBQ1gsR0FLYSxRQWViLEdBZGMsWUFDRSxjQUNDLGVBQ0YsYUFDUSw0RUFDRSxtR0FDVCxjQUNGLFlBQzRCLHFDQUN2QiwwQ0FDbkIiLCJmaWxlIjoiL1VzZXJzL2hvdGFrYS9EZXNrdG9wL0dpdGh1Yi9ob3RhMTAyNC9wb3J0Zm9saW8vc3JjL2NvbXBvbmVudHMvU2tpbGxDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9EaWFsb2cnXG5cbmV4cG9ydCBjb25zdCBTa2lsbENhcmQ6IEZDPHtcbiAgbmFtZTogc3RyaW5nXG4gIGNvbG9yOiBzdHJpbmdcbiAgYmFja2dyb3VuZDogc3RyaW5nXG4gIGxvZ29TcmM6IHN0cmluZ1xuICBkZXRhaWw/OiBzdHJpbmdcbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzaG93RGlhbG9nLCBzZXRTaG93RGlhbG9nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cInNraWxsLWNhcmQtd3JhcFwiXG4gICAgICAgIHN0eWxlPXt7IGNvbG9yOiBwcm9wcy5jb2xvciwgYmFja2dyb3VuZDogcHJvcHMuYmFja2dyb3VuZCB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RGlhbG9nKHRydWUpfVxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5sb2dvU3JjfSB3aWR0aD1cIjMyXCI+PC9pbWc+XG4gICAgICAgICAgPGg1Pntwcm9wcy5uYW1lfTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIHNob3c9e3Nob3dEaWFsb2d9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dEaWFsb2coZmFsc2UpfVxuICAgICAgICBiYWNrZ3JvdW5kPXtwcm9wcy5iYWNrZ3JvdW5kfVxuICAgICAgICBjb2xvcj17cHJvcHMuY29sb3J9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmxvZ29TcmN9IHdpZHRoPVwiMTI4cHhcIj48L2ltZz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAge3Byb3BzLm5hbWV9XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZzogJzFlbScgfX0+e3Byb3BzLmRldGFpbH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiIGNvbG9yPXtwcm9wcy5jb2xvcn0gLz5cbiAgICAgIDwvRGlhbG9nPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZGV0YWlsIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNraWxsLWNhcmQtd3JhcCB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICB3aWR0aDogOTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDk2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNraWxsLWNhcmQtd3JhcDpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIH1cblxuICAgICAgICBoNSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/SkillCard.tsx */"));
};

/***/ }),

/***/ "./src/components/SnsButton.tsx":
/*!**************************************!*\
  !*** ./src/components/SnsButton.tsx ***!
  \**************************************/
/*! exports provided: SnsButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnsButton", function() { return SnsButton; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _this = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/SnsButton.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var SnsButton = function SnsButton(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("a", {
    href: props.href,
    target: "__blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3740892080", [props.color, props.background, props.background, props.color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: props.icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3740892080",
    dynamic: [props.color, props.background, props.background, props.color],
    __self: _this
  }, "a.__jsx-style-dynamic-selector{width:48px;height:48px;line-height:48px;background:white;border-radius:50%;font-size:1.4rem;margin:0 8px;cursor:pointer;box-shadow:0 0 16px rgba(0,0,0,0.1);-webkit-transition:300ms;transition:300ms;color:".concat(props.color, ";background:").concat(props.background, ";}a.__jsx-style-dynamic-selector:hover{color:").concat(props.background, ";background:").concat(props.color, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL1Nuc0J1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JrQixBQUdzQixBQWV3QixXQWR2QixZQUNLLFlBY3VCLEtBYnZCLGlCQUNDLGtCQUNELEFBWW5CLGlCQVhlLGFBQ0UsZUFDd0Isb0NBQ3RCLDBDQUNrQixtQ0FDSyx3Q0FDMUMiLCJmaWxlIjoiL1VzZXJzL2hvdGFrYS9EZXNrdG9wL0dpdGh1Yi9ob3RhMTAyNC9wb3J0Zm9saW8vc3JjL2NvbXBvbmVudHMvU25zQnV0dG9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBJY29uUHJvcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcblxuZXhwb3J0IHR5cGUgU25zQnV0dG9uUHJvcHMgPSB7XG4gIGljb246IEljb25Qcm9wXG4gIGNvbG9yOiBzdHJpbmdcbiAgYmFja2dyb3VuZDogc3RyaW5nXG4gIGhyZWY6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgU25zQnV0dG9uOiBGQzxTbnNCdXR0b25Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGEgaHJlZj17cHJvcHMuaHJlZn0gdGFyZ2V0PVwiX19ibGFua1wiPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e3Byb3BzLmljb259IC8+XG4gICAgICA8L2E+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYSB7XG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XG4gICAgICAgICAgY29sb3I6ICR7cHJvcHMuY29sb3J9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMuYmFja2dyb3VuZH07XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJHtwcm9wcy5iYWNrZ3JvdW5kfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzLmNvbG9yfTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/SnsButton.tsx */")));
};

/***/ }),

/***/ "./src/components/SnsButtons.tsx":
/*!***************************************!*\
  !*** ./src/components/SnsButtons.tsx ***!
  \***************************************/
/*! exports provided: SnsButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnsButtons", function() { return SnsButtons; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SnsButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SnsButton */ "./src/components/SnsButton.tsx");
var _this = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/SnsButtons.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var SnsButtons = function SnsButtons() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-632541468" + " " + "sns-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(_SnsButton__WEBPACK_IMPORTED_MODULE_2__["SnsButton"], {
    icon: ['fab', 'twitter'],
    color: "#1da1f2",
    background: "white",
    href: "https://twitter.com/hota1024",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx(_SnsButton__WEBPACK_IMPORTED_MODULE_2__["SnsButton"], {
    icon: ['fab', 'github'],
    color: "#24292E",
    background: "white",
    href: "https://github.com/hota1024",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx(_SnsButton__WEBPACK_IMPORTED_MODULE_2__["SnsButton"], {
    icon: ['fab', 'youtube'],
    color: "#FF0000",
    background: "white",
    href: "https://www.youtube.com/channel/UCB2Nqti-QsC-pf09_xsypkQ?view_as=subscriber",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx(_SnsButton__WEBPACK_IMPORTED_MODULE_2__["SnsButton"], {
    icon: ['fas', 'pen'],
    color: "#404040",
    background: "white",
    href: "https://qiita.com/hota1024",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx(_SnsButton__WEBPACK_IMPORTED_MODULE_2__["SnsButton"], {
    icon: ['fas', 'cat'],
    color: "#F9A739",
    background: "white",
    href: "https://scratch.mit.edu/users/hota1024/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(_SnsButton__WEBPACK_IMPORTED_MODULE_2__["SnsButton"], {
    icon: ['fab', 'speaker-deck'],
    color: "#009287",
    background: "white",
    href: "https://speakerdeck.com/hota1024",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "632541468",
    __self: _this
  }, ".sns-buttons.jsx-632541468{position:absolute;bottom:6vh;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL1Nuc0J1dHRvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDa0IsQUFJNkIsa0JBQ1AsV0FDQSxXQUNFLDBFQUNVLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvaG90YWthL0Rlc2t0b3AvR2l0aHViL2hvdGExMDI0L3BvcnRmb2xpby9zcmMvY29tcG9uZW50cy9TbnNCdXR0b25zLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNuc0J1dHRvbiB9IGZyb20gJy4vU25zQnV0dG9uJ1xuXG5leHBvcnQgY29uc3QgU25zQnV0dG9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbnMtYnV0dG9uc1wiPlxuICAgICAgICA8U25zQnV0dG9uXG4gICAgICAgICAgaWNvbj17WydmYWInLCAndHdpdHRlciddfVxuICAgICAgICAgIGNvbG9yPVwiIzFkYTFmMlwiXG4gICAgICAgICAgYmFja2dyb3VuZD1cIndoaXRlXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9ob3RhMTAyNFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTbnNCdXR0b25cbiAgICAgICAgICBpY29uPXtbJ2ZhYicsICdnaXRodWInXX1cbiAgICAgICAgICBjb2xvcj1cIiMyNDI5MkVcIlxuICAgICAgICAgIGJhY2tncm91bmQ9XCJ3aGl0ZVwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ob3RhMTAyNFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTbnNCdXR0b25cbiAgICAgICAgICBpY29uPXtbJ2ZhYicsICd5b3V0dWJlJ119XG4gICAgICAgICAgY29sb3I9XCIjRkYwMDAwXCJcbiAgICAgICAgICBiYWNrZ3JvdW5kPVwid2hpdGVcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDQjJOcXRpLVFzQy1wZjA5X3hzeXBrUT92aWV3X2FzPXN1YnNjcmliZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8U25zQnV0dG9uXG4gICAgICAgICAgaWNvbj17WydmYXMnLCAncGVuJ119XG4gICAgICAgICAgY29sb3I9XCIjNDA0MDQwXCJcbiAgICAgICAgICBiYWNrZ3JvdW5kPVwid2hpdGVcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3FpaXRhLmNvbS9ob3RhMTAyNFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTbnNCdXR0b25cbiAgICAgICAgICBpY29uPXtbJ2ZhcycsICdjYXQnXX1cbiAgICAgICAgICBjb2xvcj1cIiNGOUE3MzlcIlxuICAgICAgICAgIGJhY2tncm91bmQ9XCJ3aGl0ZVwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vc2NyYXRjaC5taXQuZWR1L3VzZXJzL2hvdGExMDI0L1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxTbnNCdXR0b25cbiAgICAgICAgICBpY29uPXtbJ2ZhYicsICdzcGVha2VyLWRlY2snXX1cbiAgICAgICAgICBjb2xvcj1cIiMwMDkyODdcIlxuICAgICAgICAgIGJhY2tncm91bmQ9XCJ3aGl0ZVwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3BlYWtlcmRlY2suY29tL2hvdGExMDI0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zbnMtYnV0dG9ucyB7XG4gICAgICAgICAgLyogbWFyZ2luLXRvcDogMzJweDsgKi9cbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiA2dmg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/SnsButtons.tsx */"));
};

/***/ }),

/***/ "./src/components/Timeline.tsx":
/*!*************************************!*\
  !*** ./src/components/Timeline.tsx ***!
  \*************************************/
/*! exports provided: Timeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TimelineItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TimelineItem */ "./src/components/TimelineItem.tsx");


var _this = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/Timeline.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var Timeline = function Timeline(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3696163063" + " " + "timeline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, props.items.map(function (item, index) {
    return __jsx(_TimelineItem__WEBPACK_IMPORTED_MODULE_3__["TimelineItem"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index,
      pos: index % 2 === 0 ? 'left' : 'right',
      date: "",
      content: ""
    }, item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3696163063",
    __self: _this
  }, "*.jsx-3696163063{box-sizing:border-box;}.timeline.jsx-3696163063{position:relative;max-width:1200px;margin:0 auto;}.timeline.jsx-3696163063::after{content:'';position:absolute;width:6px;background-color:white;top:0;bottom:0;left:50%;margin-left:-3px;}@media screen and (max-width:600px){.timeline.jsx-3696163063::after{left:31px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmtCLEFBR2lDLEFBSUosQUFNUCxBQVlDLFVBQ1osQ0Faa0IsT0FORCxJQUpuQixPQVdZLE1BTkksSUFPUyxVQU56QixhQU9RLE1BQ0csU0FDQSxTQUNRLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvaG90YWthL0Rlc2t0b3AvR2l0aHViL2hvdGExMDI0L3BvcnRmb2xpby9zcmMvY29tcG9uZW50cy9UaW1lbGluZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lbGluZUl0ZW1Qcm9wcywgVGltZWxpbmVJdGVtIH0gZnJvbSAnLi9UaW1lbGluZUl0ZW0nXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgdHlwZSBUaW1lbGluZVByb3BzID0ge1xuICBpdGVtczogUGFydGlhbDxUaW1lbGluZUl0ZW1Qcm9wcz5bXVxufVxuXG5leHBvcnQgY29uc3QgVGltZWxpbmU6IEZDPFRpbWVsaW5lUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmVcIj5cbiAgICAgICAge3Byb3BzLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8VGltZWxpbmVJdGVtXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgcG9zPXtpbmRleCAlIDIgPT09IDAgPyAnbGVmdCcgOiAncmlnaHQnfVxuICAgICAgICAgICAgZGF0ZT1cIlwiXG4gICAgICAgICAgICBjb250ZW50PVwiXCJcbiAgICAgICAgICAgIHsuLi5pdGVtfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lbGluZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWVsaW5lOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC50aW1lbGluZTo6YWZ0ZXIge1xuICAgICAgICAgICAgbGVmdDogMzFweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/Timeline.tsx */"));
};

/***/ }),

/***/ "./src/components/TimelineItem.tsx":
/*!*****************************************!*\
  !*** ./src/components/TimelineItem.tsx ***!
  \*****************************************/
/*! exports provided: TimelineItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineItem", function() { return TimelineItem; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _this = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/TimelineItem.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var TimelineItem = function TimelineItem(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1705018617" + " " + (Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('timeline-item', props.pos) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1705018617" + " " + "timeline-item-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-1705018617",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, props.date), __jsx("p", {
    className: "jsx-1705018617",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, props.content))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1705018617",
    __self: _this
  }, "*.jsx-1705018617{box-sizing:border-box;}.timeline-item.jsx-1705018617{padding:10px 40px;position:relative;background-color:inherit;width:50%;}.timeline-item.jsx-1705018617::after{content:'';position:absolute;width:25px;height:25px;right:-17px;background-color:white;border:4px solid #d0e8d0;top:15px;border-radius:50%;z-index:1;}.left.jsx-1705018617{left:0;}.right.jsx-1705018617{left:50%;}.left.jsx-1705018617::before{content:' ';height:0;position:absolute;top:22px;width:0;z-index:1;right:30px;border:medium solid white;border-width:10px 0 10px 10px;border-color:transparent transparent transparent white;}.right.jsx-1705018617::before{content:' ';height:0;position:absolute;top:22px;width:0;z-index:1;left:30px;border:medium solid white;border-width:10px 10px 10px 0;border-color:transparent white transparent transparent;}.right.jsx-1705018617::after{left:-16px;}.timeline-item-content.jsx-1705018617{padding:20px 30px;background-color:white;position:relative;border-radius:3px;}@media screen and (max-width:600px){.timeline-item.jsx-1705018617{width:100%;padding-left:70px;padding-right:25px;}.timeline-item.jsx-1705018617::before{left:60px;border:medium solid white;border-width:10px 10px 10px 0;border-color:transparent white transparent transparent;}.left.jsx-1705018617::after,.right.jsx-1705018617::after{left:15px;}.right.jsx-1705018617{left:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lSXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUdpQyxBQUlKLEFBT1AsQUFhSixBQUlFLEFBSUcsQUFhQSxBQWFELEFBSU8sQUFRTCxBQU1ELEFBUUEsQUFJRixPQS9EWixDQWdFRSxDQTVERixDQWdEOEIsQUFRNUIsQ0F6RWtCLEFBK0NwQixBQVlzQixDQXRDWCxBQWFBLE1BekNTLEFBMERLLEdBN0JMLEFBYUEsQ0E5Q3BCLE9BWWEsQUEyRFUsT0FsRUksQUF3RU8sR0EzQ3ZCLEFBYUEsQ0FsQ0csQ0FrRE0sT0E1QlYsQUFhQSxBQXdCUixJQTFEWSxJQXNCRixBQWFBLEdBZVEsRUExRFIsR0FTYSxFQXNCWixBQWFELEFBNEIrQyxLQXZFM0QsS0E0QzRCLENBYkEsQUEyQjVCLFVBakQyQixlQW9DSyxDQWJBLFNBdEJyQixTQUNTLEFBNkRsQixXQTFCdUQsQ0FiQSxNQXJCN0MsVUFDWixzQ0FrQ0EsQ0FiQSIsImZpbGUiOiIvVXNlcnMvaG90YWthL0Rlc2t0b3AvR2l0aHViL2hvdGExMDI0L3BvcnRmb2xpby9zcmMvY29tcG9uZW50cy9UaW1lbGluZUl0ZW0udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5cbmV4cG9ydCB0eXBlIFRpbWVsaW5lSXRlbVByb3BzID0ge1xuICBkYXRlOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIHBvczogJ2xlZnQnIHwgJ3JpZ2h0J1xufVxuXG5leHBvcnQgY29uc3QgVGltZWxpbmVJdGVtOiBGQzxUaW1lbGluZUl0ZW1Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ3RpbWVsaW5lLWl0ZW0nLCBwcm9wcy5wb3MpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICA8aDI+e3Byb3BzLmRhdGV9PC9oMj5cbiAgICAgICAgICA8cD57cHJvcHMuY29udGVudH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lbGluZS1pdGVtIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lbGluZS1pdGVtOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICByaWdodDogLTE3cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgI2QwZThkMDtcbiAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAubGVmdCB7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxlZnQ6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAyMnB4O1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyOiBtZWRpdW0gc29saWQgd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxMHB4O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHQ6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAyMnB4O1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDA7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodDo6YWZ0ZXIge1xuICAgICAgICAgIGxlZnQ6IC0xNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWVsaW5lLWl0ZW0tY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC50aW1lbGluZS1pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGltZWxpbmUtaXRlbTo6YmVmb3JlIHtcbiAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxlZnQ6OmFmdGVyLFxuICAgICAgICAgIC5yaWdodDo6YWZ0ZXIge1xuICAgICAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/TimelineItem.tsx */"));
};

/***/ }),

/***/ "./src/components/WorkCard.tsx":
/*!*************************************!*\
  !*** ./src/components/WorkCard.tsx ***!
  \*************************************/
/*! exports provided: WorkCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkCard", function() { return WorkCard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/WorkCard.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
var WorkCard = function WorkCard(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("a", {
    href: props.href,
    target: "__blank",
    onTouchStart: function onTouchStart() {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["540970088", [props.background]]]) + " " + "work-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["540970088", [props.background]]]) + " " + "work-image-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.image,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["540970088", [props.background]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["540970088", [props.background]]]) + " " + "work-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("h5", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["540970088", [props.background]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, props.name), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["540970088", [props.background]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, props.description))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "540970088",
    dynamic: [props.background],
    __self: _this
  }, ".work-card.__jsx-style-dynamic-selector{width:256px;height:256px;display:grid;position:relative;overflow:hidden;border-radius:3px;box-shadow:0 0 16px rgba(0,0,0,0.2);}img.__jsx-style-dynamic-selector{object-fit:contain;width:100%;height:100%;-webkit-transition:160ms;transition:160ms;}.work-card.__jsx-style-dynamic-selector:hover img.__jsx-style-dynamic-selector{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.work-card.__jsx-style-dynamic-selector:hover .work-content.__jsx-style-dynamic-selector{opacity:1;}.work-image-wrap.__jsx-style-dynamic-selector{width:100%;height:100%;background:".concat(props.background, ";position:absolute;}.work-content.__jsx-style-dynamic-selector{opacity:0;width:100%;height:100%;position:absolute;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:160ms;transition:160ms;background:rgba(0,0,0,0.8);}.work-content.__jsx-style-dynamic-selector h5.__jsx-style-dynamic-selector{font-size:1.5rem;margin-bottom:8px;border-bottom:solid 4px white;}.work-content.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{width:90%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL1dvcmtDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmtCLEFBR3VCLEFBVU8sQUFPRSxBQUlYLEFBSUMsQUFPRCxBQWNPLEFBTVAsVUE5QlosQUFXYSxBQW9CYixDQTNCYyxDQXpCQyxLQThDSyxFQXBDUCxFQXVCQyxFQVA0QixFQXpCM0IsS0FVRCxHQXVCTSxFQWFZLEdBN0NaLElBVUQsU0F1QkwsS0FoQ0ksT0F3QkUsQUFTTCxFQVlmLE9BNUNvQixHQWFwQixNQVdBLEdBZkEsTUFSeUMsb0NBQ3pDLFdBK0J3Qiw4RUFDQyxtR0FDSiw2RkFDRiwwQ0FDYSwyQkFDaEMiLCJmaWxlIjoiL1VzZXJzL2hvdGFrYS9EZXNrdG9wL0dpdGh1Yi9ob3RhMTAyNC9wb3J0Zm9saW8vc3JjL2NvbXBvbmVudHMvV29ya0NhcmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IHR5cGUgV29ya0NhcmRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgaW1hZ2U6IHN0cmluZ1xuICBocmVmOiBzdHJpbmdcbiAgYmFja2dyb3VuZDogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBXb3JrQ2FyZDogRkM8V29ya0NhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGFcbiAgICAgICAgaHJlZj17cHJvcHMuaHJlZn1cbiAgICAgICAgY2xhc3NOYW1lPVwid29yay1jYXJkXCJcbiAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgIG9uVG91Y2hTdGFydD17KCkgPT4ge319XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay1pbWFnZS13cmFwXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfT48L2ltZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay1jb250ZW50XCI+XG4gICAgICAgICAgPGg1Pntwcm9wcy5uYW1lfTwvaDU+XG4gICAgICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndvcmstY2FyZCB7XG4gICAgICAgICAgd2lkdGg6IDI1NnB4O1xuICAgICAgICAgIGhlaWdodDogMjU2cHg7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAxNjBtcztcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3JrLWNhcmQ6aG92ZXIgaW1nIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIH1cblxuICAgICAgICAud29yay1jYXJkOmhvdmVyIC53b3JrLWNvbnRlbnQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAud29yay1pbWFnZS13cmFwIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtwcm9wcy5iYWNrZ3JvdW5kfTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cblxuICAgICAgICAud29yay1jb250ZW50IHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IDE2MG1zO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3JrLWNvbnRlbnQgaDUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAud29yay1jb250ZW50IHAge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/components/WorkCard.tsx */")));
};

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HomeBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HomeBackground */ "./src/components/HomeBackground.tsx");
/* harmony import */ var _components_MySkills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MySkills */ "./src/components/MySkills.tsx");
/* harmony import */ var _components_MyDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyDetail */ "./src/components/MyDetail.tsx");
/* harmony import */ var _components_SnsButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SnsButtons */ "./src/components/SnsButtons.tsx");
/* harmony import */ var _components_MyWorks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyWorks */ "./src/components/MyWorks.tsx");
/* harmony import */ var _components_MyHistory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyHistory */ "./src/components/MyHistory.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.tsx");
var _this = undefined,
    _jsxFileName = "/Users/hotaka/Desktop/Github/hota1024/portfolio/src/pages/index.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Home = function Home() {
  return __jsx("div", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "hota1024"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
    rel: "stylesheet",
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3422690608" + " " + "background-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_components_HomeBackground__WEBPACK_IMPORTED_MODULE_3__["HomeBackground"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3422690608" + " " + "content-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3422690608" + " " + "container text-center section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("h1", {
    id: "my-name",
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "hota1024"), __jsx("div", {
    id: "my-description",
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Game and WebApp Creator"), __jsx(_components_SnsButtons__WEBPACK_IMPORTED_MODULE_6__["SnsButtons"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-3422690608" + " " + "container text-center section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "About me"), __jsx("div", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/hota1024.png",
    width: "128",
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-3422690608" + " " + "self-introduction-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "hota1024/\u7D0D\u672C\u7A42\u9AD8"), __jsx("p", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "\u30B2\u30FC\u30E0\u958B\u767A\u3068\u30A2\u30D7\u30EA\u958B\u767A\u304C\u597D\u304D\u306A\u9AD8\u6821\u751F\u3067\u3059\u3002"), __jsx("p", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, "\u9759\u5CA1\u770C\u306B\u4F4F\u3093\u3067\u3044\u3066\u3001CoderDojo\u9759\u5CA1\u3068\u3044\u3046\u5834\u6240\u3067\u30E6\u30FC\u30B9\u30E1\u30F3\u30BF\u30FC\u3068\u3057\u3066\u5B50\u3069\u3082\u305F\u3061\u306B\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3092\u6559\u3048\u3066\u3044\u307E\u3059\u3002")), __jsx("div", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_components_MyDetail__WEBPACK_IMPORTED_MODULE_5__["MyDetail"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "jsx-3422690608" + " " + "container text-center section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Works"), __jsx(_components_MyWorks__WEBPACK_IMPORTED_MODULE_7__["MyWorks"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-3422690608" + " " + "container text-center section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Skills"), __jsx("p", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u8A73\u7D30\u304C\u898B\u308C\u307E\u3059\u3002"), __jsx(_components_MySkills__WEBPACK_IMPORTED_MODULE_4__["MySkills"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-3422690608" + " " + "container text-center section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "History"), __jsx(_components_MyHistory__WEBPACK_IMPORTED_MODULE_8__["MyHistory"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-3422690608" + " " + "container text-center section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Contact"), __jsx("p", {
    className: "jsx-3422690608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "\u3054\u9023\u7D61\u306FTwitter\u306EDM\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    background: "#68C0F6",
    color: "white",
    href: "https://twitter.com/hota1024",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Twitter\u3078")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3422690608",
    __self: _this
  }, "html,body{padding:0;margin:0;color:#303030;font-family:'Roboto',sans-serif;}.self-introduction-content{max-width:500;padding:1em;font-weight:600;}.background-wrap{background:#eeeeee;-webkit-transition:all 500ms;transition:all 500ms;position:fixed;z-index:-1;}.content-wrap{z-index:1;}.text-center{text-align:center;}.section{min-height:100vh;margin:0;}#my-name{font-size:3rem;margin-bottom:6px;}#my-description{font-size:1.1rem;}.container{display:grid;width:100%;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3Rha2EvRGVza3RvcC9HaXRodWIvaG90YTEwMjQvcG9ydGZvbGlvL3NyYy9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEV5QixBQUlxQixBQU9JLEFBTUssQUFPVCxBQUlRLEFBSUQsQUFLRixBQUtFLEFBSUosVUF6Q0osQUFvQlgsR0FzQmEsQ0FuQ0MsQ0EwQk0sRUFMVCxBQVVYLENBZEEsQ0F2QmdCLEFBWU8sS0E4QlQsRUFuQ0ksQUFxQmxCLE9BM0JtQyxBQWdDbkMsR0FVeUIsTUFuQ3pCLHVCQU5BLElBV2lCLGVBQ0osV0FDYix3Q0E2QnVCLDRFQUN2QiIsImZpbGUiOiIvVXNlcnMvaG90YWthL0Rlc2t0b3AvR2l0aHViL2hvdGExMDI0L3BvcnRmb2xpby9zcmMvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgSG9tZUJhY2tncm91bmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVCYWNrZ3JvdW5kJ1xuaW1wb3J0IHsgTXlTa2lsbHMgfSBmcm9tICcuLi9jb21wb25lbnRzL015U2tpbGxzJ1xuaW1wb3J0IHsgTXlEZXRhaWwgfSBmcm9tICcuLi9jb21wb25lbnRzL015RGV0YWlsJ1xuaW1wb3J0IHsgU25zQnV0dG9ucyB9IGZyb20gJy4uL2NvbXBvbmVudHMvU25zQnV0dG9ucydcbmltcG9ydCB7IE15V29ya3MgfSBmcm9tICcuLi9jb21wb25lbnRzL015V29ya3MnXG5pbXBvcnQgeyBNeUhpc3RvcnkgfSBmcm9tICcuLi9jb21wb25lbnRzL015SGlzdG9yeSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJ1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPmhvdGExMDI0PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLXdyYXBcIj5cbiAgICAgICAgICA8SG9tZUJhY2tncm91bmQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXIgc2VjdGlvblwiPlxuICAgICAgICAgICAgPGgxIGlkPVwibXktbmFtZVwiPmhvdGExMDI0PC9oMT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJteS1kZXNjcmlwdGlvblwiPkdhbWUgYW5kIFdlYkFwcCBDcmVhdG9yPC9kaXY+XG4gICAgICAgICAgICA8U25zQnV0dG9ucyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIHNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMj5BYm91dCBtZTwvaDI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9ob3RhMTAyNC5wbmdcIiB3aWR0aD1cIjEyOFwiPjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGYtaW50cm9kdWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGgyPmhvdGExMDI0L+e0jeacrOepgumrmDwvaDI+XG4gICAgICAgICAgICAgIDxwPuOCsuODvOODoOmWi+eZuuOBqOOCouODl+ODqumWi+eZuuOBjOWlveOBjeOBqumrmOagoeeUn+OBp+OBmeOAgjwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAg6Z2Z5bKh55yM44Gr5L2P44KT44Gn44GE44Gm44CBQ29kZXJEb2pv6Z2Z5bKh44Go44GE44GG5aC05omA44Gn44Om44O844K544Oh44Oz44K/44O844Go44GX44Gm5a2Q44Gp44KC44Gf44Gh44Gr44OX44Ot44Kw44Op44Of44Oz44Kw44KS5pWZ44GI44Gm44GE44G+44GZ44CCXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPE15RGV0YWlsIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlciBzZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDI+V29ya3M8L2gyPlxuICAgICAgICAgICAgPE15V29ya3MgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlciBzZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDI+U2tpbGxzPC9oMj5cbiAgICAgICAgICAgIDxwPuOCr+ODquODg+OCr+OBmeOCi+OBqOips+e0sOOBjOimi+OCjOOBvuOBmeOAgjwvcD5cbiAgICAgICAgICAgIDxNeVNraWxscyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIHNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMj5IaXN0b3J5PC9oMj5cbiAgICAgICAgICAgIDxNeUhpc3RvcnkgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlciBzZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDI+Q29udGFjdDwvaDI+XG4gICAgICAgICAgICA8cD7jgZTpgKPntaHjga9Ud2l0dGVy44GuRE3jgafjgYrpoZjjgYTjgZfjgb7jgZnjgII8L3A+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ9XCIjNjhDMEY2XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2hvdGExMDI0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVHdpdHRlcuOBuFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogIzMwMzAzMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZi1pbnRyb2R1Y3Rpb24tY29udGVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDA7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFja2dyb3VuZC13cmFwIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcztcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC13cmFwIHtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQtY2VudGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VjdGlvbiB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgI215LW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjbXktZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/hotaka/Desktop/Github/hota1024/portfolio/src/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 1:
/*!******************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fhotaka%2FDesktop%2FGithub%2Fhota1024%2Fportfolio%2Fsrc%2Fpages%2Findex.tsx ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fhotaka%2FDesktop%2FGithub%2Fhota1024%2Fportfolio%2Fsrc%2Fpages%2Findex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fhotaka%2FDesktop%2FGithub%2Fhota1024%2Fportfolio%2Fsrc%2Fpages%2Findex.tsx!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map