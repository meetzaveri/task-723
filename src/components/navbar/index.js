import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import HamburgerIcon from 'assets/hamburger.svg'
import CountdownTimer from './countdownTimer'
import SlidingSidebar from 'components/slidingSidebar'
import SlidingSidebarContent from './slidingSidebarContent'

const Navbar = (props) => {
    const [showSlidingSidebar, toggleSlidingSidebar] = useState(false)
    const isDesktop = useMediaQuery({ minWidth: 1025 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const isMobile = useMediaQuery({ maxWidth: 767 })

    const [updated, mockForceUpdate] = useState(null)
    const history = useHistory()

    const checkRouteStatus = () => {
        mockForceUpdate(Math.random() * 235)
    }

    const closeSlidingSidebar = () => {
        toggleSlidingSidebar(false)
    }

    const renderRespectiveViewset = () => {
        if (isDesktop || isTablet) {
            return (
                <div class="container mx-auto flex flex-wrap py-2 px-2 lg:py-10 lg:px-5 flex-col md:flex-row items-center">
                    <a
                        href=""
                        onClick={(e) => {
                            e.preventDefault()
                            history.push('/')
                            checkRouteStatus()
                        }}
                    >
                        <img
                            width={100}
                            height={100}
                            src="https://cdn.codingal.com/images/logos/logos-main/logo-with-text.svg"
                        />
                    </a>
                    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <a
                            class={
                                history.location.pathname === '/posts'
                                    ? 'mr-5 text-gray-900'
                                    : 'mr-5 hover:text-gray-900'
                            }
                            href=""
                            onClick={(e) => {
                                e.preventDefault()
                                history.push('/posts')
                                checkRouteStatus()
                            }}
                        >
                            Posts
                        </a>
                        <a
                            class={
                                history.location.pathname === '/others'
                                    ? 'mr-5 text-gray-900'
                                    : 'mr-5 hover:text-gray-900'
                            }
                            href=""
                            onClick={(e) => {
                                e.preventDefault()
                                history.push('/others')
                                checkRouteStatus()
                            }}
                        >
                            Other
                        </a>
                    </nav>
                    <div className="absolute right-0 mr-4">
                        {history.location.pathname === '/' ? (
                            <CountdownTimer />
                        ) : null}
                    </div>
                </div>
            )
        } else if (isMobile) {
            return (
                <div class="container mx-auto flex flex-wrap py-8 px-2 lg:py-10 lg:px-5 items-center">
                    <a
                        className="pr-1 mr-2 border-r border-gray-500"
                        href=""
                        onClick={(e) => {
                            e.preventDefault()
                            toggleSlidingSidebar(true)
                        }}
                    >
                        <img width={30} height={30} src={HamburgerIcon} />
                        <SlidingSidebar
                            showSidebar={showSlidingSidebar}
                            onClose={closeSlidingSidebar}
                        >
                            <SlidingSidebarContent
                                history={history}
                                closeSidebar={closeSlidingSidebar}
                            />
                        </SlidingSidebar>
                    </a>

                    <a
                        href=""
                        onClick={(e) => {
                            e.preventDefault()
                            history.push('/')
                            checkRouteStatus()
                        }}
                    >
                        <img
                            width={100}
                            height={100}
                            src="https://cdn.codingal.com/images/logos/logos-main/logo-with-text.svg"
                        />
                    </a>
                </div>
            )
        }
    }

    return (
        <header class="text-gray-600 body-font relative">
            {renderRespectiveViewset()}
        </header>
    )
}

export default Navbar
