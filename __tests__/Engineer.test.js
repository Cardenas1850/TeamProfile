const Engineer = require('../lib/Engineer');
let exampleName = "Jason";
let exampleId = "1234";
let exampleEmail = "Cardenas7122@gmail.com";
let exampleGit = "Cardenas1850";
const engineerConstructor= new Engineer(exampleName, exampleId, exampleEmail, exampleGit);


describe("Engineer", () => {
    it('should return a name email and id', () => {
        expect(engineerConstructor.email).toEqual("Cardenas7122@gmail.com");
        expect(engineerConstructor.id).toEqual("1234");
        expect(engineerConstructor.name).toEqual("Jason");
        expect(engineerConstructor.github).toEqual("Cardenas1850");
    });
});

describe("getEmail", () => {
    it('should return the engineer email', () => {
        expect(engineerConstructor.getEmail()).toEqual("Cardenas7122@gmail.com");
    });
});

describe("getName", () => {
    it("should return name", () => {
        expect(engineerConstructor.getName()).toEqual("Jason");
    });
});

describe("getId", () => {
    it("should reutrn id", () => {
        expect(engineerConstructor.getId()).toEqual("1234");
    });
});

describe("getGithub", () => {
    it("should reutrn github", () => {
        expect(engineerConstructor.getGithub()).toEqual("Cardenas1850");
    });
});

describe("getRole", () => {
    it("should reutrn Engineer as the role", () => {
        expect(engineerConstructor.getRole()).toEqual("Engineer");
    });
});

