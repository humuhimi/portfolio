import PropTypes from 'prop-types'
import React from 'react'
import humuLogo from '../images/humuhimi.png';

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={humuLogo} alt="humuhimi" style={{ paddingTop: "1vh",maxWidth: "80%" }} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>ふむひみサイト</h1>
        <p>
        英語・中国語を学んで、海外フルリモートしてる引きこもりの自己紹介サイト
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
          {/* TODO:後でプロフィールに変える */}
            プロフィール
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('history')
            }}
          >
            経歴
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            作品
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('blog')
            }}
          >
            ブログ
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            連絡先
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('others')
            }}
          >
            その他
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
