const submissions = [
    {name: "Jane",
     score: '95',
     date: 2020-01-24,
     passed: 'true'
    },

    {name:"Joe",
     score: 77,
     date: 2018-05-14,
     passed:'true' 
    },

    {name:"Jack",
     score: 59,
     date: 2019-07-05,
     passed:'false'
    },

    {name: "Jill",
     score: 88,
     date: 2020-04-22,
     passed: 'true',
    },  
]

function addSubmission (array, newName, newScore, newDate,) {
    
    const newSubmission =
    {
        name: newName,
        score: newScore,
        date: newDate,  
        passed: newScore >=60,
    }
    array.push(newSubmission)
}
//addSubmission(submissions, 'Bobby', 65, 2020-04-25,);
//console.log(submissions)

function delteSubmissionByIndex (array, index) {
    array.splice(index,1)
}

function delteSubmissionByName (array,name) {

    const index = array.findIndex(submission => submission.name === name);

    array.splice(index,1);
}
//delteSubmissionByName(submissions,'Jill');
//console.log(submissions);

function editSubmission (array,index,score) {
    const submission = array[index];

    submission.score = score;
    submission.passed = score >=60;
}
//editSubmission(submissions, 2, 65,);
//console.log(submissions)

function findSubmissionByName (array,name) {
    return array.find(submission => submission.name === name);
}
//console.log(findSubmissionByName(submissions,'Joe'));

function findLowestScore (array) {
    let lowest = array[0];
    
    array.forEach(submission => { 
        if (submission.score < lowest.score){
            lowest = submission;
        }     
    });

    return lowest;
}
//console.log(findLowestScore(submissions));

function findAverageScore(array) {
    let total = 0;

    for (let submission of array) {
        total = total + submission.score
    }

    return total / array.length
}

//console.log(findAverageScore(submissions));

function filterPassing (array) {
   return array.filter(submission => submission.passed === 'true');
}
//console.log(filterPassing(submissions));

function filter90AndAbove (array) {
    return array.filter(submission => submission.score >= 90);
}
//console.log(filter90AndAbove(submissions));