// practicing-------------------------

// const doggie = {
//   name: 'Buzz',
//   breed: 'Great Pyrenees',
//   furColor: 'black and white',
//   activityLevel: 'sloth-like',
//   favoriteFood: 'hot dogs'
// };

// const {name, breed} = doggie;
// console.log(name)
// console.log(breed)

// const doggie = {
//   name: 'Buzz',
//   breed: 'Great Pyrenees',
//   furColor: 'black and white',
//   activityLevel: 'sloth-like',
//   favoriteFoods: {
//     meats:{
//       ham: 'smoked',
//       hotDog: 'Oscar Meyer',
//     },
//     cheeses:{
//       american: 'kraft'
//     }
//   }
// };

// const {ham, hotDog} = doggie.favoriteFoods.meats
// console.log(hotDog)
// console.log(ham)

// const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff'];
// const [medium, small, giant] = dogs;
// console.log(medium, small, giant)

// const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff'];
// const [, small, giant] = dogs;
// console.log(small, giant)

// const dogsName = 'Sir Woody BarksALot';
// const [title, firstName, lastName] = dogsName.split(' ')
// console.log(title, firstName, lastName);

// const dogsName = 'Sir Woody BarksALot';
// const [title, , lastName] = dogsName.split(' ')
// console.log(title, lastName);



// practicing-------------------------

// ----------------------LAB


// const farmAnimals = 'cow horse sheep pig chicken';

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const muppet = {
//   muppetName: 'Miss Piggy',
//   color: 'pink',
//   song: 'Never Before, Never Again',
//   job: 'Cast member of The Muppet Show',
//   partner: 'Kermit'
// };

// const nestedMuppet = {
//   nestedName: 'Kermit',
//   nestedColor: 'green',
//   album: {
//     theMuppetMovie: {
//       song1: 'Rainbow Connection',
//       song2: 'Moving Right Along',
//       song3: 'Never Before, Never Again',
//       song4: 'I Hope That Something Better Comes Along',
//     },
//   },
//   nestedJob: 'Host of The Muppet Show',
//   nestedPartner: 'Miss Piggy'
// };

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')
console.log(moo, neigh, baa, oink, cluck)

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

const farmAnimals2 = 'cow sheep pig chicken';
const [bessie, dolly, babe, little] = farmAnimals2.split(' ')
console.log(bessie, dolly, babe, little)

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

const farmAnimals3 = 'cow sheep pig';
const [blackAndWhite, black, pink] = farmAnimals3.split(' ')
console.log(blackAndWhite, black, pink)


// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

const [r, o, y, g, b, , v] = colors
// console.log(r)

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

const [, , , , , indg,  ] = colors

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const {muppetName, color, song, job, partner} = muppet

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const {song2, song4} = nestedMuppet.album.theMuppetMovie
const {nestedJob, nestedPartner} = nestedMuppet
console.log(nestedJob, nestedPartner) 