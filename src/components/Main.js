import PropTypes from 'prop-types'
import React from 'react'

import { AboutArticle,HistoryArticle,WorkArticle,BlogArticle,ContactArticle,OthersArticle } from './mainComponents';
import hatenaImg from "../images/hatena.png";
import introPic from "../images/my_chara.png";
import historyPic from "../images/history.jpg";
import workPic from "../images/work.png";
import faceIcon from "../images/humu_face.png";
import otherIcon from "../images/others.jpg";

const Main = (props) => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  );

  return (
    <div
      ref={props.wrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <AboutArticle article={props.article} 
                    articleTimeout={props.articleTimeout} 
                    topSrc={introPic} 
                    faceSrc={faceIcon} 
                    close={close} />

      <HistoryArticle article={props.article}
                      articleTimeout={props.articleTimeout}
                      historySrc={historyPic}
                      close={close} />            
                      
      <WorkArticle article={props.article}
                    articleTimeout={props.articleTimeout} 
                    workSrc={workPic}
                    close={close} 
                    />

      <BlogArticle article={props.article}
                   articleTimeout={props.articleTimeout}
                   hatenaSrc={hatenaImg}
                   close={close}
                   />
      
      <ContactArticle article={props.article}
                   articleTimeout={props.articleTimeout}
                   close={close}
                   />

      <OthersArticle article={props.article}
                   articleTimeout={props.articleTimeout}
                   otherSrc={otherIcon}
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
}

export default Main