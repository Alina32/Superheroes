import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Button from "../Buttons/Button"
import Image from "../Image/Image"

import EditableField from '../EditableField'
import ImageUploader from '../ImageUploader'

import './styles.css'

class Hero extends Component {
    state = {
        edit: false
    }


    handleEdit = () => this.setState(({ edit }) => ({ edit: !edit }))
    handleSave = async () => {
        await this.props.onSave({
            _id: this.props.match.params._id,
            nickname: this.props.nickname,
            real_name: this.props.real_name,
            description: this.props.description,
            superpowers: this.props.superpowers,
            catch_phrase: this.props.catch_phrase,
            photos: this.props.photos,
        });

        this.setState({ edit: false })
    }

    render() {
        return (
            <div className="Container">
                <div className="Hero-container">
                    <EditableField
                        className="Text-red"
                        edit={this.state.edit}
                        name="nickname"
                        value={this.props.nickname}
                        onChange={this.props.onChange}
                    />
                    <EditableField
                        className="Text-p"
                        edit={this.state.edit}
                        name="real_name"
                        value={this.props.real_name}
                        onChange={this.props.onChange}
                    />
                    {!this.state.edit ? (
                        <Button className="Button-edit" onClick={this.handleEdit}>Edit</Button>
                    ) : (
                        <Button className="Button-ok" onClick={this.handleSave}>Save</Button>
                    )}
                    <hr />
                    <div className="More">
                        <ul>
                            <li><EditableField
                                className="Text-strong"
                                edit={this.state.edit}
                                name="description"
                                value={this.props.description}
                                onChange={this.props.onChange}
                            /></li>
                            <li><EditableField
                                className="Text-strong"
                                edit={this.state.edit}
                                name="superpowers"
                                value={this.props.superpowers}
                                onChange={this.props.onChange}
                            /></li>
                            <li><EditableField
                                className="Text-strong"
                                edit={this.state.edit}
                                name="catch_phrase"
                                value={this.props.catch_phrase}
                                onChange={this.props.onChange}
                            /></li>
                        </ul>

                        {!this.state.edit ? (
                            <div className="Image-container">
                                {this.props.photos.map(({ path, _id }) => (
                                    <div className="Border" key={_id}>
                                        <Image
                                            width='240px'
                                            src={`/${path}`} alt="Photo"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <ImageUploader
                                name="photos"
                                value={this.props.photos}
                                onChange={this.props.onChange}
                            />
                        )}

                    </div>
                </div>
            </div>


        )
    }

}

export default withRouter(Hero)