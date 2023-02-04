import {
  InputGroup,
  Input,
  InputRightAddon,
  Button,
  VStack,
} from "@chakra-ui/react";

export default function Result() {
  return (
    <VStack pt="1rem">
      <InputGroup size="md">
        <Input
          type="text"
          variant="filled"
          size="md"
          background="transparent"
        />
        <InputRightAddon
          ml="1rem"
          borderRadius={4}
          alignItems="stretch"
          padding={0}
          size="md"
          children={
            <Button background="transparent" height="100%">
              Copy to clipboard
            </Button>
          }
        />
      </InputGroup>
    </VStack>
  );
}
