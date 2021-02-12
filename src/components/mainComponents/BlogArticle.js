import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import BlogCard from '../blogCard';

const BlogArticle = ({ article,articleTimeout,hatenaSrc,close }) => (

    <article
    id="blog"
    className={`${article === 'blog' ? 'active' : ''} ${
      articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">my hatena ブログ</h2>
    <span className="image main">
      <img src={hatenaSrc} alt="はてなブログ画像" />
    </span>
    <StaticQuery
          query={
            graphql`
            query {
      allHatenaJson {
        edges {
          node {
            day
            href
            id
            imgurl
            title
          }
        }
      }
          }`}
    
    render={data =>(
      <div style={{paddingBottom:"20px" }}>
      { data.allHatenaJson.edges.map(({ node },index)=>{
        const { day,title,href,imgurl } = node;
        return(
          <a href={href} key={index}>
          <BlogCard imgurl={imgurl} day={day} title={title}/>
          </a>
        )
      }) }
      </div>)}
    />
    {close}
  </article>

)

export default BlogArticle;

BlogArticle.propTypes = {
    article : PropTypes.string.isRequired,
    articleTimeout : PropTypes.bool.isRequired,
    hatenaSrc : PropTypes.string.isRequired,
    close : PropTypes.element.isRequired,
};