import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class ReadStoryScren extends React.Component {
  render() {
    return (
      <View>
        <SafeAreaProvider>
        <Header
          centerComponent={{ text: 'Read Story', style: { color: '#fff' } }}
        />
        <Text>Read Story Screen</Text>
        </SafeAreaProvider>
      </View>
    );
  }
}
