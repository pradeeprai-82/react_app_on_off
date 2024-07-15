//import { string } from '@tensorflow/tfjs';
import { Image,Buttons,https, StyleSheet, Platform, View, Text, Button } from 'react-native';

let response 
let data 
let switchStatus

function oncliked()  {  
  
  var yes = document.getElementById("status");

  if(yes.clicked == 'True'){ if(response == '0'){ state = "False" }} };

function checkStatus() {
  fetch('https://api.thingspeak.com/channels/2592719/feeds.json?api_key=7ZB59O5GRGIXG1J2&results=1')
   .then(response => { 
   if (!response.ok) {
    throw new Error('Network response was not ok')
    } 
    return response.json()})
    .then( data => data )
   .catch(error => {
    // Handle any errors
    console.error('Not Found', error);
   });
   data_j = JSON.parse(data);
   console.log(data_j)
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
          
        <Button id= "status"  title = "Check Key Position" onPress = {() => checkStatus() } > 
        </Button>
          
       
        <Text> { checkStatus() }  </Text>

        <Text>Controll IoT device</Text>
        <Button 
            title="ON"
              onPress = {() => fetch('https://api.thingspeak.com/update?api_key=AP7EGJ2MAU4V4QNT&field1=1')}>ON
        </Button>
        <Button
            title='OFF'
              onPress= {() => fetch('https://api.thingspeak.com/update?api_key=AP7EGJ2MAU4V4QNT&field1=0')}>OFF
        </Button>
    </View>
    
  )}

const styles = StyleSheet.create({ 
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    
    },
});
