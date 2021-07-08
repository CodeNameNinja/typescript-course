export interface Location {
  lat: number;
  lng: number;
}

/**
 * Instrucations to how a class can be an interface to AddMarker
 */
export interface Mappable {
  location: Location;
  markerContent(): string;
}
