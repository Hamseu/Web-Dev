class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.speed = 0  

    def accelerate(self, increment):
        self.speed += increment
        print(f"{self.model} accelerated to {self.speed} km/h.")

    def brake(self, decrement):
        self.speed -= decrement
        if self.speed < 0:
            self.speed = 0
        print(f"{self.model} slowed down to {self.speed} km/h.")

    def __str__(self):
        return f"{self.year} {self.make} {self.model}, Current speed: {self.speed} km/h"