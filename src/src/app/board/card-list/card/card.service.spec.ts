/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardService } from './card.service';
import { CardListsService } from '../card-lists.service';
import { Card } from '../card';

describe('Service: Card', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CardService, CardListsService]
        });
    });

    it('should ...', inject([CardService], (service: CardService) => {
        expect(service).toBeTruthy();
    }));

    it('should return true',inject([CardService, CardListsService], (x:CardService, y:CardListsService) => 
    {

    }))
});
