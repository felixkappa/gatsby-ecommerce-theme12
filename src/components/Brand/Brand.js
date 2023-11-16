import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>titulos</h4> */}
      
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg/1200px-Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg" alt="Descripción de la imagen">

        
    </div>
  );
};

export default Brand;
