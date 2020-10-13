import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EditNotePage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.note
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateNote(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <h1>Edit Note</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea
                            className="form-control"
                            name="textContent"
                            value={this.state.formData.textContent}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Done?</label>
                        <input
                            type="checkbox"
                            className="form-control"
                            name="complete"
                            value={this.state.formData.complete}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-xs"
                        disabled={this.state.invalidForm}
                    >
                        SAVE NOTE
         </button>&nbsp;&nbsp;
         <Link to='/'>CANCEL</Link>
                </form>
            </>
        );
    }
}
export default EditNotePage;