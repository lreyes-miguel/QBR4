# rimac-qbr4

Proyecto serverless (AWS Lambda) que utiliza:

- Nodejs(typescript)
- Serverless Framewor 2.0
- Dynamodb

Pasos para instalación:


```shell
npm i
serverless deploy
```

# Api

### People
Integrado con SWAPI https://swapi.py4e.com/
 - url: [GET] /dev/people/{id}
 
 ```shell script
{
    "nombre": "R5-D4",
    "fechaNacimiento": "unknown",
    "colorOjo": "red",
    "sexo": "n/a",
    "colorCabello": "n/a",
    "altura": "97",
    "peso": "32",
    "colorPiel": "white, red",
    "planeta": "https://swapi.py4e.com/api/planets/1/",
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/"
    ],
    "especies": [
        "https://swapi.py4e.com/api/species/2/"
    ],
    "naves": [],
    "vehiculos": [],
    "url": "https://swapi.py4e.com/api/people/8/",
    "fechaCreacion": "2014-12-10T15:57:50.959000Z",
    "fechaEdicion": "2014-12-20T21:17:50.321000Z"
}
```

### Vehicle
 - url: [POST] /dev/vehicles

Trama para el envío
 ```shell script
{
    "nombre": "Sand Crawler",
    "modelo": "Digger Crawler",
    "clase": "wheeled",
    "fabricante": "Corellia Mining Corporation",
    "longitud": "36.8",
    "costoCredito": "150000",
    "cantidadPilotos": "46",
    "pasajeros": "30",
    "velocidadMaxima": "30",
    "capacidadCarga": "50000",
    "tiempoConsumibles": "2 Months",
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/"
    ],
    "pilotos": [],
    "fechaCreacion": "2020-11-29T22:24:23.046Z",
    "fechaEdicion": "2014-12-10T15:36:25.724000Z"
}
```

Respuesta
```shell script
{
    "id": "b69d09e0-3374-11eb-b916-2dc8d9d5d044"
}
```

- [GET] /dev/vehicles/{id}

Respuesta
```shell script
{
    "id": "b69d09e0-3374-11eb-b916-2dc8d9d5d044",
    "nombre": "Luis Reyes",
    "modelo": "Digger Crawler",
    "clase": "wheeled",
    "fabricante": "Corellia Mining Corporation",
    "longitud": "36.8",
    "costoCredito": "150000",
    "cantidadPilotos": "46",
    "pasajeros": "30",
    "velocidadMaxima": "30",
    "capacidadCarga": "50000",
    "tiempoConsumibles": "2 Months",
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/1/"
    ],
    "pilotos": [],
    "fechaCreacion": "2020-11-30T20:30:02.435Z"
}
```