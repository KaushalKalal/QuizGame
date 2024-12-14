import styels from "./ShowQuiz.module.css";

const Result = ({ Score }) => {
  return (
    <>
      <div className={styels.result}>
        <h3>Your Score is {Score}</h3>
      </div>
    </>
  );
};

export default Result;
