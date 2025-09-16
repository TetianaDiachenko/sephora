import styles from './Result.module.scss';
import { useQuiz } from '../../../context/quizContext';

const Result = () => {
  const { state } = useQuiz();

  return (
    <div className={styles.result}>
      <h2 className={styles.title}>Result:</h2>
      <ul className={styles.list}>
        {state.answers.map((answer, index) => (
          <li key={index} className={styles.item}>
            {index + 1}. {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
