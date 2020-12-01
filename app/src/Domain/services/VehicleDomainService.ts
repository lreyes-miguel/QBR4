import {VehicleRepositoryInterface} from "../Reposittory/VehicleRepositoryInterface";
import {inject, injectable} from "inversify";
import {TYPES} from "../../Type";
import {VehicleEntity} from "../Entity/VehicleEntity";

@injectable()
export class VehicleDomainService {
    constructor(@inject(TYPES.VehicleRepository) private service: VehicleRepositoryInterface)
    {}

    public async find(vehicleId) {
        return this.service.find(vehicleId);
    }

    public async save(vehicle): Promise<VehicleEntity> {
        return this.service.save(vehicle);
    }
}