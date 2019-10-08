/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardListComponent } from './card-list.component';
import { ToastrModule } from 'ngx-toastr';
import { BoardModule } from '../board.module';
import { CardList } from './card-list';
import { Guid } from 'guid-typescript';

describe('CardListComponent', () => {
    let component: CardListComponent;
    let fixture: ComponentFixture<CardListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BoardModule, ToastrModule.forRoot()]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardListComponent);
        component = fixture.componentInstance;
        component.cardList = new CardList()
        component.cardList.guid = Guid.create()
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
