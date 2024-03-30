import "react"
export type TextareaProps = {

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
    isvalid?: boolean;

    cols: number;

    rows: number ;
    
  }