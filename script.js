// Part (a) - Scoping with let and var
if (true) {
  let x = 10;
  var y = 20;
}

// var is function/global scoped -> accessible here
console.log("a) console.log(y):", y); // 20

// let is block scoped -> accessing outside the block throws ReferenceError
try {
  console.log("a) console.log(x):", x);
} catch (err) {
  console.log("a) console.log(x):", err.toString()); // ReferenceError: x is not defined
}

// Explanation (printed)
console.log(
  "Explanation: 'y' declared with var is not block-scoped, so it's accessible outside the if-block. 'x' declared with let is block-scoped, so it's not accessible outside the block."
);

// Part (b) - Optional chaining safe access
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log("b) profile.user.details.email:", profile?.user?.details?.email); // "test@mail.com"
console.log("b) profile.user.details.phone:", profile?.user?.details?.phone); // undefined (no error)

// Part (c) - Example where optional chaining prevents runtime error
const data1 = { user: null };

// Without optional chaining this would throw: TypeError: Cannot read properties of null (reading 'details')
// With optional chaining it safely returns undefined
console.log("c) data1.user?.details?.age:", data1.user?.details?.age); // undefined

// Another example: missing nested object
const data2 = {};
console.log("c) data2.account?.settings?.theme:", data2.account?.settings?.theme); // undefined (no runtime error)
