import * as React from 'react';
import {Header} from '@rneui/base';

export default function Navbar(): JSX.Element {
  return (
    <Header
      backgroundColor="#db491f"
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: 'DarkCafe App',
        style: {color: '#fff', fontSize: 25},
      }}
      centerContainerStyle={{}}
      containerStyle={{width: '100%'}}
      linearGradientProps={{}}
      placement="center"
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
  );
}
