import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import introPic from '../images/my_chara.png';
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import FaceIcon from '../images/face.jpg';
import FaceIcon2 from '../images/face2.jpg';


import { Link } from 'gatsby';

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
          <p>ようこそ僕のサイトへ</p>
          <p>はじめましてふむひみです</p>
          <p>1995年生まれ</p>
          <p>関西学院大学　文学部　総合心理科学を中退</p>
          <p>サイバー大学　IT総合学部　転入（現在4年生)</p>
          <hr />
          <p>（少年時代）</p>
          <p>保育園時代に2年間中国福建省で生活5歳から日本に帰るも日本語があまり読めず、勉強に挫折したが大学の受験勉強でコンプレックスを抱え心を入れ替れる</p>
          <p>中学生から躁鬱（2型ラピッドサイクラー）とADHDによりあまり日本に馴染めず、引きこもりとホームレスなどを繰り返す</p>
          <p>昔に比べてだいぶマシになったが、今でも発作的に双極状態になりがち</p>
          <hr />
          <p>（大学時代）</p>
          <p>大学時代に日本脱出したくて英語　中国語の勉強を本格的に初め、積極的に国際交流イベントを主催</p>
          <p>武庫川でホームレスをしたり、フィリピン留学で英語を勉強し、香港にて英語・中国語を使い昼にはメディア戦略インターンと夜にはマッサージの客引きインターンを経験</p>
          <p>その後大学がつまらなく、時間の無駄と感じ通信制に転入</p>
          <p>香港のインターン時に遇ったサイバー攻撃からITに興味を持ち、Web開発を独学で開始</p>
          <hr />
          <p>(社会人時代）</p>
          <p>PHPインターンや正社員2社を経験し、実務は約1年ほどそしてフリーランスは半年ほど</p>
          <p>また日本語教師や通訳と翻訳や起業コンサルやリサーチ代行などもしてます。</p>
          <p>まだまだ未熟者で毎日自分の能力の低さに情けなさを感じながら日々精進しています</p>
          <hr />
          <p>(現在)</p>
          <p>正直、正社員2社の経験で外国人扱いされたり、陰口や責任のなすりつけなど、他にも個人的に日本で生活していて感じる圧力で日本での正社員は不可能だと感じた</p>
          <p>それを機に日本脱出をし雑魚フリーランスをしていたが、コロナの影響で中国に留まってる</p>
          <hr />
          <p>(これから)</p>
          <p>お陰さまで過去に関わった知り合いなどから開発案件含めて様々な仕事で生かしてもらってる</p>
          <p>上では正社員は不可能だって言ったが、自分に合うに人たちに出会えなかったことも問題だと感じ
          インターンやバイトで組織に合う合わないを見て少しづつ自分の居場所を大きくすることを次に試す</p>
          <p>なのでもしインターンからでもいいよって会社や仕事があれば積極的に参加していこうと思います</p>
          <p>それと自分ができることはとりあえずやってみる精神で頑張る！</p>
          <hr />
          <p>最後まで読んでいただきありがとうございました!</p>
          <img src={FaceIcon} alt="face icon" className="face main"/>
          <br />
          <p style={{position:"relative",textAlign:"center",marginTop:"1rem"}}>ふむひみ本人</p>
  
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
          <Link to="/blog">もっと見る</Link>
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
