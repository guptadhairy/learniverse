import { Heading, Stack, VStack,Text, Button, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import vg from '../assets/images/bg.png'
import './home.css';
import {CgGoogle, CgYoutube} from 'react-icons/cg';
import {DiAws} from 'react-icons/di';
import {SiCoursera,SiUdemy} from 'react-icons/si';
import introVdo from '../assets/videos/intro.mp4'
const Home = () => {
  return (
    <section className='home'>
        <div className='container'>
            <Stack 
            direction={['column','row']}
            height='100%'
            justifyContent={['center','space-between']}
            alignItems={'center'}
            spacing={['16','50']}
            >
                <VStack width={'full'} alignItems={['center','flex-end']} spacing={'8'}>
                    <Heading size={'2xl'}>LEARN FROM THE EXPERTS</Heading>
                    <Text textAlign={['center' , 'left']} fontSize={'2xl'}>Find Valueable Content At Reasonable Price.</Text>
                    <Link to='/courses'>
                        <Button size={'lg'} colorScheme='yellow' ml={'10px'}>
                            Explore Now
                        </Button>
                    </Link>
                </VStack>
                
                <img className='photo' src={vg} alt='LOGO' boxsize={'md'} objectfit={'cover'} />
            </Stack>
        </div>
        <Box padding={'8'} bg={'blackAlpha.900'}>
            <Heading textAlign={'center'} fontFamily={'body'} color={'yellow.400'} >OUR BRANDS</Heading>
            <HStack className='brands' justifyContent={'space-evenly'}marginTop={'4'}>
                <CgGoogle />
                <CgYoutube/>
                <SiCoursera/>
                <SiUdemy/>
                <DiAws/>

            </HStack>
        </Box>
        <div className='container2'>
            <video controls controlsList='nodownload nofullscreen noremoteplayback' src={introVdo} disablePictureInPicture disableRemotePlayback></video>
        </div>
    </section>
  )
}

export default Home
