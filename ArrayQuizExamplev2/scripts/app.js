//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  

let count;

let peoplesActiveTxt = document.getElementById("peoplesActiveTxt")
let peoplesIn20stxt = document.getElementById("peoplesIn20stxt")
let questionThreeTxt = document.getElementById("questionThreeTxt")



async function peoplesArray() {
    const promise = await fetch("./data/quizdata.json");
    const data = await promise.json();
    console.log(data.People[0].Active);
    peoplesIn20s(data.People);
    peoplesActive(data.People)
    answerThree(data.height);
    answerFour(data.People);
    // answerFour(data.People.active)

}
peoplesArray()

const questionThree = data =>{
    count = 0;

    data.map(person => {
        if(person.height < 6){
            count++;
        }
    });

}

const peoplesIn20s = data => {
    count = 0;
    
    data.map(person => {
        if(person.age > 19 && person.age < 30){
            count++;
        }});
        peoplesIn20stxt.textContent = `There are ${count} people that are in their 20s.`;
}
const peoplesActive = data => {

    data.map(People => {
        if(People.Active === true){
            count++;
        }
    });
    peoplesActiveTxt.textContent = `there are ${count} people active`;
}




const answerFour = data => {
    const answerFourData = data.findIndex(person => parseInt(person.height) > 56);

    console.log(answerFourData);
    answerFour.textContent = data[0].name;


}






// let count;
// let AnswerOne = document.getElementById("AnswerOne");


// async function getData(){
//     const promise = await fetch("../data/quizdata.json");
//     const data = await promise.json();
//     console.log(data.People);

//     answerOne(data.People);
//     answerFour(data.People);
// }

// getData();

// // How many people are in their 20s?

// // Iterate through this array and we need to check if people's age is > 19 and less than 30

// const answerOne = data => {
//     count = 0;
    
//     data.map(person => {
//         if(person.age > 19 && person.age < 30){
//             count++;
//         }
//     });

//     AnswerOne.textContent = `There are ${count} people that are in their 20s.`;
// }

// // question 2: .map
// // question 3: .map
// // question 4: .map

// // find the first person in this array that is taller than 56 inches?

// const answerFour = data => {
//     const answerFourData = data.findIndex(person => parseInt(person.height) > 56);

//     console.log(answerFourData);
//     console.log(data[0].name);
// }