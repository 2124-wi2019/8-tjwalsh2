/* Tyler Walsh
walsh_ao8b.js
19WI_INFO_2124_WW
Thoendel
2/5/2019 */

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */

const MathUtility = { //A constant named MathUtility, which will hold 3 methods to work with types of shapes.

    getAreaOfCircle(radius) { //The first method, which outputs the area of a circle with a given radius.
        return (Math.pow(radius, 2) * Math.PI); //Return a value which is the total when you square the radius, then multiply it by 3.14
    },

    getAreaOfSquare(Side) { //The second method, which outputs the area of square with the the given sides.
        return Math.pow(Side, 2); //Returns the side inputted, but squared.
    },

    getAreaOfTriangle(baseLength, triHeight) { //The third method, which returns the area of a triangle with the given length and height.
        return (baseLength * triHeight) / 2;
    }
};

/* AND THIS LINE */

//Test code
const outMsg = 
`
The area of a circle that is has a radius of 5 units is ${MathUtility.getAreaOfCircle(5)} units.
The area of a square whose side measures 13 units is ${MathUtility.getAreaOfSquare(13)} units.
The area of a triangle with a base of 3 units and height of 2 units is ${MathUtility.getAreaOfTriangle(3, 2)} units.

`
console.log(outMsg);