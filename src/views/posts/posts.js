import React from 'react'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'

import useIntersectionObserver from 'utils/intersectionHook'
import Spinner from 'components/spinner'
import PostsInfoCardView from './infoCard'

function PostsPage() {
    let pageParam = 0
    const {
        status,
        data,
        error,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(
        'passengers',
        async ({ pageParam = 0 }) => {
            const res = await axios.get(
                'https://api.instantwebtools.net/v1/passenger?size=10&page=' +
                    pageParam
            )
            return res.data
        },
        {
            getPreviousPageParam: () => pageParam - 1 ?? false,
            getNextPageParam: () => pageParam + 1 ?? false,
        }
    )

    const loadMoreButtonRef = React.useRef()

    useIntersectionObserver({
        target: loadMoreButtonRef,
        onIntersect: fetchNextPage,
        enabled: hasNextPage,
    })

    return (
        <div className="w-full">
            {status === 'loading' ? (
                <div className="w-full flex items-center justify-center">
                    <Spinner loaderSize="lg" />
                </div>
            ) : status === 'error' ? (
                <div className="w-full flex items-center justify-center">
                    <span className="text-red-700 bg-red-300 px-2 py-2">
                        Error: {error.message}
                    </span>
                </div>
            ) : (
                <>
                    <div className=" px-4 lg:px-24 xxl:px-48 ">
                        {data?.pages[0]?.data.length > 1 ? (
                            data.pages.map((page, index) => (
                                <React.Fragment key={index}>
                                    {page.data.map((passenger) => (
                                        <React.Fragment key={passenger._id}>
                                            <PostsInfoCardView
                                                passenger={passenger}
                                            />
                                        </React.Fragment>
                                    ))}
                                </React.Fragment>
                            ))
                        ) : (
                            <div className="px-2 py-2 font-bold text-center">
                                No more results
                            </div>
                        )}
                    </div>
                    <div className="text-center mb-10">
                        <button
                            className={
                                isFetchingNextPage
                                    ? ``
                                    : `bg-gray-500 rounded-md px-4 py-2 focus:outline-none my-4`
                            }
                            ref={loadMoreButtonRef}
                            onClick={() => fetchNextPage()}
                            disabled={!hasNextPage || isFetchingNextPage}
                        >
                            {isFetchingNextPage ? (
                                <div>
                                    {' '}
                                    <Spinner loaderSize="lg" />
                                </div>
                            ) : hasNextPage ? (
                                <span className=""> Load More</span>
                            ) : (
                                <div>Nothing to load more</div>
                            )}
                        </button>
                    </div>
                    <div>
                        {isFetching && !isFetchingNextPage
                            ? 'Background Updating...'
                            : null}
                    </div>
                </>
            )}
        </div>
    )
}

export default PostsPage
