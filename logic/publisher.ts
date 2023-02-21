export default class Publisher<T> {
    private suscribers: Map<string, T> = new Map<string, T>();

    /*
    public constructor() {
    }*/

    public addSuscriber(id: string, suscriber: T): void {
        this.suscribers.set(id, suscriber);
    }

    public removeSuscriber(id: string): void {
        this.suscribers.delete(id)
    }

    public getSuscriber(id: string): T {
        return this.suscribers.get(id) as T;
    }

    public notifySuscribers(id: string, data?: any): void {
        const suscriber:any = this.suscribers.get(id) as any;
        console.log(suscriber);
        if (suscriber) (suscriber as any).forceUpdate();
    }
}