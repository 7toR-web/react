"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstText = FirstText;
const component_module_css_1 = __importDefault(require("./component.module.css"));
function FirstText() {
    return (<>
            <h1 className={component_module_css_1.default.myFirst}>My first Component</h1>
        </>);
}
