import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { updateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
    
private tasks: Task [] =[
    //simulate a database
    {
    id: '1',
    tittle: 'first Task',
    description: "some task",
    status: TaskStatus.PENDING,
    },
];

    getAllTasks() {
        return  this.tasks;
    }
    
    createTasks(tittle: string, description: string) {
        const task =  {
            id: v4(),
            tittle,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task);

        return task;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id)
    }  

    updateTask(id: string, updateFields: updateTaskDto): Task {
        const task = this.getTaskById(id) 
        const newTask = Object.assign(task, updateFields)
        this.tasks = this.tasks.map(task => task.id === id ? newTask : task)
        return newTask;
    }


    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id)
        
    }
}

