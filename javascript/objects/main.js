var student = {
    firstName: 'Shane',
    lastName: 'Kim',
    age: '25'
}

var fullName = student.firstName + ' ' + student.lastName;

console.log('my name is',fullName);

student.livesInIrivne = true;
student.previousOccupation = 'student';

console.log(student.livsInIrivine);
console.log(student);

var vehicle = {
    make: 'Tesla',
    model: 'Model S',
    year: '2021'
}

vehicle['color'] = 'white';
vehicle['isCovertible'] = false;

console.log(vehicle['color']);
console.log(vehicle);

var pet = {
    name: 'Fighter',
    type: 'German Shepherd',
    weight: '20lbs'
};

delete pet.name;
delete pet.type;

console.log(pet);