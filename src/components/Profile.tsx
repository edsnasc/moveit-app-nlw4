import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGbiv60VhHplg/profile-displayphoto-shrink_200_200/0/1605665349545?e=1639612800&v=beta&t=p3kjocZqEQrIyAQ4oeL9s-6I4trPgXRoCDUJz87Hmq8"alt="Edson Nascimento" />
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