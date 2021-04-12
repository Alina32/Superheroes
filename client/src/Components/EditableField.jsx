import React from 'react'

import Text from './Text/Text'
import Input from './Input/Input'

const EditableField = ({
    edit,
    name,
    value,
    className,
    onChange: handleChange
}) => {
    return edit ? (
        <Input 
            type="input" 
            name={name}
            value={value}
            onChange={handleChange}
            className="Input-edit"
        />
    ) : (
        <Text className={className}>{value}</Text>
    )
}

export default EditableField