/*
You need to determine if a person is eligible to vote (age 18 or above).
Problem Statement:
Write a function that checks if a person is eligible to vote and returns "Eligible" or "Not Eligible".
US Javascript
You just need to implement the checkVotingEligibility function
*/

function checkVotingEligibility(age) {
    // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"

    if (age >= 18) {
        return "Eligible";
    }
    else {
        return "Not Eligible";
    }
}

let votingPower = checkVotingEligibility(20);
votingPower = checkVotingEligibility(16);
votingPower = checkVotingEligibility(18);

console.log(votingPower);

/*
Test Cases:
Test 1
Input:
1 {"age": 20}
Expected Output:
1 "Eligible"

Test 2
Input:
1 {"age": 16}
Expected Output:
1 "Not Eligible"

Test 3
Input:
1 {"age": 18}
Expected Output:
1 "Eligible"

*/