import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Box textAlign="center" fontSize="xl" maxW={'680px'} mx={'auto'} px={2}>
        <Timer {...{mins: 1, secs: 20}}/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
