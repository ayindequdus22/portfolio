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



    return (

        <div className='pt-20   df-fldc'>
            {
                !isLoading ? <div className="container">
                    {newData?.id}
                    <ReactPlayer
                        url={newData?.video}
                        playing={true}
                        controls={true}
                        width="80%"
                        height="auto"
                        loop={true}
                        muted={false}
                    />    <h5>{newData?.title}</h5>
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