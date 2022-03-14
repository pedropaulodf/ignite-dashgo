import { useEffect, useState } from "react";
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  // Estado para o isWideVersion já começar como false para corrigir erro no console ao abrir a página
  const [isWideVersion, setIsWideVersion] = useState(false);
  
  // Hook para monitorar o breakpoint
  const isWideVersionChakra = useBreakpointValue({
    base: false,
    md: true,
  });

  // useEffect para setar o estado
  useEffect(() => {
    setIsWideVersion(isWideVersionChakra);
  },[isWideVersionChakra])

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          mt="3"
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
