import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={1}
    width={270}
    height={330}
    viewBox="0 0 270 330"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="493" cy="535" r="15" />
    <rect x="520" y="522" rx="2" ry="2" width="140" height="10" />
    <rect x="520" y="538" rx="2" ry="2" width="140" height="10" />
    <rect x="568" y="491" rx="2" ry="2" width="400" height="400" />
    <rect x="25" y="25" rx="15" ry="15" width="220" height="280" />
    <rect x="573" y="516" rx="0" ry="0" width="30" height="43" />
  </ContentLoader>
);
