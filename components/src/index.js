import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="9:00 AM" content={faker.lorem.sentence()} avatar={faker.image.image()} />
            <CommentDetail author="Moe" timeAgo="3:33 AM" content={faker.lorem.sentence()} avatar={faker.image.image()} />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));