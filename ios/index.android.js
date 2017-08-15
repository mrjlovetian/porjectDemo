/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TextInput,
} from 'react-native';

import NextView from './NextView';

class myView extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
      txtValue:'',
    };
  }

  goNext(name){



      this.props.navigator.push({
        component:NextView,
        params:{
          myname:'余洪江',
          descript:this.state.txtValue
        }
      })
  }

  render(){
    return(
        <View style={styles.container}>
          <TextInput
                         underlineColorAndroid = {'transparent'}
                         style={{width:200, height:40}}
                         multiline={false}
                         placeholder={'请输入你的描述信息'}
                         onChangeText={(text) => {
                             this.setState({
                                 txtValue: text
                             })
                         }}
                        value={this.state.txtValue}
                     />

          <TouchableHighlight onPress={()=>this.goNext()}>
            <Text>点击进入下一页面</Text>
          </TouchableHighlight>

        </View>
      )
  }
}

class projectDemo extends Component {
  render() {
    const {onExampleExit} = this.props;
    return (
      <Navigator style={{flex:1}} initialRoute={{
        component:myView,
        passProps:{onExampleExit},

      }}

    configureScene={(route) => {
      return Navigator.SceneConfigs.FloatFromRight;
    }}
    renderScene={(route, navigator) => {
      let Component = route.component;
      return <Component {...route.params} navigator={navigator} />
    }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('projectDemo', () => projectDemo);
