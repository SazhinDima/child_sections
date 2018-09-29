import React, {Component} from 'react';
import { Container } from 'native-base';

import { GiftedChat } from 'react-native-gifted-chat'

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Chat extends Component {

    constructor(props) {
        super(props);

        this.state = {
          messages: [
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/people',
              },
            },
          ]
        }
    }

    onSend(messages = []) {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }))
    }

    render() {
        return (
            <Container>
                <GiftedChat
                  messages={this.state.messages}
                  onSend={messages => this.onSend(messages)}
                  user={{
                    _id: 1,
                  }}
                />
            </Container>
        );
    }

}

export default connect(null, null)(Chat);