const getTheTitles = function(books) {
    const titles = [];
    for (const obj of books) {
        titles.push(obj.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
