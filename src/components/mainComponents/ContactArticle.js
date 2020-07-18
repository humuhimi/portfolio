import React from 'react'
import PropTypes from 'prop-types'

const ContactArticle = ({ article,articleTimeout,close }) => (
    <article
    id="contact"
    className={`${article === 'contact' ? 'active' : ''} ${
      articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">連絡先</h2>

    <ul className="icons">
      <li>
        <a
          href="https://twitter.com/exitja_humu"
          className="icon fa-twitter"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/profile.php?id=100009890290074" className="icon fa-facebook">
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/exit0ja_humuhimi/" className="icon fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/humuhimi"
          className="icon fa-github"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
    <form method="post" action="https://formspree.io/xyynwzye" encType="multipart/form-data">
      <div className="field half first">
        <label htmlFor="name">お名前</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">メールアドレス</label>
        <input type="text" name="_replyto" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">ご用件</label>
        <textarea name="message" id="message" rows="4"></textarea>
      </div>
      <div style={{textAlign:"center"}}>
        <ul className="actions">
          <li>
            <input type="submit" value="送信" className="special" />
          </li>
          <li>
            <input type="reset" value="リセット" />
          </li>
        </ul>
      </div>
    </form>
    {close}
  </article>
);

export default ContactArticle;

ContactArticle.propTypes = {
    article : PropTypes.string.isRequired,
    articleTimeout : PropTypes.bool.isRequired,
    close : PropTypes.element.isRequired,
};

