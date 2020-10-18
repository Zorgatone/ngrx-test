import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as todos from './todos.reducer';

export interface State {
  todos: todos.State;
}

export const reducers: ActionReducerMap<State> = {
  todos: todos.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
