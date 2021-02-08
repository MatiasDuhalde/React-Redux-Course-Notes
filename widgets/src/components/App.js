import React, { useState } from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework',
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers',
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components',
    },
];

const options = [
    {
        label: 'Red',
        value: 'red',
    },
    {
        label: 'Green',
        value: 'green',
    },
    {
        label: 'Blue',
        value: 'blue',
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/* <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="ui button"
            >
                Toggle dropdown
            </button> */}
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* {showDropdown ? (
                <div>
                    <Dropdown
                        label={'Select a Color'}
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                    <h1 style={{ color: selected.value }}>
                        This text is {selected.value}
                    </h1>
                </div>
            ) : null} */}
            <Translate />
        </div>
    );
};

export default App;
