import React from 'react';

import Empty from './components/Empty';
import LargeSvg from './components/LargeSvg';
import SmallSvg from './components/SmallSvg';

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Empty/>
        <LargeSvg/>
        <SmallSvg/>
      </React.Fragment>
    );
  }
}
