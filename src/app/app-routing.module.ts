import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoundListComponent } from "./sound-list/sound-list.component";


const routes: Routes = [
  {component: SoundListComponent, path: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
