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

const frankie = {
  name: 'Frankie',
  likes: ['Chasing', 'napping', 'dfdf', 'ererer'],
  age: 0,
  imageSrc: './images/frankie.jpeg',
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithCats: true,
  breed: 'British',
  getAge: function(min, max) {
    this.age = Math.floor(Math.random() * (max - min + 1) + min); 
    return this.age;
  },
  render: function() {
    // <article>
    //       <h2>Frankie</h2>
    //       <p>Frankie is 3 months old, he is British</p>
    //       <ul>
    //         <li>Chasing</li>
    //         <li>Napping</li>
    //       </ul>
    //       <img src="./images/frankie.jpeg">
    //     </article>

    let articleElement = document.createElement('article');
    kittenProfiles.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    let pElement = document.createElement('p');
    pElement.textContent = this.name + ' is ' +  this.age +  ' months  old, he is ' +  this.breed;
    articleElement.appendChild(pElement);

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

    let aTag = document.createElement('a');
    aTag.href = '#';
    aTag.textContent = 'test';
    articleElement.appendChild(aTag);
  }
}

const jumper = {
  name: 'Jumper',
  likes: ['chasing'],
  age: 0,
  imageSrc: './images/jumper.jpeg',
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithCats: true,
  breed: 'British',
  getAge: function(min, max) {
    this.age = Math.floor(Math.random() * (max - min + 1) + min); 
    return this.age;
  },
  render: function() {
    // <article>
    //       <h2>Frankie</h2>
    //       <p>Frankie is 3 months old, he is British</p>
    //       <ul>
    //         <li>Chasing</li>
    //         <li>Napping</li>
    //       </ul>
    //       <img src="./images/frankie.jpeg">
    //     </article>

    let articleElement = document.createElement('article');
    kittenProfiles.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    let pElement = document.createElement('p');
    pElement.textContent = this.name + ' is ' +  this.age +  ' months  old, he is ' +  this.breed;
    articleElement.appendChild(pElement);

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
}

console.log(jumper)
frankie.getAge(3,12);
jumper.getAge(3, 12);
// console.log(frankie.getAge(3, 12))
console.log(frankie)
console.log(jumper)

frankie.render();
jumper.render();