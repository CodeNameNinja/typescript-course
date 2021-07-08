import faker from "faker";
import { Location, Mappable } from "./interface";

export class Company implements Mappable {
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

  markerContent(): string {
    return `
    <div>
    <h1>Company Name: ${this.name}</h1>
    <h3>Company Catch Phrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
