import { Header } from "./components/Header"
import { Sidebar } from "./components/SideBar"
import { Post, PostProps } from "./components/Post"

import "./global.css"

import styles from "./App.module.css"

interface Posts extends PostProps {
  id: number
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/JoaoManoelDev.png",
      name: "João Manoel",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },

      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-10 12:30:10")
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


