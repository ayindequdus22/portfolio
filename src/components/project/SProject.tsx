import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useMyQuery from '../../useQuery';
import ReactPlayer from 'react-player'
import FadeLoader from "react-spinners/FadeLoader"

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
    const { data, isLoading } = useMyQuery<projectType>(`/projects/${id}`);
    const newData = data?.[0];
    const [videoState, setVideoState] = useState<{ play: boolean; muted: boolean; }>({ play: false, muted: true })
    useEffect(() => {
        setVideoState({ muted: false, play: true });
    },[])

    return (

        <div className='pt-[4.8rem]'>
            {
                !isLoading ? <div className="myContainer">
                    {/* {newData?.id} */}
                    <ReactPlayer
                        url={newData?.video}
                        playing={videoState.play}
                        controls={true}
                        width="100vw"
                        height="60vh"
                        loop={true}
                        muted={videoState.muted}
                    />   

                    <div className="details p-5 py-4  bg-[rgb(32,32,34)] mt-2 mx-8 rounded-md">
                        <h6 className='font-semibold text-xl'>{newData?.title}</h6>
<p className='pt-1 pb-3'>{newData?.bdescription}</p>
<p>View Demo: <a href={newData?.link} className='text-blue-600' target="_blank" rel="noopener noreferrer">{newData?.link}</a></p>
                    </div>
                </div>
                    : <>
                        <div className='h-[90vh]'>
                            <FadeLoader color='#007BFF' />
                        </div>

                    </>
            }

        </div>
    )
}

export default SProject