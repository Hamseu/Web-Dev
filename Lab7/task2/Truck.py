from Vehicle import Vehicle

class Truck(Vehicle):
    def __init__(self, make, model, year, cargo_capacity):
        super().__init__(make, model, year)
        self.cargo_capacity = cargo_capacity
        self.cargo_loaded = 0

    def load_cargo(self, weight):
        if self.cargo_loaded + weight <= self.cargo_capacity:
            self.cargo_loaded += weight
            print(f"{weight} kg loaded. Current cargo: {self.cargo_loaded} kg")
        else:
            print(f"Cannot load {weight} kg. Exceeds capacity of {self.cargo_capacity} kg.")

    def __str__(self):
        return f"{self.year} {self.make} {self.model} (Truck), Cargo: {self.cargo_loaded}/{self.cargo_capacity} kg, Speed: {self.speed} km/h"

