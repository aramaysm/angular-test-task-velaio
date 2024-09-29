import { Component, NgModule } from '@angular/core';
import { FormControl, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { StatusEnum, Task } from '../../../../models/task.model';
import { Skill } from '../../../../models/skill.model';
import { CommonModule } from '@angular/common';
import { Person } from '../../../../models/person.model';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css',
})
export class AddTaskFormComponent {
  list_task: Task[] = [
    {
      id:1,
      name: 'Init project',
      date_limit: new Date('2024-09-28'),
      status: StatusEnum.COMPLETED,
      persons_assigneds: [
        {
          id: 1,
          name: 'Pedro Sanchez',
          age: 19,
          skills: [
            {
              id: 1,
              name: 'Comunication',
            },
            {
              id: 2,
              name: 'Truth',
            },
          ],
        },
        {
          id: 2,
          name: 'Lucia martinez',
          age: 25,
          skills: [
            {
              id: 1,
              name: 'Comunication',
            },
            {
              id: 2,
              name: 'Truth',
            },
          ],
        }
      ],
    },
  ];


  name_task = new FormControl('');
  date_limit = new FormControl('');
  show_add_person: boolean = false;
  name_person = new FormControl('');
  age_person = new FormControl(0);
  show_add_skill: boolean = false;
  name_skill = new FormControl('');

  skills_actual: Skill[] = [];
  persons: Person[]=[];
  
  onAddPerson() {
    this.show_add_person = true;
  }

  onAddSkill() {
    this.show_add_skill = true;     
  }

  onSaveSkill() {
    this.show_add_skill = false;
    
    if(this.name_skill.value)
      this.skills_actual.push({
        id: (this.skills_actual.length) + 1,
        name: this.name_skill.value 
      });
    
      this.name_skill.setValue("");
  }

  deleteSkill(skill:any){
    const found  = this.skills_actual.findIndex((item)=> item.name === skill.name) ;
    
    if(found){
      this.skills_actual.splice(found,1);
    }  
  }

 
  onSavePerson(){
    this.show_add_person = false;

    if(this.name_person.value && this.age_person.value && this.name_person.valid && this.age_person.valid){
      this.persons.push({
        id: (this.persons.length) + 1,
        name: this.name_person.value,
        age: this.age_person.value,
        skills: this.skills_actual 
      });
      this.name_person.setValue("");
      this.age_person.setValue(18);
      this.skills_actual = []
    }

    else{
      alert("Hay errores en el formulario")
    }
         
      
  }

  deletePerson(person: any){
    const found  = this.persons.findIndex((item)=> item.id === person.id) ;
    
    if(found){
      this.persons.splice(found,1);
    }  
  }

 
}
