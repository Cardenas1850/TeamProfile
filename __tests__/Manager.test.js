const Manager = require('../lib/Manager')

let exampleName = "Jason";
let exampleId = "1234";
let exampleEmail = "Cardenas7122@gmail.com";
let exampleOfficeNumber = "1000";

const managerConstructor= new Manager(exampleName, exampleId, exampleEmail, exampleOfficeNumber);


describe("Manager", () => {
    it('should return a name email and id', () => {
        expect(managerConstructor.email).toEqual("Cardenas7122@gmail.com");
        expect(managerConstructor.id).toEqual("1234");
        expect(managerConstructor.name).toEqual("Jason");
    });
});

describe("getEmail", () => {
    it('should return the manager email', () => {
        expect(managerConstructor.getEmail()).toEqual("Cardenas7122@gmail.com");
    });
});

describe("getName", () => {
    it("should return name", () => {
        expect(managerConstructor.getName()).toEqual("Jason");
    });
});

describe("getId", () => {
    it("should reutrn id", () => {
        expect(managerConstructor.getId()).toEqual("1234");
    });
});

describe("getOfficeNumber", () => {
    it("should return the managers office number", () => {
        expect(managerConstructor.getOfficeNumber()).toEqual("1000");
    });
});

describe("getRole", () => {
    it("should return Manager", () => {
        expect(managerConstructor.getRole()).toEqual("Manager");
    });
});