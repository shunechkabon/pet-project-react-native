import React, { useEffect } from 'react';
import { DevSettings, SafeAreaView, NativeModules } from 'react-native';
import LoginPage from './src/screen/Auth/Login';

function App(): React.JSX.Element {
  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Debugging With debugger', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(true);
      });
      DevSettings.addMenuItem('Stop Debugging With debugger', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(false);
      });
    }
  }, []);
  console.log('Info', { age: 25, array: [1, 2, 3, 4, { name: 'sasha' }] });
  console.log('Info', {age:25, array:[1,2,3,4, {name: 'sasha'}]});
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginPage />
    </SafeAreaView>
  );
}

export default App;
