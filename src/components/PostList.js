import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Img from "gatsby-image";

const Wrapper = styled.div`
  margin-bottom: 2rem;
  position: relative;
  left:15%;
  z-index: 100;
  border-radius: 0.4rem;
  box-shadow: 0 0px 25px white;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-image:url(${ props=>props.url });
  background-size:contain;
  &:hover {
    box-shadow: 0 0px 25px white;
    transform: scale(1.04);
  }
    flex-basis: 70%;
    max-width: 70%;
    width: 70%;
    height: 18rem;
  }

  @media (max-width: 700px) {
    left:0;
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
    transition: opacity 0.4s;
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

const PostList = ({ cover, path, date, title, excerpt }) => (
  <Wrapper url={cover}>
    <StyledLink to={path}>
      <Info>
        <span>{date}</span>
        <Title>{title}</Title>
        <span>{excerpt}</span>
      </Info>
    </StyledLink>
  </Wrapper>
);

export default PostList;

PostList.propTypes = {
  cover: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
