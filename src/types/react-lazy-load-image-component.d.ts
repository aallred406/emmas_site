declare module "react-lazy-load-image-component" {
  import { ComponentType, ImgHTMLAttributes } from "react";

  export interface LazyLoadImageProps
    extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    effect?: "blur" | "black-and-white" | "opacity";
    placeholderSrc?: string;
    threshold?: number;
    beforeLoad?: () => void;
    afterLoad?: () => void;
    onError?: (event: Event) => void;
    visibleByDefault?: boolean;
    wrapperClassName?: string;
    wrapperProps?: Record<string, unknown>;
  }

  export const LazyLoadImage: ComponentType<LazyLoadImageProps>;
}

declare module "react-lazy-load-image-component/src/effects/blur.css";
