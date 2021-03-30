import React, { Fragment } from 'react'

const Spinner = (props) => {
    const { loaderSize, color } = props
    const renderLoader = () => {
        switch (loaderSize) {
            case 'lg':
                return (
                    <span
                        style={
                            color && {
                                borderBottomColor: color,
                            }
                        }
                        className="lg-loader loader-3"
                    />
                )
            case 'sm':
                return (
                    <span
                        style={
                            color && {
                                borderBottomColor: color,
                            }
                        }
                        className="sm-loader loader-3"
                    />
                )
            case 'xs':
                return (
                    <span
                        style={
                            color && {
                                borderBottomColor: color,
                            }
                        }
                        className="xs-loader loader-3"
                    />
                )
            default:
                return <span className="loader loader-3" />
        }
    }
    return <Fragment>{renderLoader()}</Fragment>
}

Spinner.defaultProps = {
    loaderSize: 'sm',
    color: '#0747A6',
}

export default Spinner
