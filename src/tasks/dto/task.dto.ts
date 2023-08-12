import { TaskStatus } from "../task.entity"
import { IsNotEmpty, IsString, MinLength, IsOptional, IsIn} from 'class-validator';

export class createTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    tittle: string
    description: string
}

export class updateTaskDto {
    @IsString()
    @IsOptional()
    tittle?: string
    @IsString()
    @IsOptional()
    description?: string
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus
}