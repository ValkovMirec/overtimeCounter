import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
  const[overTime, setOverTime] = useState(0)

  const enableScroll = () => this.setState({ scrollEnabled: true });
  const disableScroll = () => this.setState({ scrollEnabled: false });

  const sliderOneValue = (sliderValue) => {
    setStartTime(sliderValue)
  }

  const sliderTwoValue = (sliderValue) => {
    setEndTime(sliderValue)
  }

  return (
    <ScrollView style={styles.container}>

      <Text>Start time:{TIME_CONVERTER(startTime)}</Text>    
      <Text>End time:{TIME_CONVERTER(endTime)}</Text>    
      <View style={styles.sliderContainer}>

        <Slider 
          style={styles.slider}
          minimumValue={sliderMin}
          maximumValue={sliderMax}
          minimumTrackTintColor="red"
          maximumTrackTintColor="green"
          onValueChange={sliderOneValue}
          vertical='true'
        />

        <Slider 
          style={styles.slider}
          minimumValue={startTime}
          maximumValue={sliderMax}
          minimumTrackTintColor="green"
          maximumTrackTintColor="red"
          onValueChange={sliderTwoValue}
          vertical='true'
        />

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
  }
});