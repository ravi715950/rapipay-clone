import React from 'react'
import { Typography, Grid, Box } from '@mui/material';
import Image from 'next/image';

function LeadingPartners() {
    return (
        <>
            <Box  sx={{ width:'100%'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} >
                        <Box  sx={{textAlign:'center', borderRadius:'12px', height:'100px',width:{xs:'100%', md:'80%'}, marginTop:'15px',marginLeft:{xs:'none', md:'auto'}, boxShadow:'0 4px 8px #ddd', }} >
                            <Box ><Typography sx={{fontSize:'12px',paddingTop:'15px'}}>Your security. Our priority.</Typography></Box>
                            <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
                                <Box >
                                    <Image
                                        src="/website_logo_iso27001.svg"
                                        width={45}
                                        height={30}
                                        alt="img"
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        src="/website_logo_pcidss.svg"
                                        width={80}
                                        height={53}
                                        alt="img"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box  sx={{textAlign:'center',borderRadius:'12px', boxShadow:'0 4px 8px #ddd',width:'100%', height:'130px', }}>
                            <Box><Typography sx={{fontSize:'14px',paddingTop:'10px'}}>Trusted by leading indian banks</Typography></Box>
                            <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
                                <Box>
                                    <Image
                                        src="/logo_janaBank.svg"
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        alt="img"
                                        style={{width:'100%',height:'auto',paddingTop:'30px'}}
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        src="/logo_indusindBank.svg"
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        alt="img"
                                        style={{width:'100%',height:'auto',paddingTop:'30px'}}/>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <Box   sx={{textAlign:'center', borderRadius:'12px', boxShadow:'0 4px 8px #ddd',height:'100px', width:{xs:'100%', md:'80%'},marginTop:'15px', }}>
                            <Box ><Typography sx={{fontSize:'12px',paddingTop:'15px'}}>Payments Partners</Typography></Box>
                            <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
                                <Box>
                                    <Image
                                        src="/website_logo_rupay.svg"
                                        width={45}
                                        height={30}
                                        alt="img"
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        src="/website_logo_npci.svg"
                                        width={80}
                                        height={53}
                                        alt="img"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default LeadingPartners