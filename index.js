// Write your solution in this file!
const driver = {address: "12th Street", name: "Dylan"}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver}
    newDriver[key] = value
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

// function destructivelyUpdateObject (obj, key, value) {
//   obj[key] = value;
 
//   return obj;
// }

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver, key)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
    delete driver[key]
    return driver
}