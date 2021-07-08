import faker from "faker";
import { Location } from "./interface";

export class User {
  private name: string;
  public location: Location;
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}

const user = new User();

user;
