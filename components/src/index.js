import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="9:00 AM"
                    content={faker.lorem.sentence()}
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Moe"
                    timeAgo="3:33 AM"
                    content={faker.lorem.sentence()}
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));