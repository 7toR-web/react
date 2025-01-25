"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultOfJoin = exports.result = exports.LogAlbumInfo = void 0;
function FirstTSComponent(props) {
    const { value } = props;
    return (<>
            <h1>{value}</h1>
        </>);
}
exports.default = FirstTSComponent;
const joberYana = {
    job: {
        // title: 1231                       wrong property type
        title: `TypeScript development`,
    },
    // num: 5
};
const logUserJobTitle = (user) => {
    console.log(user.job.title);
};
logUserJobTitle(joberYana);
// let element = document.getElementById(12)
/**
 * Add two numbers together
 * @example
 * myFunction(1,4)
 * @returns 5
 */
const myFunction = (a, b) => {
    return a + b;
};
// hover to explore what does function do ^^^^^^^
//NEW NOTE
// very useful is running tsx in watching mode >> write tsc --watch << in terminal
//it catchs ur errors while typing
const LogAlbumInfo = (title, trackCount, isReleased) => {
    console.log(title, trackCount, isReleased);
};
exports.LogAlbumInfo = LogAlbumInfo;
let example1 = 'Hello World!';
let example2 = 42;
let example3 = true;
let example4 = Symbol();
// let example5: bigint = 123n
let example6 = null;
let example7 = undefined;
let usersBase = [12, 43, `hello world`, true];
let usersObjectBase = { user_21324: true, user_438882: `baned` };
function SummingUp(a, b) {
    return a + b;
}
exports.result = SummingUp(12322, 327372);
const concatTwoStrings = (a, b) => {
    return [a, b].join(' ');
};
exports.resultOfJoin = concatTwoStrings(`Hello`, `World`);
