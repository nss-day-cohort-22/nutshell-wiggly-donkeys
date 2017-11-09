//Author: MW - Purpose: create universal ID generator function

const idGenerator = function* (startFrom = 0) {
    let id = 1

    while (true) {
        yield id + startFrom
        id++
    }
}

module.exports = idGenerator();