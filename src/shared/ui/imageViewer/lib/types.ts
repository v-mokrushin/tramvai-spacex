export type ImageViewerProps = {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
  imageUrls?: ImageUrls;
  currentImageIndex?: number;
  onSetCurrentImageIndex?: (imageIndex: number) => void;
};

export type ImageUrls = string[];
