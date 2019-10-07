import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { CardListComponent } from './card-list/card-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NewCardListComponent } from './new-card-list/new-card-list.component';
import { FormsModule } from '@angular/forms';
import { ViewCardComponent } from './card-list/view-card/view-card.component';
import { NewCardComponent } from './card-list/new-card/new-card.component';
import { EditCardComponent } from './card-list/edit-card/edit-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        DragDropModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        BoardComponent,
        CardListComponent,
        NewCardListComponent,
        ViewCardComponent,
        NewCardComponent,
        EditCardComponent
    ]
})
export class BoardModule { }
