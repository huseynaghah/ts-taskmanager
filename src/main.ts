type ID  = number | string;

interface Task {
  id : ID,
  title : string,
  description? : string,
  status : TaskStatus,
  priority : TaskPriority
}

// interface Human {
//   id : number,
//   name : string,
//   surname : string 
// }

enum TaskStatus{
  pending = "pending",
  completed = "completed",
  inProgress = "in Progress"
}

enum TaskPriority{
  low = "low",
  medium = "medium",
  high = "high"
}

class TaskManager<U extends Task>{

  private tasks : U[] = [];

  addTask(task : U): void{
    this.tasks.push(task);
  };

  updateTask(id: ID, update : Partial<U>) : void{
    let task = this.tasks.find((element) => element.id === id);
    if (task) {
      // task = {...task, update};
      Object.assign(task, update)
    }else{
      console.log("Task with given id is not defined!")
    }
    // Object.assign(task, update)

  }

  deleteTask(id : ID) : void{
    this.tasks = this.tasks.filter((element) => element.id !== id);
  }

  getTasks() : U[]{
    return this.tasks
  }

  getTasksForPriority(priority : TaskPriority) : U[]{
    return this.tasks.filter((element) => element.priority === priority)
  }

  getTasksForStatus(status : TaskStatus) : U[]{
    return this.tasks.filter((element) => element.status === status);
  }

}

const manager = new TaskManager<Task>();

manager.addTask({
  id : 1,
  title : "TypeScript",
  description : "Learn enums",
  priority : TaskPriority.high,
  status : TaskStatus.pending
})

manager.addTask({
  id : "e3rt",
  title : "Driving Lessons",
  priority : TaskPriority.medium,
  status: TaskStatus.inProgress
})

manager.updateTask(1, {status : TaskStatus.inProgress});

console.log(manager.getTasksForStatus(TaskStatus.pending));



// manager.deleteTask("e3rt");

console.log(manager.getTasks());


