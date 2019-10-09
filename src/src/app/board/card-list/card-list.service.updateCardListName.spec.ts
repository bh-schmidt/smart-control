import { inject, TestBed } from "@angular/core/testing";
import { CardListsService } from './card-lists.service';
import { CardList } from './card-list';
import { InjectionToken } from '@angular/core';

describe('CardListService.updateCardListName', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CardListsService]
        })

        const service: CardListsService = TestBed.get(CardListsService)
        service.addCardList('Card List 1')
        service.addCardList('Card List 2')
        service.addCardList('Card List 3')
    })

    it('should ', inject([CardListsService], (service: CardListsService) => {

    }))
})

const TITLE = new InjectionToken<string>('title')