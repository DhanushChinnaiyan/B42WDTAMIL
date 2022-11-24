// Q.NO:1---for the given json iterate over all for loops(for,for in,for of,forEach)

//for loop:
var obj=[{"name": "John","Age": "20","gender": "male","qualification":"BE-Mechanical Engineering", "location": "chennai", "experience": "10years of experinence in xxx company", "LanguagesKnown":"tamil"}]
for(var i=0;i<obj.length;i++) {
console.log(obj[i]);
}

//for in:
var i;
var obj=[{"name": "John","Age": "20","gender": "male","qualification":"BE-Mechanical Engineering", "location": "chennai", "experience": "10years of experinence in xxx company", "LanguagesKnown":"tamil"}]
for(i in obj) {
console.log(obj[i]);
}

//for of:
var i;
var obj=[{"name": "John","Age": "20","gender": "male","qualification":"BE-Mechanical Engineering", "location": "chennai", "experience": "10years of experinence in xxx company", "LanguagesKnown":"tamil"}]
for(i of obj) {
console.log(i);
}
//for each:

var obj=[{"name": "John","Age": "20","gender": "male","qualification":"BE-Mechanical Engineering", "location": "chennai", "experience": "10years of experinence in xxx company", "LanguagesKnown":"tamil"}]
obj.forEach(element => console.log(element));

// Q.NO:2---2.create your own resume data in json format:

var resume = {
    Name: "Dhanush",
    Age: 22,
    Gender: "male",
    Qualification: ["10th", "12th", "BE-Mechanical Engineering"],
    Board:"10th,12th-State board",
    University: "BE-Anna university",
    Institution: ["10th,12th-governmental higher secondary school","BE-Maha barathi engineering college"],
    Location: "kallakurichi",
    Experience: "6 month of experinence in Equitas small business bank ",
    LanguagesKnown: ["tamil", "english","malayalam"],
    Address: "268,south street,kosappadi,kallakurichi,tamil nadu-606401"

  };
  console.log(resume);