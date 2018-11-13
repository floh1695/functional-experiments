'use strict';

const Person = (name, age) => ({
    name, age,

    withName: f => f(name),

    withAge: f => f(age),
});

module.exports = Person;
