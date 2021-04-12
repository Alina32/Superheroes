import React from 'react'
import clsx from 'clsx'

import './styles.css' 

const Modal = ({
    open,
    onClose: handleClose,
    children
}) => (
    <div className={clsx('modal', open && 'active')} onClick={handleClose}>
        <div className={clsx('modal-content', open && 'active')} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
)
    
export default Modal;