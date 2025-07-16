import { createContext, useContext } from 'react';
import type { QuizState, QuizAction } from './quizReducer';

type QuizContextType = {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
}

export const QuizContext = createContext<QuizContextType | null>(null);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider');
  }
  return context;
};
