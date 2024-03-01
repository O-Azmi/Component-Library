import "react"
export type TextProps = {
    /**
     * Label contents
     */
    label: string; 
    /**
     * Label font
     */
    size: string;
    /**
     * What the Label looks like disabled
     */
    disabled?: boolean;
    /**
     * What the text looks like bold?
     */
    bold: string;
    /**
     * Underline text?
     */
    underline?: boolean;
  }