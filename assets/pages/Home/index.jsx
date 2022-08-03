import React from 'react'
import Posts from '../../components/Posts/Posts'

const Home = ({ posts }) => {
  return (
    <>
      <h1 className="title-page">Accueil</h1>
      <Posts posts={posts} />
    </>
  )
}

export default Home