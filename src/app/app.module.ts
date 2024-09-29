import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoModule } from './modules/to-do/todo.module';
import { AddTaskFormComponent } from './modules/to-do/components/add-task-form/add-task-form.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: "", redirectTo: "to-do", pathMatch:"full"
  },
 
  {
    "path" : "to-do",
    loadChildren: () => import("./modules/to-do/todo.module").then(value => value.ToDoModule)
  },
  
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToDoModule,
    RouterOutlet,
    RouterModule.forRoot(routes, {
      useHash: true,
      bindToComponentInputs: true,
    }),
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
