import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";

export default function Automation(){

  return (
    <>
      <Head>
        <title>Forms | dashgo.</title>
      </Head>
      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <SideBar />

          <Box
            as="form"
            flex="1"
            borderRadius="8"
            bg="gray.800"
            p={["6", "8"]}
          >
            <Heading size="lg" fontWeight="normal">
              Automação
            </Heading>

            <Divider my="6" borderColor="gray.700" />
            
            <Text>Página mockup.</Text>
          </Box>

        </Flex>
      </Flex>
    </>
  )
}