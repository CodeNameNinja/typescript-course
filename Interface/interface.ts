const oldCivic = {
  name: 'Civic',
  year: new Date("1999/07/28"),
  broken: true,
  summary():string{
    return printVehicle(oldCivic)
  }
}

const printVehicle = ({name,year,broken}: Vehicle) => {
    return `Name: ${name}, Year: ${year}, Broken: ${broken}`
}

console.log(oldCivic.summary());

console.log(printVehicle(oldCivic));

interface Vehicle {
  name:string,
  year:Date, 
  broken: boolean,
  summary():string
}