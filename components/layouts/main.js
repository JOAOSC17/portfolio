import Head from "next/head"
import Navbar from '../navbar'
import { Box, Container } from "@chakra-ui/react"
import dynamic from "next/dynamic";
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})
const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8} >
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" href="apple-touch-icon.png" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" type="image/png" sizes="32x32" href="apple-touch-icon.png"/>
                <title>João Costa - Homepage</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW='container.md' pt={14}>
                <LazyVoxelDog />
                {children}
            </Container>
        </Box>
    )

}

export default Main