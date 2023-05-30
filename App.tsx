import React from 'react';
import Navbar from './src/components/Navbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import Home from './src/views/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Navbar />
      <Home />
    </SafeAreaView>
  );
}
export default App;
