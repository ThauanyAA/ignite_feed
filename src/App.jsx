import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';
function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Author 1"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident corrupti fuga, aperiam dignissimos facere natus? Odio blanditiis perferendis nesciunt. Animi mollitia maiores rem totam quod itaque possimus ipsam soluta accusantium."
          />
          <Post
            author="Author 2"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident corrupti fuga, aperiam dignissimos facere natus? Odio blanditiis perferendis nesciunt. Animi mollitia maiores rem totam quod itaque possimus ipsam soluta accusantium."
          />
        </main>
      </div>
    </div>
  )
}

export default App
