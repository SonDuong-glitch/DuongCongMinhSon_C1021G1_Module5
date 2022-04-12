import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryListComponent} from './dictionary/dictionary-list/dictionary-list.component';
import {DictionaryInforComponent} from './dictionary/dictionary-infor/dictionary-infor.component';


const routes: Routes = [{
  path: '',
  component: DictionaryListComponent
}, {
  path: 'findById',
  children: [
    {path: 'mean/:id', component: DictionaryInforComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
