import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      Copyright &copy; Humuhimi.All rights reserved - HomePage. Built with:{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
