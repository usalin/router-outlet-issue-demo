import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      children: routes,
    }
  ], {
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
