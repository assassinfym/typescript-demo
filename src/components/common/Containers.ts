import {Container} from "inversify";
import {HttpClient} from "@/components/api/HttpClient";
import TYPE from "@/components/common/Type";
import {BusinessService} from "@/components/service/BusinessService";
import {BusinessServiceExtend} from "@/components/service/BusinessServiceExtend";


const MyContainer = () => {
    const myContainer = new Container();
    myContainer.bind<HttpClient>(TYPE.HttpClient).to(HttpClient);
    myContainer.bind<BusinessService>(TYPE.BusinessService).to(BusinessService);
    myContainer.bind<BusinessServiceExtend>(TYPE.BusinessServiceExtend).to(BusinessServiceExtend)
    return myContainer;
}

export default MyContainer