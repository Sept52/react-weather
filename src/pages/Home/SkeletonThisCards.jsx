import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonThisCards = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={240}
    viewBox="0 0 250 240"
    backgroundColor="#f3f3f3"
    foregroundColor="#d9d9d9"
    {...props}>
    <circle cx="-9" cy="47" r="9" />
    <circle cx="-9" cy="79" r="9" />
    <rect x="0" y="0" rx="10" ry="10" width="250" height="240" />
  </ContentLoader>
);

export default SkeletonThisCards;
