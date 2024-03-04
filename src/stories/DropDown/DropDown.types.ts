import "react"
export type DropDownProps = {
    /**
     * What the button looks like disabled
     */
    disabled?: boolean;

    /**
    * Optional click handler
    */
    onClick: () => void;

    isOpen?: boolean;
  }