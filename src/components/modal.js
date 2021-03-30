import React from 'react'
import ReactDOM from 'react-dom'
import Proptypes from 'prop-types'

const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }

    componentDidMount() {
        // The portal element is inserted in the DOM tree after
        // the Modal's children are mounted, meaning that children
        // will be mounted on a detached DOM node. If a child
        // component requires to be attached to the DOM tree
        // immediately when mounted, for example to measure a
        // DOM node, or uses 'autoFocus' in a descendant, add
        // state to Modal and only render the children when Modal
        // is inserted in the DOM tree.
        modalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            <div
                tabIndex="-1"
                id="modal-container-root"
                className={
                    this.props.showModal
                        ? `w-full  opacity-100`
                        : `w-0 opacity-0`
                }
                style={{
                    display: 'grid',
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                }}
                onClick={(e) => {
                    if (e.target.id === 'modal-container-root') {
                        this.props.onClose()
                    }
                }}
            >
                <div
                    style={{
                        padding: 20,
                        transition: 'all .3s',
                        transform: this.props.showModal
                            ? 'scale(1)'
                            : 'scale(0)',
                        opacity: this.props.showModal ? '1' : '0',
                        background: '#fff',
                        borderRadius: '7px',
                        display: 'inline-block',
                        minHeight: '300px',
                        margin: '1rem',
                        position: 'relative',
                        minWidth: '300px',
                        boxShadow:
                            '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                        justifySelf: 'center',
                    }}
                >
                    {this.props.children}
                </div>
            </div>,
            this.el
        )
    }
}

Modal.propTypes = {
    showModal: Proptypes.bool,
    onClose: Proptypes.func,
}

export default Modal
