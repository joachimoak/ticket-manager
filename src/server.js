(function example() {
  const a = 1;
  const b = a;
  const c = a;

  console.log(a); // throws ReferenceError
  console.log(b); // throws ReferenceError
  console.log(c);
})();
