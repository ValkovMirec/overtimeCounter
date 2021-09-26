import React, {useState} from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider'

//Modules import 

import OpeningScreen from './MODULES/OpeningScreen';
import MainScreen from './MODULES/MainScreen';

//Window size 

const windowWidth = Dimensions.get('window').width
const windowHeigth = Dimensions.get('window').height

export default function App() {

  const[startTime, setStartTime] = useState(0)
  const[endTime, setEndTime] = useState(0)
  const[agreedWorkTime, setAgreedWorkTime] = useState(0)
  const[hoursWorked, setHoursWorked] = useState(0)
  const[overTime, setOverTime] = useState(0)
 
  //Button,input handlers
 
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
    <ScrollView style={styles.mainContainer}>

      {!agreedWorkTime? 
      <OpeningScreen
        agreedWorkTime={agreedWorkTime}
        setAgreedWorkTime={setAgreedWorkTime}
        windowHeigth={windowWidth}
        windowHeigth={windowHeigth}
      /> : 
      <MainScreen
        agreedWorkTime={agreedWorkTime}
        startTime={startTime}
        endTime={endTime}
        hoursWorked={hoursWorked}
        overTime={overTime}
        sliderOneValue={sliderOneValue}
        sliderTwoValue={sliderTwoValue}
        windowHeigth={windowWidth}
        windowHeigth={windowHeigth}
      />}
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignContent:'center',  
    height:windowHeigth,
    width:windowWidth
  }
});