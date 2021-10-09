import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text, Center, Button, Box, VStack } from '@chakra-ui/react';

import './Timer.scss';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secs: props.secs, mins: props.mins, percent: 0 };
    this.timer = 0;
  };
  start = () => {
    this.timer = setInterval(this.tick, 1000);
  }
  // const percent = ((mins * 60 + secs) / (initialMin * 60 + initialSec)) * 100;
  tick = () => {
    if (this.state.mins === 0 && this.state.secs === 0) {
      clearInterval(this.timer);
      console.warn('Finished');
    } else if (this.state.secs === 0) {
      this.setState({ mins: this.state.mins - 1, secs: 59 });
    } else {
      this.setState({ secs: this.state.secs - 1 });
    }
  };
  render() {
    return (
      <Tabs className="timer" isFitted variant="enclosed" borderBottom="0px solid transparent !important">
        <TabList mb="1em">
          <Tab _selected={{ bg: 'rgba(200, 200, 200, 0.1)', boxShadow: '1px 1px 6px 5px rgba(0,0,0,0.2) !important' }}>Pomodoro</Tab>
          <Tab _selected={{ bg: 'rgba(200, 200, 200, 0.1)', boxShadow: '1px 1px 6px 5px rgba(0,0,0,0.2) !important' }}>Short Break</Tab>
          <Tab _selected={{ bg: 'rgba(200, 200, 200, 0.1)', boxShadow: '1px 1px 6px 5px rgba(0,0,0,0.2) !important' }}>Long Break</Tab>
        </TabList>
        <TabPanels bg={'rgba(200, 200, 200, 0.1)'} borderRadius={'0 0 6px 6px'} boxShadow={'0px 0px 6px 5px rgba(0,0,0,0.2)'}>
          <TabPanel>

            <VStack mb={2}>
              <Box mb={2} h={'300px'} w={'300px'} borderRadius={'50%'} transition={'background 0.5s ease'}
                bg={`conic-gradient(transparent ${100-(((this.state.mins * 60 + this.state.secs) / (this.props.mins * 60 + this.props.secs)) * 100)}%, rgba(200, 200, 200, 0.15) 0%, rgba(200, 200, 200, 0.15))`}
              >
                <Center minH={'300px'}>
                  <Text fontSize="7xl">{this.state.mins < 10 ? '0' + this.state.mins : this.state.mins}:{this.state.secs < 10 ? '0' + this.state.secs : this.state.secs}</Text>
                </Center>
              </Box>
              <Button colorScheme="teal" size="md" onClick={this.start}>
                Start Pomodoro
              </Button>
            </VStack>
          </TabPanel>
          <TabPanel minH={'300px'}>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  }
}

export default Timer;