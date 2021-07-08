import faker from "faker";
import { Location } from "./interface";

export class Company {
  private name: string;
  private catchPhrase: string;
  public location: Location;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
