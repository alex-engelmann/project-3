import React from 'react'
import './style.css'

const ModalTrigger = () => {
    return (
        <React.Fragment>
            {/* Modal Trigger */}
            <button type="button" className="btn btn-secondary disabled" data-toggle="modal" data-target="#Modal">Buy</button>
        </React.Fragment>
    )
}

export default ModalTrigger