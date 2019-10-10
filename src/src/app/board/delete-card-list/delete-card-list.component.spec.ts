/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeleteCardListComponent } from './delete-card-list.component';
import { BoardModule } from '../board.module';
import { ToastrModule } from 'ngx-toastr';

describe('DeleteCardListComponent', () => {
    let component: DeleteCardListComponent;
    let fixture: ComponentFixture<DeleteCardListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BoardModule, ToastrModule.forRoot()]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DeleteCardListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
