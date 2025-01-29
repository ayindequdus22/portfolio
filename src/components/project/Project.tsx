import React from 'react'
import { Link } from 'react-router-dom'

import useMyQuery, { ProjectsResponseType } from '../../useQuery'

const Project = (): React.JSX.Element => {

    const { data } = useMyQuery<ProjectsResponseType>("/projects");

    return (
        <section className='pt-28 px-[4%] pb-6'>
            <h1 className='font-montserrat text-3xl font-semibold text-primary'>Projects</h1>
            <div className="dfAc flex-wrap gap-x-6 gap-y-8 pt-6">
                {data?.map((v: any) =>
                (
                    <div key={v?.id} className='bg-[#F8F9FA] w-96 rounded-md overflow-hidden shadow-md'>
                        <div className="image">
                            <img src={v?.image} alt={v?.title} loading='lazy' className='w-96' />
                        </div>
                        <div className="details py-3 px-4 h-52 max-phone:h-60">
                            <h6 className='text-xl font-montserrat font-semibold'>{v?.title}</h6>
                            <p className='text-base  pt-2'>{v.ldescription}</p>
                            <Link to={`/projects/${v?.id}`} className='btn px-6 inline-block py-2 mt-3 text-base'>View Details</Link>
                        </div>
                    </div>


                ))}
            </div>

        </section>
    )
}

export default Project