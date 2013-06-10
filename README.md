[![build status](https://secure.travis-ci.org/orald/isJS.png?branch=master)](http://travis-ci.org/orald/isJS)

This library is written to help identifying Javascript types

<h1>Functions</h1>
```javascript

is.Boolean(arg); // returns true if the arg is of type "boolean"

is.Primitive(arg); // returns true if the arg is primitive (undefined, number, string, boolean)

is.Numeric(arg); // returns true if the arg is numeric

is.Integer(arg); // returns true if the arg is "integer"

is.Float(arg); // returns true if the arg is "double"

is.Object(arg); // returns true if the arg is "object"

is.Array(arg); // returns true if the arg is "array"

is.Function(arg); // returns true if the arg is "function"

is.RegExp(arg); // returns true if the arg is "regex"

is.ReallyNaN(arg) // safer than isNaN function, returns true only if value is NaN

is.Undefined(arg) // returns true if arg is "undefined"

is.String(arg) //returns true if arg is "string"

is.BlankString(arg) // returns true if arg is empty string

is.NegZero // return true if the value is "negative zero"

is.BooleanTrue // returns true if and only if the arg is boolean "true"
```

<h1>Release History</h1>
v0.0.1: Initial version providing basic type checking functions.
v0.0.2: Throw mechanism added, now you can pass the message you like to see when there is an error.
<h1>License</h1>
isJS is released under MIT license.
