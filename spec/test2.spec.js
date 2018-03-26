const chakram = require("chakram");
const expect = chakram.expect;
const outline = require("../framework/outline");
const loadTestData = require("../framework/loadTestData");
const testData = loadTestData("test.json");
const params = require('../request-params-builder/requestParamsBuilder');

describe("HTTP assertions", function () {
    it("should make HTTP assertions easy", async function () {
        const response = await chakram.get("http://httpbin.org/get?test=chakram");
        expect(response).to.have.status(200);
        expect(response).to.have.header("content-type", "application/json");
        expect(response).not.to.be.encoded.with.gzip;
        expect(response).to.comprise.of.json({
            args: {test: "chakram"}
        });
    });
});

outline(testData, (data) => {
    describe("HTTP assertions" + data.param, function () {
        it("should make HTTP assertions easy", async function () {
            const response = await chakram.get("http://httpbin.org/get?test=chakram");
            expect(response).to.have.status(200);
            expect(response).to.have.header("content-type", "application/json");
            expect(response).not.to.be.encoded.with.gzip;
            expect(response).to.comprise.of.json({
                args: {test: "chakram"}
            });
        });
    });
});