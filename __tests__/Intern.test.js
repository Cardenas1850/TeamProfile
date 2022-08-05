const Intern = require('../lib/Intern');

let exampleName = "Jason";
let exampleId = "1234";
let exampleEmail = "Cardenas7122@gmail.com";
let exampleSchool = "Ball State University";
const internConstructor= new Intern(exampleName, exampleId, exampleEmail, exampleSchool);


describe("intern", () => {
    it('should return a name email and id', () => {
        expect(internConstructor.email).toEqual("Cardenas7122@gmail.com");
        expect(internConstructor.id).toEqual("1234");
        expect(internConstructor.name).toEqual("Jason");
        expect(internConstructor.school).toEqual("Ball State University");
    });
});

describe("getEmail", () => {
    it('should return the intern email', () => {
        expect(internConstructor.getEmail()).toEqual("Cardenas7122@gmail.com");
    });
});

describe("getName", () => {
    it("should return name", () => {
        expect(internConstructor.getName()).toEqual("Jason");
    });
});

describe("getId", () => {
    it("should reutrn id", () => {
        expect(internConstructor.getId()).toEqual("1234");
    });
});

describe("getSchool", () => {
    it("should reutrn intern school", () => {
        expect(internConstructor.getSchool()).toEqual("Ball State University");
    });
});

describe("getRole", () => {
    it("should reutrn Intern as the role", () => {
        expect(internConstructor.getRole()).toEqual("Intern");
    });
});



