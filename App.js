import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './src/pages/Login';
import Forgotpw from './src/pages/Forgotpw';

export default class App extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="forgotpw" component={Forgotpw} title="Forgotpw"/>
			    </Stack>
			 </Router>
			)
	}
}