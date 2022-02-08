// Unit tests for the helloWorld function
describe('sayHello("Jane")', function() {
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe('string');
    });
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
      expect(sayHello()).toBe("Hello, Jane!");
    });
    it("should never return 'undefined' when called", function() {
      expect(sayHello()).not.toBe(undefined);
    });
});