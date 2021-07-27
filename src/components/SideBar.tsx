import { Box, Link, Stack, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine } from "react-icons/ri";
export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="flex-start">
            <Link display="flex" alignItems="center" justifyContent="center"  >
              <Icon as={RiDashboardLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" alignItems="center" justifyContent="center"  >
              <Icon as={RiContactsLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center" justifyContent="center"  >
              <Icon as={RiDashboardLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Formulários
              </Text>
            </Link>
            <Link display="flex" alignItems="center" justifyContent="center"  >
              <Icon as={RiGitMergeLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Automaçao
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
