import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [

  { path: '', component: AddTaskFormComponent,
 
   },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddTaskFormComponent, 
    FormsModule, 
    ReactiveFormsModule ,
    RouterModule.forChild(routes)  
  ],
  exports:[
    
    RouterModule
  ]
})
export class ToDoModule { 

}
