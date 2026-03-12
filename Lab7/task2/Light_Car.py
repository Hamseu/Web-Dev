from Vehicle import Vehicle

class LightCar(Vehicle):
    def __init__(self, make, model, year, seats):
        super().__init__(make, model, year)
        self.seats = seats

    def open_sunroof(self):
        print(f"{self.model} sunroof is now open!")

    def __str__(self):
        return f"{self.year} {self.make} {self.model} (LightCar), Seats: {self.seats}, Speed: {self.speed} km/h"


