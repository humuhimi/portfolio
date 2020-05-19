import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Layout2 from '../components/Layout2';
import CloudStar from '../images/croud_star.jpg';

// Sugestion
const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: '#f0f0f0';
  box-shadow: '0 -5px 30px rgba(0,0,0,0.2)';
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`;

// Header 

const HeadWrapper = styled.header`
  -webkit-clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);
  clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);
  @media (max-width: 600px) {
    -webkit-clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
    clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
  }
  background: linear-gradient(-45deg, '#3e5fbc' 0%, '#a0afd7' 100%);
  height: 300px;
  @media (max-width: 960px) {
    height: 300px;
  }
  @media (max-width: 600px) {
    height: 275px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color:'#fff';
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: '70rem';
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: '#f0f0f0';
`;

const Header = ({ children, title, date, cover }) => (
  <HeadWrapper>
    <Img fluid={cover || {} || [] || ''} />
    <Text>
      <h1>{title}</h1>
      <h3>{date}</h3>

      {children && <Subtitle>{children}</Subtitle>}
    </Text>
  </HeadWrapper>
);

Header.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.bool,
    ]),
  };
  
  Header.defaultProps = {
    children: false,
    cover: false,
    date: false,
    title: false,
  };

// Container 

const ContainerWrapper = styled.section`
  text-align: ${props => (props.center ? 'center' : '')};
  margin: auto;
  padding: 3rem 1.5rem;
  width: 60%;
  max-width: '70rem';
  height: 100%;
  flex: 1;
  @media (max-width: 960px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 95%;
  }
`;

const Container = ({ children, type, className, center }) => (
  <ContainerWrapper className={className} type={type} center={center}>
    {children}
  </ContainerWrapper>
);

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    center: PropTypes.object,
  };

//  Content

const ContentWrapper = styled.div`
  p,
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 1.15rem;
    line-height: 2;
    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0;
    }
  }
  a:not(.gatsby-resp-image-link):not(.anchor) {
    color: black;
    box-shadow: inset 0 -2px 0 '#fff';
    border-bottom: 1px solid  '#3498db';
    transition: all 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    text-decoration: none;
    &:hover,
    &:focus {
      background: '#3498db';
      color: black;
    }
  }
  h1 {
    margin-top: 3rem;
  }
  h2 {
    margin-top: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: inline-block;
    position: relative;
    a {
      box-shadow: none;
      border-bottom: none;
      &:hover,
      &:focus {
        background: none;
      }
    }
    &:hover {
      .anchor svg {
        opacity: 0.8;
      }
    }
  }
`;

const Content = ({ input }) => (
  <ContentWrapper dangerouslySetInnerHTML={{ __html: input }} />
);

// Post

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const {html, frontmatter, excerpt } = data.markdownRemark
  const {date, title, tags, path, description} = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid;

  return (
    <Layout2 background={CloudStar}>
      <Header title={title} date={date} cover={image} />
      <Container>
        <Content input={html} />
      </Container>
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout2>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;
