import { inject, TestBed } from '@angular/core/testing';
import { Guid } from 'guid-typescript';
import { Card } from '../card';
import { CardListsService } from '../card-lists.service';
import { CardService } from './card.service';
import { CardList } from '../card-list';
import { BoardModule } from '../../board.module';

describe('CardService.updateCard', () => {
    let cardListService: CardListsService

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BoardModule]
        });

        cardListService = TestBed.get(CardListsService)
    });

    it('should update the card', inject([CardService], (service: CardService) => {
        const card = new Card()
        card.guid = Guid.create()
        card.title = 'Card title updated'
        card.description = 'Card description updated'

        const cardList: CardList = {
            guid: Guid.create(),
            name: 'List name',
            cards: [
                {
                    guid: card.guid,
                    title: 'Card title',
                    description: 'Card description'
                }
            ]
        }

        spyOn(cardListService, 'getCardLists').and.returnValue([cardList])
        spyOn(cardListService, 'getCardListByCardGuid').and.returnValue(cardList)

        const updated = service.updateCard(card)

        expect(updated).toEqual(true)
        expect(cardList.cards[0].title).toEqual(card.title)
        expect(cardList.cards[0].description).toEqual(card.description)
        expect(cardListService.getCardLists).toHaveBeenCalled()
        expect(cardListService.getCardListByCardGuid).toHaveBeenCalled()
    }))

    it('should return false because card is null', inject([CardService], (service: CardService) => {
        const updated = service.updateCard(null)

        spyOn(cardListService, 'getCardLists')
        spyOn(cardListService, 'getCardListByCardGuid')

        expect(updated).toEqual(false)

        expect(cardListService.getCardLists).not.toHaveBeenCalled()
        expect(cardListService.getCardListByCardGuid).not.toHaveBeenCalled()
    }))

    it('should return false because card guid is null', inject([CardService], (service: CardService) => {
        const card = new Card()
        card.guid = null
        card.title = 'Card title updated'
        card.description = ''

        spyOn(cardListService, 'getCardLists')
        spyOn(cardListService, 'getCardListByCardGuid')

        const updated = service.updateCard(card)

        expect(updated).toEqual(false)
        expect(cardListService.getCardLists).not.toHaveBeenCalled()
        expect(cardListService.getCardListByCardGuid).not.toHaveBeenCalled()
    }))

    it('should return false because card title is empty', inject([CardService], (service: CardService) => {
        const card = new Card()
        card.guid = Guid.create()
        card.title = ''
        card.description = 'Card description updated'

        spyOn(cardListService, 'getCardLists')
        spyOn(cardListService, 'getCardListByCardGuid')

        const updated = service.updateCard(card)

        expect(updated).toEqual(false)
        expect(cardListService.getCardLists).not.toHaveBeenCalled()
        expect(cardListService.getCardListByCardGuid).not.toHaveBeenCalled()
    }))

    it('should return false because card description is empty', inject([CardService], (service: CardService) => {
        const card = new Card()
        card.guid = Guid.create()
        card.title = 'Card title updated'
        card.description = ''

        spyOn(cardListService, 'getCardLists')
        spyOn(cardListService, 'getCardListByCardGuid')

        const updated = service.updateCard(card)

        expect(updated).toEqual(false)
        expect(cardListService.getCardLists).not.toHaveBeenCalled()
        expect(cardListService.getCardListByCardGuid).not.toHaveBeenCalled()
    }))

    it('should return false because the card lists was null', inject([CardService], (service: CardService) => {
        const card = new Card()
        card.guid = Guid.create()
        card.title = 'Card title updated'
        card.description = 'Card description updated'

        spyOn(cardListService, 'getCardLists').and.returnValue(null)
        spyOn(cardListService, 'getCardListByCardGuid').and.returnValue(null)
        
        const updated = service.updateCard(card)

        expect(updated).toEqual(false)
        expect(cardListService.getCardLists).toHaveBeenCalled()
        expect(cardListService.getCardListByCardGuid).toHaveBeenCalled()
    }))

    it('should return false because there is another card with the same title', inject([CardService], (service: CardService) => {
        const card = new Card()
        card.guid = Guid.create()
        card.title = 'Card title updated'
        card.description = 'Card description updated'

        const cardList: CardList = {
            guid: Guid.create(),
            name: 'List name',
            cards: [
                {
                    guid: Guid.create(),
                    title: 'Card title updated',
                    description: 'Card description'
                }
            ]
        }

        spyOn(cardListService, 'getCardLists').and.returnValue([cardList])
        spyOn(cardListService, 'getCardListByCardGuid').and.returnValue(cardList)

        const updated = service.updateCard(card)

        expect(updated).toEqual(false)
        expect(cardListService.getCardLists).toHaveBeenCalled()
        expect(cardListService.getCardListByCardGuid).not.toHaveBeenCalled()
    }))

    it('should return false because the list of the card was null', inject([CardService], (service: CardService) => {
        const card = new Card()
        card.guid = Guid.create()
        card.title = 'Card title updated'
        card.description = 'Card description updated'

        const cardList: CardList = {
            guid: Guid.create(),
            name: 'List name',
            cards: [
                {
                    guid: card.guid,
                    title: 'Card title',
                    description: 'Card description'
                }
            ]
        }

        spyOn(cardListService, 'getCardLists').and.returnValue([cardList])
        spyOn(cardListService, 'getCardListByCardGuid').and.returnValue(null)

        const updated = service.updateCard(card)

        expect(updated).toEqual(false)
        expect(cardListService.getCardLists).toHaveBeenCalled()
        expect(cardListService.getCardListByCardGuid).toHaveBeenCalled()
    }))

    it('should return false because the cards of the list was null', inject([CardService], (service: CardService) => {
        const card = new Card()
        card.guid = Guid.create()
        card.title = 'Card title updated'
        card.description = 'Card description updated'

        const cardList: CardList = {
            guid: Guid.create(),
            name: 'List name',
            cards: null
        }

        spyOn(cardListService, 'getCardLists').and.returnValue([cardList])
        spyOn(cardListService, 'getCardListByCardGuid').and.returnValue(cardList)

        const updated = service.updateCard(card)

        expect(updated).toEqual(false)
        expect(cardListService.getCardLists).toHaveBeenCalled()
        expect(cardListService.getCardListByCardGuid).toHaveBeenCalled()
    }))

    it('should return false because the card was not found', inject([CardService], (service: CardService) => {
        const card = new Card()
        card.guid = Guid.create()
        card.title = 'Card title updated'
        card.description = 'Card description updated'

        const cardList: CardList = {
            guid: Guid.create(),
            name: 'List name',
            cards: [
                {
                    guid: Guid.create(),
                    title: 'Card title',
                    description: 'Card description'
                }
            ]
        }

        spyOn(cardListService, 'getCardLists').and.returnValue([cardList])
        spyOn(cardListService, 'getCardListByCardGuid').and.returnValue(cardList)

        const updated = service.updateCard(card)

        expect(updated).toEqual(false)
        expect(cardList.cards[0].title).not.toEqual(card.title)
        expect(cardList.cards[0].description).not.toEqual(card.description)
        expect(cardListService.getCardLists).toHaveBeenCalled()
        expect(cardListService.getCardListByCardGuid).toHaveBeenCalled()
    }))
})