'use strict';

const Person = require('./object');
const tools = require('./tools');

test('Test creating detail string', () => {
    const name = 'John L. Smith';
    const age = 37;
    
    const john = Person(name, age);

    const details = tools.details;

    expect(details(john)).toBe(`(${name} => age: ${age})`);
});
