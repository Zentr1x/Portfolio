import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import rock_img from "../assets/rock.png";
import paper_img from "../assets/paper.png";
import scissors_img from "../assets/scissors.png";

import "../css/RPS.css";

export default function RPS() {
  var [round, setRound] = useState(1);
  var [result, setResult] = useState("");

  var [user_choice, setUserChoice] = useState("");
  var [ai_choice, setAIChoice] = useState("");

  var [user_score, setUserScore] = useState(0);
  var [draw_score, setDrawScore] = useState(0);
  var [ai_score, setAIScore] = useState(0);

  var [users_choice_history, setUsersChoiceHistory] = useState([]);

  var [ai_type, setAiType] = useState("my_ai");

  var [pattern, setPattern] = useState(
    new Map([
      ["rock,rock", { rock: 1, paper: 1, scissors: 1 }],
      ["rock,paper", { rock: 1, paper: 1, scissors: 1 }],
      ["rock,scissors", { rock: 1, paper: 1, scissors: 1 }],
      ["paper,rock", { rock: 1, paper: 1, scissors: 1 }],
      ["paper,paper", { rock: 1, paper: 1, scissors: 1 }],
      ["paper,scissors", { rock: 1, paper: 1, scissors: 1 }],
      ["scissors,rock", { rock: 1, paper: 1, scissors: 1 }],
      ["scissors,paper", { rock: 1, paper: 1, scissors: 1 }],
      ["scissors,scissors", { rock: 1, paper: 1, scissors: 1 }],
    ])
  );

  // use different AI models

  // model 1 get random choice
  function randomChoice() {
    var random = Math.random();
    if (random <= 0.33) {
      ai_choice = "rock";
    } else if (random <= 0.66) {
      ai_choice = "paper";
    } else {
      ai_choice = "scissors";
    }
    return ai_choice;
  }

  // note: the idea behind models 2-4 were inspired by a yt vid
  // which i have scrapped from the final models i decided to do

  // model 2 choose based on users patterns
  function model2() {
    // if pattern found
    // identify subset

    var test = [
      "rock",
      "paper",
      "scissors",
      "paper",
      "rock",
      "paper",
      "scissors",
      "paper",
      "rock",
      "paper",
    ];

    for (var i = 2; i < 3 /*test.length/2*/; i++) {
      var pattern = [];
      pattern.push(test[0]);
      pattern.push(test[1]);
      console.log(pattern);
    }

    console.log("blah");
    return ai_choice;
  }
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

  // a model that literally asks chatgpt for a choice
  function fetchChatGPT() {
    const historyString = users_choice_history.join(", ");
    //console.log("history: " + historyString);

    // step 1: ask chatgpt to get the choice and it's explaination
    // ^ chatgpt gets dumb when its asked to answer in 1 word, hence i will seperate into 2 different queries
    return fetch("http://localhost:3000/chatgpt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `You are playing rock paper scissors against me and you are trying to win. You are a smart AI that can predict my next move based on my patterns. Based on my choices here ${historyString}, reply a choice that can beat my next move.`,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("explaination: ", data);

        // Step2: Retrieving the choice from the explaination
        return fetch("http://localhost:3000/chatgpt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `Summarise this response and reply only with the move you should play (rock, paper, or scissors), in one word with no punctuation or explanation: ${data.reply}`,
          }),
        });
      })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const finalMove = data.reply.trim().toLowerCase();
        console.log("final move:", finalMove);
        return finalMove;
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }

  function myAI() {
    var predictedMove; // the move the user is expected to play
    var aiMove; // the move the ai will play to counter the user's move

    // console.log(users_choice_history);

    // checks if user has played at least 3 times - since we are using patterns of 2 to predict choices
    if (users_choice_history.length >= 3) {
      let i = users_choice_history.length - 1; // last index of the user's history array

      // 1. add the users past choices into the pattern var
      var key = users_choice_history[i - 2] + "," + users_choice_history[i - 1];

      if (pattern.has(key)) {
        const weights = pattern.get(key);
        var usersMove = users_choice_history[i];
        weights[usersMove] *= 1.2; // increases the weight of the pattern user has just played
      }

      // 2. using the data from pattern to predict
      var predictKey =
        users_choice_history[i - 1] + "," + users_choice_history[i];

      if (pattern.has(predictKey)) {
        const weights = pattern.get(predictKey);

        if (
          weights.rock == weights.paper &&
          weights.paper == weights.scissors
        ) {
          aiMove = randomChoice(); // if all weights are the same - choose randomly
        } else {
          let maxCount = -1;

          for (const move in weights) {
            if (weights[move] > maxCount) {
              maxCount = weights[move];
              predictedMove = move;
            }
          }

          // apply decay to older data - recent data will have more affect on the weights
          const decay = 0.9;
          weights.rock *= decay;
          weights.paper *= decay;
          weights.scissors *= decay;
        }

        //console.log(predictedMove)

        // counter move mapping
        const counterMoves = {
          rock: "paper",
          paper: "scissors",
          scissors: "rock",
        };

        aiMove = counterMoves[predictedMove];
      }

      //console.log(pattern);
    } else {
      aiMove = randomChoice(); // choose random
    }

    return aiMove;
  }

  function changeAiType(type) {
    setAiType(type);
  }

  async function play(choice) {
    setUserChoice(choice);

    // update users choice history
    const updatedHistory = [...users_choice_history, choice];
    setUsersChoiceHistory(updatedHistory);
    console.log("Updated history:", updatedHistory);

    // update round count
    setRound((prevRound) => prevRound + 1); //prevRound is automatically provided by react

    var lcl_ai;

    // fetch ai choice
    if (ai_type == "random") {
      lcl_ai = randomChoice();
      setAIChoice(lcl_ai);
    } else if (ai_type == "chatgpt") {
      lcl_ai = await fetchChatGPT();
      setAIChoice(lcl_ai);
    } else if (ai_type == "my_ai") {
      lcl_ai = myAI();
      setAIChoice(lcl_ai);
    }

    if (choice == lcl_ai) {
      setDrawScore((prevScore) => prevScore + 1);
      setResult("Draw");
    } else if (
      (choice === "rock" && lcl_ai === "scissors") ||
      (choice === "paper" && lcl_ai === "rock") ||
      (choice === "scissors" && lcl_ai === "paper")
    ) {
      setUserScore((prevScore) => prevScore + 1);
      setResult("You Win!");
    } else {
      setAIScore((prevScore) => prevScore + 1);
      setResult("You Lose!");
    }
  }

  return (
    <div>
      <h1 className="title">AI Rock Paper Scissors</h1>

      <div className="ai-choice">
        <h3 className="rps-subheader">Choice of AI</h3>
        <div className="ai-btn-container">
          <Button
            variant="outlined"
            className={ai_type === "my_ai" ? "ai-selected" : "ai-not-selected"}
            onClick={() => changeAiType("my_ai")}
          >
            My AI
          </Button>
          <Button
            variant="outlined"
            className={ai_type === "random" ? "ai-selected" : "ai-not-selected"}
            onClick={() => changeAiType("random")}
          >
            Random
          </Button>
          <Button
            variant="outlined"
            className={
              ai_type === "chatgpt" ? "ai-selected" : "ai-not-selected"
            }
            onClick={() => changeAiType("chatgpt")}
          >
            ChatGPT
          </Button>
        </div>
      </div>

      <h3 className="rps-subheader">Round: {round} </h3>

      <div className="score-container">
        <h3 className="rps-subheader">Score</h3>
        <div className="scores">
          <p>You: {user_score} </p>
          <p>AI: {ai_score} </p>
          <p>Draw: {draw_score} </p>
        </div>
      </div>

      <h3 className="rps-subheader">Choice</h3>
      <div className="choice-row">
        <div className="choice-cell">You: {user_choice}</div>
        <div className="choice-cell">AI: {ai_choice}</div>
      </div>
      <p className="result"> Latest result: {result} </p>

      <div className="player-choice">
        <h3 className="rps-subheader">Pick a choice:</h3>

        <div className="choice-options">
          <div className="choice">
            <img src={rock_img} onClick={() => play("rock")} alt="Rock" />
            <span>Rock</span>
          </div>
          <div className="choice">
            <img src={paper_img} onClick={() => play("paper")} alt="Paper" />
            <span>Paper</span>
          </div>
          <div className="choice">
            <img
              src={scissors_img}
              onClick={() => play("scissors")}
              alt="Scissors"
            />
            <span>Scissors</span>
          </div>
        </div>
      </div>
    </div>
  );
}
