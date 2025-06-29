import { useReducer } from 'react';
import { quizReducer, initialQuizState } from './quizReducer';
import { QuizContext } from './quizContext';

type Props = {
  children: React.ReactNode;
};

export const QuizProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
