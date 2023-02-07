import {
  InputGroup,
  InputRightAddon,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import CopyToClipboard from "react-copy-to-clipboard";

export default function Result(props) {
  const [copy, setCopy] = useState(false);

  function afterCopy() {
    setTimeout(() => setCopy(false), 500);
  }

  const { shortUrl } = { ...props };

  return (
    <VStack
      pt="1rem"
      alignItems="stretch"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
    >
      <InputGroup size="md">
        <Text
          color="gray.50"
          variant="filled"
          size="md"
          background="transparent"
          width="15rem"
          p={2}
        >
          {shortUrl}
        </Text>

        <InputRightAddon
          ml="1rem"
          borderRadius={4}
          alignItems="stretch"
          padding={0}
          size="md"
          children={
            <CopyToClipboard text={shortUrl} onCopy={() => setCopy(true)}>
              <Button
                background="transparent"
                height="100%"
                onClick={afterCopy}
              >
                {copy ? `Copied!` : `Copy to clipboard`}
              </Button>
            </CopyToClipboard>
          }
        />
      </InputGroup>
    </VStack>
  );
}
