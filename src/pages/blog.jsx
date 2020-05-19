import React from 'react';
import { graphql,Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Footer from '../components/Footer'
import styled from '@emotion/styled';

import Layout2 from '../components/Layout2';
import LandStar from '../images/landscape.jpg';

const transition = {
    easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    duration: '0.4s',
  };

const Wrapper = styled.article`
  margin-bottom: 2rem;
  position: relative;
  z-index: 100;
  border-radius: 0.4rem;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  transition: all ${transition.duration} ${transition.easeOutBack};
  height: 17rem;
  flex-basis: calc(99.9% * 1 / 3 - 2.5rem);
  max-width: calc(99.9% * 1 / 3 - 2.5rem);
  width: calc(99.9% * 1 / 3 - 2.5rem);
  &:hover {
    box-shadow: 0 40px 45px rgba(0, 0, 0, 0.1);
    transform: scale(1.04);
  }
  @media (max-width: 1000px) {
    flex-basis: calc(99.9% * 1 / 2 - 1rem);
    max-width: calc(99.9% * 1 / 2 - 1rem);
    width: calc(99.9% * 1 / 2 - 1rem);
    height: 18rem;
  }
  @media (max-width: 700px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    height: 15rem;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  z-index: 3;
  border-radius: 0.4rem;
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.7) 80%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: -10;
    border-radius: 0.4rem;
    transition: opacity transition.duration;
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  object-fit: cover;
  border-radius: 0.4rem;
  img {
    border-radius: 0.4rem;
  }
  > div {
    position: static !important;
  }
  > div > div {
    position: static !important;
  }
`;

const Info = styled.div`
  color: '#f0f0f0';
  margin: 0 1rem 1.25rem 1.25rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Title = styled.h2`
  margin-bottom: 0.6rem;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2rem 2rem;
    margin: 0 3rem 3rem 3rem;
    align-items: center;
    font-size:2rem;
`;

const PostList = ({ cover, path, date, title, excerpt }) => (
    <Wrapper>
      <Image>
        <Img fluid={cover} />
      </Image>
      <StyledLink to={path}>
        <Info>
          <span>{date}</span>
          <Title>{title}</Title>
          <span>{excerpt}</span>
        </Info>
      </StyledLink>
    </Wrapper>
  );

  PostList.propTypes = {
    cover: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };  


const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout2 background={LandStar}>
      <Helmet title={'Blog Page'} />
      <Header title="Blog Page">ふむひみのブログ</Header>
      <PostWrapper>
        {edges.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const { cover, path, title, date } = frontmatter;
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          );
        })}
      </PostWrapper>
      <Footer />
    </Layout2>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;