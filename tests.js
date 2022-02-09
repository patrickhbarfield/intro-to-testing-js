// Unit tests for the helloWorld function
describe('sayHello()', function() {
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe('string');
    });
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, اللا!" when executed', function() {
      expect(sayHello('اللا')).toBe("Hello, اللا!");
    });
    it("should never return 'undefined' when called", function() {
      expect(sayHello()).not.toBe(undefined);
    })
})
//describe('sayHello("Alex")', function() {
//     it('should return a string when called', function() {
//       expect(typeof sayHello()).toBe('string');
//     });
//     it('should return a string when called', function() {
//       expect(typeof sayHello()).toBe("string");
//     });
//     it('should return the string "Hello, Alex!" when executed', function() {
//       expect(sayHello()).toBe("Hello, Alex!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(sayHello()).not.toBe(undefined);
//     });
// });