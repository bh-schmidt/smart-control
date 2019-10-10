import { inject, TestBed } from '@angular/core/testing';
import { Guid } from 'guid-typescript';
import { CardListsService } from '../card-lists.service';
import { CardService } from './card.service';
import { BoardModule } from '../../board.module';

describe('CardService.getCard', () => {
    let cardListService: CardListsService

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BoardModule]
        });

        cardListService = TestBed.get(CardListsService)
    });

    it('should return the card', inject([CardService], (service: CardService) => {
        const cardGuid = Guid.create()
        const cardList = {
            guid: Guid.create(),
            name: 'Card List',
            cards: [
                {
                    guid: cardGuid,
                    title: 'Card title',
                    description: 'Card description'
                }
            ]
        }

        spyOn(cardListService, 'getCardListByCardGuid').and.returnValue(cardList)

        const card = service.getCard(cardGuid)

        expect(card).toEqual(cardList.cards[0])
        expect(cardListService.getCardListByCardGuid).toHaveBeenCalled()
    }))

    it('should return null because guid is null', inject([CardService], (service: CardService) => {
        const card = service.getCard(null)

        expect(card).toEqual(null)
    }))

    it('should return null because the cardList was null', inject([CardService], (service: CardService) => {
        const cardGuid = Guid.create()

        spyOn(cardListService, 'getCardListByCardGuid').and.returnValue(null)

        const card = service.getCard(cardGuid)

        expect(card).toEqual(null)
        expect(cardListService.getCardListByCardGuid).toHaveBeenCalled()
    }))

    it('should return null because the cards of the list were null', inject([CardService], (service: CardService) => {
        const cardGuid = Guid.create()
        const cardList = {
            guid: Guid.create(),
            name: 'Card List',
            cards: null
        }

        spyOn(cardListService, 'getCardListByCardGuid').and.returnValue(cardList)

        const card = service.getCard(cardGuid)

        expect(card).toEqual(null)
        expect(cardListService.getCardListByCardGuid).toHaveBeenCalled()
    }))
})