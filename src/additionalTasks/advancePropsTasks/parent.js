"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorPallete = exports.UserProfile = exports.LikeButton = exports.ToDoListUsingProps = exports.MainComponent = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const child_1 = require("./child");
const advanceTasks_module_css_1 = __importDefault(require("./advanceTasks.module.css"));
const MainComponent = () => {
    const [randomNumber, setRandomNumber] = (0, react_2.useState)(0);
    const randomNum = () => {
        let rand = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(rand);
    };
    return (<div style={{ margin: '20px' }}>
            {randomNumber}
            <child_1.Child clickHandler={randomNum}/>
        </div>);
};
exports.MainComponent = MainComponent;
const ToDoListUsingProps = (itemsToDo) => {
    const { items } = itemsToDo;
    return (<ul>
            {items.map((item, _) => (<li key={item.id}>{item.name}</li>))}
        </ul>);
};
exports.ToDoListUsingProps = ToDoListUsingProps;
const LikeButton = (props) => {
    const { counter, handleLikeClick } = props;
    const [currentCounter, setCurrentCounter] = (0, react_2.useState)(counter);
    return (<>
            <p>{currentCounter}</p>
            <button style={{ marginBottom: '20px' }} onClick={() => setCurrentCounter(prev => handleLikeClick(prev))}>
                👍 Like
            </button>
        </>);
};
exports.LikeButton = LikeButton;
const UserProfile = (props) => {
    const { user } = props;
    return (<div className={advanceTasks_module_css_1.default.profile}>
            <p>
                {user === null || user === void 0 ? void 0 : user.name}({user === null || user === void 0 ? void 0 : user.age})
            </p>
            <p>
                {user === null || user === void 0 ? void 0 : user.bio} <br />
                <img src={(user === null || user === void 0 ? void 0 : user.avatarUrl)
            ? user.avatarUrl
            : 'https:footballPictures.com'} alt={`${user === null || user === void 0 ? void 0 : user.name}'s avatar`}/>{' '}
            </p>
        </div>);
};
exports.UserProfile = UserProfile;
const ColorPallete = (props) => {
    const { className = '', colors } = props;
    return (<div className={[advanceTasks_module_css_1.default.colorPallete, className].join(' ').trim()}>
            {colors.map(item => {
            return (<div style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: item,
                }}></div>);
        })}
        </div>);
};
exports.ColorPallete = ColorPallete;
