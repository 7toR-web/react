"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Child = void 0;
const Child = (props) => {
    const { clickHandler } = props;
    return <button onClick={clickHandler}>Random</button>;
};
exports.Child = Child;
