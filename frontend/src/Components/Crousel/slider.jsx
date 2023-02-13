import {Carousel} from "react-carousel-minimal"
import { Box } from '@chakra-ui/react'

export const Imagedata = [
    {
      image: "https://wallpapercave.com/wp/wp4846215.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://blogscdn.thehut.net/app/uploads/sites/478/2021/03/shutterstock_635024150opt_featured_1614948744_1200x672_acf_cropped.jpg",
      caption: "Scotland"
    },
    {
      image: "http://cdn.shopify.com/s/files/1/1497/9682/articles/2_8ff7d847-3db9-477b-b405-592a5b142ff1.jpg?v=1649680389",
      caption: "Darjeeling"
    },
    {
      image: "https://thefitnessphantom.com/wp-content/uploads/2021/09/Gym-Workout-Plan-For-Women-and-Men.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://media1.popsugar-assets.com/files/thumbor/mCypjqImiLxnDo0GgqfhajbeGQY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/10/04/788/n/1922729/2f10e5605bb653f4d72a44.56482974_GettyImages-964071376/i/Day-5-Conditioning.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.thehealthy.com/wp-content/uploads/2018/03/shutterstock_517683700.jpg",
      caption: "Darjeeling"
    }
  ];



export default function ImageCarousal(){

   
     

    const CaptionStyle={
        fontSize: '2em',
        fontWeight: 'bold',
    }


    return(
        <>

        <Box className="ImageCarouselBox">
                 
                 <Carousel 
                    data={Imagedata}
                    time={4000}
                    width="100%"
                    height="400px"
                    captionStyle={CaptionStyle}
                    // radius="7px"
                    automatic={true}
                    captionPosition="bottom"
                    dots={true}
                    pauseIconColor="white"
                //   slideBackgroundColor="blue"
                    slideImageFit="cover"
                    style={{
                        textAlign:'center',
                        // maxWidth:"140%",
                        width:"100%",
                        minHeight:"400px",
                    }}
                   />

        </Box>
        
        
        </>
    )
}