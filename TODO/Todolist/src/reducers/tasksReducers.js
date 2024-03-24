import { TASK_ACTIONS } from '../const/taskActions'

export const reducerTask = (tasks, action) => {
  switch (action.type) {
    case TASK_ACTIONS.CREATE_TASK:{
      if (action.payload === '') {
        return alert('Please, write a task')
      }
      const newTask = {
        id: crypto.randomUUID(),
        title: action.payload,
        completed: false
      }

      return [...tasks, newTask] }

    case TASK_ACTIONS.DELETE_TASK:{
      return tasks.filter(task => task.id !== action.payload)
    }

    case TASK_ACTIONS.COMPLETE_TASK:{
      return tasks.filter(task => task.completed !== true)
    }

    case TASK_ACTIONS.TOGGLE_TASK:{
      return tasks.map(tasks => {
        if (tasks.id === action.payload.id) {
          return { ...tasks, completed: action.payload.checked }
        } else {
          return tasks
        }
      }
      )
    }

    // https://github.com/sebasz1000/programacion_web_2024-1/blob/main/standard-lintern-setup.md for automatic set up

    default:
      alert('Reducer Switch Error')
      break
  }
}
