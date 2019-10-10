import { inject, TestBed } from "@angular/core/testing";
import { Guid } from 'guid-typescript';
import { BoardModule } from '../board.module';
import { CardListsService } from './card-lists.service';

describe('CardListService.getCardLists', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BoardModule]
        })

        const service: CardListsService = TestBed.get(CardListsService)
        service.addCardList('Card List 1')
        service.addCardList('Card List 2')
        service.addCardList('Card List 3')
    })

    it('should delete the list', inject([CardListsService], (service: CardListsService) => {
        const lists = service.getCardLists()
        const list = lists[1]

        const deleted = service.deleteCardList(list.guid)

        expect(deleted).toEqual(true)
        expect(lists.length).toEqual(2)
    }))

    it('should return false because guid is null', inject([CardListsService], (service: CardListsService) => {
        const lists = service.getCardLists()

        const deleted = service.deleteCardList(null)

        expect(deleted).toEqual(false)
        expect(lists.length).toEqual(3)
    }))

    it('should return false because list was not found', inject([CardListsService], (service: CardListsService) => {
        const lists = service.getCardLists()

        const deleted = service.deleteCardList(Guid.create())

        expect(deleted).toEqual(false)
        expect(lists.length).toEqual(3)
    }))
})