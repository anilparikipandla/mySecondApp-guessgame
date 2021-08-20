import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';
import Card from '../components/Card';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.title}>The Game is Over!</Text>
        <Text>Number of rounds: {props.totalRounds}</Text>
        <Text>Number was: {props.userNumber}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title='New game'
            color={Colors.primary}
            onPress={props.onRestart}
          ></Button>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});
export default GameOverScreen;
