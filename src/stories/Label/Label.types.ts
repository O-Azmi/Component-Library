import "react"
export type LabelProps = {

    /**
     * Label contents
     */
    label: string; 
    /**
     * Label font
     */
    font: string;
    /**
     * What the Label looks like disabled
     */
    disabled?: boolean;
    /**
     * Did the button pass validation
     */
    isValid?: boolean;
  }