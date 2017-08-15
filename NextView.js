import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
} from 'react-native';

class NextView extends Component{

	back(){
		this.props.navigator.pop();
	}

	render(){
		return(
				<View style={{backgroundColor:'pink', flex:1}}>

					<TouchableHighlight onPress={()=>this.back()}>
					<Text>点我就回去了</Text>
					</TouchableHighlight>
					<Text>收到的消息是{this.props.descript}</Text>

				</View>
			)
	}
}

export default NextView;