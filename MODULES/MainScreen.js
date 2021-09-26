import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider'

//Helpers import

import {TIME_CONVERTER} from '../FNS/functions';

//Variables

const windowWidth = Dimensions.get('window').width
const windowHeigth = Dimensions.get('window').height

const sliderMin = 0
const sliderMax = 1440

export default function MainScreen({ agreedWorkTime,startTime,endTime,hoursWorked,overTime,sliderOneValue,sliderTwoValue }) {

  return (
    <View style={styles.container}>

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

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#333',
    alignContent:'center', 
    width: windowWidth,
    height:windowHeigth
  },
  sliderContainer: {
    borderWidth:1,
    marginTop:30,
  },
  text: {
    marginTop:30,
    fontSize:20,
    color:'#fff'
  },
  slider: {
    marginTop:20,
    marginBottom:20,
  },
  numInput: {
    backgroundColor:'red',
  }
});