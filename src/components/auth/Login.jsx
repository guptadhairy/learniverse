import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <Container h={'95vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
            <Heading>Welcome to Learniverse</Heading>

            <form style={{width: '100%'}}>
                <Box my={'4'}>
                <FormLabel htmlFor='email' children="Email Address"/>
                <Input 
                required id='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='abc@gmail.com' type='email' focusBorderColor='yellow' />
                </Box>
                <Box>
                    <FormLabel htmlFor='password' children="Password" />
                    <Input required id='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter password here' type='password' focusBorderColor='yellow' />
                </Box>
                <Box my={'2'}>
                    <Link to='/forgetpassword'>
                    <Button fontSize={'sm'} variant={'link'}>Forget Password?</Button>
                    </Link>
                </Box>
                <Button type='submit' colorScheme='yellow'>Log In</Button>
                <Box my={'4'}>
                    New User?{' '}
                    <Link to='/register'>
                        <Button colorScheme='yellow' variant={'link'}>Sign Up</Button>{' '}
                        here
                    </Link>
                </Box>
            </form>
        </VStack>
    </Container>
  )
}

export default Login

