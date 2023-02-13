import {Button,Checkbox,Flex,FormControl,FormLabel,Heading,Input,Link,Stack,Image, AlertIcon, AlertTitle, AlertDescription, Alert,} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import { LoginApi } from '../Store/Auth.action';


  


export default function Login() {
   const [text,setText]=useState({email:"",password:""})
   const dispatch=useDispatch()
   const data=useSelector(s=>s.list)
  

  const handleLogin=(e)=>{
       const {name,value}=e.target
       
        setText({
          ...text,
          [name]:value
        }) 

      }

    
    

      const handleSubmit=()=>{
            if( !text.email || !text.password) {
              
                 alert("plese provide valid information")
                return
            } 
         dispatch(LoginApi(text))
           console.log(text)
      }

      // console.log(data)

    return ( 
          <>
         <Navbar/>
     
       {data.autherror ?
          <Alert status='error'>
              <AlertIcon />
              <AlertTitle>Password not match try again!</AlertTitle>
              <AlertDescription>Please try another password </AlertDescription>
          </Alert> : " "}


          {data.auth ? 
            <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
          >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
             Login Successfully!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              Thanks for Log in.
            </AlertDescription>
          </Alert> : ""}

      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Log in as admin</Heading>

            {/* ----------------------email input */}
            <FormControl >
              <FormLabel>Email address</FormLabel>
              <Input onChange={handleLogin} name='email'  placeholder='Enter your email address' type="email" />
            </FormControl>
            {/* ----------------------password input */}
            <FormControl >
              <FormLabel>Password</FormLabel>
              <Input onChange={handleLogin} name='password'  placeholder='Enter password' type="password" />
            </FormControl>

            {/* -------------------------------------------form   */}
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'purple.500'} >Forgot password?</Link>
              </Stack>

              {/*  Click on button post the data and get response ----------------------------------------------- */}
              <Button onClick={handleSubmit} colorScheme={'purple'} variant={'solid'}>
                 Log in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
      </>
    );
  }