// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   fullName: function() {
//     return this.firstName + ' ' + this.lastName;
//   }
// };

// console.log(person.eyeColor, person.fullName());

let kittenProfiles = document.getElementById('kittenProfiles');

// console.log(kittenProfiles);

function Kitten(name, likes, imageSrc, isGoodWithKids, isGoodWithDogs, isGoodWithCats, breed) {
  this.name = name;
  this.likes = likes;
  this.age = 0;
  this.imageSrc = imageSrc;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.breed = breed;
}


Kitten.prototype.getAge = function(min, max) {
  this.age = Math.floor(Math.random() * (max - min + 1) + min); 
  // return this.age;
};

Kitten.prototype.render = function() {
  let articleElement = document.createElement('article');
  kittenProfiles.appendChild(articleElement);

  let h2Element = document.createElement('h2');
  h2Element.textContent = this.name;
  articleElement.appendChild(h2Element);

  let pElement = document.createElement('p');
  pElement.textContent = ' is ' +  this.age +  ' months  old, he is ' +  this.breed;
  articleElement.appendChild(pElement);

  const tableEle = document.createElement('table');
  articleElement.appendChild(tableEle);

  let tr1 = document.createElement('tr');
  tableEle.appendChild(tr1);

  let th1 = document.createElement('th');
  th1.textContent = 'Is good with Kids';
  tr1.appendChild(th1)

  let th2 = document.createElement('th');
  th2.textContent = 'Is good with Dogs';
  tr1.appendChild(th2)

  let th3 = document.createElement('th');
  th3.textContent = 'Is good with Cats';
  tr1.appendChild(th3)

  let tr2 = document.createElement('tr');
  tableEle.appendChild(tr2);

  let td1 = document.createElement('td');
  td1.textContent = this.isGoodWithKids;
  tr2.appendChild(td1);

  let td2 = document.createElement('td');
  td2.textContent = this.isGoodWithDogs;
  tr2.appendChild(td2);

  let td3 = document.createElement('td');
  td3.textContent = this.isGoodWithCats;
  tr2.appendChild(td3);

  let ulElement = document.createElement('ul');
  articleElement.appendChild(ulElement);

  for(let i = 0; i < this.likes.length; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = this.likes[i];
    ulElement.appendChild(liElement);
  }
  
  let imgElement =  document.createElement('img');
  imgElement.src = this.imageSrc;
  // imgElement.setAttribute('src', this.imageSrc)
  articleElement.appendChild(imgElement);
}

let frankie = new Kitten('Frankie', ['Chasing'], './images/frankie.jpeg', true, true, true, 'British');
let jumper = new Kitten('Jumper', ['Chasing'], './images/jumper.jpeg', true, true, true, 'British');
let serena = new Kitten('Serena', ['Chasing'], './images/serena.jpeg', true, true, true, 'British');
let semba = new Kitten('Semba', ['Chasing'], './images/serena.jpeg', true, true, true, 'British');
// semba.getAge(5, 6);
// semba.render();
console.log(semba);

let arr = [frankie, jumper, serena];

for(let i = 0; i < arr.length; i++) {
  arr[i].getAge(3, 12);
  arr[i].render();
  console.log(arr[i]);

}



// const frankie = {
//   name: 'Frankie',
//   likes: ['Chasing', 'napping', 'dfdf', 'ererer'],
//   age: 0,
//   imageSrc: './images/frankie.jpeg',
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   isGoodWithCats: true,
//   breed: 'British',
//   getAge: function(min, max) {
//     this.age = Math.floor(Math.random() * (max - min + 1) + min); 
//     return this.age;
//   },
//   render: function() {
//     let articleElement = document.createElement('article');
//     kittenProfiles.appendChild(articleElement);

//     let h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     articleElement.appendChild(h2Element);

//     let pElement = document.createElement('p');
//     pElement.textContent = this.name + ' is ' +  this.age +  ' months  old, he is ' +  this.breed;
//     articleElement.appendChild(pElement);

//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);

//     for(let i = 0; i < this.likes.length; i++) {
//       let liElement = document.createElement('li');
//       liElement.textContent = this.likes[i];
//       ulElement.appendChild(liElement);
//     }
    
//     let imgElement =  document.createElement('img');
//     imgElement.src = this.imageSrc;
//     // imgElement.setAttribute('src', this.imageSrc)
//     articleElement.appendChild(imgElement);

//     let aTag = document.createElement('a');
//     aTag.href = '#';
//     aTag.textContent = 'test';
//     articleElement.appendChild(aTag);
//   }
// }

// const jumper = {
//   name: 'Jumper',
//   likes: ['chasing'],
//   age: 0,
//   imageSrc: './images/jumper.jpeg',
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   isGoodWithCats: true,
//   breed: 'British',
//   getAge: function(min, max) {
//     this.age = Math.floor(Math.random() * (max - min + 1) + min); 
//     return this.age;
//   },
//   render: function() {
//     // <article>
//     //       <h2>Frankie</h2>
//     //       <p>Frankie is 3 months old, he is British</p>
//     //       <ul>
//     //         <li>Chasing</li>
//     //         <li>Napping</li>
//     //       </ul>
//     //       <img src="./images/frankie.jpeg">
//     //     </article>

//     let articleElement = document.createElement('article');
//     kittenProfiles.appendChild(articleElement);

//     let h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     articleElement.appendChild(h2Element);

//     let pElement = document.createElement('p');
//     pElement.textContent = this.name + ' is ' +  this.age +  ' months  old, he is ' +  this.breed;
//     articleElement.appendChild(pElement);

//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);

//     for(let i = 0; i < this.likes.length; i++) {
//       let liElement = document.createElement('li');
//       liElement.textContent = this.likes[i];
//       ulElement.appendChild(liElement);
//     }
    
//     let imgElement =  document.createElement('img');
//     imgElement.src = this.imageSrc;
//     // imgElement.setAttribute('src', this.imageSrc)
//     articleElement.appendChild(imgElement);
//   }
// }

// console.log(jumper)
// frankie.getAge(3,12);
// jumper.getAge(3, 12);
// // console.log(frankie.getAge(3, 12))
// console.log(frankie)
// console.log(jumper)

// frankie.render();
// jumper.render();