import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import PricingComponent from "../Pricing/pricing"

const carddata=[
    {
        heading:"Yoga",
        summary:"enjoy our yoga classes for all levels, body elastic,body weight workout,and more"

    },
    {
        heading:"Muscles",
        summary:"Regular strength training classes for all levels, body elastic,body weight workout,and more"
        
    },
    {
        heading:"Fitness",
        summary:"your trainer will prepare and show you a workout regime designed to meet your fitness level and goals "
    }
]




export const TraningCard=()=>{


    return(
        <>
         
         <Box m="auto" w="90%" mt="20px" mb="20px"  display="flex" justifyContent="space-between">
                     
                    <Card>
                    <CardBody>
                             <Heading size='lg'>Training</Heading>
                             <br />
                                <Heading size='lg'>Programs</Heading>
                                 <br />
                                <Heading size='lg'>We Offer For You</Heading>
                        </CardBody>
                    </Card>
                        
                        {carddata.map((el,i)=>
                            <Card key={i} bg="purple.200" w="20%" >
                                <CardHeader>
                                <Heading size='md'>{el.heading}</Heading>
                                </CardHeader>
                                <CardBody>
                                <Text>{el.summary}</Text>
                                </CardBody>
                                <CardFooter>
                                <Button color="purple">Learn More</Button>
                                </CardFooter>
                          </Card>
                        )}
                        
                        
         
         </Box>



        <Box display="flex" justifyContent="space-evenly" bg="gray.100" h="600px" w="80%" gap="10px"  m="auto" mt="30px" mb="20px">
            
            <Box w="30%" h="80%" m="auto">
                 
                 <Box h="40%" >
                        <Heading mt="30px" size="2xl">Training</Heading>
                        <Heading mt="10px" size="2xl">Experiences</Heading>
                 </Box>
                 <Image h="55%" w="100%" src="https://img.freepik.com/premium-photo/female-personal-trainer-helping-woman-doing-exercises-gym_146671-31603.jpg?w=2000" alt="trainer" />

            </Box>
            <Box w="30%" h="80%" m="auto" >
                   <Image h="100%" w="100%" src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uYWwlMjB0cmFpbmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" alt="gym trainner" />
            </Box>
            <Box w="30%"  h="80%" m="auto" >
                    <Image mt="10%" h="43%"  w="80%" src="https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbmFsJTIwdHJhaW5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60" alt="trainer"/>
                    <Image mt="10%" h="43%" w="80%" src="https://media.istockphoto.com/id/1311896046/photo/personal-training-in-the-gym-a-young-woman-and-in-sportswear-and-in-good-shape-she-does.jpg?b=1&s=170667a&w=0&k=20&c=fCMimtPDNFSlQNQiBErhaiME3EWEOd-ISUYh_vdz60o=" alt="trainer"/>
            </Box>
            
            
         </Box>                        




  {/* Pricing cart-------------------------------------------------------- */}
   <PricingComponent/>






        </>
    )
}