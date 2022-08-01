import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper'; 
import { StackNavigator } from './src/components/StackNavigator';

const App = () => {
  return (
    <PaperProvider>
      <StackNavigator />
    </PaperProvider>
  )
}


export default App;