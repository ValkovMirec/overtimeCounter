import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import Slider from '@react-native-community/slider'

//Helpers import

import {TIME_CONVERTER} from './FNS/functions';

//Variables

const sliderMin = 0
const sliderMax = 1440

export default function App() {

  const[startTime, setStartTime] = useState(0)
  const[endTime, setEndTime] = useState(0)
  const[agreedWorkTime, setAgreedWorkTime] = useState(0)
  const[hoursWorked, setHoursWorked] = useState(0)
  const[overTime, setOverTime] = useState(0)
  
  const enableScroll = () => this.setState({ scrollEnabled: true });
  const disableScroll = () => this.setState({ scrollEnabled: false });
  
  const sliderOneValue = (sliderValue) => {
    setStartTime(sliderValue)
  }

  const sliderTwoValue = (sliderValue) => {
    let hoursWorkedRaw = endTime - startTime 
    setEndTime(sliderValue)
    setHoursWorked(hoursWorkedRaw)
  }

  const onChangeWorkingHours = (inputValue) => {
    let totalMinutes = inputValue*60
    setAgreedWorkTime(totalMinutes)
  }

  const endTimeValue = (start,end) => {
    let hoursWorkedRaw = end - start 
    setHoursWorked(hoursWorkedRaw)
    let overtime = hoursWorked-agreedWorkTime
    setOverTime(overtime)
  }

  return (
    <ScrollView style={styles.container}>

      <Text>Agreed work time:</Text>
      <TextInput
        style={styles.numInput}
        type='number'
        onTextChange={onChangeWorkingHours}
        defaultValue='1'
        placeholder="Type in how many hours you work"
        keyboardType="number-pad"
      />

      <Text>Agreed WT:{TIME_CONVERTER(agreedWorkTime)}</Text>
      <Text>Start time:{TIME_CONVERTER(startTime)}</Text>    
      <Text>End time:{TIME_CONVERTER(endTime)}</Text>    
      <Text>Hours worked:{TIME_CONVERTER(hoursWorked)}</Text>
      <Text>Overtime:{TIME_CONVERTER(overTime)}</Text>
      <View style={styles.sliderContainer}>

        <Slider 
          style={styles.slider}
          minimumValue={sliderMin}
          maximumValue={sliderMax}
          minimumTrackTintColor="red"
          maximumTrackTintColor="green"
          onValueChange={sliderOneValue}
          vertical={true}
        />

        <Slider 
          style={styles.slider}
          minimumValue={startTime}
          maximumValue={sliderMax}
          minimumTrackTintColor="green"
          maximumTrackTintColor="red"
          onValueChange={sliderTwoValue}
          vertical={true}
        />

        <Text> {agreedWorkTime} </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: 'white',
    alignContent:'center',  
  },
  sliderContainer: {
    borderWidth:1,
    marginTop:30,
  },
  text: {
    marginTop:30,
    fontSize:20,
  },
  slider: {
    marginTop:20,
    marginBottom:20,
  },
  numInput: {
    backgroundColor:'red',
  }
});