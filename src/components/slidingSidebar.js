import React from 'react'
import ReactDOM from 'react-dom'
import Proptypes from 'prop-types'

const sidebarRootEl = document.getElementById('sliding-sidebar-root')
class SlidingSidebar extends React.Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }

    componentDidMount() {
        sidebarRootEl.appendChild(this.el)
    }

    componentWillUnmount() {
        sidebarRootEl.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            <div
                tabIndex="-1"
                id="sldiing-sidebar-container-root"
                className={
                    this.props.showSidebar
                        ? `w-full h-full  opacity-100`
                        : `w-0 opacity-0`
                }
                style={{
                    display: 'grid',
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                }}
                onClick={(e) => {
                    if (e.target.id === 'sldiing-sidebar-container-root') {
                        e.stopPropagation()
                        this.props.onClose()
                    }
                }}
            >
                <div
                    className={
                        this.props.showSidebar
                            ? `w-full transition-all ease-in-out duration-300`
                            : `w-0 transition-all ease-in-out duration-300`
                    }
                    style={{
                        transition: 'all .3s',
                        width: this.props.showSidebar ? '80%' : '0%',
                        opacity: this.props.showSidebar ? '1' : '0',
                        background: '#fff',
                        display: 'inline-block',
                        height: '100%',
                        margin: '0rem',
                        position: 'relative',
                        boxShadow:
                            '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                        // justifySelf: 'center',
                    }}
                >
                    {this.props.children}
                </div>
            </div>,
            this.el
        )
    }
}

SlidingSidebar.propTypes = {
    showSidebar: Proptypes.bool,
    onClose: Proptypes.func,
}

export default SlidingSidebar
