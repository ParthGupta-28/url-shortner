import { Heading, VStack } from "@chakra-ui/react";
import "./App.css";
import InputShortner from "./InputShortner";

function App() {
  return (
    <VStack p="10%">
      <Heading mb={4} fontWeight="extrabold" size="2xl">
        URL Shortner
      </Heading>
      <InputShortner />
    </VStack>
  );
}

export default App;
