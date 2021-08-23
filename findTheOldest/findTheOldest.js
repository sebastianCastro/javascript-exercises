const findTheOldest = function(people) {
    const ordered = people.sort(function(a, b) {
        a.yearOfDeath = (typeof a.yearOfDeath !== 'undefined') ?  a.yearOfDeath : 2021
        b.yearOfDeath = (typeof b.yearOfDeath !== 'undefined') ?  b.yearOfDeath : 2021
        let x = a.yearOfDeath-a.yearOfBirth;
        let y = b.yearOfDeath-b.yearOfBirth;
        if(x > y) {
        return 1;
      } else {
        return -1;
      }
    });
    console.table(ordered);
    return ordered[ordered.length - 1];
};

module.exports = findTheOldest;
