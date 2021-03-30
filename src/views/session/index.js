import React, { Suspense } from 'react'
import ErrorBoundary from './errorboundary'

const SessionPage = React.lazy(() => import('./session'))

const SessionViewContainer = () => (
    <div>
        <Suspense fallback={<div className="px-4 py-6">Loading...</div>}>
            <ErrorBoundary>
                <SessionPage />
            </ErrorBoundary>
        </Suspense>
    </div>
)

export default SessionViewContainer
