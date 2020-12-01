import {PeopleRepositoryInterface} from "../../src/Domain/Reposittory/PeopleRepositoryInterface";
import {PeopleEntity} from "../../src/Domain/Entity/PeopleEntity";

export class PeopleRepositoryMock implements PeopleRepositoryInterface {
    private mockFind = jest.fn();
    private people: PeopleEntity;

    async find(peopleId): Promise<PeopleEntity> {
        this.mockFind();
        return this.people;
    }

    assertFind() {
        expect(this.mockFind).toHaveBeenCalled();
    }


}