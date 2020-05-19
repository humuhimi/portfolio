import PropTypes from 'prop-types'
import React from 'react'
import humuLogo from '../images/humuhimilogo.jpg';

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond">
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>ふむひみ</h1>
        <p>
          ふむひみ(僕)が英語・中国語・プログラミング言語を使いながら生活をアウトプットするサイト
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
