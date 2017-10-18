import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getAllPosts } from '../graphql/queries/posts'
import PostPreview from '../components/PostPreview'

class Home extends Component {
  render () {
    const posts = this.props.data.posts

    return (
      <div>
        {!posts && <h1>Loading...</h1>}
        {posts &&
          posts.edges.map(post => (
            <PostPreview
              key={post.node.id}
              id={post.node.id}
              date={post.node.date}
              imageURL={post.node.featuredImage.sourceUrl}
              title={post.node.title}
            />
          ))}
      </div>
    )
  }
}

export default graphql(getAllPosts)(Home)
