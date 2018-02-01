import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numberClick: 0,
		};
	}

  render() {
		const test = () => {
		  console.log('test');
			console.log(this.state.numberClick);
			const newValue =  this.state.numberClick + 1;
			this.setState({numberClick: newValue});
			console.log(this.state.numberClick);
    };

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Press button</Text>
        <Text>{this.state.numberClick}</Text>
        <Button title={"Press me"} onPress={() => (test())}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
		fontSize: 30,
  },
});
