import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

const Deck = (props) => {
  const {counts} = props;
  const noOfCircle = 3;
  const arr = Array.from(Array(counts <= noOfCircle ? counts : noOfCircle));
  const circle = {
    width: 30,  
    height: 30, 
  };
  const circlestyle = {
    borderRadius: 15,  
    backgroundColor: '#ccc', 
    borderColor: '#fff', 
    borderWidth: 1,
    margin: -7
  };
  const textStyle = {
    alignItems: 'center', paddingLeft: 5
  };
  return (
    <View style={{height: 120, width: 120, alignItems: 'center', backgroundColor: 'yellow'}}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        {arr.map((i) => (
          <View key={i} style={{...circle, ...circlestyle}} />
        ))}
        {counts > noOfCircle ? 
          <View style={{...circle, ...textStyle}} >
            <Text style={{textAlign: 'center'}}>+{counts - noOfCircle}</Text>
          </View>
          : null}
      </View>
    </View>
  );
};
Deck.propTypes = {
  counts: PropTypes.number
};
export default Deck;
