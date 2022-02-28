import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        borderWidth='thin'
        borderColor="pink.400"
        m="4"
      >
        
        <Stack spacing="4">
          <Flex
            justifyContent="center"
            alignItems="center"
            mb="4"
          >
            <Text 
              fontSize="5xl" 
              fontWeight="bold" 
              letterSpacing="tight" 
              textAlign="center"
            >
              dashgo
              <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>
          </Flex>
        
          <Input name="email" type="email" label="E-mail:" />
          <Input name="password" type="password" label="Senha:" />

        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
