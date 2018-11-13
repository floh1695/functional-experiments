'use strict';

const details = (person) =>
    person.withName(name =>
        person.withAge(age =>
            `(${name} => age: ${age})`));

const Tools = {
    details,
};

module.exports = Tools;
