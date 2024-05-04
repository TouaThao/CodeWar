// A man travels to different locations. If it is rainy, he will take an umbrella with him,
//from wherever he's coming from to wherever he's going. If it is sunny, he will not.

// Your function will receive, as an argument, an
// array of objects containing each of the locations the man travels to, and the weather during the trip to that location, for example:

// [
//   ["work", "sunny"],
//   ["shop", "rainy"],
//   ["work", "rainy"],
//   ["home", "sunny"],
//   ["work", "rainy"],
//   ["gym",  "sunny"],
//   ["work", "sunny"],
//   ["home", "rainy"]
// ]
// Before his travels start, the man is at "home", and therefore "home" will always
// be present in the returned list of locations. The locations can be arbitrary strings,
// not just the ones shown in these examples. The weather is always either "sunny" or "rainy".

// Your function must return an object where the keys are the different locations that the man visited,
// and the values are the minimum number of umbrellas that must be at each of those locations before the man
// starts the sequence of travels, so that he never finds himself missing an umbrella when travelling somewhere. For example, for the above example:

// [
//   ["work", "sunny"],
//   ["shop", "rainy"], // there needs to be an umbrella at work
//   ["work", "rainy"], // he can re-use the umbrella he took to the shop
//   ["home", "sunny"],
//   ["work", "rainy"], // there needs to be an umbrella at home
//   ["gym",  "sunny"],
//   ["work", "sunny"],
//   ["home", "rainy"]  // he can re-use one of the umbrellas he took to work
// ]
// The correct return value for your function would then be:

// {
//   "work": 1,
//   "home": 1,
//   "gym":  0,
//   "shop": 0
// }
// Note that the man can travel from his current location to his current location.
// In this situation, the man still leaves the location,
// wanders around under a rainy or sunny sky for a bit (potentially needing, or not needing, an umbrella) and returns to the location.

function requiredUmbrellas(travels) {
  const res = { home: 0 };
  const actual = { home: 0 };
  let prevPlace = "home";

  for (let [place, weather] of travels) {
    res[place] ??= 0;
    actual[place] ??= 0;

    if (weather === "rainy") {
      if (actual[prevPlace] === 0) {
        res[prevPlace]++;
        actual[prevPlace]++;
      }
      actual[prevPlace]--;
      actual[place]++;
    }
    prevPlace = place;
  }

  return res;
}
// console.log(
//   requiredUmbrellas([
//     ["work", "sunny"],
//     ["shop", "sunny"],
//     ["home", "sunny"],
//   ]),
//   {
//     work: 0,
//     shop: 0,
//     home: 0,
//   }
// );

console.log(
  requiredUmbrellas([
    ["work", "rainy"],
    ["home", "sunny"],
    ["work", "rainy"],
    ["gym", "rainy"],
    ["work", "sunny"],
    ["shop", "rainy"],
    ["work", "sunny"],
    ["shop", "rainy"],
  ]),
  {
    work: 1,
    shop: 0,
    gym: 0,
    home: 2,
  }
);

// console.log(
//   requiredUmbrellas([
//     ["work", "rainy"],
//     ["shop", "rainy"],
//     ["home", "rainy"],
//   ]),
//   {
//     work: 0,
//     shop: 0,
//     home: 1,
//   }
// );
