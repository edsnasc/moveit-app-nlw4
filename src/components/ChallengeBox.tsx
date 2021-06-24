import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganha 400 xp</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo Desafio</strong>
                        <p>Levante e Faça ua caminhada de 3 minutos.</p>
                    </main>

                    <footer>
                        <button>Falhei</button>
                        <button>Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    )
}