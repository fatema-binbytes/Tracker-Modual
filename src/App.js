import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import {store, persistor} from './store';
import RootNavigation from './navigation';
import {StatusBar} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor={'#000'} />
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
