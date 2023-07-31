var character = {
    firstName: 'Mario',
    greet: function () {
      var message = 'It\'s-a-me, ' + this.firstName + '!';
      console.log(message);
    }
  };

  function logIt(anyValue) {
    console.log('anyValue is:', anyValue);
  }
  
  logIt(42); // prints anyValue is: 42
  logIt('derp'); // prints anyValue is: derp

  function isThisUndefined() {
    var isUndefined = typeof this === 'undefined';
    console.log('is this undefined?', console.log(isUndefined));
  }
  
  isThisUndefined(); // prints "is this undefined?" false

  function thisIsWindow() {
    if (this === window) {
      return 'yep'
    } else {
      return this.rating.initial;
    }
  }
  
  thisIsWindow(); // "yep"

  var pet = {
    type: 'doggo',
    rating: {
      initial: 1,
      secondary: 2
    }
  };
  
  pet.thisIsWindow = thisIsWindow;
  
  console.log(pet);
  pet.thisIsWindow(); // "nope"

  const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let full = person.fullName.bind(member);
console.log('fullname: ', full());

full(); // Hege Nilsen