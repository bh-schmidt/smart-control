import { inject, TestBed } from "@angular/core/testing";
import { CardListsService } from './card-lists.service';
import { CardList } from './card-list';
import { InjectionToken } from '@angular/core';
import { Guid } from 'guid-typescript';

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

    it('should update card list', inject([CardListsService], (service: CardListsService) => {
        const cardList = service.getCardLists()[1]
        const listName = 'Card List 4'

        const updated = service.updateCardListName(cardList.guid, listName)

        expect(updated).toEqual(true)
        expect(cardList.name).toEqual(listName)
    }))

    it('should return false because guid is null', inject([CardListsService], (service: CardListsService) => {
        const listName = 'Card List 4'

        const updated = service.updateCardListName(null, listName)

        expect(updated).toEqual(false)
    }))

    it('should return false because listName is null', inject([CardListsService], (service: CardListsService) => {
        const cardList = service.getCardLists()[1]

        const updated = service.updateCardListName(cardList.guid, null)

        expect(updated).toEqual(false)
    }))

    it('should return false because there is another list with the same name', inject([CardListsService], (service: CardListsService) => {
        const cardList = service.getCardLists()[1]
        const listName = 'Card List 3'

        const updated = service.updateCardListName(cardList.guid, listName)

        expect(updated).toEqual(false)
    }))

    it('should return false because the card was not found', inject([CardListsService], (service: CardListsService) => {
        const listName = 'Card List 4'

        const updated = service.updateCardListName(Guid.create(), listName)

        expect(updated).toEqual(false)
    }))
})

const TITLE = new InjectionToken<string>('title')