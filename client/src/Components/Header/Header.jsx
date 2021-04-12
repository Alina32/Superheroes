import React from 'react';

import './styles.css';


const Header = ({children}) => {
  
        return (
            <div className="Header">
                <div className="Container">
                   {children}
                </div> 
                
            </div>  
        )
    

}

export default Header