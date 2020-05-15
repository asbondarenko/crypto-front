import React from 'react';
import Login from "./Login";
import Home from "./Home";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'apitester@test.com',
            password: 'password',
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZDdmYzhhNTE3YzVmZmUzYjdiNzE5NzFmODRlNzc1MmE0ZTdhYjgzMGYxZjdhZGNjZGE5ODFkZTRmMWEzM2Q4YTgwODk4ZGUzMDYyZTNmMDIiLCJpYXQiOjE1ODg3NTQwODgsIm5iZiI6MTU4ODc1NDA4OCwiZXhwIjoxNjIwMjkwMDg4LCJzdWIiOiIyIiwic2NvcGVzIjpbIioiXX0.K2whKX65IV4q2yW_gNj6sE5TSeFWyWMEYgVYVlToPKxHpb41bVpQBdHsUM1lt9nOJ6WOo-XToHaZpGjBfa3tN2KcPg4BEP1Q8CIm89iVFocNJZFKGNAjysbtn5nPEeLJKXWL1dyYIpd0YRRX9pLq9h4mb3sAtHP5sABGK7NprXzd3vNbu1awapim8US63ddxNzuCriv1MRaMT7tu5reVWuf9Hh2QaynNBsTamivGetXEpUEMFrQDFZhG9USGh13flRjsrc9MyTtDwjPmLv-BoYsZv4xhJrguSSCtAhHPpp46IqGk3GXqiqGZQd0HtL3ewQfLbzYHAxtJtnkcUlw-sqTFrjgn_HAFSYJMhwsxIwpT_X8A4YyW_6KXtxiqaHnWTF0v1aRPQjWTQ8vqejcnFdpdhifOGbBM0Uye8cfZq9dRSPx6j-kQTTFrKAIW_cQdO2qpGiFuj04uDWqpLvB32n1h_ro8OOkdZa2adjqa0Pp0gWO0RNmcnSU5Qu4WtT_l0jN-gnixWxz-_kkE6WXpKvUIBzC2dfU1MQjrV1ozk6nil9FrUo5z9fbk4hjGp0Zn7MoVX-10kznCwp5oo56Wknc6J33CRpkASD14TZAT2_LakPg-A4vedcvySlESyuwuKpbD7lOZ2ec39KKhgPl5Y8a41F3yJ9rLvy_HSZTFj7w'
        }
    }

    handleChane = e => {
        this.setState({token: e.data.access_token});
    };


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Crypto react</h1>
                </header>
                <div className="main">
                    <Login userData={this.state} handleChane={this.handleChane}/>
                    <Home userData={this.state}/>
                </div>
            </div>
        );
    }
}

export default App;
