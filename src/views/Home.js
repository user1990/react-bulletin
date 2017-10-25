import React from 'react'
// GraphQL
import { graphql } from 'react-apollo'
import { getAllPosts } from '../graphql/queries/posts'
// Components
import Layout from '../components/Layout/index'
import Loader from '../components/Loader'
import withAuth from '../components/withAuth'
import Error from '../components/Error'
import GridRenderer from '../components/GridTypes/GridRenderer'
import { Helmet } from 'react-helmet'

const Home = ({ data, viewtype }) => {
  const posts = data.posts
  return (
    <Layout>
      <Helmet>
        <title>Home | Bulletin - FUS</title>
      </Helmet>
      {!data.error && !posts && <Loader />}
      {data.error && <Error error={data.error.message} />}
      {posts && <GridRenderer posts={posts} />}
    </Layout>
  )
}

export default graphql(getAllPosts)(withAuth(Home))
