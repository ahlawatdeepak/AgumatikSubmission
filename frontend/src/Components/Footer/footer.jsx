import {Box,Container,Link,SimpleGrid,Stack,Text,Flex,Tag,useColorModeValue,Image,} from '@chakra-ui/react';
 
  
  const Logo = (props) => {
    return (
      <Image
        height="50px" borderRadius="50%"
        src="data:image/jpeg;base64,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"
           />
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('facebook.50', 'facebook.900')}
        color={useColorModeValue('facebook.700', 'facebook.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Menu</ListHeader>
              <Link href={'#'}>Home</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Features</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'}>Trainers</Link>
              <Link href={'#'}>Pricing</Link>
        
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Partners</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Further Information</ListHeader>
              <Link href={'#'}>Cookies Policy</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Copyright Policy</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Linkdin</Link>
              <Link href={'#'}>Instagram</Link>
              
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <Logo />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            ?? Copyright ?? 2023 Fitney. All Rights Reserved
          </Text>
        </Box>
      </Box>
    );
  }