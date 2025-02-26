import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useMyQuery from '../../useQuery';
import ReactPlayer from 'react-player'

const SProject = (): React.JSX.Element => {
    type projectType = {
        id: number,
        link: string,
        title: string,
        image: string,
        video: string,
        ldescription: string,
        bdescription: string
    }[]
    const { id } = useParams();
    const { data,isLoading } = useMyQuery<projectType>(`/projects/${id}`);
    const newData = data?.[0];
    const [videoState, setVideoState] = useState<{ play: boolean; muted: boolean; }>({ play: false, muted: true })
    useEffect(() => {
        setVideoState({ muted: false, play: true });
    }, [])
    return (

        <div className='pt-[4.8rem] max-mdPhone:pt-[1.5rem] max-tab:pt-[4.3rem]'>
            {
                !isLoading ? <div className="myContainer">
                    <ReactPlayer
                        url={newData?.video}
                        playing={videoState.play}
                        controls={true}
                        width="100vw"
                        height="60vh"
                        loop={true}
                        muted={videoState.muted}
                    />

                    <div className="details p-5 py-4 max-phone:mx-2 max-phone:px-2 bg-[rgb(32,32,34)] mt-2 mx-8 rounded-md">
                        <h6 className='font-semibold text-xl '>{newData?.title}</h6>
                        <p className='pt-1 pb-3 text-base max-phone:text-sm'>{newData?.bdescription}</p>
                        <p>View Demo: <a href={newData?.link} className='text-blue-600' target="_blank" rel="noopener noreferrer">{newData?.link}</a></p>
                    </div>
                </div>
                    : (
                        <div className='  animate-pulse'>
                            {/* Image Placeholder */}
                            <div className="flex items-center justify-center h-[60vh] w-[100vw] bg-gray-300">
                                <svg className="w-10 h-10  text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                </svg>
                            </div>
                            <div className="details p-5 py-4 max-phone:mx-2 max-phone:px-2 bg-[rgb(32,32,34)] mt-2 mx-8 rounded-md">
                                {/* Title Placeholder h6 */}
                                <div className="h-8 w-5/12  bg-gray-300 rounded" />

                                {/* Description Placeholder p */}
                                <div className="pt-4 space-y-2">
                                    <div className="h-5 bg-gray-300 rounded" />
                                    <div className="h-5  bg-gray-300 rounded" />
                                    <div className="h-5  bg-gray-300 rounded" />
                                    <div className="h-5  bg-gray-300 rounded" />
                                </div>


                                {/* Button Placeholder */}
                                <div className="h-10 w-1/3  mt-3 bg-gray-300 rounded" />
                            </div>


                        </div>

                    )
            }

        </div>
    )
}

export default SProject