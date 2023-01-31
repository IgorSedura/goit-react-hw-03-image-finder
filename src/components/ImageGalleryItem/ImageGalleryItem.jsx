import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItemStyles';

export const ImageGaleryItemImage = ({
  smallImg,
  largeImg,
  tags,
  onSelect,
}) => {
  return (
    <Image
      src={smallImg}
      alt={tags}
      onClick={() => {
        onSelect(largeImg);
      }}
    />
  );
};

ImageGaleryItemImage.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
