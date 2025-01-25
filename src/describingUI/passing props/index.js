"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = Profile;
const component_module_css_1 = __importDefault(require("./component.module.css"));
function Avatar(props) {
    const { person, size } = props;
    return (<img className={component_module_css_1.default.avatar} src='https://i.imgur.com/1bX5QH6.jpg' alt={person.name} width={size} height={size}/>);
}
function Profile() {
    return (<>
            <Avatar size={100} person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2',
        }}/>
            <Avatar size={80} person={{
            name: 'Aklilu Lemma',
            imageId: 'OKS67lh',
        }}/>
            <Avatar size={50} person={{
            name: 'Lin Lanying',
            imageId: '1bX5QH6',
        }}/>
        </>);
}
