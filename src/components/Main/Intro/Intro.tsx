import styles from './Intro.module.scss';
import Banner from '../Banner/Banner';
import { useQuiz } from '../../../context/quizContext';

const Intro = () => {
  const { state } = useQuiz();
  const { step } = state;

  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>Congratulations!</h1>
      <p className={styles.description}>
        The "Mysterious Sephora Box" contest has started.
        You have been selected to try new products from well-known brands.
        For only 65 MXN, you will receive a box full of products that will
        soon be available in Sephora stores. Limit: one box per customer.
      </p>

		{step < 4 && <Banner />}

      <p className={styles.extraText}>
        To receive your Sephora Box, complete the form to confirm that you are a real person.
      </p>
      <p className={styles.extraText1}>
        Hurry up, the number of prizes is limited!
      </p>
    </div>
  );
};

export default Intro;