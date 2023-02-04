import {
  Button,
  VStack,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function InputShortner(props) {
  const { setShortUrl } = { ...props };
  const [url, setUrl] = useState("");

  function inputChange(event) {
    setUrl(event.target.value);
  }

  const shortenUrl = async () => {
    try {
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
      setShortUrl(res.data.result.full_share_link);
    } catch (err) {}
  };

  return (
    <VStack pt="2rem">
      <InputGroup size="lg">
        <Input
          placeholder="Enter Url"
          type="text"
          variant="filled"
          size="lg"
          onChange={inputChange}
          value={url}
        />
        <InputRightAddon
          alignItems="stretch"
          padding={0}
          size="lg"
          children={
            <Button background="transparent" height="100%" onClick={shortenUrl}>
              Shorten Url
            </Button>
          }
        />
      </InputGroup>
    </VStack>
  );
}
