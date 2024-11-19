import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div 
                className="flex flex-col gap-5 p-5"
                style={{width: '1280px'}}
            >
                <div className=" flex flex-row gap-5 justify-between items-center bg-ghost-white py-5">
                    <div className="flex-1 flex flex-col gap-3">
                        <p className="text-sm font-semibold text-true-blue">Company Profile</p>
                        <h1 className="text-3xl font-bold p-3">Continental Technologies BD Limited</h1>
                        <p>
                            Continental Technologies (BD) Limited (CTBL) is one of the software-based service providers in Bangladesh. It is formed in 2020 after experiencing 17 years.  Stared with 5 members, gradually in 2023 it becomes 11 and now we are manpower of 18 people with three management persons. We understand variety of industries along with their requirements too.  We provide effective and efficient services to satisfy our customers services.
                        </p>
                        <p>
                            Our products are Customized ERP, online order, CTBL Payroll, CTBL ERP, Audit app. It is a software-based company located in Sanarpar, Narayanganj, Dhaka. Though it is a software-based company, we provide hardware services too. 
                        </p>
                        <p>
                            It is our intention to work cooperatively with you in the search for the most effective solution for your business. In this way, you will be able to concentrate on developing your business without having to worry that the fails or ineffective IT support will be a roadblock.
                        </p>       
                    </div>
                    <div className="flex-1">
                        <div 
                        style={{
                            width: "635px",
                            height: "420px",
                            position: 'relative'
                        }}>
                            <Image
                            src={'/company-image.jpg'}
                            alt='Company Image'
                            fill></Image>
                        </div>
                    </div>
                </div>
                
                <div className="flex-1 flex flex-row gap-10 justify-center items-center">
                    <div className="flex-1">
                        <h1 className=" text-3xl font-bold">Mission</h1>
                        <ul className="list-disc list-outside">
                            <li>To enrich our business by providing high quality 24/7 support</li>
                            <li>Maximize the satisfaction level of customer services</li>
                            <li>Enhancing digital as well as online security</li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <h1 className=" text-3xl font-bold">Vision</h1>
                        <ul className="list-disc list-outside">
                            <li>Provide unique solutions</li>
                            <li>Ensuring proper quality </li>
                            <li>Commitment to client success</li>
                        </ul>
                    </div>
                </div>

                <div className="flex-1 flex flex-row gap-10 justify-center items-center">
                    <div className="flex-1">
                        <h1 className=" text-3xl font-bold">Objective</h1>
                        <ul className="list-disc list-outside">
                            <li>To be able to service all sectors with a world class
                            accessories facility.</li>
                            <li>To continually increase levels of customer satisfaction
                            though service, quality and competitiveness.</li>
                            <li>To protect the environment using the Companys
                            resources and those of outside agencies as
                            appropriate.</li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <h1 className=" text-3xl font-bold">Strength</h1>
                        <ul className="list-disc list-outside">
                            <li>Competitive pricing</li>
                            <li>Timely project completion </li>
                            <li>Ongoing support and assistance </li> 
                        </ul>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center font-bold text-4xl m-5 text-true-blue">
                    Management Team
                </div>

                <div className="flex-1 flex flex-col justify-center items-center m-5">
                    <div>
                        <div className='relative' style={{
                            width : "250px",
                            height: "290px"
                        }}>
                            <Image src='/md-1.png' alt='MD-1' fill></Image>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <p className='text-xl font-bold'>Jahangir Saiful Islam</p>
                        <p>Managing Director</p>
                    </div>
                </div>

                <div className="flex-1 flex flex-row justify-center items-center m-5">
                    <div>
                        <div className="m-5">
                            <div className='relative' style={{
                                width : "250px",
                                height: "290px"
                            }}>
                                <Image src='/md-3.png' alt='MD-1' fill></Image>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                            <p className='text-xl font-bold'>Nomayer Islam Taru</p>
                            <p>Director</p>
                        </div>
                    </div>
                    <div>
                        <div className="m-5">
                            <div className='relative' style={{
                                width : "250px",
                                height: "290px"
                            }}>
                                <Image src='/md-2.png' alt='MD-1' fill></Image>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                            <p className='text-xl font-bold'>Zahidul Islam</p>
                            <p>Director</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center m-5">
                    <div>
                        <div className='relative' style={{
                            width : "250px",
                            height: "290px"
                        }}>
                            <Image src='/Randeep.jpg' alt='MD-1' fill></Image>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <p className='text-xl font-bold'>Randeep Singh</p>
                        <p>Chief Executive Officer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;