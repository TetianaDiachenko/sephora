export type Answer = string;

export type QuizState = {
  step: number;
  answers: Answer[];
  isFinished: boolean;
}

export type QuizAction =
  | { type: 'ANSWER'; payload: Answer }
  | { type: 'NEXT_STEP' }
  | { type: 'RESET' };

export const initialQuizState: QuizState = {
  step: 0,
  answers: [],
  isFinished: false,
};

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'ANSWER':
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };
    case 'NEXT_STEP':
      const isLast = state.step >= 2; 
      return {
        ...state,
        step: state.step + 1,
        isFinished: isLast,
      };
    case 'RESET':
      return initialQuizState;
    default:
      return state;
  }
}
