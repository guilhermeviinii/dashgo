import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Checkbox,
  Tbody,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";
import Link from "next/link";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1140} px={["1", "1", "6"]} mx="auto">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link passHref href="/users/create">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["3", , "3", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de Cadastro</Th>}
                {isWideVersion && <Th></Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr px={["1", , "1", "6"]}>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Guiherme</Text>
                    <Text fontWeight="normal" color="gray.300" fontSize="sm">
                      downnxd@hotmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="xs"
                      fontSize="sm"
                      colorScheme="teal"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
              <Tr px={["1", , "1", "6"]}>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Guiherme</Text>
                    <Text fontWeight="normal" color="gray.300" fontSize="sm">
                      downnxd@hotmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="xs"
                      fontSize="sm"
                      colorScheme="teal"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
              <Tr px={["1", , "1", "6"]}>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Guiherme</Text>
                    <Text fontWeight="normal" color="gray.300" fontSize="sm">
                      downnxd@hotmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="xs"
                      fontSize="sm"
                      colorScheme="teal"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
