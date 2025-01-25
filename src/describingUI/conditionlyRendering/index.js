"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackingList = PackingList;
const condition_module_css_1 = __importDefault(require("./condition.module.css"));
function Item(props) {
    const { name, isPacked } = props;
    return (<li className={condition_module_css_1.default.item}>
            {name}
            {isPacked && ' ✅'}
        </li>);
}
function PackingList() {
    return (<section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item isPacked={true} name='Space suit'/>
                <Item isPacked={true} name='Helmet with a golden leaf'/>
                <Item isPacked={false} name='Photo of Tam'/>
            </ul>
        </section>);
}
