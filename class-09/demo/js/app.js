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
let catForm = document.getElementById('catForm');
console.log(catForm);

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

catForm.addEventListener('submit', submitHandler);
function submitHandler(event) {
  event.preventDefault(); // Stop refreshing
  let catName = event.target.catName.value;
  let catBreed = event.target.catBreed.value;
  let likes = event.target.catLikes.value.split(',');
  let goodKids = event.target.isGoodWithKids.checked;
  let goodCat = event.target.isGoodWithCats.checked;
  let goodDog = event.target.isGoodWithDogs.checked;

  let newCat = new Kitten(catName, likes, '', goodKids, goodDog, goodCat, catBreed);
  newCat.getAge(3, 12);
  newCat.render();
  console.log(newCat)
  catForm.reset();
}