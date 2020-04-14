import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducers from './reducer';

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
