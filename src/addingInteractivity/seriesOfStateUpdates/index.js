"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtMarketPlace = exports.Counter = void 0;
const series_module_css_1 = __importDefault(require("./series.module.css"));
const react_1 = require("react");
const Counter = () => {
    const [number, setNumber] = (0, react_1.useState)(0);
    return (<>
            <h2 className={series_module_css_1.default.number}>{number}</h2>{' '}
            <button className={series_module_css_1.default.counterButton} onClick={() => {
            setNumber(n => n + 1);
            setNumber(n => n + 1);
            setNumber(n => n + 1);
        }}>
                +3
            </button>
        </>);
};
exports.Counter = Counter;
const ArtMarketPlace = () => {
    const [completed, setCompletedCounter] = (0, react_1.useState)(0);
    const [pendingCounter, setPendingCounter] = (0, react_1.useState)(0);
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const handleClick = (e) => __awaiter(void 0, void 0, void 0, function* () {
        setPendingCounter(pendingCounter => pendingCounter + 1);
        yield delay(3000);
        setPendingCounter(pendingCounter => pendingCounter - 1);
        setCompletedCounter(completed => completed + 1);
    });
    return (<>
            <h3>Pending: {pendingCounter}</h3>
            <h3>Completed: {completed}</h3>
            <button onClick={handleClick}>Buy</button>
        </>);
};
exports.ArtMarketPlace = ArtMarketPlace;
