/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardListsService } from './card-lists.service';

describe('Service: CardLists', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CardListsService]
        });
    });

    it('should ...', inject([CardListsService], (service: CardListsService) => {
        expect(service).toBeTruthy();
    }));
});
