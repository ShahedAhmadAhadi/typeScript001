interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const aCar = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
      return `${this.name}`
  }
};

const printVehicle = (vehicle: Vehicle) => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
  console.log(vehicle.summary())
};

printVehicle(aCar)
