//     isJS 0.0.1
//     (c) 2013 Oral Dalay
//     isJS may be freely distributed under the MIT license.

(function(window){
	"use strict";
	
	var root = window,		
		
	// Credits to abozhilov
	PRIMITIVES = {
		'string' : 1,
		'number' : 1,
		'undefined' : 1,
		'boolean' : 1
	},

	previousis = window.is,
	is = root.is = {};
	
	// current version
	is.VERSION = '0.0.1',
		
	is._Core = { 
		'_2String' : Object.prototype.toString
	},	
	
	is._C2Type = {
		'[object Array]' : 'array',
		'[object Boolean]' : 'boolean',
		'[object Date]' : 'date',		
		'[object Function]' : 'function',
		'[object Number]' : 'number',
		'[object Object]' : 'object',
		'[object RegExp]' : 'regexp',			
		'[object String]' : 'string'
	},

	is.noConflict = function() {
		root.is = previousis;
		return this;
	},

	// return format is string
	is.typeOF = function(v){
		return v === null?String(v):is._C2Type[is._Core._2String.call(v)] || typeof v;
	},
	
	is.Primitive = function(v, message){
		if(typeof v in PRIMITIVES || !v){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},

	is.Boolean = function(v, message){
		if(is.typeOF(v) === 'boolean'){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},

	is.Numeric = function(v, message){
		if(!isNaN(parseFloat(v)) && isFinite(v)){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},
	
	is.Integer = function(v, message){
		if(is.typeOF(v) === 'number' && v % 1 === 0){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},
	
	is.Float = function(v, message){
		if(!isNaN(parseFloat(v)) && v % 1 !== 0){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},
	
	is.Object = function(v, message){
		if(Object.isObject?Object.isObject(v):is.typeOF(v) === 'object'){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},

	is.Array = function(v, message){
		if(Array.isArray?Array.isArray(v):is.typeOF(v) === 'array'){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},
	
	is.Function = function(v, message){
		if(is.typeOF(v) === 'function'){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},
	
	is.RegExp = function(v, message){
		if(is.typeOF(v) === 'regexp'){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},

	// taken from effectiveJS book by David Herman
	is.ReallyNaN = function(v, message){
		if(v !== v){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},

	is.Undefined = function(v, message){
		if(typeof v in PRIMITIVES && typeof v === 'undefined'){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},

	is.String = function(v, message){
		if(typeof v in PRIMITIVES && typeof v === 'string'){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},

	is.BlankString = function(v, message){
		if(typeof v in PRIMITIVES && typeof v === 'string' && v === ''){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},

	is.BooleanTrue = function(v, message){
		if(v&&(v===!!v)){
			return true;
		}else{
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
	},

	is.NegZero = function(v, message){
		// return v === 0 && 1/v === -Infinity;
		
		if (v !== 0){
			if(message){
				fire(message);
			}else{
				return false;
			}
		}
		
		var obj = Object.freeze({z:-0});
		
		try {
			Object.defineProperty(obj, 'z', {value:v});
		} catch (e) {
			if(message){
				fire(message);
			}else{
				return false;
			}
		}

		return true;
	};

	function fire(message){
		throw {
			name:'Error',
			message: message
		};
	}

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
