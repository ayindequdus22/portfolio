import React from 'react'

const Experience = (): React.JSX.Element => {
  const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Nomad Technologies",
    type: "Full Time",
    duration: "Jun 2025 - Aug 2025",
    responsibilities: [
      "Collaborated with product designers and fellow developers to build and maintain core web applications supporting microfinance operations",
      "Leveraged React, TypeScript, and Tailwind CSS to deliver scalable, maintainable frontend architecture",
      "Contributed to performance optimization and UI standardization across multiple banking-related app components, improving user experience and operational efficiency"
    ]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Lightway MFB",
    type: "Contract",
    duration: "Aug 2025",
    responsibilities: [
      "Collaborated with a cross-functional team of designers and developers to build secure, user-friendly financial interfaces tailored to microbanking operations",
      "Utilized TanStack Query to manage money transfers and transaction requests with real-time data synchronization",
      "Implemented React Hook Form for robust input validation across sensitive financial forms",
      "Applied hashing techniques to safeguard transactional details, reinforcing data privacy and platform security"
    ]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "EliteOceanic",
    type: "Contract",
    duration: "Oct 2024 - Nov 2024",
    responsibilities: [
      "Styled the app with Tailwind CSS and implemented GSAP animations for smooth transitions",
      "Designed and implemented scalable frontend architecture, improving code maintainability and team efficiency",
      "Optimized rendering performance, reduced load time through code-splitting and lazy loading",
    ]
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "ADC Hackathon 2025 – Split-The-Cost",
    type: "Hackathon",
    duration: "Mar 2025 - May 2025",
    responsibilities: [
      "Designed a sleek expense-tracking app using React, TypeScript, React Router DOM, TanStack Query, and React Hook Form",
      "Built theme toggling (light/dark/system) using React Context and Tailwind CSS",
      "Implemented pop-ups for adding and tracking expenses in real time",
      "Developed a breakdown system to easily show users who owes what and how to settle"
    ]
  },
  {
    id: 5,
    title: "Backend Developer (Contract)",
    company: "Menubars",
    type: "Contract",
    duration: "2025",
    responsibilities: [
      "Implemented secure authentication (JWT & OAuth) and role-based access control for different user types (Admin, Sellers, Customers, Drivers)",
      "Enhanced security by introducing two-factor authentication (2FA), allowing users to receive OTPs via SMS (Twilio) or email (Nodemailer)",
      "Integrated rate-limiting to prevent API abuse and ensure system stability when there is high traffic",
      "Utilized MongoDB for flexible data storage and PostgreSQL for structured transactional data, ensuring optimal performance for different use cases"
    ]
  }
];

    return (
        <section className="pt-28 px-40 max-mdLap:px-20 max-tab:px-12 max-mdPhone:px-4">
            <h1 className="text-2xl font-semibold mb-3">Professional Journey</h1>

            <div className="relative flex flex-col gap-6 border-l-2 border-[rgb(32,32,34)] mb-2">
                {experiences.map((v, i) => (
                    <div key={i} className="relative ml-6">
                        {/* timeline dot */}
                        <div className="absolute left-[-2.3rem] w-6 h-6 bg-primary rounded-full border-4 border-white/50"></div>

                        <div className="bg-[rgb(32,32,34)] p-6 rounded-lg">
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold">{v.title}</h2>
                                <p className="text-[rgb(214,214,214)]">{v.duration}</p>
                            </div>

                            <div className="flex gap-2 mt-1">
                                <p className="text-primary">{v.company}</p>
                                <span className="bg-primary place-self-center bg-opacity-20 text-primary rounded-lg px-2 text-sm">
                                    {v.type}
                                </span>
                            </div>

                            <ol className="pt-4 space-y-1.5">
                                {v.responsibilities.map((resp, j) => (
                                    <li key={j} className="flex items-start">
                                        <span className="mr-2 mt-1 h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0"></span>
                                        <p className="text-sm">{resp}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                ))}
            </div>
        </section>


    )
}

export default Experience