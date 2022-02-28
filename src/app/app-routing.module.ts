import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  {
    path: 'tictactoe',
    component: TicTacToeComponent
  },
  {
    path: '',
    redirectTo: '/tictactoe',
    pathMatch: 'full'
  },
  {
    path: '**',
    //TODO: ADD 404 PAGE
    component: TicTacToeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [TicTacToeComponent]