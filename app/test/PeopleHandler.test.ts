import mockContainer from "../src/main";
import {PeopleAppService} from "../src/Application/services/PeopleAppService";
import { TYPES } from "../src/Type";

describe('PeopleHandler', () => {
    // let repository;
    // beforeEach(() => {
        // repository = mockContainer.get<PeopleRepositoryInterface>(TYPES.MockPeopleRepository);
    // });

    it('Should find an existing people', async () => {
        console.log('asdasdada');
        expect(1).toBe(2);
        const peopleService = mockContainer.get<PeopleAppService>(TYPES.PeopleAppService);
        const people = await peopleService.find(String(1));
        console.log(people);
        //
        // const peopleService = container.get<PeopleAppService>(TYPES.PeopleAppService);
        // const peopleService = new PeopleDomainService(repository);



        /*
            test("Check the hello function", () => {
                const ctx = context()
                const evt = {}
                hello(evt as APIGatewayEvent, ctx)
                ctx.Promise
                    .then((res: any) => {
                        expect(res.statusCode).toBe(200)
                    })
                    .catch((err: any) => {
                        // tslint:disable-next-line:no-console
                        console.log("ERRR", err)
                    })
            })
        */
    });
})

