let cars = [
    {
        "color": "red",
        "type": "van",
        "capacity": 7
    },
    {
        "color": "white",
        "type": "mini van",
        "capacity": 4
    },
    {
        "color": "blue",
        "type": "truck",
        "capacity": 20
    }
]

let new_car = {
    "color": "red",
    "type": "cabrio",
    "capacity": 2
}

let new_car2 = {
    "color": "yellow",
    "type": "motocycle",
    "capacity": 1
}

console.log(cars)

cars.unshift(new_car)
console.log(cars)

// cars.push(new_car2)
// console.log(cars + "\n")

// cars.splice(2, 0, new_car2)
// console.log(cars)

// let find_car = cars.find(car => car.color === "blue")
// console.log(find_car)

// let filter_car = cars.filter(car => car.color === "red")
// console.log(filter_car)

// let sizes = cars.map(car => {
//     if (car.capacity <= 3) {
//         return "small";
//     }
//     if (car.capacity <= 5) {
//         return "medium";
//     }
//     return "large";
// });
// console.log(sizes);

// let carProperties = cars.map(car => {
//     let properties = {
//         "capacity": car.capacity,
//         "size": "large"
//     }

//     if (car.capacity <= 5) {
//         properties['size'] = "medium"
//     }
//     if (car.capacity <= 3) {
//         properties['size'] = "small"
//     }   

//     return properties
// })
// console.log(carProperties)

// cars.forEach(car => {
//     car['size'] = "large"
//     if (car.capacity <= 5) {
//         car['size'] = "medium"
//     }
//     if (car.capacity <= 3) {
//         car['size'] = "small"
//     }
// })
// console.log(cars)

let sorted = cars.sort((c1, c2) => (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0)
console.log(sorted)

