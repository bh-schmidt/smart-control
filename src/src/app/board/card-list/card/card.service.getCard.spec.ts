import { inject, TestBed } from '@angular/core/testing';
import { Guid } from 'guid-typescript';
import { Card } from '../card';
import { CardListsService } from '../card-lists.service';
import { CardService } from './card.service';

describe('CardService.getCard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CardService, CardListsService]
        });
    });

    it('should return true', inject([CardService], (service: CardService) => {
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

        spyOn(service.cardListService, 'getCardListByCardGuid').and.returnValue(cardList)

        const card = service.getCard(cardGuid)

        expect(card).toEqual(cardList.cards[0])
        expect(service.cardListService.getCardListByCardGuid).toHaveBeenCalled()
    }))

    
})