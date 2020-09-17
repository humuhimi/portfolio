import React from 'react'
import PropTypes from 'prop-types'


import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import GradeIcon from '@material-ui/icons/Grade';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const OthersArticle = ({ article,articleTimeout,otherSrc,close }) => (
    <article
    id="others"
    className={`${article === 'others' ? 'active' : ''} ${
      articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">その他</h2>
    <span className="image main">
      <img src={otherSrc} alt="その他項目のトップ画像" />
    </span>
    {/* ボランティアリスト */}
    <h3 className="sub"><AccessibleForwardIcon style={{color : "green", background:"white",borderRadius:"50%",padding:1 }} /> ボランティアリスト(9月分)</h3>
    <div style={{border : "dashed",margin:"10px 10px 30px 10px",fontSize:"0.9rem" }}> 
      <section style={{ margin:"10px" }}>
    <p>今月中無料でボランティアしちゃうリスト</p>
    <ul>
      <li>中国旅行(福州)無料ツアーガイド</li>
      <li>簡易的な中国のIT市場調査</li>
      <li>鬱とか精神病の悩み相談</li>
    </ul>
    </section>
    </div>
    {/* 欲しいものリスト */}
    <h3 className="sub"><GradeIcon style={{color : "#ffcd3c", background:"white",borderRadius:"50%",padding:1 }} /> 欲しいものリスト</h3>
    <div style={{border : "dashed",margin:"10px 10px 30px 10px",fontSize:"0.9rem" }}> 
      <section style={{ margin:"10px" }}>
    <p>現在中国なので休止中っ！！</p>
    </section>
    </div>
    {/* バケットリスト */}
    <h3 className="sub"><FlightTakeoffIcon style={{color : "#03a9f4", background:"white",borderRadius:"50%",padding:1 }} /> 人生バケットリスト</h3>
    <div style={{border : "dashed",margin:"10px 10px 30px 10px",fontSize:"0.9rem" }}> 
      <section style={{ margin:"10px" }}>
    <p>人生のバケットリストはこんな感じ</p>
    <ul>
      <li>世界旅行で友達を作り、地味な海外の公園でホームレスする</li>
      <li>デザインセンスゼロやけどストリートアートを作る</li>
      <li>日本の温泉を制覇するそんで外国人に紹介しまくる！</li>
      <li>恋愛をいっぱいする！国とか関係なく</li>
      <li>オーロラみながら、酒飲みまくる</li>
      <li>自動運転の改造車乗って日本や世界でフルリモートで仕事する</li>
    </ul>
    </section>
    </div>
    {/* 成し遂げたいリスト */}
    <h3 className="sub"><WhatshotIcon style={{color : "#f44336", background:"white",borderRadius:"50%",padding:1 }} /> 成し遂げたいリスト</h3>
    <div style={{border : "dashed",margin:"10px 10px 30px 10px",fontSize:"0.9rem" }}> 
      <section style={{ margin:"10px" }}>
    <p>自分の人生で成し遂げたいリスト</p>
    <p>20代のうちに成し遂げたいなあ~</p>
    <ul>
      <li>フルリモートOKな多国籍な企業を作る</li>
      <li>AIを使った歌を作る</li>
      <li>githubで一年連続草を生やし続ける</li>
      <li>ハードウェアからソフトウェアまで全て一貫して開発してみたい</li>
      <li>ハードソフト関係なく、中国のITのコピー製品を量産しまくりたい</li>
      <li>社会実装で世の中の不条理を消し去りたい</li>
      <li>精神病をサポートするアプリを作りたい</li>
    </ul>
    </section>
    </div>
    {close}
  </article>
);


export default OthersArticle;

OthersArticle.propTypes = {
    article : PropTypes.string.isRequired,
    articleTimeout : PropTypes.bool.isRequired,
    otherSrc: PropTypes.object.isRequired,
    close : PropTypes.element.isRequired,
};
