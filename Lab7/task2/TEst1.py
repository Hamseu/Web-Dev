from Light_Car import LightCar
from Truck import Truck
from Vehicle import Vehicle


car = Vehicle("Toyota", "Corolla", 2022)
print(car)
car.accelerate(50)
car.brake(20)
print(car)

car = LightCar("Honda", "Civic", 2023, 5)
truck = Truck("Volvo", "FH16", 2022, 20000)

print(car)
car.accelerate(60)
car.open_sunroof()
print(car)

print(truck)
truck.accelerate(40)
truck.load_cargo(15000)
truck.load_cargo(6000)
print(truck)