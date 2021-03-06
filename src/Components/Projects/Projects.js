import React from 'react';
import styles from '../../Components/styles.module.css';
import { DataProject } from './DataProject.js';
import foto from '../../Assets/principal.png';
import arrow from '../../Assets/right.png';

const Projects = () => {
  const carrousel = React.useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carrousel.current.scrollLeft += carrousel.current.offsetWidth;
  };

  return (
    <div className={styles.main} id="projects">
      <div className={styles.title3}> Projects</div>
      <div className={styles.containerProjects} ref={carrousel}>
        <div className={styles.containerItem}>
          {DataProject.map((item) => (
            <div className={styles.itemProjects}>
              <div className={styles.imgContainer}>
                <img src={foto} alt={item.titulo} width="100%" height="100%" />
              </div>
              <div className={styles.titleItem}>{item.titulo}</div>
              <div className={styles.itemDescription}>{item.descricao}</div>
              <div className={styles.btnProjects}>
                <div className={styles.btnGit}>
                  <a target="_blank" rel="noopener noreferrer" href={item.git}>
                    GitHub{' '}
                  </a>
                </div>
                <div className={styles.btnSite}>
                  <a target="_blank" rel="noopener noreferrer" href={item.site}>
                    Site{' '}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <button onClick={handleLeftClick}>
          <img src={arrow} alt="scroll left" width="30px" height="30px" />
        </button>
        <button onClick={handleRightClick}>
          <img src={arrow} alt="scroll left" width="30px" height="30px" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
