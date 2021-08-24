import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider'

//Variables

const sliderMin = 0
const sliderMax = 1440
const sliderStep = 0

export default function App() {

  const[startTime, setStartTime] = useState(0)
  const[endTime, setEndTime] = useState(0)
  const[agreedWorkTime, setAgreedWorkTime] = useState(0)
  const[overTime, setOverTime] = useState(0)

  const enableScroll = () => this.setState({ scrollEnabled: true });
  const disableScroll = () => this.setState({ scrollEnabled: false });

  const sliderValue = (sliderValue) => {
    setOverTime(sliderValue)
  }

  return (
    <ScrollView style={styles.container}>

      <Text>{overTime}</Text>      
      <View style={styles.sliderContainer}>

        <Slider 
          minimumValue={sliderMin}
          maximumValue={sliderMax}
          minimumTrackTintColor="#FF000"
          maximumTrackTintColor="#000000"
          onValueChange={sliderValue}
          vertical={true}
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
  },
  text: {
    marginTop:30,
    fontSize:20,
  }
});