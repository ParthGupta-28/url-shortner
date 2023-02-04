import {
  Button,
  VStack,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";

export default function InputShortner() {
  return (
    <VStack pt="2rem">
      <InputGroup size="lg">
        <Input type="text" variant="filled" size="lg" />
        <InputRightAddon
          alignItems="stretch"
          padding={0}
          size="lg"
          children={
            <Button background="transparent" height="100%">
              Shorten Url
            </Button>
          }
        />
      </InputGroup>
    </VStack>
  );
}
