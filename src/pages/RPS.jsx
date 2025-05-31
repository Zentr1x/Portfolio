import { useState } from "react";

export default function RPS() {
    
    var [round, setRound] = useState(1);
    var [result, setResult] = useState("");
    var [user_choice, setUserChoice] = useState("");
    var [ai_choice, setAIChoice] = useState("");
    var [user_score, setUserScore] = useState(0);
    var [ai_score, setAIScore] = useState(0);
    const [users_choice_history, setUsersChoiceHistory] = useState([]); 



    // use different AI models

    // model 1 random
    function model1() {
        var random = Math.random()
        if (random <= 0.33) {
            ai_choice = "rock"
        } else if (random <= 0.66) {
            ai_choice = "paper"
        } else {
            ai_choice = "scissors"
        }
        return ai_choice;
    }

    // model 2 choose based on users patterns
    function model2() {
       // if pattern found
       // identify subset

       var test = ["rock","paper","scissors","paper",  "rock","paper","scissors","paper",  "rock","paper"]

       for (var i=2; i< 3/*test.length/2*/; i++) {
            var pattern = []
            pattern.push(test[0])
            pattern.push(test[1])
            console.log(pattern)
       }

        console.log("blah"); 
        return ai_choice;
    }

    model2()

    // model 3 choose the users most frequent and recent answer
    function model3() {
        // if last x choices are the same, choose y
         return ai_choice;
     }

    // model 4 choose the users least frequent answer (recently)
    function model4() {
        // 
         return ai_choice;
     }

    function play(choice) {
        console.log(choice)
        setUserChoice(choice)

         // update users choice history
         setUsersChoiceHistory(prevHistory => [...prevHistory, choice]);
         console.log(users_choice_history); // not updated all the time, use useEffect later

         // update round count
        setRound(prevRound => prevRound + 1); //prevRound is automatically provided by React

        setAIChoice(model1())

        if (choice == ai_choice) {
            console.log("draw")
            setResult("Draw")
        } else if(
            (choice === "rock" && ai_choice === "scissors") ||
            (choice === "paper" && ai_choice === "rock") ||
            (choice === "scissors" && ai_choice === "paper")
        ) {
            setUserScore(prevScore => prevScore + 1); 
            setResult("You Win!")
        } else {
            setAIScore(prevScore => prevScore + 1);
            console.log(choice)
            console.log(ai_choice)
            setResult("You Lose!")
        }
    }



    return (
        <div>
            <h1>AI Rock Paper Scissors page</h1>

            <h2>Round: {round} </h2>

            <div>
                <p>You</p>
                <button onClick={ () => play("rock")} >Rock</button>
                <button onClick={ () => play("paper")} >Paper</button>
                <button onClick={ () => play("scissors")} >Scissors</button>
            </div>

            <h1> Result: {result} </h1>
            <h1>Score</h1>
            <p>You: {user_score} </p>
            <p>AI: {ai_score} </p>

            <h1>Choice</h1>
            <p>You: {user_choice} </p>
            <p>AI: {ai_choice} </p>

            {/* <div>
                <p>AI</p>
                <button>Rock</button>
                <button>Paper</button>
                <button>Scissors</button>
            </div> */}
        </div>
    );
}