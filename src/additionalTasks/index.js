"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterUsingProps = exports.ThemeSwitcher = exports.Rating = exports.UserList = exports.Groceries = exports.StateFormUpdate = exports.StateCounter = exports.SimpleTimer = exports.WorkForm = exports.ToDoList = exports.ClickCounter = void 0;
const additionalTasks_module_css_1 = __importDefault(require("./additionalTasks.module.css"));
const react_1 = require("react");
const uuid_1 = require("uuid");
const ClickCounter = () => {
    const [counter, setCounter] = (0, react_1.useState)(0);
    const handleClick = (e) => {
        setCounter(counter + 1);
        // console.log(e.target)
    };
    return (<>
            <p>Clicks: {counter}</p>
            <button onClick={handleClick}>Click me</button>
        </>);
};
exports.ClickCounter = ClickCounter;
//
const ToDoList = () => {
    const [inputText, setInputText] = (0, react_1.useState)('');
    const [thingsToDo, setThingsToDo] = (0, react_1.useState)([]);
    const handleDeleteClick = (id) => {
        const newThingsToDo = thingsToDo.filter(item => {
            return item.id !== id;
        });
        setThingsToDo(newThingsToDo);
    };
    const handleInputChanges = (e) => {
        setInputText(e.target.value);
    };
    const handleSaveClick = () => {
        if (inputText) {
            setThingsToDo([...thingsToDo, { id: Date.now(), text: inputText }]);
            setInputText('');
        }
        return;
    };
    const handleReverseClick = () => {
        const newThingsToDo = [...thingsToDo].reverse();
        setThingsToDo(newThingsToDo);
    };
    return (<>
            <input onChange={handleInputChanges} value={inputText} placeholder='write a task'></input>
            <button onClick={handleSaveClick}>Save It</button>
            {thingsToDo.length > 0 && (<button onClick={handleReverseClick}>Reverse</button>)}
            <ul>
                {thingsToDo.map((item, index) => {
            return (<li style={{ margin: '10px' }} key={item.id}>
                            {item.text}
                            <button style={{ margin: '0 0 0 10px' }} onClick={() => handleDeleteClick(item.id)}>
                                Delete
                            </button>
                        </li>);
        })}
            </ul>
        </>);
};
exports.ToDoList = ToDoList;
const WorkForm = () => {
    const [isSaved, setIsSaved] = (0, react_1.useState)(false);
    const [person, setPerson] = (0, react_1.useState)({
        name: '',
        email: '',
    });
    const handleNameChanges = (e) => {
        setPerson(Object.assign(Object.assign({}, person), { name: e.target.value }));
    };
    const handleEmailChanges = (e) => {
        setPerson(Object.assign(Object.assign({}, person), { email: e.target.value }));
    };
    const handleSaveClick = (e) => {
        if (person.name.length &&
            person.email.length &&
            person.email.includes('@gmail.com')) {
            setIsSaved(true);
            console.log(`Name: ${person.name}(${person.email})`);
        }
        else {
            alert('Enter valid data!');
        }
    };
    const handleMakeChanges = (e) => {
        setIsSaved(false);
    };
    return (<>
            <input className={additionalTasks_module_css_1.default.name} placeholder={'Enter your Name'} onChange={handleNameChanges} value={person.name} readOnly={isSaved}></input>
            <input className={additionalTasks_module_css_1.default.email} placeholder={'Enter your Email'} onChange={handleEmailChanges} value={person.email} readOnly={isSaved}></input>
            <button className={additionalTasks_module_css_1.default.saveButton} onClick={handleSaveClick}>
                Save
            </button>
            <button className={additionalTasks_module_css_1.default.makeChanges} onClick={handleMakeChanges}>
                Change
            </button>
            {isSaved && (<p>
                    Name: {person.name}({person.email})
                </p>)}
        </>);
};
exports.WorkForm = WorkForm;
const SimpleTimer = () => {
    const [time, setTime] = (0, react_1.useState)(0);
    const [intervalId, setIntervalId] = (0, react_1.useState)(null);
    const handleStartClick = () => {
        if (intervalId === null) {
            const interval = window.setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
            setIntervalId(interval);
        }
    };
    const handleStopClick = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };
    const handleResetClick = () => {
        setTime(0);
    };
    return (<>
            <p>Time: {time}</p>
            <button onClick={handleStartClick} style={{ margin: '10px' }}>
                Start
            </button>
            <button onClick={handleStopClick} style={{ margin: '10px' }}>
                Stop
            </button>
            <button onClick={handleResetClick} style={{ margin: '10px' }}>
                Reset
            </button>
        </>);
};
exports.SimpleTimer = SimpleTimer;
const StateCounter = () => {
    const [gameState, setGameState] = (0, react_1.useState)(0);
    const handleIncrease = () => setGameState(prevState => prevState + 1);
    const handleDecrease = () => setGameState(prevState => prevState - 1);
    const handleRandom = () => {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        setGameState(prevState => prevState + randomNum);
    };
    return (<>
            <p>{gameState}</p>
            <button onClick={handleIncrease} style={{ margin: '10px' }}>
                Increase 1
            </button>
            <button onClick={handleDecrease} style={{ margin: '10px' }}>
                Decrease 1
            </button>
            <button onClick={handleRandom} style={{ margin: '10px' }}>
                Random
            </button>
        </>);
};
exports.StateCounter = StateCounter;
const StateForm = () => {
    const [person, setPerson] = (0, react_1.useState)({
        name: '',
        age: 0,
    });
    return (<>
            <input placeholder='Enter your name' onChange={e => setPerson(Object.assign(Object.assign({}, person), { name: e.target.value }))} value={person.name}/>
            <input placeholder='Enter your age' onChange={e => setPerson(Object.assign(Object.assign({}, person), { age: Number(e.target.value) }))} value={person.age}/>
            <p>
                {person.name} is {person.age} years old
            </p>
        </>);
};
exports.StateFormUpdate = StateForm;
const Groceries = () => {
    const [itemsList, setItemsList] = (0, react_1.useState)([]);
    const [currentItem, setCurrentItem] = (0, react_1.useState)({ name: '', quanity: 0, id: '' });
    const [editingItem, setEditingItem] = (0, react_1.useState)();
    const handleChanges = (id) => {
        var _a;
        (_a = document.getElementById('quanityInput')) === null || _a === void 0 ? void 0 : _a.focus();
        const itemToChange = itemsList.find(item => item.id === id);
        if (itemToChange) {
            setCurrentItem(Object.assign({}, itemToChange));
            setEditingItem(id);
        }
    };
    const handleDelete = (id) => {
        const newItemsList = itemsList.filter(item => item.id !== id);
        setItemsList(newItemsList);
    };
    const handleAddClick = (e) => {
        if (!currentItem.name.trim() || currentItem.quanity <= 0) {
            alert('Enter valid data!');
            return;
        }
        if (editingItem) {
            setItemsList(itemsList.map(item => item.id === editingItem ? Object.assign({}, currentItem) : item));
            setEditingItem(undefined);
        }
        else {
            setItemsList([...itemsList, Object.assign(Object.assign({}, currentItem), { id: (0, uuid_1.v4)() })]);
        }
        setCurrentItem({ name: '', quanity: 0, id: '' });
    };
    const handleCurrentItemName = (e) => {
        setCurrentItem(Object.assign(Object.assign({}, currentItem), { name: e.target.value }));
    };
    const handleCurrentItemQuanity = (e) => {
        setCurrentItem(Object.assign(Object.assign({}, currentItem), { quanity: Number(e.target.value) }));
    };
    return (<>
            <input placeholder='Enter item name' onChange={handleCurrentItemName} value={currentItem.name} id='nameInput'/>
            <input placeholder='Enter item quantity' onChange={handleCurrentItemQuanity} value={currentItem.quanity} id='quanityInput'/>
            <button onClick={handleAddClick} id='addButton'>
                {editingItem ? 'Save' : 'Add'}
            </button>
            <ul>
                {itemsList.map((item, index) => {
            return (<li key={item.id}>
                            {item.name}: {item.quanity}
                            <button style={{ marginLeft: '10px' }} onClick={() => handleChanges(item.id)} id='changeButton'>
                                Change
                            </button>
                            <button style={{ marginLeft: '10px' }} onClick={() => handleDelete(item.id)} id='deleteButton'>
                                Delete
                            </button>
                        </li>);
        })}
            </ul>
        </>);
};
exports.Groceries = Groceries;
const UserList = (props) => {
    const { users } = props;
    return (<ul>
            {users.map(item => {
            return (<li key={item.id}>
                        {item.name}: {item.email}
                    </li>);
        })}
        </ul>);
};
exports.UserList = UserList;
const Rating = (props) => {
    const { score, max } = props;
    return (<div>
            <p>
                {score}/{max}
            </p>
            <p>{score > max ? 'Error rating' : score}</p>
        </div>);
};
exports.Rating = Rating;
const ThemeSwitcher = (props) => {
    const { theme } = props;
    return (<div style={{
            textAlign: 'center',
            width: '200px',
            height: '200px',
            margin: '20px',
            color: 'rgb(255, 255, 255)',
            background: theme === 'dark' ? 'rgb(0, 0, 140)' : 'rgb(255, 0, 220)',
        }}>
            Hello World
        </div>);
};
exports.ThemeSwitcher = ThemeSwitcher;
const CounterUsingProps = (props) => {
    const { counter, step } = props;
    const [stepState, setStep] = (0, react_1.useState)(step);
    return (<>
            <p>{stepState}</p>
            <button onClick={() => setStep(prev => (prev < counter ? prev + 1 : counter))}>
                step + 1
            </button>
            <button onClick={() => setStep(prev => (prev > 0 ? prev - 1 : 0))}>
                step - 1
            </button>
        </>);
};
exports.CounterUsingProps = CounterUsingProps;
