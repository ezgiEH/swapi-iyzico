import React from 'react'
import { FaGithub, FaLinkedinIn, FaArrowLeft } from 'react-icons/fa'
import {Container, Stack, Text, Button, Heading, Box, Link} from '@chakra-ui/react'


function Contact() {
  return (
    <div className='App'>
      <Container maxW={'5xl'} h={'auto'} p={20} >
        <Stack
          backdropFilter={'blur(10px)'}
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            color={'white'}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Thank you <Text as={'span'} color={'#fa6e0a'}>
              iyzico family!
            </Text><br /> For allowing me to live the <br />
            Practicum experience with you!
          </Heading>
          <Text color={'gray.100'}>
            I'm Ezgi Hocaoglu. I am a computer engineer
            eager to learn new knowledge in the field of web development.
            I am very happy to develop projects with you and to feel like
            part of your family, even if not yet.
          </Text>
          <Stack
            direction={'row'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Link href='https://github.com/ezgiEH' target={'_blank'}>
              <Button
                bg={'gray.500'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'gray.300',
                }}>
                <FaGithub />
              </Button>
            </Link>
            <Link href='https://www.linkedin.com/in/ezgihocaoglu/' target={'_blank'}>
              <Button
                bg={'blue.500'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'blue.300',
                }}>
                <FaLinkedinIn />
              </Button>
            </Link>
            <Box>
              <Text
                fontSize={'lg'}
                color={'gray.100'}
                position={'absolute'}
                right={'-85px'}
                top={'-15px'}
                transform={'rotate(10deg)'}>
                Who am I
                <FaArrowLeft />
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  )
}

export default Contact