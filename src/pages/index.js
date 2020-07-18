import React,{useState,useEffect,useRef} from 'react';
import Layout from '../components/layout'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const IndexPage =(props) => {
  const [articleVisible,setArticleVisible] = useState(false);
  const [timeflag,setTimeflag] = useState(false);
  const [articleTimeout,setArticleTimeout] = useState(false);
  const [article,setArticle] = useState('');
  const [loading,setLoading] = useState('is-loading');

  const wrapperRef = useRef(null);
  useEffect(()=>{
    const timeoutId = setTimeout(()=>{
      setLoading("");
    },100);

    document.addEventListener('mousedown',handleClickOutside);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      document.removeEventListener('mousedown',handleClickOutside);
    }});

  const handleOpenArticle = (article) => {
    setArticleVisible(!articleVisible);
    setArticle(article);
    
    setTimeout(() => {
      setTimeflag(!timeflag);
    }, 325);
  
    setTimeout(() => {
      setArticleTimeout(!articleTimeout);
    }, 350);
  };

  const handleCloseArticle = () =>{
    setArticleTimeout(!articleTimeout);

    setTimeout(() => {
      setTimeflag(!timeflag);
    }, 325);

    setTimeout(() => {
      setArticleVisible(!articleVisible);
      setArticle('');
    }, 350);
  }

  const handleClickOutside = event => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      if (articleVisible) {
        handleCloseArticle();
      }
    }
  }
  return(
    <Layout location={props.location}>
    <div
      className={`body ${loading} ${
        articleVisible ? 'is-article-visible' : ''
      }`}
    >
      <div id="wrapper">
        <Header
          onOpenArticle={handleOpenArticle}
          timeout={timeflag}
        />
        <Main
          timeout={timeflag}
          articleTimeout={articleTimeout}
          article={article}
          onCloseArticle={handleCloseArticle}
          wrapperRef={wrapperRef}
        />
        <Footer timeout={timeflag} />
      </div>
      <div id="bg"></div>
    </div>
  </Layout>
  );
};

export default IndexPage;
