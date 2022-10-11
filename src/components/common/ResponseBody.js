export class ResponseBody {
    code = 0;
    msg;
    success;
    data;
    status;
    constructor(data) {
        this.data = data;
        this.code = 200;
    }
}
//# sourceMappingURL=ResponseBody.js.map