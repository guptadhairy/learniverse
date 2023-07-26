import { HStack, Heading, Input, Stack, VStack,Text,Image} from '@chakra-ui/react'
import React from 'react';

import { FaRegPaperPlane,FaLinkedin,FaFacebook,FaInstagram } from 'react-icons/fa';
import vg from '../../assets/images/unnamed.png'
const Footer = () => {
  return (
    <Stack paddingY={'8'} bgColor={'blackAlpha.900'} minH={'50vh'} color={'yellow.400'} direction={['column','row']}>
        <VStack width={'full'} borderRight={'2px'} alignItems={'center'} justifyContent={'center'}>
        <HStack>
            <Input focusBorderColor='yellow' width={'300px'} placeholder='Subscribe for NewsLetter' />
            <FaRegPaperPlane />
            
        </HStack>
        <Text>All Rights Reserved</Text>
        <Text>learniverse@gmail.com</Text>
        </VStack>
        <VStack width={'full'} borderRight={'2px'} alignItems={'center'} justifyContent={'center'}>
            <Heading>LEARNIVERSE</Heading>
            <Image height={'50px'} width={'50px'} borderRadius={'100%'} src={vg} alt='Founder'/>
            <Text>Founder : DHAIRYA GUPTA </Text>
            <Text>Unlock Your Potential, Learn Anywhere, Anytime</Text>
            
        </VStack>
        <VStack width={'full'} alignItems={'center'} justifyContent={'center'}>
            <Heading margin={'8'}>SOCIAL MEDIA</Heading>
            <HStack>
                <a href='https://linkedin.com' target='blank'><FaLinkedin size={'40px'} /></a>
                <Text fontSize={'20px'}>Linked In</Text>
            </HStack>
            <HStack>
            <a href='https://facebook.com' target='blank'><FaFacebook size={'40px'} /></a>
                <Text fontSize={'20px'}>Linked In</Text>
            </HStack>
            <HStack>
            <a href='https://instagram.com' target='blank'><FaInstagram size={'40px'} /></a>
                <Text fontSize={'20px'}>Linked In</Text>
            </HStack>
        </VStack>
    </Stack>
  )
}

export default Footer
