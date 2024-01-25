import React, { useState } from "react";

const CheckBoxComponent = () => {

    const [isChecked,setChecked]=useState(false);

    const handleCheckBoxChange=()=>{
        setChecked(!isChecked);
    }

    return (
        <div>
            <input type="checkbox" checked={isChecked} onChange={handleCheckBoxChange} style={{width:'20px',height:'20px'}}/>
            <label htmlFor="myCheckBox"> </label>
            {/* <p>{isChecked? 'checkBox is Checked': 'CheckBox is not Checked'}</p> */}
        </div>
    );
}

export default CheckBoxComponent;
