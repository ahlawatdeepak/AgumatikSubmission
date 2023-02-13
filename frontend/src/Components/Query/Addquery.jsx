import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Button,Text,Box,Image,Heading,useToast, FormControl, FormLabel, Input, keyframes, Card, CardBody,} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { QueryApi } from '../Store/Auth.action'





const OverlayTwo = () => (
  <ModalOverlay
    bg='none'
    backdropFilter='auto'
    backdropInvert='80%'
    backdropBlur='2px'
  />
)




export function Query() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(  <OverlayTwo />)
    const dispatch=useDispatch()
    const [info,setInfo]=useState({name:"",email:"",mobile:""}) 
    const toast = useToast()


    const handleChange=(e)=>{
        const {name,value}=e.target
        setInfo({
           ...info,
           [name]:value
        })
   }
 
   const handleQuery=()=>{
        dispatch(QueryApi(info))
        toast({
            title: 'Details Uploaded Successfully',
            description: "Thank you",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
   }




    return (
      <>
        
             <Button
                boxShadow=" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                
                position="fixed"
               right="0px"           
                colorScheme='purple'
          onClick={() => {
            setOverlay(<OverlayTwo />)
          
            onOpen()
          }}
        >
          Submit your Query
        </Button>
         
        
        
        <Modal  isCentered isOpen={isOpen} size="xl" onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Add your Details here </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input onChange={handleChange} name="name" type="text" placeholder='Enter your name' />
              </FormControl>
  
                 
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input onChange={handleChange} name="email" type="email" placeholder='Enter your email' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Mobile Number</FormLabel>
                <Input onChange={handleChange} name="mobile" type="number" placeholder='Enter your Mobile Number' />
              </FormControl>
            </ModalBody>     
            <ModalFooter>
            <Button onClick={handleQuery} colorScheme='purple' mr={3} m="auto">
                Submit
              </Button>
          </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }





