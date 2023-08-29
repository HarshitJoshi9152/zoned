// Maybe use some typescript too...

const getTime = (timeObj) => {
  // const d = new Date();
  return `${timeObj.hr}:${timeObj.min}`
}


const person = {
  "name": "Karambit",
  "timezone": "+5:30 Indian time",
  "_sleep": {
    "hr": 22,
    "min": 0
  },
  "_wake": {
    "hr": 8,
    "min": 0
  },

  get wake() {
    return getTime(this._wake);
  }
}

// https://alpinejs.dev/directives/init#next-tick
function getPeople() {
  console.log("READING !");
  return [person];
}

// @click="showPersonForm()" vs x-on:click
function showPersonForm() {}