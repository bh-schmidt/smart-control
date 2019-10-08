/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { Guid } from 'guid-typescript';
import { Card } from '../card';
import { CardListsService } from '../card-lists.service';
import { CardService } from './card.service';

describe('CardService.addCard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CardService, CardListsService]
        });
    });

    it('should return true', inject([CardService], (cardService: CardService) => {
        const cardList = {
            guid: Guid.create(),
            cards: [],
            name: 'Card List'
        }
        let card = new Card()
        card.title = 'title'

        spyOn(cardService.cardListService, 'getCardLists').and.returnValue([])
        spyOn(cardService.cardListService, "getCardList").and.returnValue(cardList)

        let result = cardService.addCard(card, cardList.guid)

        expect(result).toEqual(true)
        expect(cardService.cardListService.getCardLists).toHaveBeenCalled()
        expect(cardService.cardListService.getCardList).toHaveBeenCalled()
    }))

    it('should return true because the card will be converted to array', inject([CardService], (cardService: CardService) => {
        const cardList = {
            guid: Guid.create(),
            cards: null,
            name: 'Card List'
        }

        let card = new Card()
        card.title = 'title'

        spyOn(cardService.cardListService, 'getCardLists').and.returnValue([])
        spyOn(cardService.cardListService, "getCardList").and.returnValue(cardList)

        let result = cardService.addCard(card, cardList.guid)

        expect(result).toEqual(true)
        expect(cardService.cardListService.getCardLists).toHaveBeenCalled()
        expect(cardService.cardListService.getCardList).toHaveBeenCalled()
    }))

    it('should return false because guid is null', inject([CardService], (cardService: CardService) => {
        let result = cardService.addCard(new Card(), null)

        expect(result).toEqual(false)
    }))

    it('should return false because card is null', inject([CardService], (cardService: CardService) => {
        let result = cardService.addCard(null, Guid.create())

        expect(result).toEqual(false)
    }))

    it('should return false because title is null or empty', inject([CardService], (cardService: CardService) => {
        let result = cardService.addCard(new Card(), Guid.create())

        expect(result).toEqual(false)
    }))

    it('should return false because there is another card with the same title', inject([CardService], (cardService: CardService) => {
        let card = new Card()
        card.title = 'title'

        const cardList = {
            guid: Guid.create(),
            cards: [],
            name: 'Card List'
        }

        spyOn(cardService.cardListService, 'getCardLists').and.returnValue([])

        let result = cardService.addCard(card, cardList.guid)

        expect(result).toEqual(false)
        expect(cardService.cardListService.getCardLists).toHaveBeenCalled()
    }))

    it('should return false because card not finded.', inject([CardService], (cardService: CardService) => {
        let card = new Card()
        card.title = 'title'

        spyOn(cardService.cardListService, "getCardLists").and.returnValue([])
        spyOn(cardService.cardListService, "getCardList").and.returnValue(null)

        let result = cardService.addCard(card, Guid.create())

        expect(result).toEqual(false)
        expect(cardService.cardListService.getCardLists).toHaveBeenCalled()
        expect(cardService.cardListService.getCardList).toHaveBeenCalled()
    }))
});
