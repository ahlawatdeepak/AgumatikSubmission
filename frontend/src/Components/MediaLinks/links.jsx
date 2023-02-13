import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    Button,
  } from '@chakra-ui/react'


export const MediaLinks=()=>{



    return(
        <>
          <Menu>
       <MenuButton 
          position="fixed"
          borderRadius="70%"
          boxShadow="rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px"
         as={Button}  >
             Media
            {/* <Image h="20px" w="20px" src='https://as1.ftcdn.net/v2/jpg/03/28/03/98/1000_F_328039870_LGIIfXcCoZcEuXXWRbi1yTiHrWzoCWNN.jpg' alt="media"/> */}
       </MenuButton>
  <MenuList>
    <MenuItem minH='48px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png'
        alt='Facebook'
        mr='12px'
      />
      <span>Facebook</span>
    </MenuItem>
    <MenuItem minH='40px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://w7.pngwing.com/pngs/402/997/png-transparent-linkedin-logo-computer-icons-facebook-user-profile-facebook-blue-angle-text.png'
        alt='Linkdin'
        mr='12px'
      />
      <span>Linkdin</span>
    </MenuItem>
    <MenuItem minH='40px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'
        alt='Linkdin'
        mr='12px'
      />
      <span>Instagram</span>
    </MenuItem>
  </MenuList>
</Menu>
          
        </>
    )
}