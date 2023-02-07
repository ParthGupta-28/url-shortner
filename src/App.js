import { Heading, useColorMode, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import BackGround from "./BackGround";
import InputShortner from "./InputShortner";
import Result from "./Result";

function App() {
  const [shortUrl, setShortUrl] = useState("");
  const { colorMode, toggleColorMode } = useColorMode("dark");

  useEffect(() => toggleColorMode, []);

  return (
    <VStack p="10%">
      <BackGround />
      <Heading mb={4} fontWeight="extrabold" size="2xl">
        URL Shortner
      </Heading>
      <InputShortner setShortUrl={setShortUrl} />
      <Result shortUrl={shortUrl} />
    </VStack>
  );
}

export default App;
