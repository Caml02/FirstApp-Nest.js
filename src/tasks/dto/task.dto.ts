import { TaskStatus } from "../task.entity"

export class createTaskDto {
    tittle: string
    description: string
}

export class updateTaskDto {
    tittle?: string
    description?: string
    status?: TaskStatus
}