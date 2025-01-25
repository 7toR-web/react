"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const App_module_css_1 = __importDefault(require("./App.module.css"));
const additionalTasks_1 = require("./additionalTasks");
const additionalTasks_2 = require("./additionalTasks");
const index_1 = require("./additionalTasks/index");
const additionalTasks_3 = require("./additionalTasks");
const additionalTasks_4 = require("./additionalTasks");
const additionalTasks_5 = require("./additionalTasks");
const additionalTasks_6 = require("./additionalTasks");
const additionalTasks_7 = require("./additionalTasks");
const additionalTasks_8 = require("./additionalTasks");
const additionalTasks_9 = require("./additionalTasks");
const additionalTasks_10 = require("./additionalTasks");
const parent_1 = require("./additionalTasks/advancePropsTasks/parent");
const parent_2 = require("./additionalTasks/advancePropsTasks/parent");
const parent_3 = require("./additionalTasks/advancePropsTasks/parent");
const parent_4 = require("./additionalTasks/advancePropsTasks/parent");
const parent_5 = require("./additionalTasks/advancePropsTasks/parent");
function App() {
    return (<>
            {/* <Profile /> */}
            {/* <FirstText /> */}
            {/* <PackingList /> */}
            {/* <List /> */}
            {/* <ReceipeLists/> */}
            {/* <Separator /> */}
            {/* <Button /> */}
            {/* <AlertButton message='Playing!' children={7} /> */}
            {/* <AlertButton message='Clicked!' children={17} /> */}
            {/* <PlayingButton movieName='Tom and Jery'/> */}
            {/* <UploadButton /> */}
            {/* <Gallery /> */}
            {/* <Form /> */}
            {/* <TraficLight /> */}
            {/* <Counter /> */}
            {/* <ArtMarketPlace /> */}
            {/* <StateTypes /> */}
            {/* <StateForm /> */}
            {/* <List /> */}
            {/* <FilterList /> */}
            {/* <ShapeEditor /> <br /> */}
            {/* <Counter /> */}
            {/* <ReverseList /> */}
            <additionalTasks_1.ClickCounter />
            <br />
            <br />
            <additionalTasks_2.ToDoList />
            <index_1.WorkForm />
            <div className={App_module_css_1.default.calendar}>
                {Array.from({ length: 31 }).map((item, index) => {
            return <div key={index}>{index + 1}</div>;
        })}
            </div>
            <div className={App_module_css_1.default.try}>
                <div className={App_module_css_1.default.header}>Header</div>
                <div className={App_module_css_1.default.navigation}>Navigation</div>
                <div className={App_module_css_1.default.content}>Content</div>
                <div className={App_module_css_1.default.ads}>Ads</div>
                <div className={App_module_css_1.default.footer}>Footer</div>
            </div>
            <div className={App_module_css_1.default.firstLoyaut}>
                <div className={App_module_css_1.default.firstHeader}>Header</div>
                <div className={App_module_css_1.default.firstSideBar}>SideBar</div>
                <div className={App_module_css_1.default.firstMain}>Main</div>
            </div>
            <div className={App_module_css_1.default.alignment}>
                <div>1</div>
                <div>2</div>
            </div>
            <additionalTasks_3.SimpleTimer />
            <additionalTasks_4.StateCounter />
            <additionalTasks_5.StateFormUpdate />
            <additionalTasks_6.Groceries />
            <additionalTasks_7.UserList users={[
            { id: 54, name: 'Kostya', email: 'kostya5270@gmail.com' },
            { id: 65, name: 'Yana', email: 'yana5393@gmail.com' },
        ]}/>
            <additionalTasks_8.Rating score={6} max={5}/>
            <additionalTasks_9.ThemeSwitcher theme='light'/>
            <additionalTasks_10.CounterUsingProps counter={10} step={5}/>
            <parent_1.MainComponent />
            <parent_2.ToDoListUsingProps items={[
            { name: 'Milk', id: 1 },
            { name: 'Bread', id: 2 },
            { name: 'Cheese', id: 3 },
        ]}/>
            <parent_3.LikeButton counter={23143} handleLikeClick={prev => prev + 1}/>
            <parent_4.UserProfile user={{
            name: 'Kostya',
            age: 25,
            bio: 'I am a developer',
            avatarUrl: 'https://avatars.githubusercontent.com/u/74969560?v=4',
        }}/>
            <parent_5.ColorPallete className={App_module_css_1.default.colorPallete} colors={['#FF5733', '#33FF57', '#3357FF']}/>
        </>);
}
exports.default = App;
