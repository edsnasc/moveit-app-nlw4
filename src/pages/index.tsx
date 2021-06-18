import { Profile } from "../components/Profile"
import { ExperienceBar } from "../components/Experience-bar"

import styles from '../styles/components/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
