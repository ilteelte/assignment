

class Adults {
    constructor (name, age) {
        this.name = name
        this.age = age

    }
}

//filters out people under the age of 18
function groupAdultsByAgeRange(name, age) {
    people.filter(name => name.age <= 18 )
}




module.exports = groupAdultsByAgeRange

