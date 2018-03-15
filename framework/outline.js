function outline(testData, callback) {
    testData.forEach(data => {
        callback(data);
    })
}

module.exports = outline;