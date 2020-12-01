import {inject, injectable} from "inversify";
import {PeopleRepositoryInterface} from "../../Domain/Reposittory/PeopleRepositoryInterface";
import {PeopleEntity} from "../../Domain/Entity/PeopleEntity";

@injectable()
export class MockApiPeopleRepository implements PeopleRepositoryInterface{
    private mockFind = jest.fn();
    private people: PeopleEntity | undefined;
    private data = [
        {
            "id": 1,
            "nombre": "Beru Whitesun lars",
            "fechaNacimiento": "47BBY",
            "colorOjo": "blue",
            "sexo": "female",
            "colorCabello": "brown",
            "altura": "165",
            "peso": "75",
            "colorPiel": "light",
            "planeta": "https://swapi.py4e.com/api/planets/1/",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "especies": [
                "https://swapi.py4e.com/api/species/1/"
            ],
            "naves": [],
            "vehiculos": [],
            "fechaCreacion": "2014-12-10T15:53:41.121000Z",
            "fechaEdicion": "2014-12-20T21:17:50.319000Z"
        }
    ];

    async find(peopleId): Promise<PeopleEntity> {
        this.mockFind();
        return this.people;
    }

    assertFind() {
        expect(this.mockFind).toHaveBeenCalled();
    }
}