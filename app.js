const array = [];

function random(n) {
  return Math.round(Math.random() * n);
}

for (let i = 0; i < 10; i += 1) {
  array.push(random(10));
}
