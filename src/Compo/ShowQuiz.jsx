import styels from "./ShowQuiz.module.css";
import "../App.css";

const ShowQuiz = ({
  question,
  option,
  handleClickOnNext,
  handleClickOnOption,
  currAns,
}) => {
  return (
    <>
      <div className={styels.containerChild}>
        <div className={styels.Quiz}>
          <p className={styels.p}>{question}</p>
          <button
            className={option.A === currAns ? "selected" : "Btn"}
            value=""
            onClick={() => handleClickOnOption(option.A)}
          >
            {option.A}
          </button>
          <button
            className={option.B === currAns ? "selected" : "Btn"}
            value=""
            onClick={() => handleClickOnOption(option.B)}
          >
            {option.B}
          </button>
          <button
            className={option.C === currAns ? "selected" : "Btn"}
            value=""
            onClick={() => handleClickOnOption(option.C)}
          >
            {option.C}
          </button>
          <button
            className={option.D === currAns ? "selected" : "Btn"}
            value=""
            onClick={() => handleClickOnOption(option.D)}
          >
            {option.D}
          </button>
        </div>
        <div className={styels.NextBtn}>
          <button
            disabled={currAns === null}
            className={styels.nextBtn}
            onClick={handleClickOnNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowQuiz;
