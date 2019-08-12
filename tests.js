// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe ("sayHello", function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when passed Jane', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex! when passed Alex', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat! when passed Pat', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when passed sayHello()', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed booleab true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed boolean false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed null', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });


});




describe('sum', function(){
    it('should be a defined function', function(){
        expect(typeof sum).toBe('function');
    });
    it('should return the number 4 when passed the numbers 2 and 2', function() {
        expect(sum(2, 2)).toBe(4);
    });
    it('should return the number 5 when passed the numbers 2 and 3', function() {
        expect(sum(2, 3)).toBe(5);
    });
    it('should return false when passed two strings', function() {
        expect(sum("black", "sheep")).toBe(false);
    });
});


describe('isFive', function(){
    it('should be a defined function', function() {
    expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter what the input', function(){
       expect(isFive()).toBe('boolean');
    });
    it('should return true when passed the number 5',function(){
    expect(isFive(5)).toBe(true);
    });
    it('should return false when passed the string "5"',function(){
        expect(isFive("5")).toBe(false);
    });

});


describe('isEven', function(){
    it('should be a defined function', function() {
    expect(typeof isEven).toBe('function');
});
    it('should return a boolean no matter what input', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed the number 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed the number -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the number 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed the string "Banana"', function() {
        expect(isEven("Banana")).toBe(false);
    });
    it('should return true when passed the string "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed the true', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed false', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when passed the isEven()', function() {
        expect(isEven()).toBe(false);
    });

});

describe("isVowel", function(){
    it('should be a defined function', function(){
    expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean no matter what input', function() {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true if "a" is passed', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true if "A" is passed', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false if "y" is passed', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false if 4 is passed', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false if false is passed', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false if true is passed', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false if the string "banana" is passed', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false if an empty argument is passed', function() {
        expect(isVowel()).toBe(false);
    });
});

describe("add", function(){
    it('should be a defined function', function(){
        expect(typeof add).toBe('function');
    });
    it('should return 5 when passed the numbers 2 and 3', function(){
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when passed the numbers -3 and -9', function(){
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when passed the string "5" and number 6', function(){
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when passed the string "-4" and the string "10"', function(){
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when passed the string "Banana" and the string "Split"', function(){
        expect(add("Banana", "Split")).toBe(isNaN);
    });
    it('should return NaN when passed the number 2 and the string "Apples"', function(){
        expect(add(2, "Apples")).toBe(isNaN);
    });
    it('should return NaN when passed add()', function(){
        expect(add()).toBe(isNaN);
    });
});