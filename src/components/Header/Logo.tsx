import { Text } from "@chakra-ui/react";

interface LogoProps {
  centeredLogo?: boolean;
}

export function Logo({centeredLogo = false}: LogoProps) {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      textAlign={centeredLogo ? "center" : "left"}
    >dashgo<Text as="span" ml="1" color="pink.500">.</Text>
    </Text>
  );
}
