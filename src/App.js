import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useMediaQuery } from 'react-responsive'

// view imports
import PageNotFound from 'views/pagenotfound'
import SessionPage from 'views/session'
import PostsPage from 'views/posts'
import Navbar from 'components/navbar'

// misc imports
import routes from 'constants/routes'

import './App.css'
import './styles/common.scss'
import './tailwind/main.css'

const queryClient = new QueryClient()

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <ToastProvider>
                    <BrowserRouter>
                        <div>
                            <Navbar />
                            <Switch>
                                <Route
                                    exact
                                    path={routes.session}
                                    component={SessionPage}
                                />
                                <Route
                                    exact
                                    path={routes.posts}
                                    component={PostsPage}
                                />
                                <Route component={PageNotFound} />
                            </Switch>
                        </div>
                    </BrowserRouter>
                </ToastProvider>
            </QueryClientProvider>
        </div>
    )
}

export default App
