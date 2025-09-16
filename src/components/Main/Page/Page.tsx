import styles from './Page.module.scss';
import StepCard from '../StepCard/StepCard';
import Result from '../Result/Result';
import Intro from '../Intro/Intro';
import { useQuiz } from '../../../context/quizContext';
import questions from '../../../data/questions';
import { useCallback } from 'react';

const Page = () => {
  const { state, dispatch } = useQuiz();
  const { step, isFinished } = state;

  const handleAnswer = useCallback(
    (answer: string) => {
      dispatch({ type: 'NEXT_STEP', payload: answer });
    },
    [dispatch]
  );

  const question = questions[step];

  return (
    <main className={styles.main}>
      {!isFinished && (
        <>
          <Intro />
          {question && (
            <StepCard
              step={step + 1}
              total={questions.length}
              question={question.text}
              answers={question.answers}
              onAnswer={handleAnswer}
            />
          )}
        </>
      )}

      {isFinished && <Result />}
    </main>
  );
};

export default Page;
