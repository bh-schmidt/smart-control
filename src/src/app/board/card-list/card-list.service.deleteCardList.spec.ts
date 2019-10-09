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

    it('should ', inject([CardListsService], (service: CardListsService) => {
        const lists = service.getCardLists()
        const list = lists[1]
        
        const deleted = service.deleteCardList(list.guid)

        let x:string = null

        // console.log(''.isNullOrEmpty());
        // console.log(x.isNullOrEmpty());

        expect(deleted).toEqual(true)
        expect(lists.length).toEqual(2)
    }))
})