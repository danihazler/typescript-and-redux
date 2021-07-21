import { Action } from '../actions';
import { ActionType } from '../action-type';

export interface IBankState {
    amountAvailable: number
}

export const inititalState = {
    amountAvailable: 0
}

export const bankReducer = (state: IBankState = inititalState, action: Action) => {
    switch(action.type) {
        case ActionType.DEPOSIT:
            return { amountAvailable: state.amountAvailable + action.payload};
        case ActionType.WITHDRAW:
            return {amountAvailable: state.amountAvailable - action.payload};
        case ActionType.BANKRUPT:
            return {amountAvailable: 0};
        default:
            return state;
    }
}