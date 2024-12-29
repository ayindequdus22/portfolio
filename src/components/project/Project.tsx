import React from 'react'
import { Link } from 'react-router-dom'
import acars from "../../assets/a-cars.png"
import carvan from "../../assets/carvan.png"
import belle from "../../assets/belle.png"
import ng_restaurant from "../../assets/ng-restaurant.png"
import nike from "../../assets/nike.png"
import portfolio from "../../assets/portfolio.png"
import fPortfolio from "../../assets/f-portfolio.png"
import e_store from "../../assets/e-store.png"
import useMyQuery, { ProjectsResponseType } from '../../useQuery'

const Project = (): React.JSX.Element => {

    const { data } = useMyQuery<ProjectsResponseType>("/projects/");

    const projects: { img: string, heading: string, link: string, details: string }[] = [

        {
            img: acars,
            heading: 'A-cars',
            link: 'https://a-cars.vercel.app/',
            details: "Developed a full-stack car browsing app with cart, wishlist, and JWT authentication. Optimized performance and UX using Tanstack Query and React Hook Form."
        },
        {
            img: belle,
            heading: 'Belle',
            link: 'https://belle-gold.vercel.app/',
            details: 'Built a responsive fashion eCommerce site with React, Redux Toolkit, and pagination, featuring persistent cart for a seamless shopping experience.'
        },
        {
            img: ng_restaurant,
            heading: 'Ng-Restaurant',
            link: 'https://anteqs-ng-restaurant.netlify.app/',
            details: 'Built a visually appealing restaurant app with Angular, TypeScript, and CSS, featuring smooth animations and optimized images for improved performance.'
        },
        {
            img: carvan,
            heading: 'Carvan',
            link: 'https://anteqs-carvan.netlify.app/',
            details: 'Developed a car website using HTML, CSS, and jQuery, featuring Google Maps integration, filtering options, and smooth animations.'
        },
        {
            img: portfolio,
            heading: 'Portfolio',
            link: 'https://anteqs-portfolio.vercel.app/',
            details: "A collection of projects highlighting front-end and full-stack development with React, Angular, Node.js, and more, featuring dynamic, responsive, and optimized web applications."
        },
        {
            img: nike,
            heading: 'Nike Store',
            link: 'https://nike-store-seven-self.vercel.app/',
            details: "Built a dynamic Nike shoe website with React, featuring glass morphism, fade effects, and interactive animations, ensuring a responsive and engaging user experience."
        },

        {
            img: fPortfolio,
            heading: 'Former Portfolio',
            link: 'https://anteqs-portfolio.netlify.app/',
            details: "One of my first projects may not have been perfect, but it shows how far I’ve come and reflects my growth as a software developer."
        }, {
            details: "Designed a visually appealing website using HTML, CSS, and JavaScript, featuring scroll animations and Google Maps integration.",
            img: e_store,
            heading: 'E-store',
            link: 'https://anteqs-ecommerce.netlify.app/'
        }







    ]
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