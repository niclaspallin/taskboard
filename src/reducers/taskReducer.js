import {LOAD_TASKS_SUCCESS, CREATE_TASK_SUCCESS, UPDATE_TASK_SUCCESS, DELETE_TASK_SUCCESS} from '../constants/actionTypes';
import initialState from './initialState';

export default function loadTasksReducer(state = initialState.tasks, action) {
  switch(action.type) {
    case LOAD_TASKS_SUCCESS:
      return action.tasks;
		case UPDATE_TASK_SUCCESS:
			return state.map(item => {
				if(item.id === action.task.id) {
					return Object.assign({}, action.task);
				}
				return item;
			});
    case CREATE_TASK_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.task)
      ];
		case DELETE_TASK_SUCCESS:
			return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}
