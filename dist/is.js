//     isJS 0.0.1
//     (c) 2013 Oral Dalay
//     isJS may be freely distributed under the MIT license.

(function(window){
	"use strict";
	
	var root = window,		
		
	// Credits to abozhilov
	PRIMITIVES = {
		"string" : 1,
		"number" : 1,
		"undefined" : 1,
		"boolean" : 1
	},

	previousis = window.is,
	is = root.is = {};
	
	// current version
	is.VERSION = "0.0.1",
		
	is._Core = { 
		'_2String' : Object.prototype.toString
	},	
	
	is._C2Type = {
		"[object Array]" : "array",
		"[object Boolean]" : "boolean",
		"[object Date]" : "date",		
		"[object Function]" : "function",
		"[object Number]" : "number",
		"[object Object]" : "object",
		"[object RegExp]" : "regexp",			
		"[object String]" : "string"
	},

	is.noConflict = function() {
		root.is = previousis;
		return this;
	},

	// return format is string
	is.typeOF = function(v){
		return v === null?String(v):is._C2Type[is._Core._2String.call(v)] || typeof v;
	},

	is.Boolean = function(v){
		return is.typeOF(v) === 'boolean';
	},

	is.Primitive = function(v){
		return typeof v in PRIMITIVES || !v;
	},

	is.Numeric = function(v){
		return !isNaN(parseFloat(v)) && isFinite(v);
	},
	
	is.Integer = function(v){
		return is.typeOF(v) === 'number' && v % 1 === 0;
	},
	
	is.Float = function(v){
		return !isNaN(parseFloat(v)) && v % 1 !== 0;
	},
	
	is.Object = function(v){
		return is.typeOF(v) === 'object';
	},

	is.Array = function(v){
		return is.typeOF(v) === 'array';
	},
	
	is.Function = function(v){
		return is.typeOF(v) === 'function';
	},
	
	is.RegExp = function(v){
		return is.typeOF(v) === 'regexp';
	},

	is.NegZero = function(v){
		// return v === 0 && 1/v === -Infinity;
		
		if (v !== 0){
			return false;
		}
		var obj = Object.freeze({z:-0});
		try {
			Object.defineProperty(obj, 'z', {value:v});
		} catch (e) {return false;}
		return true;
	};

	// NodeJS compatibility
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = is;
		}
		exports.is = is;
	} else {
		root.is = is;
	}

})(this);
