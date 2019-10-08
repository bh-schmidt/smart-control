/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewCardComponent } from './view-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BoardModule } from '../../../board.module';
import { Card } from '../../card';

describe('ViewCardComponent', () => {
    let component: ViewCardComponent;
    let fixture: ComponentFixture<ViewCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BoardModule, ToastrModule.forRoot()]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewCardComponent);
        component = fixture.componentInstance;
        component.card = new Card()
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
