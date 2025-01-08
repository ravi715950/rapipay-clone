import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Image from 'next/image';


export default function Offering() {
  return (
    <Box className="offeringBox" >
      <Grid container spacing={2} >
        <Grid item xs={12} md={3}>
          <Box className="offeringCard" >
            <Box sx={{paddingTop:{xs:'20px', md:'2.4vw'},color:'#4C1A84'}} >  <Image src='/offeringSeamless.webp'
              width={0}
              height={0}
              sizes='100vw'
              style={{height:'auto', width:'35%'}}
              className='offeringImg'
              alt='img'
            />
            <Typography sx={{fontSize:{xs:'20px', md:'1.8vw'}, fontWeight:'700',}} variant='h6'>Seamless</Typography>
            <Typography sx={{fontSize:{xs:'13px', md:'1vw'}}} variant='p'>One app for all your <br/> financial requirements</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box className="offeringCard" ><Box sx={{paddingTop:{xs:'20px', md:'2.4vw'}, color:'#4C1A84'}}>  <Image src='/offeringSupport.webp'
               width={0}
               height={0}
               sizes='100vw'
               style={{height:'auto', width:'35%'}}
              className='offeringImg'
              alt='img'
            />
            <Typography sx={{fontSize:{xs:'20px', md:'1.8vw'}, fontWeight:'700',}} variant='h6'>24x7 Support</Typography>
            <Typography sx={{fontSize:{xs:'13px', md:'1vw'}}}  variant='p'>Unparalleled <br/> customer service</Typography></Box>
            </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box className="offeringCard" ><Box sx={{paddingTop:{xs:'20px',md:'2.4vw'}, color:'#4C1A84'}}>  <Image src='/offeringSafety.webp'
              width={0}
              height={0}
              sizes='100vw'
              style={{height:'auto', width:'35%'}}
              className='offeringImg'
              alt='img'
            />
            <Typography sx={{fontSize:{xs:'20px', md:'1.8vw'}, fontWeight:'700', }} variant='h6'>Safety first</Typography>
            <Typography sx={{fontSize:{xs:'13px', md:'1vw'}}} variant='p'>A secure & safe <br/> banking experience</Typography></Box>
            </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box className="offeringCard" ><Box sx={{paddingTop:{xs:'20px', md:'2.4vw'},color:'#4C1A84',textAlign:'center'}}> 
           <Image src='/offeringTransparent.webp'
               width={0}
               height={0}
               sizes='100vw'
               style={{height:'auto', width:'35%'}}
              className='offeringImg'
              alt='img'
            />
            <Typography sx={{fontSize:{xs:'20px', md:'1.8vw'}, fontWeight:'700'}} variant='h6'>Transparent</Typography>
            <Typography sx={{fontSize:{xs:'13px', md:'1vw'}}} variant='p'>No fine print and <br/> hidden charges</Typography></Box>
            </Box>
        </Grid>

      </Grid>
    </Box>
  );
}