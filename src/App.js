import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Email from './panels/Email'

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
            fetchedUser: null,
            userEmail: null,
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
                    break;
				default:
					console.log(e.detail.type);
			}
        });
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetEmailResult':
                    this.setState({ userEmail: e.detail.data });
                    break;
                default:
                    console.log(e.detail.type);
            }
        });
        connect.send('VKWebAppGetUserInfo', {});
        connect.send('VKWebAppGetEmail', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
            <View activePanel={this.state.activePanel}>
                <Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} emilo={this.state.userEmail} />
                <Persik id="persik" go={this.go} />
                <Email id="email" userEmail={this.state.userEmail} go={this.go}/>
			</View>
		);
	}
}

export default App;
