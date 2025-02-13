// organization an dstoring of data is essential to programming
// one way to organize = arrays

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn Kubernetes'];

// arrays = lists that can store any data type

// arrays are ORDERED (numbered positions)
// array can be created by using array literal, wrapping items in square brackets
// arrays can store all same data type or several different ones

// array syntax:
// represented by square brackets and inside content
// each item is an element
// each element is separated by commas

const hobbies = ['guitar', 'drawing', 'writing'];

// numbered position is called index
// access items using their index
// JS arrays are zero-indexed (start at 0)

let listItem = hobbies[2];

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';

newYearsResolutions[0] = 'Increase programming skills';

newYearsResolutions[1] = 'Get a summer job';

newYearsResolutions[2] = 'Learn 3d modeling';

// variables declared with const can't be reassigned
// elements in array declared with const are mutable
// can change the contents of the array, but cannot assign a new array or value

let condiments = ['Ketchup', 'Mustard', 'Relish'];

condiments[0] = 'Mayo';

condiments = ['Mayo'];

const utensils = ['Fork', 'Spoon', 'Knife'];

utensils[2] = 'Spork';

// we can change fork, spoon, spork, etc. to whatever BUT 'utensils' cannot be redefined
// last item of array = length minus one

const itemTracker = [];
itemTracker.push(2,7,6,3);

// .push() adds items to the end of an array
// .push() is a function
// ^^^ will mutate (change) array
// .push() is a destructive method because of this
// MAKE COPIES!!!!!!!!!!!!!!!!

const chores = [];

chores.push('Ska ten hours', 'Deny, defend, and depose');

// .pop() removes the last item from the end of an array
// does not take arguments
// returns the value of the last element
// also destructive

chores.pop()


// remove from beginning: .shift()
// add to beginning: .unshift()