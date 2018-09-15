import { createStore, compose, StoreEnhancer } from 'redux';
import { reducer } from './reducer';

declare var window: any;

const devToolsExtension: StoreEnhancer = (window.devToolsExtension)
    ? window.devToolsExtension() : (f) => f;

export const store = createStore(reducer, compose(devToolsExtension) as StoreEnhancer);

