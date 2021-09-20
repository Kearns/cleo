class ComponentRegistry {
    private static registry = {};

    public static register(name: string, data: any) {
        this.registry[name] = data;
    }
}


export default ComponentRegistry;