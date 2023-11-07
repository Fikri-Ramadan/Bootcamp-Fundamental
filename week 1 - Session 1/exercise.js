// Belajar Type data
// primitive nad reference(non primitive)
// primitive: string, number, boolean, null, undifined
// non-primitive: object, array

// Exercise
// find area of rectangle
const width = 3;
const length = 5;
const areaOfRectangle = width * length;
console.log(areaOfRectangle);

// find perimeter of rectangle
const perimeterOfRectangle = 2 * (width + length);
console.log(perimeterOfRectangle);

// find diameter, circumference, and area of a circle
const PHI = 3.14;
const radius = 5;
const diameter = radius * 2;

console.log(diameter);

const circumferenceOfCircle = 2 * PHI * radius;

console.log(circumferenceOfCircle);

const areaOfCircle = PHI * radius * radius;

console.log(areaOfCircle);

// find of angle of triangle
const angleA = 80;
const angleB = 65;
const angleC = 180 - angleA - angleB;

console.log(angleC);

// find difference between date in days
const date1 = new Date('2022-01-20');
const date2 = new Date('2022-01-22');
const diffBetweenDates = date2.getDate() - date1.getDate();

console.log(diffBetweenDates);

// find convert days into year, month, day

const day1 = 400;
const day2 = 366;

const days = 366;
const year = Math.floor(days / 365);
const month = Math.floor((days % 365) / 30);
const day = (days % 365) % 30;

console.log(`${year} ${month} ${day}`);
