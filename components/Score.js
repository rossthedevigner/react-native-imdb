import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Text, G } from 'react-native-svg';

const Score = ({ score, width = '80', height = '80' }) => {
  return (
    <Svg height={height} width={width} viewBox="0 0 100 100">
      <Circle
        cx="50"
        cy="50"
        r="45"
        stroke="#0a99e0"
        //   strokeWidth="2.5"
        fill="#0a99e0"></Circle>
      <G textAnchor="middle">
        <Text
          fill="#ffffff"
          fontSize="34"
          x="50"
          y="52"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontFamily="nunito-light">
          {score}
        </Text>
      </G>
    </Svg>
  );
};

export { Score };
