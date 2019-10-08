import { inject, TestBed } from '@angular/core/testing';
import { Guid } from 'guid-typescript';
import { Card } from '../card';
import { CardListsService } from '../card-lists.service';
import { CardService } from './card.service';

describe('CardService.updateCard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CardService, CardListsService]
        });
    });

    it('', inject([CardService], (service: CardService) => {

    }))
})