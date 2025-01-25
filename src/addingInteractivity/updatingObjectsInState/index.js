"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateForm = exports.StateTypes = void 0;
const react_1 = __importStar(require("react"));
const StateTypes = () => {
    // const [x, setX] = useState(0)
    // setX(5)
    const [position, setPosition] = (0, react_1.useState)({
        x: 0,
        y: 0,
    });
    return (<>
            <div onPointerMove={e => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        }} style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
        }}>
                <div style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
        }}/>
            </div>
        </>);
};
exports.StateTypes = StateTypes;
const StateForm = () => {
    const [person, setPerson] = (0, react_1.useState)({
        firstName: '',
        secondName: '',
        email: '',
    });
    const handle1Name = (e) => {
        setPerson(Object.assign(Object.assign({}, person), { firstName: e.target.value }));
    };
    const handle2Name = (e) => {
        // setPerson({
        // ...person,
        // secondName: e.target.value,
        // })
        const objectClone = structuredClone(person);
        objectClone.secondName = e.target.value;
        setPerson(objectClone);
    };
    const handleEmail = (e) => {
        // setPerson({
        //     ...person,
        //     email: e.target.value,
        // })
        const objectCLone = structuredClone(person);
        objectCLone.email = e.target.value;
        setPerson(objectCLone);
    };
    return (<>
            <label>
                First name:
                <input value={person.firstName} onChange={handle1Name}/>
            </label>
            <label>
                Last name:
                <input value={person.secondName} onChange={handle2Name}/>
            </label>
            <label>
                Email:
                <input value={person.email} onChange={handleEmail}/>
            </label>
            <p>
                {person.firstName} {person.secondName} ({person.email})
            </p>
        </>);
};
exports.StateForm = StateForm;
//instead useState() we can use useImmer() with !object!
