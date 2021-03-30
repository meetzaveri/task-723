import React, { useState } from 'react'
import { useToasts } from 'react-toast-notifications'

import CircleWithCheckIcon from 'assets/circle_with_check.svg'
import CircleWithoutCheckIcon from 'assets/circle_without_check.svg'

const EndSessionModalContent = (props) => {
    const { addToast } = useToasts()
    const CLASS_COMPLETED = 'CLASS_COMPLETED'
    const CLASS_INTERUPPTED = 'CLASS_INTERUPPTED'

    const secondaryReasonStringsArr = [
        "Students didn \n't show up for the class",
        "Students didn \n't show any interest",
        'Student got disconnected',
        'I got disconnected',
        'Other reasons',
    ]

    const [primaryReason, setPrimaryReason] = useState(CLASS_COMPLETED)

    const [secondaryReasonIndex, setsecondaryReasonIndex] = useState(0)

    const endSession = () => {
        props.endSession()
        addToast('Session Ended successfuly', { appearance: 'success' })
    }
    return (
        <div className="px-32">
            <div className="my-4 text-2xl"> Select a reason to end class</div>
            <div className="my-2 text-lg">
                <div className="flex flex-wrap items-center">
                    <a
                        href=""
                        onClick={(e) => {
                            e.preventDefault()
                            setPrimaryReason(CLASS_COMPLETED)
                        }}
                    >
                        <img
                            width={25}
                            height={25}
                            alt="unchecked"
                            src={
                                primaryReason === CLASS_COMPLETED
                                    ? CircleWithCheckIcon
                                    : CircleWithoutCheckIcon
                            }
                        />
                    </a>

                    <span className="ml-2"> Class completed</span>
                </div>
            </div>
            <div className="my-2 text-lg">
                <div className="flex flex-wrap items-center">
                    <a
                        href=""
                        onClick={(e) => {
                            e.preventDefault()
                            setPrimaryReason(CLASS_INTERUPPTED)
                        }}
                    >
                        <img
                            width={25}
                            height={25}
                            alt="checked"
                            src={
                                primaryReason === CLASS_INTERUPPTED
                                    ? CircleWithCheckIcon
                                    : CircleWithoutCheckIcon
                            }
                        />
                    </a>
                    <span className="ml-2"> Class interuppted</span>
                </div>
            </div>
            {/* Secondary reason checks start */}

            <div
                className={
                    primaryReason === CLASS_INTERUPPTED
                        ? `my-2 pl-4 text-md opacity-100 transition-all ease-linear duration-500`
                        : `my-2 pl-4 text-md opacity-0 transition-all ease-linear duration-500`
                }
            >
                {primaryReason === CLASS_INTERUPPTED
                    ? secondaryReasonStringsArr.map((str, index) => (
                          <React.Fragment key={index}>
                              <div className="flex flex-wrap items-center">
                                  <a
                                      className="my-2"
                                      href=""
                                      onClick={(e) => {
                                          e.preventDefault()
                                          setsecondaryReasonIndex(index)
                                      }}
                                  >
                                      <img
                                          width={20}
                                          height={20}
                                          alt="checked"
                                          src={
                                              secondaryReasonIndex === index
                                                  ? CircleWithCheckIcon
                                                  : CircleWithoutCheckIcon
                                          }
                                      />
                                  </a>
                                  <span className="ml-2"> {str}</span>
                              </div>
                              {secondaryReasonIndex === index &&
                              index === secondaryReasonStringsArr.length - 1 &&
                              str === 'Other reasons' ? (
                                  <div className="my-2">
                                      <textarea
                                          className="px-2 py-1 text-sm rounded-sm border border-gray-500"
                                          placeholder="Type here"
                                      >
                                          {' '}
                                      </textarea>
                                  </div>
                              ) : null}
                          </React.Fragment>
                      ))
                    : null}
            </div>
            <div className="my-4 ">
                <button
                    className=" transition-all ease-in duration-75 bg-primary-active hover:bg-primary-focus rounded-md text-white px-4 py-2 focus:outline-none"
                    onClick={endSession}
                >
                    End Session
                </button>
                <button
                    className="ml-4 hover:bg-gray-400 transition-all ease-in duration-75 rounded-md text-gray-800 px-4 py-2 focus:outline-none"
                    onClick={props.closeModal}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default EndSessionModalContent
