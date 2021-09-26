import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: 'inicio', component: AppComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: '**', redirectTo: '/inicio'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
