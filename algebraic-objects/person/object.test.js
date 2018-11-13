'use strict';

const Person = require('./object');

test('Creating a person', () => {
    const name = 'Jake';
    const age = 26;

    const jake = Person(name, age)
    
    jake.withName(n => expect(n).toBe(name));
    jake.withAge(a => expect(a).toBe(age));
});
