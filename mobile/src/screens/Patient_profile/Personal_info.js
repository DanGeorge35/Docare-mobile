//import * as React from 'react';
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

const Personal_info = ({navigation}) => {

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [dateOfBirth, setDateOfBirth] = useState();


  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const formatDate = (rawDate)=>{
    let date = new Date(rawDate);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    return `${year}-${month}-${day}`;
  }

  const handleChange =({type},selectedDate) => {
        if(type =="set"){
            const currentDate = selectedDate;
            //setDate(currentDate)
            if(Platform.OS === "android"){
                toggleDatePicker();
                //setDateOfBirth(currentDate.toDateString());
                setDateOfBirth(formatDate(currentDate));
               // console.log(currentDate)
            }
        }else{
            toggleDatePicker()
        }
  }

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
        <Text style={styles.title}> Personal Information </Text>



<FormControl w="100%" maxW="500"   alignItems="left" mt="2">

    <Box  mb="1" mt="1" ml="4">
        <FormControl.Label  >First Name</FormControl.Label>

          <Input type="text"  
          
           size="xl"  variant="outline" placeholder="Enter First Name" minWidth="335" w="90%"
           
           onChangeText={()=>{console.log("")}}
           />


        <FormControl.Label color="dark.100" mt="4" >Last  Name</FormControl.Label>

        <Input type="text"  

        size="xl"  variant="outline" placeholder="Enter Last Name" minWidth="335" w="90%"
        
        //    onChangeText={(val)=>setPhone(val)}
        onChangeText={()=>{console.log("")}}
        />

        </Box>

        <Stack direction="row" space={3} ml="4" >

            <Box>

            <FormControl.Label color="gray.100" mt="4" >Gender</FormControl.Label>

            <Select minWidth="173" accessibilityLabel="Choose Service" placeholder="Choose Your Gender" _selectedItem={{
        bg: "#F9F9FA",
        endIcon: <CheckIcon size={5} />
      }}  >

          <Select.Item label="Male" value="Male" />
          <Select.Item label="Female" value="Female" />
          <Select.Item label="Other" value="Others" />
        
        
        </Select>

    </Box>

    <Box>

        <FormControl.Label color="gray.100" mt="4" >Date Of Birth</FormControl.Label>

            {showPicker && (

                <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={handleChange}
                maximumDate={new Date(2030, 10, 20)}
                minimumDate={new Date(1980, 0, 1)}
                />
            )}

            {!showPicker && (
                <Pressable
                onPress={toggleDatePicker}
            >
                    <Input type="text"  
                    
                    size="xl"  variant="outline" 
                    placeholder="Date Of Birth"
                    placeholderTextColor="#000000"
                    minWidth="175" w="90%"
                    //isDisabled={true}
                    value={dateOfBirth}
                    isReadOnly="true"
                    InputRightElement={<Icon as={<MaterialIcons name="event" />} size={7} ml="1" color="dark.400" />} 
                    // editable={false}
                    onChangeText={()=>{console.log("")}}
                    />
            </Pressable >

    )}

            {/* <DatePicker
            defaultDate={selectedDate}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText="Select Date"
            textStyle={{ color: 'green' }}
            placeHolderTextStyle={{ color: '#d3d3d3' }}
            onDateChange={handleDateChange}
            disabled={false}
          /> */}

        </Box>

        </Stack>

        <Box ml="4">

            <FormControl.Label color="dark.100" mt="4" >About me (Optional)</FormControl.Label>

            <TextArea h={40} placeholder="Text Area Placeholder" w="105%" maxW="360"
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

})

export default Personal_info