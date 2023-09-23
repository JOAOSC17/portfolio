import NextLink from 'next/link'
import { Box, Button, Container, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
//import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
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
          <Paragraph>
            I am a freelance and a full-stack developer based in Brazil with a
            passion for building digital services/stuff. I believe code can solving real-life problems.
          </Paragraph>
          <Box align="center" my={4}>
            <Link as={NextLink} href='/works'>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme='teal'
                >
                  My portifolio
                </Button>
            </Link>
          </Box>
        </Section>
        {/* <Section delay={0.2}>
          <Heading as="h3" variant="section-tittle">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1984</BioYear>
            Born in Brasil.
          </BioSection>
          <BioSection>
            <BioYear>1984</BioYear>
            Born in Brasil.
            &apos;s
          </BioSection>
        </Section> */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Music, beaches, design, languages.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
