import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={.3}>
                    <WorkGridItem id="inkdrop" tittle="Inkdrop" thumbnail={"https://avatars.githubusercontent.com/u/77072063?v=4"}>
                        A markdown note-talking app
                    </WorkGridItem>
                </Section>
                {/* <Section delay={.3}>
                    <WorkGridItem id="inkdrop" tittle="Inkdrop" thumbnail={"https://avatars.githubusercontent.com/u/77072063?v=4"}>
                        A markdown note-talking app
                    </WorkGridItem>
                </Section>
                <Section delay={.3}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4} >
                        Old Works
                    </Heading>
                    <WorkGridItem id="inkdrop" tittle="Inkdrop" thumbnail={"https://avatars.githubusercontent.com/u/77072063?v=4"}>
                        A markdown note-talking app
                    </WorkGridItem>
                </Section> */}
            </SimpleGrid>
        </Container>
    )
}

export default Works