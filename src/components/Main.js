import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import introPic from '../images/humuhimikun.jpeg';
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">プロフィール</h2>
          <span className="image main">
            <img src={introPic} alt="about me" />
          </span>
          <p>
          どうもどうも
          ここに自己紹介の文章が入るよ~
            <a href="#work">僕の作品について</a>.
          </p>
          <p>
          テキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキスト
          </p>
          {close}
        </article>

        <article
          id="history"
          className={`${this.props.article === 'history' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">経歴</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          僕が今までしてきたことはブラブラブラブラブラ
          </p>
          <p>
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">作品</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          僕が作った作品について
          </p>
          <p>
          僕の作品はブラブラブラブラブラ
          ブラブラブラブラブラブラブラブラブラブラブラブラブラブラブラ
          ブラブラブラブラブラ
          ブラブラブラブラブラ
          ブラブラブラブラブラ
          </p>
          {close}
        </article>

        <article
          id="blog"
          className={`${this.props.article === 'blog' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">ブログ</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          SPAでページ内部にコンテンツ配置するようにする
          </p>
          <p>
          もっと見る
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">連絡先</h2>

          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">お名前</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">メールアドレス</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">ご用件</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="送信" className="special" />
              </li>
              <li>
                <input type="reset" value="リセット" />
              </li>
            </ul>
          </form>
          {close}
        </article>
        <article
          id="others"
          className={`${this.props.article === 'others' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">その他</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          その他のことに関してブラブラブラブラ
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
