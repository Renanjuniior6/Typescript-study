type Coordinate = {
    x: number;
    y: number;
}


function calculateDistance(pointA: Coordinate, pointB: Coordinate): number{

    const dx = pointB.x - pointA.x
    const dy = pointB.y - pointA.y

    const result = Math.sqrt( dx * dx + dy * dy)

    return result
}

const coordinateA: Coordinate = {
    x: 20,
    y: 8
}

const coordinateB: Coordinate = {
    x: 15,
    y: 30
}

console.log(calculateDistance(coordinateA, coordinateB))

//////////////////////////////////////////////////////////

interface Car {
    brand: string,
    model: string,
    year: number,
    startEngine: () => void
}

const myCar: Car = {
    brand: 'BMW',
    model: 'M4',
    year: 2023,
    startEngine: () => {
        console.log('Engine started!')
    }
}

function drive(car: Car): void {

    console.log(`Driving ${car.brand} - ${car.model}`)

    car.startEngine()
}

drive(myCar)