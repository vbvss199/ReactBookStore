"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
exports.__esModule = true;
exports.removeItemsFromCart = exports.placeOrder = exports.addToCart = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    itemNumber: 0,
    numOfItems: 0,
    price: 0,
    id: [],
    orders: []
};
var cartSlice = (0, toolkit_1.createSlice)({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: function (state, action) {
            state.numOfItems += 1;
            state.price += action.payload.price;
            state.id.push(action.payload.bookNumber);
        },
        placeOrder: function (state, action) {
            state.orders = __spreadArray(__spreadArray([], state.orders, true), state.id, true);
            state.id = [];
            state.price = 0;
            state.numOfItems = 0;
        },
        removeItemsFromCart: function (state, action) {
            state.id = [];
            state.price = 0;
            state.numOfItems = 0;
        }
    }
});
exports["default"] = cartSlice.reducer;
exports.addToCart = (_a = cartSlice.actions, _a.addToCart), exports.placeOrder = _a.placeOrder, exports.removeItemsFromCart = _a.removeItemsFromCart;
