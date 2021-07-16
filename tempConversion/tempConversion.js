const ftoc = function(fahrenheit) {
  let takeAway = fahrenheit - 32;
  let frac = 5 / 9;
  let mult = takeAway * frac;
  return Math.round(mult * 10) / 10;
};

const ctof = function(celsius) {
  let frac = 9 / 5;
  let mult = celsius * frac;
  let addition = mult + 32;
  return Math.round(addition * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
};
