import { useState } from "react";
import "./App.css";
import ShowQuiz from "./Compo/ShowQuiz";
import Result from "./Compo/Result";

function App() {
  const Quiz_Questions = [
    {
      Question: "1. How Many Tree..?",
      Option: {
        A: "One",
        B: "Two",
        C: "Three",
        D: "Four",
      },
      Answer: "Four",
    },
    {
      Question: "2. What is Your fav. Food..?",
      Option: {
        A: "Pizza",
        B: "Burger",
        C: "Pasta",
        D: "None",
      },
      Answer: "Pizza",
    },
    {
      Question: "3. What is Your Fav. Helathy Food..?",
      Option: {
        A: "Roti",
        B: "Sabji",
        C: "Karela",
        D: "None",
      },
      Answer: "Karela",
    },

    {
      Question:
        "4. In what year was the first international modern Olympiad held?",
      Option: {
        A: "1896",
        B: "1900",
        C: "1912",
        D: "1924",
      },
      Answer: "1896",
    },

    {
      Question: "5. What is the currency of Japan?",
      Option: {
        A: "Yen",
        B: "Euro",
        C: "Dollar",
        D: " Rupee",
      },

      Answer: "Yen",
    },

    {
      Question: "6. Which of these movies is not based on a book?",
      Option: {
        A: "Little Women",
        B: "The Hunger Games",
        C: "The Godfather",
        D: "Avatar",
      },
      Answer: "Avatar",
    },

    {
      Question:
        "7. In 'Inception,' what is the name of the device used to enter and manipulate dreams?",
      Option: {
        A: "PASIV",
        B: "PASON",
        C: "PASIN",
        D: "PASOF",
      },
      Answer: "PASIV",
    },

    {
      Question:
        "8. Who captained India to its first-ever Cricket World Cup victory in 1983?",
      Option: {
        A: "Kapil Dev",
        B: "Sunil Gavaskar",
        C: "Sachin Tendulkar",
        D: "Sourav Ganguly",
      },
      Answer: "Kapil Dev",
    },

    {
      Question:
        "9. Who is the only Indian male boxer to win a medal at the Olympics?",
      Option: {
        A: "Manoj Kumar",
        B: "Mary Kom",
        C: "Vikas Krishan Yadav",
        D: "Vijender Singh ",
      },
      Answer: "Vijender Singh ",
    },

    {
      Question:
        "10. Which Indian badminton player became the first Indian to win an Olympic medal in the sport?",
      Option: {
        A: "Kidambi Srikanth",
        B: "PV Sindhu",
        C: "Saina Nehwal",
        D: "Prakash Padukone",
      },
      Answer: "Saina Nehwal",
    },
  ];

  const [Score, setScore] = useState(0);
  const [currIndex, setcurrIndex] = useState(0);
  const handleClickOnNext = () => {
    if (currAns === Quiz_Questions[currIndex].Answer) {
      setScore((Score) => Score + 10);
    }

    setcurrIndex((currIndex) => currIndex + 1);
    setcurrAns(null);
  };

  const [currAns, setcurrAns] = useState(null);
  const handleClickOnOption = (ClickedOption) => {
    setcurrAns(ClickedOption);
  };

  return (
    <>
      <h4>Quiz App</h4>
      {currIndex < Quiz_Questions.length ? (
        <div className="Container">
          <ShowQuiz
            question={Quiz_Questions[currIndex].Question}
            option={Quiz_Questions[currIndex].Option}
            handleClickOnNext={handleClickOnNext}
            handleClickOnOption={handleClickOnOption}
            currAns={currAns}
            currIndex={currIndex}
          ></ShowQuiz>
        </div>
      ) : (
        <Result Score={Score}></Result>
      )}
    </>
  );
}

export default App;
