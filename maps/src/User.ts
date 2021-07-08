import faker from "faker";
import { Location, Mappable } from "./interface";

export class User implements Mappable {
  private name: string;
  public location: Location;
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}

const user = new User();

user;
