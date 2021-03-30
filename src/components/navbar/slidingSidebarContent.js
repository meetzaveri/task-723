import React from 'react'
import PropTypes from 'prop-types'

const SlidingSidebarContent = (props) => {
    return (
        <div className="w-full">
            <div className="bg-gray-700 px-2 py-10">
                <div className="text-white font-bold">Navigation</div>
            </div>
            <div className="mb-2 w-full">
                <div
                    class={
                        props.history.location.pathname === '/'
                            ? 'w-full px-2 py-2 bg-gray-400'
                            : 'w-full px-2 py-2 hover:text-gray-900'
                    }
                    onClick={(e) => {
                        e.stopPropagation()
                        props.closeSidebar()
                        props.history.push('/')
                    }}
                >
                    Home
                </div>
            </div>
            <div className="my-2">
                <div
                    class={
                        props.history.location.pathname === '/posts'
                            ? 'px-2 py-2 bg-gray-400 '
                            : 'px-2 py-2 hover:text-gray-900'
                    }
                    onClick={(e) => {
                        e.stopPropagation()
                        props.closeSidebar()
                        props.history.push('/posts')
                    }}
                >
                    Posts
                </div>
            </div>
            <div className="my-2">
                <div
                    class={
                        props.history.location.pathname === '/other'
                            ? 'px-2 py-2 text-gray-900'
                            : 'px-2 py-2 hover:text-gray-900'
                    }
                    onClick={(e) => {
                        e.stopPropagation()
                        props.closeSidebar()
                        props.history.push('/other')
                    }}
                >
                    Other
                </div>
            </div>
        </div>
    )
}

SlidingSidebarContent.propTypes = {
    closeSidebar: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
}

export default SlidingSidebarContent
