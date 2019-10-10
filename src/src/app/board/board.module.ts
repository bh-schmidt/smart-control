import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { CardListComponent } from './card-list/card-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NewCardListComponent } from './new-card-list/new-card-list.component';
import { FormsModule } from '@angular/forms';
import { ViewCardComponent } from './card-list/card/view-card/view-card.component';
import { NewCardComponent } from './card-list/card/new-card/new-card.component';
import { EditCardComponent } from './card-list/card/edit-card/edit-card.component';
import { SharedModule } from '../shared/shared.module';
import { DeleteCardListComponent } from './delete-card-list/delete-card-list.component';
import { DeleteCardComponent } from './card-list/card/delete-card/delete-card.component';
import { CardListsService } from './card-list/card-lists.service';
import { CardService } from './card-list/card/card.service';

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
        EditCardComponent,
        DeleteCardListComponent,
        DeleteCardComponent
    ],
    providers: [
        CardListsService,
        CardService
    ]
})
export class BoardModule { }
