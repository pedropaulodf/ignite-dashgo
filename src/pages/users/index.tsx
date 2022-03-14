import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";

export default function UserList() {
  const { data, isLoading, error } = useQuery("users", async () => {
    const response = await fetch("https://dashgo-ignite-pedropaulodf.vercel.app/api/users");
    const data = await response.json();

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
      }
    })

    return users;
  },
  {
    staleTime: 1000 * 5,
  });

  // Estado para o isWideVersion já começar como false para corrigir bug ao abrir a página
  const [isWideVersion, setIsWideVersion] = useState(false);

  // Hook para monitorar o breakpoint
  const isWideVersionChakra = useBreakpointValue({
    base: false,
    md: true,
  });

  // useEffect para setar o estado
  useEffect(() => {
    setIsWideVersion(isWideVersionChakra);
  }, [isWideVersionChakra]);

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Usuários | dashgo.</title>
      </Head>
      <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <SideBar />

          <Box flex="1" borderRadius="8" bg="gray.800" p="8">
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usuários
              </Heading>

              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>

            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                <Text>Falha ao obter dados dos usuários</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha" w={["100%"]}>
                  <Thead>
                    {isWideVersion ? (
                      <Tr>
                        <Th px={["0", "0", "6"]} color="gray.300" width="8">
                          <Checkbox colorScheme="pink" />
                        </Th>
                        <Th>Usuário</Th>
                        <Th>Data de cadastro</Th>
                        <Th>Ações</Th>
                      </Tr>
                    ) : (
                      <Tr>
                        <Th
                          px={["0", "0", "6"]}
                          color="gray.300"
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Text>Selecionar todos:</Text>
                          <Checkbox colorScheme="pink" />
                        </Th>
                      </Tr>
                    )}
                  </Thead>
                  <Tbody>
                    {data.map((user) => (
                      <Tr
                        key={user.id}
                        display={["block", "block", "table-row"]}
                        borderBottom={[
                          "2px dashed gray",
                          "2px dashed gray",
                          "none",
                        ]}
                        _last={{ borderBottom: "none" }}
                      >
                        <Td
                          px={["0", "0", "6"]}
                          textAlign={["right", "right", "inherit"]}
                          justifyContent={[
                            "space-between",
                            "space-between",
                            "inherit",
                          ]}
                          display={["flex", "flex", "revert"]}
                          _before={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "left",
                            color: "gray.400",
                            content: `attr(data-label)`,
                          }}
                          data-label={!isWideVersion ? "Check:" : ""}
                        >
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td
                          px={["0", "0", "6"]}
                          textAlign={["right", "right", "inherit"]}
                          justifyContent={[
                            "space-between",
                            "space-between",
                            "inherit",
                          ]}
                          display={["flex", "flex", "revert"]}
                          _before={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "left",
                            color: "gray.400",
                            content: `attr(data-label)`,
                          }}
                          data-label={!isWideVersion ? "Usuário:" : ""}
                        >
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        <Td
                          px={["0", "0", "6"]}
                          textAlign={["right", "right", "inherit"]}
                          justifyContent={[
                            "space-between",
                            "space-between",
                            "inherit",
                          ]}
                          display={["flex", "flex", "revert"]}
                          _before={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "left",
                            color: "gray.400",
                            content: `attr(data-label)`,
                          }}
                          data-label={!isWideVersion ? "Data de Cadastro:" : ""}
                        >
                          {user.createdAt}
                        </Td>
                        <Td
                          px={["0", "0", "6"]}
                          textAlign={["right", "right", "inherit"]}
                          justifyContent={[
                            "space-between",
                            "space-between",
                            "inherit",
                          ]}
                          display={["flex", "flex", "revert"]}
                          _before={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "left",
                            color: "gray.400",
                            content: `attr(data-label)`,
                          }}
                          data-label={!isWideVersion ? "Ações:" : ""}
                        >
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="purple"
                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                            _hover={{
                              cursor: "pointer",
                            }}
                          >
                            Editar
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>

                <Pagination />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
