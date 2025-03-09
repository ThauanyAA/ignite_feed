import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/93295232?v=4" />
          <div className={styles.authorInfo}>
            <strong>Thauany Alves</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2025-03-07">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href='#'>jane.design/doctorcare</a></p>
        <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Comente algo..."
        />
        <footer>
          <button type="submit">Publicar</button> 
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}