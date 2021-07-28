import {
  Box,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import React from "react";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext";
import { SideBarItem } from "./SideBarItem";
export function SideBar() {
  const { isOpen, onClose } = useSideBarDrawer();

  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />

            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarItem />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SideBarItem />
    </Box>
  );
}
