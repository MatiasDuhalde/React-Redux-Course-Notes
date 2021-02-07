import React from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';

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

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Accordion items={items} /> */}
                {/* <Search /> */}
                <Dropdown />
            </div>
        );
    }
}

export default App;
