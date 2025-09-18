import type { FC } from 'react';
import type { WithRocketProp } from '~shared/types';

export const Images: FC<WithRocketProp> = ({ rocket }) => {
  return (
    <div>
      {rocket.flickr_images.map((url) => (
        <img key={url} src={url} />
      ))}
    </div>
  );
};
