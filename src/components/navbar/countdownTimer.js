import React, { useState } from 'react'

import Modal from 'components/modal'
import Endsession from './endSession'

class CountdownTimer extends React.Component {
    state = {
        sessionEnded: false,
        openEndSessionModal: false,
    }

    componentDidMount() {
        let fiveMinutes = 60 * 1,
            display = document.querySelector('#time')
        this.activateTimer(fiveMinutes, display)
    }

    activateTimer = (duration, display) => {
        let timer = duration,
            minutes,
            seconds

        const setIntervalFn = setInterval(() => {
            // console.log('timer', timer, this.state.sessionEnded)
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10)

            minutes = minutes < 10 ? '0' + minutes : minutes
            seconds = seconds < 10 ? '0' + seconds : seconds

            display.textContent = this.state.sessionEnded
                ? '00:00'
                : minutes + ':' + seconds

            if (--timer < 0 || this.state.sessionEnded === true) {
                console.log('clear interval')
                clearInterval(setIntervalFn)
                this.setState({ sessionEnded: true })
            }
        }, 1000)
    }

    handleOnClickEndSession = () => {
        this.setState({ openEndSessionModal: true })
    }

    endSession = () => {
        this.setState({ sessionEnded: true, openEndSessionModal: false })
    }

    closeModal = () => {
        this.setState({ openEndSessionModal: false })
    }

    render() {
        return (
            <>
                <span id="time">1:00</span>
                <button
                    class="inline-flex items-center bg-primary-active border-0 py-2 px-4 ml-4
                focus:outline-none hover:bg-primary-focus rounded text-base text-white mt-4 md:mt-0"
                    onClick={this.handleOnClickEndSession}
                >
                    End Class
                </button>
                <Modal
                    showModal={this.state.openEndSessionModal}
                    onClose={this.closeModal}
                >
                    <Endsession
                        endSession={this.endSession}
                        closeModal={this.closeModal}
                    />
                </Modal>
            </>
        )
    }
}
export default CountdownTimer
