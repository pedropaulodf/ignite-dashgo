import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "../Header/Logo";
import { SidebarNav } from "./SidebarNav";

export function SideBar() {

  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    md: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={() => {}}onOverlayClick={onClose} >
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">

            <DrawerCloseButton mt="6" onClick={onClose}/>
            <DrawerHeader>
              <Logo/>
            </DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>

          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
}
