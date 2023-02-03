import React from 'react'

const Note = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="far fa-trash-alt mx-2"></i>{/* fontawesome icon */}
                    <i className="far fa-edit mx-2"></i>{/* fontawesome icon */}
                </div>
            </div>
        </div>
    )
}

export default Note