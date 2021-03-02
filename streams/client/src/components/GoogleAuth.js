import React from 'react';

const CLIENT_ID =
    '477165084783-p36s62gb1uu15064vluileq8l9ftf37n.apps.googleusercontent.com';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: CLIENT_ID,
                scope: 'email',
            });
        });
    }

    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;
