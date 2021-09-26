interface IStateManager {
    getState: (path: string) => any;
    setState: (path: string, value: any) => {};
}
export default class StateManager implements IStateManager {
    private state;
    constructor();
    getState(path: any): any;
    setState(path: any, value: any): {};
}
export {};
