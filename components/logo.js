import styled from "@emotion/styled";
import Link from "next/link";
import PineTree from "./icons/pineTree";
import { Text, useColorModeValue } from "@chakra-ui/react";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    &:hover img {
        transform: rotate(20deg);
    }
`
const Logo = () => {
    return( 
    <Link href="/" scroll={false}>
      <LogoBox>
        <PineTree/>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          João Costa
        </Text>
      </LogoBox>

    </Link>
    )
}

export default Logo;