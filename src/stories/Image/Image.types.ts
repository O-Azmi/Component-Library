import "react"
export type ImageProps = {
    /**
     * Image is enabled
     */
    enabled?: boolean;
    /**
     * what the alternative name for the image will be
     */
    alt: string;

    /**
     * What the width of the image will be
     */
    width: string;

    /**
     * What the image source will be
     */

    src: string;

    /**
     * What the image will look like disabled
     */
    disabled?: boolean;
  }

