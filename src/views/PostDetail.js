import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { SinglePostDetail } from '../graphql/queries/posts'
import Layout from '../components/Layout/index'
import Loader from '../components/Loader'
import { Helmet } from 'react-helmet'

class PostDetail extends Component {
  constructor () {
    super()
    this.renderPost = this.renderPost.bind(this)
  }

  renderPost = () => {
    const post = this.props.data.post
    const date = new Date(post.date).toLocaleDateString()
    return (
      <div>
        <Helmet>
          <title>{post.title} - FUS</title>
        </Helmet>
        <h1>{post.title}</h1>
        <img
          alt=''
          style={{ height: '600px', width: '800px' }}
          src={post.featuredImage && post.featuredImage.sourceUrl}
        />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <h4>Author: {post.author.name}</h4>
        <h5>Date: {date}</h5>
      </div>
    )
  }

  render () {
    const isLoading = this.props.data.loading
    return (
      <Layout>
        <Helmet>
          <title>Loading... - FUS</title>
        </Helmet>
        {isLoading && <Loader />}
        {!isLoading && this.renderPost()}
      </Layout>
    )
  }
}

export default graphql(SinglePostDetail, {
  options: ({ match }) => ({ variables: { id: match.params.post_id } })
})(PostDetail)
