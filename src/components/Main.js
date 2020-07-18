import PropTypes from 'prop-types'
import React from 'react'
import hatenaImg from '../images/hatena.png'
import introPic from '../images/my_chara.png';
import History from '../images/history.jpg'
import workPic from '../images/work.png';
import FaceIcon from '../images/face.jpg';
import OtherIcon from '../images/others.jpg';

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
  return (
    <div
      ref={props.wrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <AboutArticle article={props.article} 
                    articleTimeout={props.articleTimeout} 
                    topSrc={introPic} 
                    faceSrc={FaceIcon} 
                    close={close} />

      <HistoryArticle article={props.article}
                      articleTimeout={props.articleTimeout}
                      historySrc={History}
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
                   hatenaSrc={hatenaImg}
                   close={close}
                   />
      <OthersArticle article={props.article}
                   articleTimeout={props.articleTimeout}
                   otherSrc={OtherIcon}
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
