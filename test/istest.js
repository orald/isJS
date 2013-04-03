"use strict";

describe("Is A test!", function() {
	beforeEach(function() {

	});
	
	it("isNumericFalsy", function() {
		var Falsy = ['D','XS','/','-',{},undefined,'', null];
		
		for(var i in Falsy){
			expect(is.Numeric(Falsy[i])).toBe(false);
		}
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
	});
	
	it("isPrimitiveTruthy", function() {
		var Truthy = [undefined, false, true, 0, '1', -1, '', null];
		
		for(var j in Truthy){
			expect(is.Primitive(Truthy[j])).toBe(true);		
		}
	});
	
	it("isIntegerTruthy", function() {
		var ints = [0, -1, 1, 23412, -23412, -32345454545454];
		
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
		var floats = [true, 1, 23, 0, -0, {}, [], ""];
		
		for(var j in floats){
			expect(is.Float(floats[j])).toBe(false);		
		}
	});
	
	it("isBooleanFalsy", function() {
		var bools = [1, 23, 0, -0, {}, [], ""];
		
		for(var j in bools){
			expect(is.Boolean(bools[j])).toBe(false);		
		}
	});

	it("isBooleanTruthy", function() {
		var bools = [true, false, new Boolean(true), new Boolean(false)];
		
		for(var j in bools){
			expect(is.Boolean(bools[j])).toBe(true);		
		}
	});

	it("isFunctionFalsy", function() {
		var fns = [1, 23, 0, -0, {}, [], "", true];
		
		for(var j in fns){
			expect(is.Function(fns[j])).toBe(false);		
		}
	});

	it("isFunctionTruthy", function() {
		var fns = [function a(){}, new Function()];
		
		for(var j in fns){
			expect(is.Function(fns[j])).toBe(true);		
		}
	});

	it("isArrayFalsy", function() {
		var arrays = [-1, 0, undefined, {}, null, function a(){}, 0.1];
		
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

	it("isNegZero", function() {
		var v = -0;
		expect(is.NegZero(v)).toBe(true);		
	});

});

