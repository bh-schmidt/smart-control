import { inject, TestBed } from "@angular/core/testing";
import { CardListsService } from './card-lists.service';
import { Guid } from 'guid-typescript';
import { Card } from './card';

describe('CardListService.getCardLists', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CardListsService]
        })

        const service: CardListsService = TestBed.get(CardListsService)
        service.addCardList('Card List 1')
        service.addCardList('Card List 2')
        service.addCardList('Card List 3')
    })

    it('should return the list', inject([CardListsService], (service: CardListsService) => {
        const lists = service.getCardLists()
        const list = lists[0]
        const card = new Card()
        card.guid = Guid.create()

        list.cards = [
            card
        ]

        const listResult = service.getCardListByCardGuid(card.guid)

        expect(listResult).toEqual(list)
    }))

    it('should return null because guid was null', inject([CardListsService], (service: CardListsService) => {
        const lists = service.getCardLists()
        const list = lists[0]
        const card = new Card()
        card.guid = Guid.create()

        list.cards = [
            card
        ]

        const listResult = service.getCardListByCardGuid(null)

        expect(listResult).toEqual(null)
    }))

    it('should return undefined because the list was not found', inject([CardListsService], (service: CardListsService) => {
        const lists = service.getCardLists()
        const list = lists[0]
        const card = new Card()
        card.guid = Guid.create()

        list.cards = [
            card
        ]

        const listResult = service.getCardListByCardGuid(Guid.create())

        expect(listResult).toBeUndefined()
    }))
})