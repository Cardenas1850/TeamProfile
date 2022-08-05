const Employee = require('../lib/Employee');

let exampleName = "Jason";
let exampleId = "1234";
let exampleEmail = "Cardenas7122@gmail.com";
const employeeConstructor= new Employee(exampleEmail, exampleId, exampleName);


describe("Employee", () => {
    it('should return a name email and id', () => {
        expect(exampleEmail.email).toEqual("Jason");
        expect(exampleId.id).toEqual("Cardenas7122@gmail.com");
        expect(exampleName.name).toEqual("1234");
    });
});

describe("getEmail", () => {
    it('should return the employee email', () => {
        expect(exampleEmail.getEmail()).toEqual("Jason");
    });
});

describe("getName", () => {
    it("should return name", () => {
        expect(exampleName.getName()).toEqual("1234");
    });
});

describe("getId", () => {
    it("should reutrn id", () => {
        expect(exampleId.getId().toEqual("Cardenas7122@gmail.com"));
    });
});