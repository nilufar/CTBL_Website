import styles from './bannerTop.module.css';

const BannerTop = () => {
    return (
        <div className={`${styles.responsive_container} w-full bg-blue-sapphire flex justify-center`}>
           <div className={`${styles.text_box} flex flex-row items-start justify-top align-middle`}>
                <div className='flex-1 flex flex-col items-start justify-top align-middle'>
                    <div className="p-2">
                        <h1 className=" text-white">
                            What we do best
                        </h1>
                    </div>
                    <div className="p-2">
                        <h1 className=" text-4xl text-white">
                            <p>Time has been witness to our commitment to excellence</p> 
                        </h1>
                    </div>
                    <div className="p-2">
                        <h1 className=" text-white">
                            <p>CTBL Business Solution is one of the leading software companies in Bangladesh. We are currently dominating the market with our efficient softwares.</p>
                        </h1>
                    </div>
                    <div className="p-2">
                        <h1 className=" text-white">
                            <p>We have customizable software for any kind of factory need. ERP system, X Factor HR, and Canvas X are three major software that can meet up your expectations. That software is very efficient and reliable</p>
                        </h1>
                    </div>
                </div>
                <div className='flex-1'>

                </div>
           </div>
        </div>
    );
}

export default BannerTop;