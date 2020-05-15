import React from "react";
import Echo from 'laravel-echo';
import socketio from 'socket.io-client';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.echo = new Echo({
            host: 'http://127.0.0.1:6001',
            broadcaster: 'socket.io',
            transports: ['websocket', 'polling', 'flashsocket'], // Fix CORS error!
            client: socketio,
            auth: {
                headers: {
                    Authorization: `Bearer ${this.props.userData.token}`
                }
            }
        });
    }

    render() {
        this.echo.private('users.2').notification((notification) => {
            console.log(notification);
        });

        return (
            <div className="message">

            </div>
        );
    }
}

export default Home;