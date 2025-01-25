"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gallery = void 0;
const react_1 = require("react");
const data_1 = require("./data");
const Gallery = () => {
    const [index, setIndex] = (0, react_1.useState)(0);
    const [showDetail, setShowDetail] = (0, react_1.useState)(false);
    const handleClick = (e) => {
        index < 11 ? setIndex(index + 1) : setIndex(0);
    };
    const handleShowDetailsClick = () => {
        setShowDetail(!showDetail);
    };
    const sculpture = data_1.sculptureList[index];
    return (<>
            <button onClick={handleClick}>Next</button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {data_1.sculptureList.length})
            </h3>
            <button onClick={handleShowDetailsClick}>
                {showDetail ? 'Hide' : 'More'}
            </button>
            <p>{showDetail && sculpture.description}</p>

            <img src={sculpture.url} alt={sculpture.alt}/>
        </>);
};
exports.Gallery = Gallery;
