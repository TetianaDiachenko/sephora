import styles from './Banner.module.scss';
import bannerAvif from '../../../assets/images/baners/promoImage 1.avif';
import bannerWebp from '../../../assets/images/baners/promoImage 1.webp';
import bannerJpg from '../../../assets/images/baners/promoImage 1.jpg';

const Banner = () => (
  <div className={styles.banner}>
    <picture>
      <source srcSet={bannerAvif} type="image/avif" />
      <source srcSet={bannerWebp} type="image/webp" />
      <img src={bannerJpg} alt="Sephora Banner" />
    </picture>
  </div>
);

export default Banner;