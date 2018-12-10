import * as React from 'react';
import { Flex, Donut } from 'rebass';
/**
 * Score screen component
 */
export interface ScoresProps {}
export class Scores extends React.Component<ScoresProps, any> {
  render() {
    return (
      <Flex align="center" justify="space-between" wrap>
        <Donut color="primary" size={128} strokeWidth={32} value={0.5625} />
        <Donut color="primary" size={128} strokeWidth={8} value={0.5625}>
          9/16
        </Donut>
        <Donut color="primary" size={128} strokeWidth={8} value={0.625} />
      </Flex>
    );
  }
}

export default Scores;
