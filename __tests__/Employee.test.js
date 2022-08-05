const Employee = require('../lib/Employee');

let exampleName = "Jason";
let exampleId = "1234";
let exampleEmail = "Cardenas7122@gmail.com";
const employeeConstructor= new Employee(exampleEmail, exampleId, exampleName);


describe("Employee", () => {
    it('should return a name email and id', () => {
        expect(exampleEmail.name)
    })
})