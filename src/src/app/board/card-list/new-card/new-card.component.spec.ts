/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewCardComponent } from './new-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Guid } from 'guid-typescript';
import { BoardModule } from '../../board.module';

describe('NewCardComponent', () => {
    let component: NewCardComponent;
    let fixture: ComponentFixture<NewCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BoardModule, ToastrModule.forRoot()]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewCardComponent);
        component = fixture.componentInstance;
        component.cardListGuid = Guid.create()
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
