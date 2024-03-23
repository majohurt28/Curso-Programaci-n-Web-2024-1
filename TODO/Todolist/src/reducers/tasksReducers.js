import { TASK_ACTIONS } from "../const/taskActions"

export const reducerTaskProvider = (tasks, action) => {
    switch(action.type) {
      case TASK_ACTIONS.CREATE_TASK:
        if (action.payload === '') {
            return alert('Please, write a task')
        }
        const newTask = {
            id: crypto.randomUUID(),
            title: action.payload,
            completed: false
        }

        const tasksList = [...tasks]
        tasksList.push(newTask);
        setTasks(tasksList);
        setText('')
    }


return [...tasks, newTask]


  }

