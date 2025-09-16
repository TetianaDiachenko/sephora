export type Answer = string;

export type QuizState = {
  step: number;
  answers: Answer[];
  isFinished: boolean;
};

export type QuizAction =
  | { type: 'NEXT_STEP'; payload: Answer } // combined the answers and the next step
  | { type: 'RESET' };

export const initialQuizState: QuizState = {
  step: 0,
  answers: [],
  isFinished: false,
};

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'NEXT_STEP':
      const isLast = state.step >= 2;
      return {
        ...state,
        step: state.step + 1,
        isFinished: isLast,
        answers: [...state.answers, action.payload], // combined the answers and the next step
      };
    case 'RESET':
      return initialQuizState;
    default:
      return state;
  }
}
