import { Person } from "./person.model";

export enum StatusEnum{
    COMPLETED = "Completado",
    PENDING = "Pendiente"
}

export interface Task{
    id: number,
    name: string,
    status: StatusEnum,
    date_limit: Date,
    persons_assigneds: Person[]
}