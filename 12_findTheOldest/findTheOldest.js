const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        return getAge(oldest) > getAge(current) ? oldest : current;
    });
    
}

function getAge(obj) {
    let age;
    if (obj.yearOfDeath) {
        age = obj.yearOfDeath - obj.yearOfBirth;
    } else {
        const currentYear = (new Date()).getFullYear();
        age = currentYear - obj.yearOfBirth;
    }
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
