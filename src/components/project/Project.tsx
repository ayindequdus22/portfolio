import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import useMyQuery, { ProjectsResponseType } from '../../useQuery'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Project = (): React.JSX.Element => {
    const projectRef = useRef<HTMLDivElement | null>(null);

    const { data, } = useMyQuery<ProjectsResponseType>("/projects");
    const isLoading = true;
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
                    <div className="dfAc  flex-wrap gap-x-6 gap-y-8 pt-6">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <div key={index} className="animate-pulse bg-[rgb(32,32,34)] w-96 rounded-md overflow-hidden shadow-md">
                                {/* Image Placeholder */}
                                <div className="flex items-center justify-center h-44 w-96 bg-gray-300">
                                    <svg className="w-10 h-10  text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                    </svg>
                                </div>

                                {/* details */}
                                <div className="details  py-3 px-4 h-52 ">
                                    {/* Title Placeholder h6 */}
                                    <div className="h-8 w-5/12  bg-gray-300 rounded" />

                                    {/* Description Placeholder p */}
                                    <div className="pt-4 space-y-2">
                                        <div className="h-5 bg-gray-300 rounded" />
                                        <div className="h-5  bg-gray-300 rounded" />
                                        <div className="h-5  bg-gray-300 rounded" />
                                    </div>


                                    {/* Button Placeholder */}
                                    <div className="h-10 w-1/3  mt-3 bg-gray-300 rounded" />
                                </div>

                            </div>
                        ))}
                    </div>
                )
            }

        </section>
    )
}

export default Project