import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SortComponent} from "./view/sort/sort.component";
import {WelcomeComponent} from "./view/welcome/welcome.component";
import {DatasetComponent} from "./view/dataset/dataset.component";
import {FaceComponent} from "./view/face/face.component";

const routes: Routes = [
//   { path: '',
// children:[
//   {
//     path: '',
//     redirectTo:'welcome',
//     pathMatch: 'full'
//   },
//   {
//     path: 'sort',
//     component: SortComponent
//   },
//   {
//     path: 'welcome',
//     component: WelcomeComponent
//   },
//   {
//     path: 'dataset',
//     component: DatasetComponent
//   },
//   {
//     path: 'face',
//     component: FaceComponent
//   }
// ]
//
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
