import { Component, OnInit } from '@angular/core';
import { CardListsService } from '../card-list/card-lists.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-new-card-list',
    templateUrl: './new-card-list.component.html',
    styleUrls: ['./new-card-list.component.scss']
})
export class NewCardListComponent implements OnInit {
    listName: string = '';

    inv = true

    constructor(
        private cardListService: CardListsService,
        private toastrService: ToastrService) { }

    ngOnInit() {
    }

    onSubmit(event: Event) {
        event.preventDefault()

        if(!this.isValid()){
            return
        }

        let added = this.cardListService.addCardList(this.listName)

        if(!added){
            this.toastrService.error('There is another list with the same name.')
            return
        }

        this.listName = ''
    }

    private isValid(){
        if(!this.listName){
            this.toastrService.error('The list name is required.')
            return false
        }

        return true
    }
}
