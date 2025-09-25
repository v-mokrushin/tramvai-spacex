export type ImageViewerProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  imageUrls: ImageUrls;
  currentImageIndex: number;
  onSetCurrentImageIndex: (imageIndex: number) => void;
};

export type ImageUrls = string[];
