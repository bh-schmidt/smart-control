/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewCardListComponent } from './new-card-list.component';
import { ToastrModule } from 'ngx-toastr';
import { BoardModule } from '../board.module';

describe('NewCardListComponent', () => {
    let component: NewCardListComponent;
    let fixture: ComponentFixture<NewCardListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BoardModule, ToastrModule.forRoot()]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewCardListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
