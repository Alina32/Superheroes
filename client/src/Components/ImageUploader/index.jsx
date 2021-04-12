import React from 'react';
import ImageUploaderBase from 'react-images-upload';

class ImageUploader extends React.Component {
 
    onDrop = (pictures) => {
        this.props.onChange({
            target: {
                name: this.props.name,
                value: pictures,
            }
        })
    }
 
    render() {
        return (
            <ImageUploaderBase
                withIcon
                withPreview
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}

export default ImageUploader