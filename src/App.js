import { Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import InputShortner from "./InputShortner";
import Result from "./Result";

function App() {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <VStack p="10%">
      <Heading mb={4} fontWeight="extrabold" size="2xl">
        URL Shortner
      </Heading>
      <InputShortner setShortUrl={setShortUrl} />
      <Result shortUrl={shortUrl} />
    </VStack>
  );
}

export default App;
