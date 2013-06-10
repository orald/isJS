describe("Is A test!", function() {
	"use strict";

	beforeEach(function() {
	});
	
	it("isNumericFalsy", function() {
		var Falsy = [{}, undefined, '', null, []];
		
		for(var i in Falsy){
			expect(is.Numeric(Falsy[i])).toBe(false);
		}
		expect(function(){is.Numeric(Falsy[0], "Is not Numeric");}).toThrow("Is not Numeric");
	});

	it("isNumericTruthy", function() {
		var Truthy = ['-1', '0', '0.5', '0.000000001', '100000000'];
				
		for(var j in Truthy){
			expect(is.Numeric(Truthy[j])).toBe(true);		
		}
	});
	
	it("isPrimitiveFalsy", function() {
		var Falsy = [{}, []];		
		for(var i in Falsy){
			expect(is.Primitive(Falsy[i])).toBe(false);
		}
		expect(function(){is.Primitive(Falsy[0], "Is not Primitive");}).toThrow("Is not Primitive");
	});
	
	it("isPrimitiveTruthy", function() {
		var Truthy = [undefined, false, true, 0, '1', -1, '', null];
		
		for(var j in Truthy){
			expect(is.Primitive(Truthy[j])).toBe(true);		
		}
	});
	
	it("isIntegerTruthy", function() {
		var ints = [0, -1, 1, 23412, -23412, -32345454545454, -0];
		
		for(var j in ints){
			expect(is.Integer(ints[j])).toBe(true);		
		}
	});
	
	it("isFloatTruthy", function() {
		var floats = [-1.5, 1.01, 2341.200, -3.2345454545454];
		
		for(var j in floats){
			expect(is.Float(floats[j])).toBe(true);		
		}
	});

	it("isFloatFalsy", function() {
		var floats = [true, 1, 23, 0, -0, {}, [], ''];
		
		for(var j in floats){
			expect(is.Float(floats[j])).toBe(false);		
		}
	});
	
	it("isBooleanFalsy", function() {
		var bools = [1, 23, 0, -0, {}, [], ''];
		
		for(var j in bools){
			expect(is.Boolean(bools[j])).toBe(false);		
		}
	});

	it("isBooleanTruthy", function() {
		var bools = [true, false];
		
		for(var j in bools){
			expect(is.Boolean(bools[j])).toBe(true);		
		}
	});

	it("isFunctionFalsy", function() {
		var fns = [1, 23, 0, -0, {}, [], '', true];
		
		for(var j in fns){
			expect(is.Function(fns[j])).toBe(false);		
		}
	});

	it("isFunctionTruthy", function() {
		var fns = [function a(){}];
		
		for(var j in fns){
			expect(is.Function(fns[j])).toBe(true);		
		}
	});

	it("isArrayFalsy", function() {
		var arrays = [-1, 0, undefined, {}, null, function a(){}, 0.1, ''];
		
		for(var j in arrays){
			expect(is.Array(arrays[j])).toBe(false);		
		}
	});

	it("isArrayTruthy", function() {
		var arrays = [[], [undefined, 1]];
		
		for(var j in arrays){
			expect(is.Array(arrays[j])).toBe(true);		
		}
	});

	it("isNegZeroTruthy", function() {
		var v = -0;
		expect(is.NegZero(v)).toBe(true);		
	});

	it("isNegZeroFalsy", function() {
		var v = 1;
		expect(is.NegZero(v)).toBe(false);		
	});

	it("isRegExpTruthy", function() {
		var regexps = [/^foo(bar)?$/i, new RegExp()];
		for(var j in regexps){
			expect(is.RegExp(regexps[j])).toBe(true);		
		}
	});

	it("isRegExpFalsy", function() {
		var regexps = [undefined, null, 0, 0.1, true, {}, [], '$'];
		for(var j in regexps){
			expect(is.RegExp(regexps[j])).toBe(false);		
		}
	});

	it("isObjectTruthy", function() {
		var objs = [{}];
		
		for(var j in objs){
			expect(is.Object(objs[j])).toBe(true);		
		}
	});

	it("isObjectFalsy", function() {
		var objs = [1, 23, 0, -0, [], '', true];
		
		for(var j in objs){
			expect(is.Object(objs[j])).toBe(false);		
		}
	});

	it("isReallyNaNTruthy", function() {
		expect(is.ReallyNaN(NaN)).toBe(true);		
	});

	it("isReallyNaNFalsy", function() {
		var nans = [1, 23, 0, -0, [], {}, true, ''];
		
		for(var j in nans){
			expect(is.ReallyNaN(nans[j])).toBe(false);		
		}
	});

	it('isStringFalsy', function(){
		var strings = [1, 23, 0, -0, [], {}, true];
		
		for(var j in strings){
			expect(is.String(strings[j])).toBe(false);		
		}
	});

	it('isStringTruthy', function(){
		var strings = ['', '1'];
		
		for(var j in strings){
			expect(is.String(strings[j])).toBe(true);		
		}
	});

	it('isUndefinedFalsy', function(){
		var undefineds = [1, 23, 0, -0, [], {}, true, null, ''];
		
		for(var j in undefineds){
			expect(is.Undefined(undefineds[j])).toBe(false);		
		}
	});

	it('isUndefinedTruthy', function(){
		expect(is.Undefined(undefined)).toBe(true);		
	});

	it('isBlankStringFalsy', function(){
		var strings = [1, 23, 0, -0, [], {}, true, 'a'];
		
		for(var j in strings){
			expect(is.BlankString(strings[j])).toBe(false);		
		}
	});

	it('isBlankStringTruthy', function(){
		expect(is.BlankString('')).toBe(true);		
	});

	it('isTrueBooleanTruthy', function(){		
		expect(is.BooleanTrue(true)).toBe(true);
	});

	it('isBlankStringFalsy', function(){
		var Falsy = [1, 23, 0, -0, [], {}, 'a'];
		
		for(var j in Falsy){
			expect(is.BooleanTrue(Falsy[j])).toBe(false);
		}
	});
});

