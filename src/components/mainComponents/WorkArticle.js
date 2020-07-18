import React from 'react'
import PropTypes from 'prop-types'
import PostList from '../PostList';

import ArPic from '../../images/arapp.png';
import DeepLearningPic from '../../images/deeplearning.png';
import PartyPic from '../../images/party.png';

const WorkArticle = ({ article,articleTimeout,workSrc,close }) => (
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
      <PostList
          key={1}
          cover={ArPic}
          path={'/'}
          title={'ARアプリ'}
          date={'2019/9'}
          excerpt={'家の画像を読み込むと全裸の変態が歌に合わせて踊ります'}
        />
      <PostList
          key={2}
          cover={DeepLearningPic}
          path={'/'}
          title={'ディープラーニングしてみた'}
          date={'2019/8'}
          excerpt={'データを使って映画のレビューから映画に対して肯定的な意見か否定的な意見かを判定し予測するモデルを作る'}
        />
      <PostList
          key={3}
          cover={PartyPic}
          path={'/'}
          title={'婚活イベント配信サイト'}
          date={'2020/6'}
          excerpt={'婚活コンテンツ配信の婚活サイト作ってみた'}
        />
      </div>
    {close}
  </article>
)

export default WorkArticle;

WorkArticle.propTypes = {
    article : PropTypes.string.isRequired,
    articleTimeout : PropTypes.bool.isRequired,
    workSrc : PropTypes.string.isRequired,
    close : PropTypes.element.isRequired,
};