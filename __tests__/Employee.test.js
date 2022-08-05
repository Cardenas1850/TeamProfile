const Employee = require('../lib/Employee');

let exampleName = "Jason";
let exampleId = "1234";
let exampleEmail = "Cardenas7122@gmail.com";
const employeeConstructor= new Employee(exampleName, exampleId, exampleEmail);


describe("Employee", () => {
    it('should return a name email and id', () => {
        expect(employeeConstructor.email).toEqual("Cardenas7122@gmail.com");
        expect(employeeConstructor.id).toEqual("1234");
        expect(employeeConstructor.name).toEqual("Jason");
    });
});

describe("getEmail", () => {
    it('should return the employee email', () => {
        expect(employeeConstructor.getEmail()).toEqual("Cardenas7122@gmail.com");
    });
});

describe("getName", () => {
    it("should return name", () => {
        expect(employeeConstructor.getName()).toEqual("Jason");
    });
});

describe("getId", () => {
    it("should reutrn id", () => {
        expect(employeeConstructor.getId()).toEqual("1234");
    });
});