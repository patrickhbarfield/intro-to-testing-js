// Unit tests for the helloWorld function
describe('sayHello("Alex")', function() {
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe('string');
    });
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
      expect(sayHello()).toBe("Hello, Alex!");
    });
    it("should never return 'undefined' when called", function() {
      expect(sayHello()).not.toBe(undefined);
    });
});

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