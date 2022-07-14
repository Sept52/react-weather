import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonThisDayInfo = (props) => (
  <ContentLoader
    speed={2}
    width={750}
    min-height={308}
    viewBox="0 0 750 308"
    backgroundColor="#f3f3f3"
    foregroundColor="#d9d9d9"
    {...props}>
    <circle cx="-9" cy="47" r="9" />
    <circle cx="-9" cy="79" r="9" />
    <rect x="0" y="0" rx="20" ry="20" width="750" height="308" />
  </ContentLoader>
);

export default SkeletonThisDayInfo;
