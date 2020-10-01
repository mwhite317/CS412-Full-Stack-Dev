let chai = require("chai");
let should = chai.should();
let { reverseString } = require("../PS1.P1");
let { operator } = require("../PS1.P2");
let { applyFunc2String } = require("../PS1.P3");

describe("PS1 solutions", () => {
  it("should handle empty string", () => {
    reverseString("").should.equal("");
  });
  it("should two letter string", () => {
    reverseString("ab").should.equal("ba");
  });
  it("should remove numbers", () => {
    reverseString("1").should.equal("");
  });
  it("should work", () => {
    reverseString("supercalifragilisticexpialidocious").should.equal(
      "suoicodilaipxecitsiligarfilacrepus"
    );
  });
  it("should include capitals", () => {
    reverseString("RACECAR").should.equal("RACECAR");
  });
});

describe("PS2 solutions", () => {
  it("should handle addition", () => {
    const expression = "1+2";
    const result = operator(expression);
    console.log(`${expression} = ${result}`);
    result.should.equal(3);
  });

  it("should handle subtraction", () => {
    const expression = "2-1";
    const result = operator(expression);
    console.log(`${expression} = ${result}`);
    result.should.equal(1);
  });

  it("should handle multiplication", () => {
    const expression = "5*2";
    const result = operator(expression);
    console.log(`${expression} = ${result}`);
    result.should.equal(10);
  });

  it("should handle division", () => {
    const expression = "8/4";
    const result = operator(expression);
    console.log(`${expression} = ${result}`);
    result.should.equal(2);
  });

  it("should handle exponents", () => {
    const expression = "7^2";
    const result = operator(expression);
    console.log(`${expression} = ${result}`);
    result.should.equal(49);
  });
});

describe("PS3 solutions", () => {
  it("should apply simple function", () => {
    applyFunc2String("abc", (input) => input).should.equal("abc");
  });

  it("should apply split on c anonymous function", () => {
    const expression = applyFunc2String(
      "supercalifragilisticexpialidocious",
      (fullString) => {
        let stringArray = [];
        let tempString = "";
        for (let i = 0; i < fullString.length; i++) {
          if (fullString[i] !== "c") {
            tempString += fullString[i];
            if (i + 1 === fullString.length) {
              stringArray.push(tempString);
            }
          } else {
            stringArray.push(tempString);
            tempString = "";
            tempString += fullString[i];
          }
        }
        return stringArray;
      }
    );
    console.log(expression);
    expression.should.have.ordered.members([
      "super",
      "califragilisti",
      "cexpialido",
      "cious",
    ]);
  });
  it("should apply split on a anonymous function", () => {
    const expression = applyFunc2String(
      "supercalifragilisticexpialidocious",
      (fullString) => {
        let modifiedString = "";
        let numberReplaced = 0;
        let lengthOfString = fullString.length;
        for (let i = 0; i < fullString.length; i++) {
          if (fullString[i] === "a") {
            numberReplaced++;
            modifiedString += "A";
          } else {
            modifiedString += fullString[i];
          }
        }
        return {
          originalString: fullString,
          modifiedString: modifiedString,
          numberReplaced: numberReplaced,
          length: lengthOfString,
        };
      }
    );
    console.table(expression);
    expression.should.include({
      length: 34,
      numberReplaced: 3,
      originalString: "supercalifragilisticexpialidocious",
      modifiedString: "supercAlifrAgilisticexpiAlidocious",
    });
  });
});
