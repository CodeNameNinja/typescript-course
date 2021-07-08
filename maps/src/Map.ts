import { User } from "./User";
import faker from "faker";
import { Company } from "./Company";
import { Mappable } from "./interface";
export class Map {
  private googleMap: google.maps.Map;
  constructor(private divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(this.divId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  centerAtLocation(mappable: Mappable) {
    this.googleMap.setCenter(mappable.location);
  }

  addMarker(mappable: Mappable) {
    new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });
  }
}
