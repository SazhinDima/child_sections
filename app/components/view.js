import React, {Component} from 'react';
import { Container, Content, Text, Card, CardItem, Body, Footer, FooterTab, Button, Icon } from 'native-base';
import { Calendar } from 'react-native-calendars';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class ViewSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            section: props.section
        };

        this.openChat = this.openChat.bind(this);
    }

    openChat(event) {
        Actions.chat()
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Calendar
                        current={'2012-03-01'}
                        markedDates={{
                        '2012-03-16': {selected: true, selectedColor: 'green'},
                        '2012-03-17': {selected: true, selectedColor: 'green'},
                        '2012-03-19': {selected: true, selectedColor: 'red'}
                      }}/>

                  <Card>
                    <CardItem header>
                      <Text style={{ backgroundColor: "green", color: "white" }}> March, 16 </Text>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                           Принести мяч
                        </Text>
                      </Body>
                    </CardItem>
                  </Card>
                  <Card>
                    <CardItem header>
                      <Text style={{ backgroundColor: "red", color: "white" }}> March, 19 </Text>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                           Тренировка отменена
                        </Text>
                      </Body>
                    </CardItem>
                  </Card>
                </Content>
                <Footer>
                  <FooterTab>
                    <Button onPress={(event) => this.openChat(event)}>
                      <Icon name="people" />
                    </Button>
                  </FooterTab>
                </Footer>
            </Container>
        );
    }

}

export default connect(null, null)(ViewSection);