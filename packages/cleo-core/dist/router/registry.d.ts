declare class ComponentRegistry {
    private static registry;
    static register(name: string, data: any): void;
}
export default ComponentRegistry;
