import { useState } from 'react';
import styles from './Search.module.scss';
import Loop from './../../svg-components/Loop';
import Cross from './../../svg-components/Cross';


const Search = () => {
	const [inputValue, setInputValue] = useState('');
	const clearInputValue = () => {
		 setInputValue('');
	};
	const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => { 
		 setInputValue(e.target.value);
	};

	return (
		 <div className={styles.search}>
			  <Loop className={styles.icon} />
			  <input 
			  type="text" 
			  className={styles.input} 
			  placeholder="Search"
			  value={inputValue}
			  onChange={changeValue}
			  />
			  {inputValue && (
					<button className={styles.clearInput} onClick={clearInputValue} aria-label="Clear search" >
						 <Cross className={`${styles.icon} ${styles.close}`} />
					</button>
			  )}
		</div> 
	);
};

export default Search;