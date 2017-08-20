export class Handler {

    data: any;

    constructor() { }

    setData(data) {
        this.data = data
    }

    func(param) {
        this.data = param.data
        console.log(this.data)
    }

    getData() {
        console.log(this.data)
        return this.data
    }
}
