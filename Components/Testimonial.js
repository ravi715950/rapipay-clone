import Image from 'next/image';
import { Typography, Grid, Box } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { testimonialData } from '@/utils/testimonialData';
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";



import { Pagination } from "swiper";


const Testimonial = () => {
    const [width, setWidth] = useState(1470);

    useEffect(() => {
     
        setWidth(window.innerWidth);
    });

    useEffect(() => {
        function handleResize() {
            
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box>
            <Box py={20} className="testimonialBg" sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}  >
                      <Box sx={{position: 'sticky', top: '100px',}}>
                        <Box  ml={10} sx={{ color: '#4C1A84' }}>
                            <Typography> Over</Typography>
                            <Typography sx={{ fontSize: '40px', fontWeight: '700' }}>100M</Typography>
                            <Typography sx={{ fontSize: '24px', fontWeight: '400' }}>customers served <br /> so far</Typography>
                        </Box>
                        <Box mt={30} ml={10} sx={{ color: '#4C1A84' }}>
                            <Typography>Trusted by</Typography>
                            <Typography sx={{ fontSize: '40px', fontWeight: '700' }}>600K+</Typography>
                            <Typography sx={{ fontSize: '24px', fontWeight: '400' }}>Indian <br /> merchants</Typography>
                        </Box>

                      </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={2} sx={{ width: '60vw' }}>
                            {testimonialData.map((item, index) => (
                                <Grid key={index} item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box mt={item.marginTop} sx={{ width:'17.5vw', paddingBottom: '20px' }}>
                                        <Box>
                                            <Image
                                                src={item.Img}
                                                width={0}
                                                height={0}
                                                sizes='100vw'
                                                style={{height:'370px', width:'17.5vw' }}
                                                alt="img"
                                                className='testimonialImg'

                                            />
                                            <Box sx={{ padding: '16px', paddingTop: '50px', backgroundColor: '#723EAC', color: '#fff', borderRadius: '0px 0px 20px 20px', }}>
                                                <FormatQuoteIcon sx={{ transform: 'rotate(180deg)', }} />
                                                <Typography sx={{ fontSize: '14px', paddingBottom: '8px' }}>{item.discription}
                                                    <FormatQuoteIcon sx={{ float: 'right' }} />
                                                </Typography>
                                                <Box sx={{ textAlign: 'right', }}>
                                                    <Typography sx={{ fontSize: '16px', paddingTop: '25px' }}>{item.name}</Typography>
                                                    <Typography sx={{ fontSize: '12px', paddingTop: '10px' }}>{item.location}</Typography></Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}

                        </Grid>
                    </Grid>
                    <Grid item md={1}></Grid>
                </Grid>
            </Box>

            <Box my={10} sx={{ display: { xs: 'block', md: 'none' }, }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '40px' }}>
                    <Box sx={{ color: '#4C1A84' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '400' }} > Over</Typography>
                        <Typography sx={{ fontSize: '24px', fontWeight: '700' }}>100M</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>customers served <br /> so far</Typography>
                    </Box>
                    <Box sx={{ color: '#4C1A84' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>Trusted by</Typography>
                        <Typography sx={{ fontSize: '24px', fontWeight: '700' }}>600K+</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>Indian <br /> merchants</Typography>
                    </Box>
                </Box>

                <Swiper
                    slidesPerView={width > 668 ? 3 : 1}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    centeredSlides={true}
                    spaceBetween={30}
                    modules={[Pagination]}
                    style={{ width: '100%', height: '100%' }}
                    loop
                >
                    {testimonialData.map((item, index) => (
                        <SwiperSlide key={index} style={{ width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <Box sx={{ width: '220px', paddingBottom: '20px', }}>
                                <Box>
                                    <Image
                                        src={item.Img}
                                        width={220}
                                        height={350}
                                        alt="img"
                                        className='testimonialImg'

                                    />
                                    <Box sx={{ padding: '16px', paddingTop: '50px', backgroundColor: '#723EAC', color: '#fff', borderRadius: '0px 0px 20px 20px', minHeight: '280px' }}>
                                        <FormatQuoteIcon sx={{ transform: 'rotate(180deg)', }} />
                                        <Typography sx={{ fontSize: '14px', paddingBottom: '8px' }}>{item.discription}
                                            <FormatQuoteIcon sx={{ float: 'right' }} />
                                        </Typography>
                                        <Box sx={{ textAlign: 'right', }}>
                                            <Typography sx={{ fontSize: '16px', paddingTop: '25px' }}>{item.name}</Typography>
                                            <Typography sx={{ fontSize: '12px', paddingTop: '10px' }}>{item.location}</Typography></Box>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>



        </Box>

    )
}

export default Testimonial;