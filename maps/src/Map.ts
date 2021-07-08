import { User } from "./User";
import faker from "faker";
import { Company } from "./Company";
export class Map {
  private googleMap: google.maps.Map;
  constructor(private divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(this.divId), {
      zoom: 6,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  renderAtLocation(user: User) {
    this.googleMap = new google.maps.Map(document.getElementById(this.divId), {
      zoom: 6,
      center: user.location,
    });
  }

  addMarker(mappable: User | Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });
  }
}
