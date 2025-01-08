import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { serviceBusinessData } from '@/utils/serviceData';
import { useState, useEffect } from 'react';


export default function ServicesBusiness({current}) {
  const [activeCard, setActiveCard] = useState(serviceBusinessData[0])

  const handleSetActiveCard = (item) => {
    setActiveCard(item)
  }

  useEffect(()=>{
    var item = serviceBusinessData.filter((item)=> {return '#'+item.id == current})
    if(item.length > 0){
      setActiveCard(item[0])
    }
  },[current])


  return (
    <Box sx={{ marginTop: '132px', marginBottom: '180px', backgroundImage: 'url("backgroundscroll.webp")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingLeft:{xs:'none', md:'45px'}, marginLeft: {xs:'none', md:'15px'}, padding:{xs:'15px', md:'none'}  }} >
      <Grid sx={{display:{xs:'none', md:'flex'}}} container spacing={2} >
        <Grid item xs={7} >
          <Grid container spacing={2}>
            {serviceBusinessData.map((item, index) => (
              <Grid id={item.id} onClick={() => handleSetActiveCard(item)} key={index} item xs={12} md={6} style={{ marginTop: item.marginTop }}>
                <Box className={activeCard.cardname === item.cardname ? "active" : "serviceCardBoxBusiness"}>
                  <Image
                    src={item.bgImg}
                    width={170}
                    height={220}
                    alt="img"
                    style={{ marginTop: '60px' }}
                  />
                  <Typography   sx={{
                      fontFamily: 'var(--font-family)',
                      fontSize: '20px',
                      marginTop: '120px',
                      marginLeft: '26px',
                      color: 'var(--main-color2)',
                      textAlign: 'left',
                      fontWeight: '700',
                      textTransform: 'capitalize'
                    }}>{item.cardname}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

        </Grid>


        <Grid item xs={12} md={5} >
          <Box sx={{ position: 'sticky', top: '200px', color: 'var(--main-color2)',width:'35vw' }}>
            <Typography variant='h2' sx={{ fontSize: '36px', fontFamily:'Poppins', fontWeight: '600', marginBottom: '57px', lineHeight: "40px" }}>{activeCard.heading}</Typography>
            {activeCard.discription.map((item, index) => (
              <Typography key={index} sx={{ fontSize: '1vw',fontFamily:'Poppins', fontWeight: '400', lineHeight: '50px' }}><CheckCircleIcon sx={{ marginRight: '22px' }} />{item}</Typography>

            ))}
          </Box>
        </Grid>
      </Grid>
    
    
      <Grid sx={{display:{xs:'flex', md:'none'}, padding:'20px'}} container spacing={2} >
        {serviceBusinessData.map((item, index) => (
        <Grid item xs={12} sm={6} >
          <Box key={index}   
           sx={{
            padding: '16px',
            borderRadius: '16px',
            backgroundColor: '#fff',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.12)',
            marginBottom: '40px'
        }} >
            <Box    sx={{
                 textAlign: 'center',
                 paddingTop: '40px',
                 borderRadius: '16px',
                 border: '1px solid rgb(236, 228, 255)'
              }}>   
               <Image
                    src={item.bgImg}
                    width={200}
                  height={180}
                    alt="img"
                    style={{objectFit:'contain'}}
                   
                  />
                   <Typography sx={{fontSize:'16px',fontFamily:'Poppins', fontWeight:'600', marginTop:'40px', paddingBottom:'16px',color:'var(--main-color2)'}} >{item.heading}</Typography>
                  </Box>
            <Box sx={{marginTop:'32px', paddingBottom:'30px'}}>
               <Typography sx={{marginBottom:'25px', fontSize:'25px',color:'var(--main-color2)',fontFamily:'Poppins',  fontWeight:'700'}} >{item.cardname}</Typography>
               {item.discription.map((text, index)=>(<Box display={'flex'}>
                <CheckCircleIcon sx={{ marginRight: '14px',color:'var(--main-color2)' , paddingTop:'10px' }} />
                 <Typography key={index} sx={{fontSize:'14px',fontFamily:'Poppins', fontWeight:'500', color:'var(--main-color2)', paddingTop:'10px'}}  >{text}</Typography>
               </Box>
               ))}
               </Box>

          </Box>
          </Grid>
          ))}
          </Grid>

    </Box>
  );
}