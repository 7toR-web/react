"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraficLight = exports.Form = void 0;
const react_1 = require("react");
const Form = () => {
    const [isSent, setIsSent] = (0, react_1.useState)(false);
    const [message, setMessage] = (0, react_1.useState)(`Hi, `);
    if (isSent) {
        return <h1>Your message is on its way</h1>;
    }
    return (<>
            <form action='' onSubmit={e => {
            e.preventDefault();
            setIsSent(true);
        }}>
                <textarea placeholder='write message' onChange={e => setMessage(e.target.value)} value={message} name='' id=''></textarea>
                <button type='submit'>send</button>
            </form>
        </>);
};
exports.Form = Form;
const TraficLight = () => {
    const [walk, setWalk] = (0, react_1.useState)(true);
    const handleClick = () => {
        setWalk(!walk);
        walk ? alert(`Stop is next`) : alert('Walk is next');
    };
    return (<>
            <button onClick={handleClick}>Change to {walk ? 'stop' : 'walk'}</button>
            <h1 style={{ color: walk ? 'darkgreen' : 'darkred' }}>
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>);
};
exports.TraficLight = TraficLight;
