import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import useMyQuery, { ProjectsResponseType } from '../../useQuery'
import FadeLoader from 'react-spinners/FadeLoader';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Project = (): React.JSX.Element => {
    const projectRef = useRef<HTMLDivElement | null>(null);

    const { data, isLoading } = useMyQuery<ProjectsResponseType>("/projects");
    useGSAP(() => {
        if (!isLoading && projectRef.current) {
            gsap.fromTo(
                projectRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1, y: 0, duration: 3, stagger: 0.3,
                }
            );
        }
        }, [isLoading, data]);

    return (
        <section className='pt-28 px-[4%] pb-6'>
            <h1 className='font-montserrat text-3xl font-semibold text-primary'>Projects</h1>
            {!isLoading
                ? (<div className="dfAc  flex-wrap gap-x-6 gap-y-8 pt-6" ref={projectRef} >
                    {data?.map((v: any) =>
                    (
                        <div key={v?.id} className='indigo bg-[rgb(32,32,34)] w-96 rounded-md overflow-hidden shadow-md'>
                            <div className="image">
                                <img src={v?.image} alt={v?.title} loading='lazy' className='w-96' />
                            </div>
                            <div className="details py-3 px-4 h-52 max-phone:h-[16rem]">
                                <h6 className='text-xl font-montserrat font-semibold'>{v?.title}</h6>
                                <p className='text-base   pt-2'>{v.ldescription}</p>
                                <Link to={`/projects/${v?.id}`} className='btn px-6 inline-block py-2 mt-3 text-base'>View Details</Link>
                            </div>
                        </div>


                    ))}
                </div>) : (
                    <div className='h-[90vh] dfAc'>
                        <FadeLoader color='#007BFF' />
                    </div>
                )
            }

        </section>
    )
}

export default Project