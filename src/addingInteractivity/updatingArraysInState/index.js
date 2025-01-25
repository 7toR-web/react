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
exports.Counter = exports.ShapeEditor = exports.FilterList = exports.List = void 0;
exports.default = ReverseList;
exports.ReverseList = ReverseList;
const react_1 = __importStar(require("react"));
let nextId = 0;
const List = () => {
    const [name, setName] = (0, react_1.useState)('');
    const [artists, setArtists] = (0, react_1.useState)([]);
    return (<>
            <h1>Inspiring sculptors:</h1>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => {
            if (artists.some(artist => artist.name === name)) {
                setName('');
                return;
            }
            setArtists([...artists, { id: nextId + 1, name: name }]);
            setName('');
        }}>
                Add
            </button>
            <ul>
                {artists.map(artist => (<li key={artist.id}>{artist.name}</li>))}
            </ul>
        </>);
};
exports.List = List;
let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
];
const FilterList = () => {
    const [artists, setArtists] = (0, react_1.useState)(initialArtists);
    return (<>
            <h1>Inspiring sculptors:</h1>
            <ul>
                {artists.map(artist => (<li key={artist.id}>
                        {artist.name}{' '}
                        <button onClick={e => {
                setArtists(artists.filter(item => item.id !== artist.id));
            }}>
                            Delete
                        </button>
                    </li>))}
            </ul>
        </>);
};
exports.FilterList = FilterList;
let initialShapes = [
    { id: 0, type: 'circle', x: 500, y: 100 },
    { id: 1, type: 'square', x: 650, y: 100 },
    { id: 2, type: 'circle', x: 800, y: 100 },
];
const ShapeEditor = () => {
    const [shapes, setShapes] = (0, react_1.useState)(initialShapes);
    const handleClick = (e) => {
        const nextShapes = shapes.map(item => {
            if (item.type === 'circle') {
                return Object.assign(Object.assign({}, item), { y: item.y + 50 });
            }
            else {
                return item;
            }
        });
        setShapes(nextShapes);
    };
    return (<>
            <button style={{ position: 'absolute', left: '600px', top: '200px' }} onClick={handleClick}>
                Move circles down
            </button>
            {shapes.map(item => {
            return (<div key={item.id} style={{
                    background: 'purple',
                    position: 'absolute',
                    left: item.x,
                    top: item.y,
                    borderRadius: item.type === 'circle' ? '50%' : '',
                    width: 20,
                    height: 20,
                }}></div>);
        })}
        </>);
};
exports.ShapeEditor = ShapeEditor;
let initialCounters = [0, 0, 0];
const Counter = () => {
    const [counters, setCounters] = (0, react_1.useState)(initialCounters);
    const handleClick = (index) => {
        const nextCounter = counters.map((item, i) => {
            if (i === index) {
                return item + 1;
            }
            else {
                return item;
            }
        });
        setCounters(nextCounter);
    };
    return (<ul>
            {counters.map((item, index) => {
            return (<>
                        <li style={{ margin: '20px 10px' }} key={index}>
                            {item}
                            <button onClick={() => handleClick(index)}>
                                +1
                            </button>
                        </li>
                    </>);
        })}
        </ul>);
};
exports.Counter = Counter;
const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
];
function ReverseList() {
    const [list, setList] = (0, react_1.useState)(initialList);
    function handleClick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }
    return (<>
            <button onClick={handleClick}>Reverse</button>
            <ul>
                {list.map(artwork => (<li key={artwork.id}>{artwork.title}</li>))}
            </ul>
        </>);
}
