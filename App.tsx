import React from 'react';
// import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
// import { DevSettings, SafeAreaView, NativeModules } from 'react-native';
import RootNavigation from './src/navigation';

function App(): React.JSX.Element {
  // useEffect(() => {
  //   if (__DEV__) {
  //     DevSettings.addMenuItem('Debugging With debugger', () => {
  //       NativeModules.DevSettings.setIsDebuggingRemotely(true);
  //     });
  //     DevSettings.addMenuItem('Stop Debugging With debugger', () => {
  //       NativeModules.DevSettings.setIsDebuggingRemotely(false);
  //     });
  //   }j
  // }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootNavigation />
    </SafeAreaView>
  );
}

export default App;
