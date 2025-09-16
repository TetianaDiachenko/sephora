import styles from './StepCard.module.scss';
import Button from '../../ui/Button/Button';
import { useState, useCallback, useEffect } from 'react';

type StepCardProps = {
  step: number;
  total: number;
  question: string;
  answers: string[];
  onAnswer: (answer: string) => void;
};

const StepCard = ({
  step,
  total,
  question,
  answers,
  onAnswer,
}: StepCardProps) => {
  const [isVisible, setIsVisible] = useState(false); // added animation: smooth appearance of the questions

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, [step, question]);

  const handlClick = useCallback(
    (answer: string) => () => onAnswer(answer),
    [onAnswer]
  );

  return (
    <div className={`${styles.card} ${isVisible ? styles.visible : ''}`}>
      <p className={styles.step}>
        Question {step} of {total}
      </p>
      <h2 className={styles.question}>{question}</h2>
      <div className={styles.answers}>
        {answers.map((answer, index) => (
          <Button key={index} text={answer} onClick={handlClick(answer)} />
        ))}
      </div>
    </div>
  );
};

export default StepCard;
