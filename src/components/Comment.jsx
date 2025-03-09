import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/93295232?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thauany Alves</strong>
              <time title="07 de março ás 08:13h" dateTime="2025-03-07 08:13:30">Publicado há 1h</time>
            </div>

            <button title="Deletar comentário">
              <Trash  size={24} />
            </button>
          </header>
          <p>Comentário de exemplo</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}