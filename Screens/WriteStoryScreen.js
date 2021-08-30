import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../Config'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class WriteStoryScren extends React.Component {
  constructor() {
    super();
    this.state = {
      title : '',
      author : '',
      Story : '',
    };
  }
  SubmitStory(){
    db.ref('Story/').update({
      title:this.state.title,
      author:this.state.author,
      story:this.state.story
    });
  }
  render() {
    return (
      <View>
        <SafeAreaProvider>
        <Header
          centerComponent={{ text: 'Write Story', style: { color: '#fff' } }}
        />
        <TextInput placeholder="Tiile of the story" onChangeText={(text) => {
            this.setState({ title: text });
          }} />
        <TextInput placeholder="Autor of the story" onChangeText={(text) => {
            this.setState({ author: text });
          }}/>
        <TextInput placeholder="Write Story" multiline={true} onChangeText={(text) => {
            this.setState({ story: text });
          }}/>
        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
        </SafeAreaProvider>
      </View>
    );
  }
}
