import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SoundListComponent} from "./sound-list.component";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    SoundListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class SoundListModule { }
