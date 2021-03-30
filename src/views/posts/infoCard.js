import React from 'react'
import ImageBrokenPNG from 'assets/image_broken.png'

const PostsInfoCardView = ({ passenger }) => {
    return (
        <div className="w-full my-10 px-4 py-2 border-b border-gray-400 ">
            <div className="my-2 text-lg">
                Name: <span className="ml-1">{passenger?.name || 'NA'}</span>
            </div>
            <div className="my-2 text-lg">
                Trips:
                <span className="ml-1">{passenger?.trips || 'NA'}</span>
            </div>
            <div className="mt-2 text-lg text-left">Airlines</div>
            <div className="flex flex-wrap items-center text-md mt-1 mb-4">
                <div className="w-1/4">
                    <img
                        className="mx-auto "
                        width={100}
                        height={100}
                        alt={passenger?.airline?.name || 'no name available'}
                        src={
                            passenger?.airline?.logo
                                ? passenger?.airline?.logo
                                : ImageBrokenPNG
                        }
                    />
                </div>
                <div className="w-3/4">
                    <div className="p-2">
                        {passenger?.airline?.name || 'NA'}
                    </div>
                    <div className="p-2  ">
                        <span className="bg-gray-300 rounded-md text-gray-600 px-2 py-2">
                            {' '}
                            Country : {passenger?.airline?.country || 'NA'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostsInfoCardView
