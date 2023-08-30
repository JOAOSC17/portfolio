import { Box, Container, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'

const Page = () => {
  return (
    <Container>
      <Box borderRadius={'lg'} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} ali={'center'}>
        Hello, I&apos;m a full-stack developer based in Brazil!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            João Costa
          </Heading>
          {/* <p>( Developer / Designer )</p> */}
        </Box>
        <Box 
            flexShrink={0} 
            mt={{ base: 4, md: 0 }} 
            ml={{ md: 6 }} 
            align="center"
            >
            <Image 
            borderColor="whiteAlpha.800"
            borderWidth={2} 
            borderStyle="solid" 
            maxWidth="100px" 
            display="inline-block"
            borderRadius="full"
            src="https://avatars.githubusercontent.com/u/77072063?v=4"
            alt="Profile Image" 
            />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
            Work
        </Heading>
        <p>Paragraph</p>
      </Section>
    </Container>
  )
}

export default Page
