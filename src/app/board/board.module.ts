import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card-list/card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BoardComponent,
    CardListComponent,
    CardComponent
  ]
})
export class BoardModule { }
