import { inject, TestBed } from "@angular/core/testing";
import { CardListsService } from './card-lists.service';
import { Guid } from 'guid-typescript';

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

    it('should return the card list.', inject([CardListsService], (service: CardListsService) => {
        const cardLists = service.getCardLists()
        const cardList = cardLists[1]

        const cardListResult = service.getCardList(cardList.guid)

        expect(cardListResult).not.toBeNull()
        expect(cardListResult).toEqual(cardList)
    }))

    it('should return the null because guid is null.', inject([CardListsService], (service: CardListsService) => {
        const cardListResult = service.getCardList(null)

        expect(cardListResult).toBeNull()
    }))

    it('should return the null because guid is null.', inject([CardListsService], (service: CardListsService) => {
        const cardListResult = service.getCardList(Guid.create())

        expect(cardListResult).toBeUndefined()
    }))
})