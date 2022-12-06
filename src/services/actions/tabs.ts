export const SET_TAB: 'SET_TAB' = 'SET_TAB';

export type TSetTabAction = {
    readonly type: typeof SET_TAB,
    readonly tab: string
}