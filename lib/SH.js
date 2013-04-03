//     SHJS 0.0.1
//     (c) 2012-2013 Oral Dalay
//     SHJS may be freely distributed under the MIT license.

(function(window){
	"use strict";
	
	var root = window,		
		// Credits to abozhilov
		//PROTO_SUPPORT = 'proto__obj' in {__proto__ : {'proto__obj' : 1}},
		PRIMITIVES = {
			string : 1,
			number : 1,
			undefined : 1,
			boolean : 1
		},
		previousSH = window.SH,
		SH = root.SH = {};
	
	// current version
	SH.VERSION = "0.0.1";	
		
	SH._Core = { 
		'_2String' : Object.prototype.toString
	},	
	
	SH._C2Type = {
		"[object Array]" : "array",
		"[object Boolean]" : "boolean",
		"[object Date]" : "date",		
		"[object Function]" : "function",
		"[object Number]" : "number",
		"[object Object]" : "object",
		"[object RegExp]" : "regexp",			
		"[object String]" : "string"
	},

	SH.noConflict = function() {
		root.SH = previousSH;
		return this;
	};

	// return format is string
	SH.typeOF = function(v){
		return v == null?String(v):SH._C2Type[SH._Core['_2String'].call(v)] || typeof v;
	};

	SH.isPrimitive = function(v){
		return typeof v in PRIMITIVES || !v;
	};

	SH.isNumeric = function(v){
		return !isNaN(parseFloat(v)) && isFinite(v);
	};
	
	SH.isInteger = function(v){
		return SH.typeOF(v) === 'number' && v % 1 === 0;
	};
	
	SH.isFloat = function(v){
		return !isNaN(parseFloat(v)) && v % 1 !== 0;
	};
	
	SH.isObject = function(v){
		return v === Object(v);
	};
	
	SH.isFunction = function(v){
		return typeof v === 'function';
	};
	
	SH.isNegZero = function(v){
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
	
	// implementation of UnderscoreJS _pick
	SH.pick = function(obj){
		var newobj = {}, 
			args = [].concat([], [].slice.call(arguments, 1));	
			
		for(var i=0; i<args.length; i++){
			if(args[i] in obj){
				newobj[args[i]] = obj[args[i]];
			}
		}
		return newobj;
	};

	// implementation of UnderscoreJS _omit
	SH.omit = function(obj){
		var newobj = {}, 
			args = [].concat([], [].slice.call(arguments, 1));	
		for(var key in obj){
			if(args.indexOf(key) < 0){
				newobj[key] = obj[key];
			}
		}
		return newobj;
	};
	
	// implementation of UnderscoreJS _invoke
	SH.invoke = function(list, fn){
		var args = [].slice.call(arguments, 2);
		var isF = SH.isFunction(fn);
		return list.map(function(value){
			return (isF ? fn : value[fn]).apply(value, args);
		});
	};

	// implementation of UnderscoreJS _intersection
	SH.intersection = function(base){
		var rest = [].slice.call(arguments, 1);
		
		return SH.unique(base).filter(function(value){
			return rest.every(function(r){
				return r.indexOf(value) >= 0;
			});
		});
	};
	
	// Array unique implementation
	SH.unique = function(v){
		var uniq = [];
		
		if(Array.prototype.unique){
			return v.unique();
		}else{
			v.forEach(function(el){
				if(uniq.indexOf(el) < 0){
					uniq.push(el);
				}
			});
			return uniq;			
		}
	};
	
	// implementation of UnderscoreJS _reject
	SH.reject = function(list, fn, context){
		return list.filter(function(element, index, array){
			return !fn.call(context, element, index, array);
		}, context);
	};

	//implementation of UnderscoreJS wrap function
	SH.wrap = function(func, wrapper){

		return function(){
			var args = [func];
			[].push.apply(args, arguments);
			return wrapper.apply(this, args);
		};

	};

	//implementation of UnderscoreJS after function
	SH.after = function(count, afterfn){
		if(count <= 0){
			return afterfn();
		}
		return function(){
			if(--count < 1){
				return afterfn.apply(this, arguments);
			}
		};
	};

	// NodeJS compatibility
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = SH;
		}
		exports.SH = SH;
	} else {
		root.SH = SH;
	}

})(this);
