import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";
const user = new User();
const company = new Company();

const map = new Map("map");
map.centerAtLocation(user);

map.addMarker(user);
map.addMarker(company);
