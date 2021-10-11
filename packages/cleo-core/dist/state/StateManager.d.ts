interface IStateManager {
    getState: (path: string) => any;
    setState: (path: string, value: any) => {};
}
declare class StateManager implements IStateManager {
    private state;
    constructor();
    getState(path: any): any;
    setState(path: any, value: any): {};
}
declare const stateManager: StateManager;
export default stateManager;
