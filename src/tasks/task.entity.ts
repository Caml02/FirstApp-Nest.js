export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

export class Task {
    id: string;
    tittle: string;
    description: string;
    status: TaskStatus;
}
