const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, { [key]: value })
    // return Object.assign({}, obj, { [key]: value });
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}
function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver, key)
    delete newDriver[key]
    return newDriver
}
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}