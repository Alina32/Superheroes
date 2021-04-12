import React from 'react'

import Text from './Text/Text'
import Input from './Input/Input'

const EditableField = ({
    edit,
    name,
    value,
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
        <Text className="Text-red">{value}</Text>
    )
}

export default EditableField