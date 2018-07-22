import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Black, Green, White } from '../helpers/Colors.js'
import { Entypo } from '@expo/vector-icons';
import { __LOREM_IPSUM__ } from '../helpers/filler.js'
import moment from 'moment'

class ScoreBox extends React.Component {
  render() {
    return (
      <View style={styles.scoreBox}>
        <TouchableOpacity onPress={() => this.props.increment(1)}>
          <Entypo name="chevron-up" size={32} color={Black(1)} />
        </TouchableOpacity>
        <Text style={styles.score}>{this.props.score}</Text>
        <TouchableOpacity onPress={() => this.props.increment(-1)}>
          <Entypo name="chevron-down" size={32} color={Black(1)} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default class MessageBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0
    }
    this.increment = this.increment.bind(this)
  }

  // increments score by inc
  increment(inc) {
    console.log('incremeenting')
    this.setState({ score: this.state.score + inc })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.messageBox}>
          <Text
            numberOfLines={4} 
            style={styles.message}>
            { __LOREM_IPSUM__[0] + __LOREM_IPSUM__[1] + __LOREM_IPSUM__[2] }
          </Text>

          <Text style={styles.date}>
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
          </Text>
        </TouchableOpacity>
        <ScoreBox   
          increment={this.increment}
          score={this.state.score}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 6,
    borderBottomWidth: 1,
    borderColor: Black(1),
    height: 100,
    backgroundColor: White(1),
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  messageBox: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  message: {
    fontSize: 14
  },
  date: {
    color: Black(0.6),
    fontSize: 10,
  },
  score: {
    color: Black(1),
    textAlign: 'center',
    fontSize: 26,
    marginTop: -5,
    marginBottom: -5,
    marginRight: -1
  },
  scoreBox: {
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Green(0),
    flex: 0,
  }
});
