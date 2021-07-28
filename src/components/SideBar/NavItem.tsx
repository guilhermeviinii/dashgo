import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavItemProps {
  title: string;
  children: ReactNode;
}

export function NavItem({ children, title }: NavItemProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="flex-start">
        {children}
      </Stack>
    </Box>
  );
}
