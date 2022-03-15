import { Box, Circle, HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav() {
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Box position="relative">
        <Tooltip
          label="28 notificações"
          hasArrow
          shouldWrapChildren
          placement="right"
          ml="34px"
          mt="-26px"
          bg='tomato'
        >
          <Circle
            size="10px"
            padding="7px 10px"
            bg="tomato"
            color="white"
            position="absolute"
            right="-12px"
            top="-6px"
          >
            <Text fontSize="xx-small" cursor="default">
              9+
            </Text>
          </Circle>
        </Tooltip>
        <Icon as={RiNotificationLine} fontSize="20" />
      </Box>
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
}
