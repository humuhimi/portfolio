import React from 'react'
import PropTypes from 'prop-types'
import PostList from '../PostList';

import ArPic from '../../images/arapp.png';
import DeepLearningPic from '../../images/deeplearning.png';
import PartyPic from '../../images/party.png';
import AdcalPic from "../../images/adventcalender2.png";
import QuantumPic from "../../images/quantum_project.png";


const WorkArticle = ({ article,articleTimeout,workSrc,close }) =>{

  const workArray = [
                    {key:"a1",cover:ArPic,path:"https://www.youtube.com/watch?v=KQJ4jPQd6E0",title:"ARアプリ",date:"2019/9",excerpt:'家の画像を読み込むと全裸の変態が歌に合わせて踊ります'},
                    {key:"dl1",cover:DeepLearningPic,path:"https://humuhimi.hatenablog.com/entry/2019/07/20/105934",title:"ディープラーニングしてみた",date:"2019/8",excerpt:'データを使って映画のレビューから映画に対して肯定的な意見か否定的な意見かを判定し予測するモデルを作る'},
                   {key:"pt1",cover:PartyPic,path:"https://smbc-party.com/",title:"婚活イベント配信サイト",date:"2020/6",excerpt:'婚活コンテンツ配信の婚活サイト作ってみた'},
                   {key:"adcal",cover:AdcalPic,path:"https://onyaru.com/adventcalender/",title:"アドベントカレンダー",date:"2020/7",excerpt:'サイバー大学のオンライン勉強会の自作アドベントカレンダー'},
                   {key:"quantum",cover:QuantumPic,path:"https://www.youtube.com/watch?v=hBMr_eCAydQ&feature=youtu.be",title:"量子コンピューターゆっくり実況",date:"2020/8",excerpt:'maxcut数学問題比較(従来型vs量子型)'},
                    ];
  
  return (
    <article
    id="work"
    className={`${article === 'work' ? 'active' : ''} ${
      articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">作品</h2>
    <span className="image main">
      <img src={workSrc} alt="作品" />
    </span>
    <div style={{textAlign: "center"}}>

    {workArray.map(work => (
      <PostList
          key={work.key}
          cover={work.cover}
          path={work.path}
          title={work.title}
          date={work.date}
          excerpt={work.excerpt}
        />
    ))}

      </div>
    {close}
  </article>
)
}

export default WorkArticle;

WorkArticle.propTypes = {
    article : PropTypes.string.isRequired,
    articleTimeout : PropTypes.bool.isRequired,
    workSrc : PropTypes.object.isRequired,
    close : PropTypes.element.isRequired,
};