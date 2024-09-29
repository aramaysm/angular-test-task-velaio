import { Skill } from "./skill.model";

export interface Person{
    id: number,
    name: string,
    age: number,
    skills: Skill[]
}