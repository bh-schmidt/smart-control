import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card-list/card/card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    imports: [
        CommonModule,
        DragDropModule
    ],
    declarations: [
        BoardComponent,
        CardListComponent,
        CardComponent
    ]
})
export class BoardModule { }
