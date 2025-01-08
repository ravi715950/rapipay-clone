import React from 'react'
import { Typography, Box } from '@mui/material';
import Image from 'next/image';

function  SecurityBusiness() {
  return (
    <>
    <Box sx={{padding:'48px 50px', display:'flex', justifyContent:'space-between',}}>
        <Box>

            <Typography sx={{fontSize:{xs:'12px', md:'24px'}, color:'#A13273', fontWeight:'700'}}>Your security. Our priority.</Typography>
        </Box>
        <Box sx={{display:'flex', textAlign:'center', justifyContent:'center'}}>
      <Image src='/website_logo_iso27001.svg'
        width={45}
        height={36}
     
        alt='img'
       />
            <Typography sx={{fontSize:{xs:'12px', md:'14px'}, padding:'6px 0px 0px 20px' }}>Protected by ISO 27001 certification</Typography>
        </Box>
    </Box>
    </>
  )
}

export default SecurityBusiness