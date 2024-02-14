import api from "../../../config/Api";


class AbstractService<T> {
    public base : string;

    constructor (base: string) {
        this.base = base + (base.endsWith("/") ? "" : "/");
    }

    public getAll () {
        return api.get(this.base);
    }
    public get(id : string) {
        return api.get(this.base + id);
    }
    public save(o : T) {
        return api.post(this.base, o);
    }
    public update(o : T, id : string) {
        return api.put(this.base + id, o)
    }
    public delete(id : string) {
        return api.delete(this.base + id);
    }
}

export default AbstractService;