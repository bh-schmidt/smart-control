/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArrayHelper } from './array-helper';

describe('Service: ArrayHelper', () => {
    let array: number[]

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ArrayHelper]
        });

        array = [1,2,3]
    });

    it('should delete item', () => {
        const deleted = ArrayHelper.removeItem(array, item => item === 2)

        expect(deleted).toEqual(true)
        expect(array.length).toEqual(2)
    });

    it('should return false because array is null', () => {
        const deleted = ArrayHelper.removeItem(null, item => item === 2)

        expect(deleted).toEqual(false)
        expect(array.length).toEqual(3)
    })

    it('should return false because predicate is null', () => {
        const deleted = ArrayHelper.removeItem(array, null)

        expect(deleted).toEqual(false)
        expect(array.length).toEqual(3)
    });

    it('should return false because item not found', () => {
        const deleted = ArrayHelper.removeItem(array, item => item === 4)

        expect(deleted).toEqual(false)
        expect(array.length).toEqual(3)
    });
});
