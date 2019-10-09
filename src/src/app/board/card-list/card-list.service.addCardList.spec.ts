import { inject, TestBed } from "@angular/core/testing";
import { CardListsService } from './card-lists.service';

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

    it('should insert the card list', inject([CardListsService], (service: CardListsService) => {
        var added = service.addCardList('Card List 4')

        expect(added).toEqual(true)
        expect(service.getCardLists().length).toEqual(4)
    }))

    it('should return false because list is null', inject([CardListsService], (service: CardListsService) => {
        var added = service.addCardList(null)

        expect(added).toEqual(false)
        expect(service.getCardLists().length).toEqual(3)
    }))

    it('should return false because there is another list with same name', inject([CardListsService], (service: CardListsService) => {
        var added = service.addCardList('Card List 3')

        expect(added).toEqual(false)
        expect(service.getCardLists().length).toEqual(3)
    }))
})