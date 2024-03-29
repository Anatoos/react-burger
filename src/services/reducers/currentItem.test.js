import * as actions from '../actions/currentItem'
import { currentItemReducer, currentItemInitialState } from "./currentItem";


describe('currentItemOrderReducer', () => {
    it('should return the initial state', () => {
        expect(currentItemReducer(undefined, {})).toEqual(currentItemInitialState);
    });

    it('should handle GET_CURRENT_ITEM', () => {
        expect(
            currentItemReducer(currentItemInitialState, {
                type: actions.GET_CURRENT_ITEM,
                data: {
                    _id: '60d3b41abdacab0026a733c7',
                    name: 'Флюоресцентная булка R2-D3',
                    type: 'bun',
                    proteins: 44,
                    fat: 26,
                    carbohydrates: 85,
                    calories: 643,
                    price: 988,
                    image: 'https://code.s3.yandex.net/react/code/bun-01.png',
                    image_mobile:
                        'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
                    image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
                    __v: 0,
                    count: 1
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...currentItemInitialState,
                currentItem: {
                    _id: '60d3b41abdacab0026a733c7',
                    name: 'Флюоресцентная булка R2-D3',
                    type: 'bun',
                    proteins: 44,
                    fat: 26,
                    carbohydrates: 85,
                    calories: 643,
                    price: 988,
                    image: 'https://code.s3.yandex.net/react/code/bun-01.png',
                    image_mobile:
                        'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
                    image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
                    __v: 0,
                    count: 1,
                },
                activeModal: true
            })
        );
    });

    it('should handle CLEAR_CURRENT_ITEM', () => {
        expect(
            currentItemReducer(currentItemInitialState, {
                type: actions.CLEAR_CURRENT_ITEM,
            })
        ).toEqual(
            expect.objectContaining({
                ...currentItemInitialState,
                currentItem: {},
                activeModal: false
            })
        );
    });

    it('should handle CLEAR_CURRENT_ORDER_ID', () => {
        expect(
            currentItemReducer(currentItemInitialState, {
                type: actions.CLEAR_CURRENT_ITEM,
                data: ''
            })
        ).toEqual(
            expect.objectContaining({
                ...currentItemInitialState,
                currentOrderId: '',
                activeModal: false
            })
        );
    })

    it('should handle CLEAR_CURRENT_ORDER_ID', () => {
        expect(
            currentItemReducer(currentItemInitialState, {
                type: actions.CLEAR_CURRENT_ORDER_ID,
            })
        ).toEqual(
            expect.objectContaining({
                ...currentItemInitialState,
                currentOrderId: '',
                activeModal: false
            })
        );
    });
});