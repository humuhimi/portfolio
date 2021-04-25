import React from 'react'
import PropTypes from 'prop-types'

const AboutArticle = ({article,articleTimeout,topSrc,faceSrc,close}) =>(
    <article
        id="about"
        className={`${article === 'about' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">プロフィール</h2>
        <span className="image main">
          <img src={topSrc} alt="about me" />
        </span>
        <p>ようこそ僕のサイトへ</p>
        <p>はじめましてふむひみです</p>
        <p>1995年生まれ</p>
        <p>2017年秋　関西学院大学　文学部　総合心理科学を中退</p>
        <p>2021年春　サイバー大学　IT総合学部　ソフトウェアゼミ卒業</p>
        <hr />
        <p></p>
        <p>(過去の経歴)</p>
        <p>大学１年生終了→フィリピン 英語留学→</p>
        <p>中国・香港でインターンシップ→</p>
        <p>通信制大学に転入→webエンジニア1年</p>
        <p>→フリーランスとして独立</p>
        <p>→フルリモートで会社で働く</p>
        <br />
        <p>まだまだ雑魚だけどできることを精一杯する！</p>
        <p>英語や中国語など語学力を金に変えたいが、まあ難しいよね</p>
        <hr />
        <p>(趣味など)</p>
        <p>趣味は散歩と読書と国際交流とプログラミング</p>
        <p>雑魚だけど、php,js,pythonを使って人生快適にできたらいいなと思う</p>
        <p>最近は趣味でpython、仕事ではphp,jsを使ったCMS開発してます</p>
        <hr />
        <p>お仕事あればお気楽に連絡ください！</p>

        <p>最後まで読んでいただきありがとうございました!</p>
        <img src={faceSrc} alt="face icon" className="face main"/>
        <br />
        <p style={{position:"relative",textAlign:"center",marginTop:"1rem"}}>ふむひみ本人</p>
        {close}
      </article>
);

export default AboutArticle;

AboutArticle.propTypes = {
    article : PropTypes.string.isRequired,
    articleTimeout : PropTypes.bool.isRequired,
    topSrc : PropTypes.string.isRequired,
    faceSrc : PropTypes.string.isRequired,
    close : PropTypes.element.isRequired,
};



