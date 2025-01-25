"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadButton = exports.PlayingButton = exports.AlertButton = exports.Button = void 0;
const react_1 = __importDefault(require("react"));
// Button Component
const Button = () => {
    const handleClick = (e) => {
        console.log(e.target);
    };
    return <button onClick={handleClick}>I don't do anything</button>;
};
exports.Button = Button;
const AlertButton = ({ message, children }) => {
    return <button onClick={() => alert(message)}>{children}</button>;
};
exports.AlertButton = AlertButton;
const ButtonConstructor = ({ onclick, children }) => {
    return <button onClick={onclick}>{children}</button>;
};
const PlayingButton = ({ movieName }) => {
    const handleClick = () => {
        alert(`Playing ${movieName}`);
    };
    return <ButtonConstructor onclick={handleClick} children='Playing'/>;
};
exports.PlayingButton = PlayingButton;
const UploadButton = () => {
    return (<ButtonConstructor onclick={() => alert(`Uploading`)} children='Upload Image'/>);
};
exports.UploadButton = UploadButton;
