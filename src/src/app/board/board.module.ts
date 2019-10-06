import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card-list/card/card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NewCardListComponent } from './new-card-list/new-card-list.component';
import { FormsModule } from '@angular/forms';
import { ViewCardComponent } from './card-list/view-card/view-card.component';

@NgModule({
    imports: [
        CommonModule,
        DragDropModule,
        FormsModule
    ],
    declarations: [
        BoardComponent,
        CardListComponent,
        CardComponent,
        NewCardListComponent,
        ViewCardComponent
    ]
})
export class BoardModule { }
