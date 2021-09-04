import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MyHeader from './component/MyHeader';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import DayScreen from './screens/DayScreen';
import WeekScreen from './screens/WeekScreen'

export default class App extends React.Component {
  render(){
    return (
      <View>
          <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  DayScreen:{screen:DayScreen},
  WeekScreen:{screen:WeekScreen}
},
{
  defaultNavigationOptions: ({navigation})=>{
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName;
      if(routeName==="DayScreen"){
        return(
          <Image 
            source={require("./assets/DayScreenTabIcon.png")}
            style=  {{width: 35, height: 35, borderRadius: 50}}
          />
        )
      }
      else if(routeName === "WeekScreen"){
        return(
          <Image 
            source={require("./assets/WeekScreenTabIcon.jpeg")} 
            style=  {{width: 35, height: 35, borderRadius: 50}}
          />
        )
      }
    }
  }
})

const AppContainer = createAppContainer(TabNavigator);