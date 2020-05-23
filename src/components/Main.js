import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import introPic from '../images/my_chara.png';
import History from '../images/history.jpg'
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
            <img src={History} alt="経歴" />
          </span>
          <table className="table main">
           <tbody>
           {/* 先頭 */}
           <tr className="table main tbody tr">
              <th>期間</th>
              <th>内容</th>
              <th>職務</th>
              <th>言語orツール</th>
            </tr>
            {/* タイトル1 */}
            <tr>
              <td>
              2016/11
              ~2017/2
              </td>
              <td>
              <p>メディア戦略部門&営業</p>
              </td>
              <td>
              <ul style={{margin: 0 }}>
              <li>香港と広州にて中国語と英語での営業サポート件通訳</li>
              <li>メルマガ作成・動画編集・ブログ作成などなど</li>
              </ul>
              </td>
              <td>
              <ul style={{margin: 0 }}>
                <l1 >英語/</l1>
                <l1 >中国語/</l1>
                <l1 >WordPress/</l1>
              </ul>
              </td>
            </tr>
{/* タイトル2 */}
            <tr>
              <td>
              2018/1
              ~2018/6
              </td>
              <td>
              簡易掲示板開発
              </td>
              <td>
              <ul style={{margin: 0 }}>
                <l1>インターン/</l1>
                <l1 >ログインフォーム/</l1>
                <l1 >掲示板投稿フォーム/</l1>
                <l1 >掲示板出力フォーム/</l1>
                <l1 >投稿削除機能/</l1>
                <l1 >投稿編集機能/</l1>
                <l1 >画像アップロード機能/</l1>
                <l1 >サムネイル作成機能/</l1>
              </ul>
              </td>
              <td>
              <ul style={{margin: 0,listStyle:"none" }}>
                <li>PHP</li>
                <li>MYSQL</li>
              </ul>
              </td>
            </tr>
        {/* タイトル3 */}
            <tr>
              <td>
              2018/2
              ~2018/7
              </td>
              <td>簡易座標計算課題</td>
              <td>
              <ul style={{margin: 0,listStyle:"none" }}>
              <li>
              x座標,y座標を入力することで円や三角形の面積や距離を計算するモジュール
              </li>
              </ul>
              </td>
              <td>JAVA</td>
            </tr>
{/* タイトル4 */}  
            <tr>
              <td>
              2018/7
              ~2018/8
              </td>
              <td>国際交流サイト作成</td>
              <td>
              <ul style={{margin: 0,listStyle:"none" }}>
              <li>
              静的サイト
              </li>
              <li>
              英語、中国語を使用
              </li>
              <li>
              基本的なHTML/CSSを使用
              </li>
              </ul>
              </td>
              <td>
                <ul style={{margin: 0,listStyle:"none" }}>
                  <li>
                    HTML
                  </li>
                  <li>
                    CSS
                  </li>
                </ul>
              </td>
            </tr>
{/* タイトル5 */}
            <tr>
              <td>
              2018/9
              ~2018/12
              </td>
              <td>サイト開発サポート</td>
              <td>
              <ul style={{margin: 0,listStyle:"none" }}>
              <li>
              ウェブサイト(チョクバイ!)の開発サポート
              </li>
              <li>
              主にテスト作業
              </li>
              </ul>
              </td>
              <td>
                <ul style={{margin: 0,listStyle:"none" }}>
                  <li>
                    PHP
                  </li>
                  <li>
                    Laravel
                  </li>
                  <li>
                    MYSQL
                  </li>
                </ul>
              </td>
            </tr>
{/* タイトル6 */}
            <tr>
              <td>
              2019/6
              ~2019/6
              </td>
              <td>簡易退職者予測モジュール</td>
              <td>
              <ul style={{margin: 0,listStyle:"none" }}>
              <li>
              機械学習を使った簡易な退職者予想モデルの作成
              </li>
              <li>
              開発と実装
              </li>
              </ul>
              </td>
              <td>
                <ul style={{margin: 0,listStyle:"none" }}>
                  <li>
                    python
                  </li>
                  <li>
                    sklearn
                  </li>
                  <li>
                    pandas
                  </li>
                  <li>
                    matplotlib
                  </li>
                  <li>
                    numpy
                  </li>
                  <li>
                    keras
                  </li>
                  <li>
                    tensorflow
                  </li>
                </ul>
              </td>
            </tr>
{/* タイトル7 */}
            <tr>
              <td>
              2019/6
              ~2019/6
              </td>
              <td>簡易退職者予測モジュール</td>
              <td>
              <ul style={{margin: 0,listStyle:"none" }}>
              <li>
              機械学習を使った簡易な退職者予想モデルの作成
              </li>
              <li>
              開発と実装
              </li>
              </ul>
              </td>
              <td>
                <ul style={{margin: 0,listStyle:"none" }}>
                  <li>
                    python
                  </li>
                  <li>
                    sklearn
                  </li>
                  <li>
                    pandas
                  </li>
                  <li>
                    matplotlib
                  </li>
                  <li>
                    numpy
                  </li>
                  <li>
                    keras
                  </li>
                  <li>
                    tensorflow
                  </li>
                </ul>
              </td>
            </tr>
  {/* タイトル8 */}
            <tr>
              <td>
              2019/7
              ~2019/7
              </td>
              <td>映画レビュー好感判定モジュール</td>
              <td>
              <ul style={{margin: 0,listStyle:"none" }}>
              <li>
              深層学習を使って映画データのレビューが好評か悪評かを判定する深層学習モジュールの作成
              </li>
              </ul>
              </td>
              <td>
                <ul style={{margin: 0,listStyle:"none" }}>
                  <li>
                    python
                  </li>
                  <li>
                    sklearn
                  </li>
                  <li>
                    pandas
                  </li>
                  <li>
                    matplotlib
                  </li>
                  <li>
                    numpy
                  </li>
                  <li>
                    keras
                  </li>
                  <li>
                    tensorflow
                  </li>
                </ul>
              </td>
            </tr>
  {/* タイトル9 */}
            <tr>
              <td>
              2019/8
              ~2019/8
              </td>
              <td>オンライン受講サイト開発補助</td>
              <td>
              <ul style={{margin: 0,listStyle:"none" }}>
              <li>
              新規オンライン受講サイトの開発のお手伝い
              </li>
              </ul>
              </td>
              <td>
                <ul style={{margin: 0,listStyle:"none" }}>
                  <li>
                    PHP
                  </li>
                  <li>
                    cakePHP2
                  </li>
                </ul>
              </td>
            </tr>
  {/* タイトル10 */}
            <tr>
              <td>
              2019/9
              ~2019/9
              </td>
              <td>キャラクターが歌って踊るARアプリ</td>
              <td>
              <ul style={{margin: 0,listStyle:"none" }}>
              <li>
              キャラクターが歌って踊るARアプリ
              </li>
              </ul>
              </td>
              <td>
                <ul style={{margin: 0,listStyle:"none" }}>
                  <li>
                    C#
                  </li>
                  <li>
                    Unity
                  </li>
                  <li>
                    vuforia
                  </li>
                </ul>
              </td>
            </tr>
  {/* タイトル11 */}
            <tr>
              <td>
              2019/10
              ~2019/11
              </td>
              <td>美容系ホームページ作成</td>
              <td>
              <ul style={{margin: 0,listStyle:"none" }}>
              <li>
              デザイン・作成
              </li>
              </ul>
              </td>
              <td>
                <ul style={{margin: 0,listStyle:"none" }}>
                  <li>
                    WIX
                  </li>
                </ul>
              </td>
            </tr>
  {/* タイトル12 */}
            <tr>
              <td>
              2020/4
              ~2020/6
              </td>
              <td>婚活サイト開発</td>
              <td>
              <ul style={{margin: 0,listStyle:"none" }}>
              <li>
              静的サイトジェネレータによる婚活イベント情報を提供する婚活サイト
              </li>
              <li>
              要件定義・デザイン・開発・実装
              </li>
              </ul>
              </td>
              <td>
                <ul style={{margin: 0,listStyle:"none" }}>
                  <li>
                    Javascript
                  </li>
                  <li>
                    node.js
                  </li>
                  <li>
                    React
                  </li>
                  <li>
                    Gatsby js
                  </li>
                  <li>
                    Contentful
                  </li>
                </ul>
              </td>
            </tr>
           </tbody>
          </table>

          <h2 className="major">資格</h2>
          <table className="table main">
           <tbody>
           {/* 資格 */}
           <tr className="table main tbody tr">
              <th>取得年月</th>
              <th>資格名</th>
            </tr>
            <tr>
              <td>2018年1月</td>
              <td><b>HSK5級243点</b></td>
            </tr>
            <tr>
              <td>2018年1月</td>
              <td><b>TOEIC725点</b></td>
            </tr>
            <tr>
              <td>2019年5月</td>
              <td><b>LPIC 101</b></td>
            </tr>
            <tr>
              <td>2019年5月</td>
              <td><b>LPIC 102</b></td>
            </tr>
            <tr>
              <td>2019年6月</td>
              <td><b>Oracle Bronze SQL</b></td>
            </tr>
          </tbody>
          </table>

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
            <img src={pic03} alt="作品" />
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
