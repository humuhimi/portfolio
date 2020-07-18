import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image';

const HistoryArticle = ({ article,articleTimeout,historySrc,close }) => (
    <article
    id="history"
    className={`${article === 'history' ? 'active' : ''} ${
      articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">経歴</h2>
    <span className="image main">
      <Img fluid={historySrc} alt="経歴" />
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
        <ul style={{margin: 0,listStyle:"none" }}>
        <li>香港と広州にて中国語と英語での営業サポート件通訳</li>
        <li>メルマガ作成・動画編集・ブログ作成などなど</li>
        </ul>
        </td>
        <td>
        <ul style={{margin: 0,listStyle:"none" }}>
          <li>英語</li>
          <li>中国語</li>
          <li>WordPress</li>
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
        <ul style={{margin: 0,listStyle:"none" }}>
          <li>ログインフォーム</li>
          <li>掲示板投稿フォーム</li>
          <li>掲示板出力フォーム</li>
          <li>投稿削除機能</li>
          <li>投稿編集機能</li>
          <li>画像アップロード機能</li>
          <li>サムネイル作成機能</li>
          <li>フレームワークなし開発</li>
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
{/* タイトル8 */}
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
{/* タイトル9 */}
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
{/* タイトル10 */}
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
{/* タイトル11 */}
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
);

export default HistoryArticle;

HistoryArticle.propTypes = {
    article : PropTypes.string.isRequired,
    articleTimeout : PropTypes.bool.isRequired,
    historySrc : PropTypes.string.isRequired,
    close : PropTypes.element.isRequired,
};

