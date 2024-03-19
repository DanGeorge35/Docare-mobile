import { View, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { NativeBaseProvider,HStack,Spacer,
    Box, Badge,CheckIcon,Center,Flex,
    VStack,Select,Stack,Image, Text,
    useToast,FlatList,
     Button,Pressable,
    
   } from "native-base";


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Account_type = ({navigation}) => {
  return (

<VStack space="2.5"  px="3"  bg="#ffffff" flex={1} >


        <Box mt="10" ml="3"  w="300" h="12">

            <Text fontSize="xl" color="#000000" fontWeight="bold" lineHeight="25"  fontFamily="Inter-Black"  onPress={() => navigation.navigate('Lang_select')}><FontAwesome5 name="arrow-left" size={20}  color="#000000" />   Create Account Type </Text>

         </Box>

         {/* width:300,
        height:231,
        marginTop:69,
        marginBottom:198,
        marginLeft:26, */}
        
            <Stack w="300" alignItem="center" mx="10" h="50%" justifyContent="center" >

  

            
     
      <Pressable maxW="96">
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Stack direction="row" mb="1" mt="1" space={5} style={styles.doc_view} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">


              
              <Box>
                    <Image  w="56" h="56" source={require( "../../../assets/doctor.png") } alt="Alternate Text" size="sm" />
                 </Box>

                <Box>
                    <Text fontFamily="GeneralSans-Bold" color="#344054" fontSize="lg" lineHeight="20" fontWeight="bold" >Doctor</Text>
                    <Text fontFamily="GeneralSans-Bold" color="#344054" fontSize="xs" w="195" lineHeight="20" fontWeight="normal">
                        Offer expertise and services to patients.  
                    </Text>

                </Box>
              
            </Stack>;
      }}
      </Pressable>

    


   
      <Pressable  mt="2">
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Stack direction="row" mb="1" mt="1" space={5} style={styles.doc_view} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
              
              <Box >
                    <Image  w="56" h="56" source={require( "../../../assets/hospital1.png") } alt="Alternate Text" size="sm" />
                 </Box>

                <Box>
                    <Text fontFamily="GeneralSans-Bold" color="#344054" fontSize="lg" lineHeight="20" fontWeight="bold">Patient</Text>
                    <Text fontFamily="GeneralSans-Bold" color="#344054" fontSize="xs" w="200" lineHeight="20" fontWeight="normal">
                    Access personalised healthcare services.  
                    </Text>

                </Box>
              
            </Stack>;
      }}
      </Pressable>

           

 </Stack>

        
         

         <Box alignItems="center" mt="30%">
            
            <Button bg="#1C70EE"   borderRadius="md" w="300" h="12" onPress={() => navigation.navigate('Create_account')}>Continue</Button>
    </Box>
    </VStack>
  )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:'#FFFFFF',
      color:'#fff',
      justifyContent:"center",
      alignItems:"center",
      //width: 375, 
   // height: 812, 
    },
    doc_view:{
        width:323,
        height:104,
        borderRadius:10,
        padding:20,
        backgroundColor:'#FAFBFF'
    },

  


    lang_view:{
        width:231,
        height:27,
        marginTop:30,
        marginLeft:14,
        color:'#000000',
    },

    lang_text: {
        fontSize:20,
        fontWeight:'bold',
        color:'#000000',
       lineHeight: 27,
       fontFamily:'General Sans',
     
   },

   get_start_btn:{
    width:327,
    height:52,
     marginTop:0,
     //color:"red",
    // backgroundColor:"1C70EE",
    
    borderRadius:12,
    padding: 16,
},

});
export default Account_type