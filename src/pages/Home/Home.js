// CSS
import styles from './Home.module.css'

// Hooks
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'


// Components
import PostDetail from '../../components/PostDetail'



const Home = () => {
  const [query, setQuery] = useState('')
  const { documents: posts, loading } = useFetchDocuments("posts")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.home}>
        <h1>Veja nossos posts mais recentes</h1>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input type="text" placeholder='Ou busque por tags...' 
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className='btn btn-dark'>Pesquisar</button>
        </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => (
          <PostDetail key={post.id} post={post} />
        ))}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts sobre o determinado assunto</p>
            <Link to='/posts/create' className='btn'>Crie um post</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home