import { inject, TestBed } from "@angular/core/testing";
import { CardListsService } from './card-lists.service';
import { CardList } from './card-list';

describe('CardListService.getCardLists', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CardListsService]
        })
    })

    it('should return empty array', inject([CardListsService], (service: CardListsService) => {
        let lists = service.getCardLists()

        expect(lists).not.toBeUndefined()
        expect(lists).not.toBeNull()
        expect(lists.length).toEqual(0)
    }))

    it('should return array with one list', inject([CardListsService], (service: CardListsService) => {
        service.addCardList('List name 1')
        service.addCardList('List name 2')
        service.addCardList('List name 3')

        let lists = service.getCardLists()

        expect(lists).not.toBeUndefined()
        expect(lists).not.toBeNull()
        expect(lists.length).toEqual(3)
    }))
})