import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import DropdownMenu from 'react-native-dropdown-menu';


export default class DayScreen extends Component {
  constructor() {
    super();
    (this.MonData = [
      { time: '08:30 - 08:50', title: 'WB' },
      { time: '09:00 - 09:45', title: 'SCI' },
      { time: '10:00 - 10:45', title: 'SOC' },
      { time: '11:00 - 11:45', title: 'MAT' },
    ]),
      (this.TueData = [
        { time: '08:30 - 08:50', title: 'WB' },
        { time: '09:00 - 09:45', title: 'MAT' },
        { time: '10:00 - 10:45', title: 'TAM' },
        { time: '11:00 - 11:45', title: 'SOC' },
      ]),
      (this.WedData = [
        { time: '08:30 - 08:50', title: 'WB' },
        { time: '09:00 - 09:45', title: 'TAM' },
        { time: '10:00 - 10:45', title: 'SCI' },
        { time: '11:00 - 11:45', title: 'ENG' },
      ]),
      (this.ThursData = [
        { time: '08:30 - 08:50', title: 'WB' },
        { time: '09:00 - 09:45', title: 'SOC' },
        { time: '10:00 - 10:45', title: 'TAM' },
        { time: '11:00 - 11:45', title: 'PE' },
      ]),
      (this.FriData = [
        { time: '08:30 - 08:50', title: 'WB' },
        { time: '09:00 - 09:45', title: 'ENG' },
        { time: '10:00 - 10:45', title: 'SCI' },
        { time: '11:00 - 11:45', title: 'MAT' },
      ]),
      (this.state = {
        dayView: '',
      });
  }

  displayTimeTable = () => {
    var timeTable = this.state.dayView;
    if (timeTable === 'Mon') {
      return <Timeline style={styles.list} data={this.MonData} />;
    } else if (timeTable === 'Tue') {
      return <Timeline style={styles.list} data={this.TueData} />;
    } else if (timeTable === 'Wed') {
      return <Timeline style={styles.list} data={this.WedData} />;
    } else if (timeTable === 'Thurs') {
      return <Timeline style={styles.list} data={this.ThursData} />;
    } else if (timeTable === 'Fri') {
      return <Timeline style={styles.list} data={this.FriData} />;
    }
  };

  render() {
    var day = [['Mon', 'Tue', 'Wed', 'Thurs', 'Fri']];
    //'rgb(45,156,219)'
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.dpm}>
          <Text> Choose the Day</Text>
          <DropdownMenu
            style={{ flex: 1, textAlign: 'center' }}
            bgColor={'white'}
            tintColor={'#666666'}
            activityTintColor={'green'}
            maxHeight={100}
            handler={(selection, row) =>
              this.setState({ dayView: day[selection][row] })
            }
            data={day}></DropdownMenu>
        </View>

        {this.displayTimeTable()}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginLeft:40,
    backgroundColor:'pink',
    flex: 1,
    padding: 20,
    paddingTop: 65,
    
    textAlign:'center'
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  dpm: {
    marginLeft: 10,
    textAlign: 'center',
    height: 160,
  },
  
});
