import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Helpers import

const windowWidth = Dimensions.get('window').width
const windowHeigth = Dimensions.get('window').height

export default function OpeningScreen({ setAgreedWorkTime }) {

const[workTimeInput, setWorkTimeInput] = useState()


  const onChangeWorkingHours = (inputValue) => {
    console.log(inputValue)
    setWorkTimeInput(inputValue)
  }

  const buttonClickHandler = () => {
      let totalMinutes = workTimeInput*60
      setAgreedWorkTime(totalMinutes)
      console.log(workTimeInput)
  }

  return (
    <View style={styles.container}>

        <Text style={styles.text}>How long do you work?</Text>

            <View style={styles.formContainer}>
        
                <TextInput
                    style={styles.numInput}
                    type='number'
                    onChangeText={onChangeWorkingHours}
                    placeholder="Type here..."
                    placeholderTextColor='#bcbf65'
                    keyboardType="number-pad"
                />

                <Button 
                    style={styles.button}
                    color='#93A603'
                    title='Set'
                    onPress={buttonClickHandler}
                />
        
            </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:70,    
    backgroundColor: '#333',
    alignContent:'center',
    width:windowWidth,
    height:windowHeigth
  },
  formContainer: {
    marginVertical:'30%'
  },
  text: {
    marginTop:'60%',
    fontSize:20,
    color:'#a9a9a9'
  },
  numInput: {
    backgroundColor:'#0000',
    borderStyle:'solid',
    borderBottomWidth:1,
    borderBottomColor:'#a9a9a9',
    marginBottom:60,
    color:'#a9a9a9',
    marginBottom:'20%'
  },
  button: {
    //marginTop:'20%'
  }
});