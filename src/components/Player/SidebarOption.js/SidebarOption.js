import React from 'react';
import "./SidebarOption.css"

function SidebarOption({ title, Icon }) {
    console.log(Icon);
    return (
        <div className='sidebar_option'>
            {Icon && <Icon className="sidebarOption_icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}

        </div>
    )
}

export default SidebarOption;