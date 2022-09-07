import { Box, Image, Heading, Text, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../pages/app.module.css";
import Landing from "../pages/landing";
import Voting from "../pages/voting";
import Victors from "../pages/victors";

const NavBar = () => {
  return (
    <Box px={12} py={4} bg="black">
      <HStack align="center" spacing={4}>
        <Image src="/cheese-icon.svg" w={10} />
        <Heading color="white" fontSize="2xl">
          Grand Cheese Race
        </Heading>
        <Spacer />
        <HStack color="white" fontSize="2xs" fontWeight="semibold">
          {/* <div className={styles.font}> */}
          <Link href="/"> 
            <Text >HOME</Text>
          </Link>
            <Text>/</Text>
          <Link href="/voting">
            <Text>VOTING</Text>
          </Link>
            <Text>/</Text>
          <Link href="/victors">
            <Text>PAST VICTORS</Text>
          </Link>
          {/* </div> */}
          {/* <Text>/</Text>
          <Text>PAST VICTORS</Text> */}
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
