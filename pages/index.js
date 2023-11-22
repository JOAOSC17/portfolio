import NextLink from 'next/link'
import { 
  Box, 
  Button, 
  Container, 
  Heading, 
  Image, 
  Link, 
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
//import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from 'react-icons/io'
import {
  IoLogoDiscord,
} from 'react-icons/io5'

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
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href='https://github.com/JOAOSC17' target='_blank'>
                <Button variant="ghost" colorScheme='teal' leftIcon={<IoLogoGithub />}>@joaosc17</Button>
              </Link>
            </ListItem>
            {/* <ListItem>
              <Link href='https://twitter.com/jovicosta_' target='_blank'>
                <Button variant="ghost" colorScheme='teal' leftIcon={<IoLogoTwitter />}>@jovicosta_</Button>
              </Link>
            </ListItem> */}
            <ListItem>
              <Link href='https://discordapp.com/users/718808731999272989' target='_blank'>
                <Button variant="ghost" colorScheme='teal' leftIcon={<IoLogoDiscord />}>@jovicosta</Button>
              </Link>
            </ListItem>
            {/* <ListItem>
              <Link href='https://discordapp.com/users/718808731999272989' target='_blank'>
                <Button variant="ghost" colorScheme='teal' leftIcon={<IoLogoInstagram />}>@jovicosta</Button>
              </Link>
            </ListItem> */}
          </List>
          {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
