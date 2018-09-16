import { createStore, compose, StoreEnhancer, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import freezeState from './freezeState';

declare var window: any;

const devToolsExtension: StoreEnhancer = (window.devToolsExtension)
    ? window.devToolsExtension() : (f) => f;

export const store = createStore(reducer, compose(applyMiddleware(freezeState), devToolsExtension) as StoreEnhancer);

