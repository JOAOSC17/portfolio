import NextLink from 'next/link'
import { Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import { Global } from '@emotion/react'


export const GridItem = ({
    children,
    href,
    tittle,
    thumbnail
}) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail}
            alt={tittle}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{tittle}</Text>
                <Text fontSize={14}>{children}</Text>
            </LinkOverlay>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({
    children,
    id,
    tittle,
    thumbnail
}) => (
    <Box w="100%" align="center">
        <LinkBox 
            cursor="pointer"
            scroll={"false"}
            >
                <Image
                src={thumbnail}
                alt={tittle}
                className="grid-item-thumbnail"
                placeholder="blur"
                />
            <LinkOverlay as={NextLink}  href={`/works/${id}`}>
                <Text mt={2} fontSize={20}>{tittle}</Text>
                <Text fontSize={14}>{children}</Text>
            </LinkOverlay>
        </LinkBox>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
            .grid-item-thumbnail {
                border-radius: 12px;
            }
        `}
    />
)
