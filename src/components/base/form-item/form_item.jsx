import React from "react";

const CustomFormControl = ({error, children, className={}}) => (
    <div className={className}>
        {children}
        <span className='text-danger text-sm-left'>{error}</span>

    </div>
)

export default CustomFormControl;