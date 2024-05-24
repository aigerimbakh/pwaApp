import { createStore, combineReducers } from 'redux';
import { reducer1, reducer2 } from './reducers'; // Подставьте ваши редьюсеры

const rootReducer = combineReducers({
  reducer1,
  reducer2,
  // Добавьте другие редьюсеры по мере необходимости
});

const store = createStore(rootReducer);

export default store;
