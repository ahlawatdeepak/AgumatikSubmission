import { Button, CircularProgress, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Navbar from "../Navbar/navbar"
import {  QueryDataApi } from "../Store/Auth.action"


export const ShowQuery=()=>{
    const data=useSelector(s=>s.list)
    const dispatch=useDispatch()
       
     useEffect(()=>{
         dispatch(QueryDataApi())
     },[])
     

    return(
        <>
            <Navbar/>
           
             
             {data.loading ? <CircularProgress m="auto" ml="50%" mb="30px" h="50px" w="40px" mt="60px" isIndeterminate color='purple' /> :""}
            <TableContainer>
             <Table variant='striped' colorScheme='teal'>
                    <TableCaption>
                     <Button>Download as pdf</Button> 
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Sr. No.</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Mobile Number</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                          
                        {
                             data.queryData && data.queryData.map((el,i)=>
                                <Tr >
                                <Td>{i+1}</Td>
                                <Td>{el.name}</Td>
                                <Td>{el.email}</Td>
                                <Td>{el.mobile}</Td>
                                
                             </Tr>
                             )
                        }

                    </Tbody>
             </Table>
            </TableContainer>

           
          
        </>
    )
}