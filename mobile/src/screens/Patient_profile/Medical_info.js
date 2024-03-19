import {useEffect, useState} from 'react';
import { View, useWindowDimensions, StyleSheet,Text,Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,TextArea,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,DatePicker,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

   import AntDesign from 'react-native-vector-icons/AntDesign';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
   import DateTimePicker from '@react-native-community/datetimepicker';

const Medical_info = ({navigation}) => {
    const { width } = Dimensions.get('window');

    return (
      <VStack space="5"     backgroundColor="#FFFFFF" style={[styles.header_container, { width }]} flex={1} >
  
          <Stack direction="row"  mb="0">
  
              <Box style={styles.lang_view} >
                      <Text  onPress={() => navigation.navigate('Profile')} style={styles.lang_text}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
              </Box>
  
              <Box style={[styles.lang_view, { marginLeft:220 }]}  onPress={() => console.log("Edit")}>
                      <Text style={styles.lang_text} >Save</Text>
              </Box>
  
          </Stack>
          <Text style={styles.title}> Medical Information </Text>
  
  
          <FormControl w="100%" maxW="500"   alignItems="left" mt="2">
  
      <Box  mb="1" mt="1" ml="4">
          <FormControl.Label  >Email Address</FormControl.Label>
  
            <Input type="text"  
            
             size="xl"  variant="outline" placeholder="Enter Email Address" minWidth="335" w="90%"
             
             onChangeText={()=>{console.log("")}}
             />
  
  
          <FormControl.Label color="dark.100" mt="4" >Phone Number</FormControl.Label>
  
          <Input type="text"  
  
          size="xl"  variant="outline" placeholder="Enter Phone Number" minWidth="335" w="90%"
          
          //    onChangeText={(val)=>setPhone(val)}
          onChangeText={()=>{console.log("")}}
          />
  
          <FormControl.Label color="dark.100" mt="4" >Address</FormControl.Label>
  
          <Input type="text"  
  
          size="xl"  variant="outline" placeholder="Enter Address " minWidth="335" w="90%"
  
          //    onChangeText={(val)=>setPhone(val)}
          onChangeText={()=>{console.log("")}}
          />
  
          </Box>
      </FormControl>
  
  
  
      </VStack>
    )
}

const styles = StyleSheet.create({

    header_container: {
     // flex: 1,
      backgroundColor:'#FFFFFF',
       // width:409,
        //height:215
      //color:'#fff',
      //justifyContent:"center",
      //alignItems:"center",
      //width: 375, 
     // height: 812, 
    },
    title:{
        fontFamily:'GeneralSans-Bold',
        fontWeight:'bold',
        fontSize:25,
        //lineHeight:30,
       // color:'#1B1D28',
        color:'#000000',
        width:251,
       // height:20,
        marginTop:0,
        marginLeft:20,

    },
    lang_view:{
        width:101,
        //height:49,
        marginTop:30,
        marginLeft:14,
        color:'#000000',
        
    },
    lang_text: {
        width:205,
        fontSize:20,
        fontWeight:'500',
        color:'#1C70EE',
       lineHeight: 21.6,
       fontFamily:'GeneralSans-Bold',
     
    },

});

export default Medical_info