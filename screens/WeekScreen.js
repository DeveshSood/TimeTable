import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Alert } from 'react-native';
import TimeTableView, { genTimeBlock } from 'react-native-timetable';
const events_data = [
  {
    title: 'WB',
    startTime: genTimeBlock('MON', 8, 30),
    endTime: genTimeBlock('MON', 8, 50),
  },
  {
    title: 'WB',
    startTime: genTimeBlock('TUE', 8, 30),
    endTime: genTimeBlock('TUE', 8, 50),
  },
  {
    title: 'WB',
    startTime: genTimeBlock('WED', 8, 30),
    endTime: genTimeBlock('WED', 8, 50),
  },
  {
    title: 'WB',
    startTime: genTimeBlock('THU', 8, 30),
    endTime: genTimeBlock('THU', 8, 50),
  },
  {
    title: 'WB',
    startTime: genTimeBlock('FRI', 8, 30),
    endTime: genTimeBlock('FRI', 8, 50),
  },
  {
    title: 'SCI',
    startTime: genTimeBlock('MON', 9),
    endTime: genTimeBlock('MON', 9, 45),
  },
  {
    title: 'MAT',
    startTime: genTimeBlock('TUE', 9),
    endTime: genTimeBlock('TUE', 9, 45),
  },
  {
    title: 'TAM',
    startTime: genTimeBlock('WED', 9),
    endTime: genTimeBlock('WED', 9, 45),
  },
  {
    title: 'SOC',
    startTime: genTimeBlock('THU', 9),
    endTime: genTimeBlock('THU', 9, 45),
  },
  {
    title: 'ENG',
    startTime: genTimeBlock('FRI', 9),
    endTime: genTimeBlock('FRI', 9, 45),
  },
  {
    title: 'SOC',
    startTime: genTimeBlock('MON', 10),
    endTime: genTimeBlock('MON', 10, 45),
  },
  {
    title: 'TAM',
    startTime: genTimeBlock('TUE', 10),
    endTime: genTimeBlock('TUE', 10, 45),
  },
  {
    title: 'SCI',
    startTime: genTimeBlock('WED', 10),
    endTime: genTimeBlock('WED', 10, 45),
  },
  {
    title: 'TAM',
    startTime: genTimeBlock('THU', 10),
    endTime: genTimeBlock('THU', 10, 45),
  },
  {
    title: 'SCI',
    startTime: genTimeBlock('FRI', 10),
    endTime: genTimeBlock('FRI', 10, 45),
  },
  {
    title: 'MAT',
    startTime: genTimeBlock('MON', 11),
    endTime: genTimeBlock('MON', 11, 45),
  },
  {
    title: 'SOC',
    startTime: genTimeBlock('TUE', 11),
    endTime: genTimeBlock('TUE', 11, 45),
  },
  {
    title: 'ENG',
    startTime: genTimeBlock('WED', 11),
    endTime: genTimeBlock('WED', 11, 45),
  },
  {
    title: 'PE',
    startTime: genTimeBlock('THU', 11),
    endTime: genTimeBlock('THU', 11, 45),
  },
  {
    title: 'MAT',
    startTime: genTimeBlock('FRI', 11),
    endTime: genTimeBlock('FRI', 11, 45),
  },
];

export default class WeekScreen extends Component {
  constructor(props) {
    super(props);
    this.numOfDays = 5;
    this.pivotDate = genTimeBlock('mon');
  }

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = (evt) => {
    Alert.alert('onEventPress', JSON.stringify(evt));
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 40 }}>
        <View style={styles.container}>
          <TimeTableView
            style={{ height: 50 }}
            scrollViewRef={this.scrollViewRef}
            events={events_data}
            pivotTime={8}
            pivotEndTime={13}
            pivotDate={this.pivotDate}
            numberOfDays={this.numOfDays}
            onEventPress={this.onEventPress}
            headerStyle={styles.headerStyle}
            formatDateHeader="dddd"
            locale="In"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});
