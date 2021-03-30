import React, { Suspense } from 'react'

import ErrorBoundary from './errorboundary'

const Posts = React.lazy(() => import('./posts'))

const PostViewContainer = () => (
    <div>
        <Suspense fallback={<div className="px-4 py-6">Loading...</div>}>
            <ErrorBoundary>
                <Posts />
            </ErrorBoundary>
        </Suspense>
    </div>
)

export default PostViewContainer
