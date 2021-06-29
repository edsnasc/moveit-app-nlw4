import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp3.licdn.com/dms/image/C4D03AQGbiv60VhHplg/profile-displayphoto-shrink_200_200/0/1605665349545?e=1629331200&v=beta&t=1J6yBcm38v3Hm1WXY4u9Yo0wPs8jW6-PWG_s2YmiBzo"alt="Edson Nascimento" />
            <div>
                <strong>Edson Nascimento</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level { level }
                </p>
            </div>
        </div>
    );
}