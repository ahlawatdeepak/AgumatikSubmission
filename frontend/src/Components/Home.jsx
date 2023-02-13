import { Avatar, AvatarGroup, Box, Center, Heading, Highlight, Wrap, WrapItem } from '@chakra-ui/react'
import ImageCarousal from './Crousel/slider'
import Footer from './Footer/footer'
import { MediaLinks } from './MediaLinks/links'
import Navbar from './Navbar/navbar'
import { Query } from './Query/Addquery'
import { TraningCard } from './TraningCard/card'





export function Home(){
    
    return(
        <>
            <Navbar/>
            <Box  bgColor="purple.100">
                <Center h="200px"  color='black'>
                    <Heading  w="50%" size='3xl' lineHeight="180%">
                    <Highlight query={['Get', 'With', 'Trainers']} styles={{ px: '1', py: '1', color: 'purple' }}>

                          Get Your Perfect Workout With The Perfect Trainers
                        </Highlight>
                    
                    </Heading>
                </Center>
             </Box>

             {/* Query Button -------------------------------------- */}

              <Query/>


              {/*  */}
            
             {/* Media links  */}
              <MediaLinks/>

       {/* Carousel ------------------------------------ */}
         <ImageCarousal/>


                {/* Traning card ------------------------------------------- */}

                <TraningCard/>


                {/* Fotter ----------------------- */}
 
              <Footer/>               
         
        </>
    )
}