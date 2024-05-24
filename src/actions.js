// actions.js

// Типы действий
export const ACTION_TYPE_1 = 'ACTION_TYPE_1';
export const ACTION_TYPE_2 = 'ACTION_TYPE_2';

// Создание действий
export const action1 = (payload) => ({
  type: ACTION_TYPE_1,
  payload,
});

export const action2 = (payload) => ({
  type: ACTION_TYPE_2,
  payload,
});
