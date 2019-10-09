import { inject, TestBed } from '@angular/core/testing';
import { Guid } from 'guid-typescript';
import { Card } from '../card';
import { CardListsService } from '../card-lists.service';
import { CardService } from './card.service';

describe('CardService.deleteCard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CardService, CardListsService]
        });
    });

    it('should delete the card', inject([CardService], (service: CardService) => {
        const card = new Card()
        card.guid = Guid.create()
        card.title = 'Card title'
        card.description = 'Card description'

        const cardList = {
            guid: Guid.createEmpty(),
            name: 'List name',
            cards: [card]
        }

        spyOn(service.cardListService, 'getCardListByCardGuid').and.returnValue(cardList)

        const deleted = service.deleteCard(card)

        expect(deleted).toEqual(true)
        expect(cardList.cards.length).toEqual(0)
        expect(service.cardListService.getCardListByCardGuid).toHaveBeenCalled()
    }))

    it('should return false because the card is null', inject([CardService], (service: CardService) => {
        const deleted = service.deleteCard(null)

        expect(deleted).toEqual(false)
    }))
    
    it('should return false because the list returned was null', inject([CardService], (service: CardService) => {
        const card = new Card()
        card.guid = Guid.create()
        card.title = 'Card title'
        card.description = 'Card description'

        spyOn(service.cardListService, 'getCardListByCardGuid').and.returnValue(null)

        const deleted = service.deleteCard(card)

        expect(deleted).toEqual(false)
        expect(service.cardListService.getCardListByCardGuid).toHaveBeenCalled()
    }))
})