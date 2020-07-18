import PropTypes from 'prop-types'
import React from 'react'
import { useStaticQuery, graphql } from "gatsby";

import { AboutArticle,HistoryArticle,WorkArticle,BlogArticle,ContactArticle,OthersArticle } from './mainComponents';


const Main = (props) => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  );
  const data = useStaticQuery(graphql`
  query{
    hatenaImg : file(relativePath: {eq: "hatena.png"}) {
      childImageSharp {
          fluid(
            maxWidth:1200,
            quality:100
          ){
            ...GatsbyImageSharpFluid_noBase64
          }
      }
    }

    introPic : file(relativePath: {eq: "my_chara.png"}) {
      childImageSharp {
          fluid(
            maxWidth:1200,
            quality:100
          ){
            ...GatsbyImageSharpFluid_noBase64
          }
      }
    }

    HistoryPic : file(relativePath: {eq: "history.jpg"}) {
      childImageSharp {
          fluid(
            maxWidth:1200,
            quality:100
          ){
            ...GatsbyImageSharpFluid_noBase64
          }
      }
    }
    workPic : file(relativePath: {eq: "work.png"}) {
      childImageSharp {
          fluid(
            maxWidth:1200,
            quality:100
          ){
            ...GatsbyImageSharpFluid_noBase64
          }
      }
    }
    faceIcon : file(relativePath: {eq: "face.jpg"}) {
      childImageSharp {
          fluid(
            maxWidth:1200,
            quality:100
          ){
            ...GatsbyImageSharpFluid_noBase64
          }
      }
    }
    otherIcon : file(relativePath: {eq: "others.jpg"}) {
      childImageSharp {
          fluid(
            maxWidth:1200,
            quality:100
          ){
            ...GatsbyImageSharpFluid_noBase64
          }
      }
    }
  }`);
  return (
    <div
      ref={props.wrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <AboutArticle article={props.article} 
                    articleTimeout={props.articleTimeout} 
                    topSrc={data.introPic.childImageSharp.fluid} 
                    faceSrc={data.faceIcon.childImageSharp.fluid} 
                    close={close} />

      <HistoryArticle article={props.article}
                      articleTimeout={props.articleTimeout}
                      historySrc={data.HistoryPic.childImageSharp.fluid}
                      close={close} />            
                      
      <WorkArticle article={props.article}
                    articleTimeout={props.articleTimeout} 
                    workSrc={data.workPic.childImageSharp.fluid}
                    close={close} 
                    />

      <BlogArticle article={props.article}
                   articleTimeout={props.articleTimeout}
                   hatenaSrc={data.hatenaImg.childImageSharp.fluid}
                   close={close}
                   />
      
      <ContactArticle article={props.article}
                   articleTimeout={props.articleTimeout}
                   close={close}
                   />

      <OthersArticle article={props.article}
                   articleTimeout={props.articleTimeout}
                   otherSrc={data.otherIcon.childImageSharp.fluid}
                   close={close}
                   />
    </div>
  )
};

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string.isRequired,
  articleTimeout: PropTypes.bool.isRequired,
  onCloseArticle: PropTypes.func.isRequired,
  timeout: PropTypes.bool.isRequired,
  wrapperRef: PropTypes.object.isRequired,
  // imgData 
}

export default Main