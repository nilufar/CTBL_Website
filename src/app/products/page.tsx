import Image from 'next/image';
import styles from './products.module.css';

const page = () => {
    return (
        <div className="flex flex-col">
            {/* Product - 1 */}
            <div className="min-w-full flex justify-center items-center my-10">
                <div className={`${styles.responsive_container} flex flex-col justify-center items-center`}>
                    <div className='min-w-full flex justify-center items-center'>
                        <h1 className=' text-2xl font-extrabold text-true-blue my-5'>
                            HRM Payroll
                        </h1>
                    </div>
                    <div className='min-w-full flex justify-center items-center text-center mb-10'>
                        <p className=' font-light'>
                            Apsis solutions ERP supports integration in all angles of the production processes. This production management will help you to plan, organize and control the processes the way you want your business to be scaled. This production management system minimizes the cost at every step of your production, helps in planning and analyzing your production lifecycle and gives you the full insights into your business.
                        </p>
                    </div>
                    <div className="flex flex-row min-w-full justify-center items-center">
                        <div className="flex-1">
                            <h1 className=' text-xl font-bold text-true-blue'>
                                Features
                            </h1>
                            <div className='flex justify-center items-center'>
                                {/* <ul className=' list-disc'>
                                    <li>
                                        Centralize all product information in one place
                                    </li>
                                    <li>
                                        Plan and analyze your production lifecycle
                                    </li>
                                    <li>
                                        Distribute product data across multiple channels
                                    </li>
                                </ul> */}
                                <ul className='list-disc'>
                                    <li>
                                        Facial  Recognition Attendance With IP cameras crowd <br></br>detection  and any   smart  devices compatibility to<br></br> ensure within designated location like geo  <br></br>fencing system.

                                    </li>
                                    <li>
                                        Streamlines for hiring process by managing job posting, <br></br> candidate tracking,  interviews and onboarding new <br></br> employee.
                                    </li>
                                    <li>
                                        Leaning and development (L&D).
                                    </li>
                                    <li>
                                        Employee Transport & logistics Management.
                                    </li>
                                    <li>
                                        Integration for  other business system of accounts  for payrolls.
                                    </li>
                                    <li>
                                        Employer Branding highlighting company culture, values, <br></br> employee benefits.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className='relative' style={{ width: 540, height: 350 }}>
                                <Image
                                    src={'/product-1.jpg'}
                                    alt='product-image-1'
                                    fill
                                >
                                </Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product - 2 */}
            <div className="min-w-full flex justify-center items-center my-10 bg-white-smoke">
                <div className={`${styles.responsive_container} flex flex-col justify-center items-center`}>
                    <div className='min-w-full flex justify-center items-center'>
                        <h1 className=' text-2xl font-extrabold text-true-blue my-5'>
                            Maintenance Module
                        </h1>
                    </div>
                    <div className='min-w-full flex justify-center items-center text-center mb-10'>
                        <p className=' font-light'>
                            Inventory management delivers one of the most robust, scalable, pliable, and rigid solutions for store execution. This system traces the inventory from production or manufacturers to warehouses and from these facilities to the point of scale. By using inventory management of ERP systems your inventory will automatically be integrated with all aspects of your operation from planning through operations, production, and accounting to customized reports and dynamic delegation. Inventory management of ERP systems keeps track of sales, purchasing, and logistics for you to have the right inventory levels to match your business needs.
                        </p>
                    </div>
                    <div className="flex flex-row min-w-full justify-center items-center mb-5">
                        <div className="flex-1">
                            <div className='relative' style={{ width: 540, height: 350 }}>
                                <Image
                                    src={'/product-2.jpg'}
                                    alt='product-image-1'
                                    fill
                                >
                                </Image>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h1 className=' text-xl font-bold text-true-blue'>
                                Features
                            </h1>
                            <div className='flex justify-center items-center'>
                                <ul className=' list-disc'>
                                    <li>
                                        Preventive Maintenance Scheduling.
                                    </li>
                                    <li>
                                        Real Time Monitoring.
                                    </li>
                                    <li>
                                        Down-time & Up-time Tracking based on the spot <br></br>tracking Barcode enabled with handy device app.
                                    </li>
                                    <li>
                                        Self Service portal  & Mobile app.
                                    </li>
                                    <li>
                                        Integration for  other business system of <br></br>spare parts  of inventory like  stock level, <br></br>Order Points and maintenance cost for accounts.
                                    </li>
                                    <li>
                                        Employer Branding highlighting company culture, <br></br>values, employee benefits.
                                    </li>
                                    <li>
                                        Machines vs Production efficiency
                                    </li>
                                    <li>
                                        Regularity Compliance
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product - 3 */}
            <div className="min-w-full flex justify-center items-center my-10">
                <div className={`${styles.responsive_container} flex flex-col justify-center items-center`}>
                    <div className='min-w-full flex justify-center items-center'>
                        <h1 className=' text-2xl font-extrabold text-true-blue my-5'>
                            Real Estate
                        </h1>
                    </div>
                    <div className='min-w-full flex justify-center items-center text-center mb-10'>
                        <p className=' font-light'>
                            Apsis Purchase Management ERP assists to route your purchases from supplier requisition to supplier price quotations. This guides a perfect workflow of different purchase activities which further allows you to conclude quick decision making. The Purchase workflow also allows you to scrutinize the information on other parts. It lets your procurement department make the right purchasing decision through analyzing comparative statements of different vendors.
                        </p>
                    </div>
                    <div className="flex flex-row min-w-full justify-center items-center">
                        <div className="flex-1">
                            <h1 className=' text-xl font-bold text-true-blue'>
                                Features
                            </h1>
                            <div className='flex justify-center items-center'>
                                <ul className=' list-disc'>
                                    <li>
                                        Property management from land procurement with<br></br> Mouza /Biana/Survey data to settlement.
                                    </li>
                                    <li>
                                        Inventory Management.
                                    </li>
                                    <li>
                                        Plot & Flat Sales .
                                    </li>
                                    <li>
                                        Lead & CRM.
                                    </li>
                                    <li>
                                        Project, Job , Contract and Documents management.
                                    </li>
                                    <li>
                                        Marketing and integration with portal.
                                    </li>
                                    <li>
                                        Automatic SMS and mail with prospective clients
                                    </li>
                                    <li>
                                        Customizable Report for strategies decision-making
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className='relative' style={{ width: 540, height: 350 }}>
                                <Image
                                    src={'/product-3.jpg'}
                                    alt='product-image-1'
                                    fill
                                >
                                </Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product - 4 */}
            <div className="min-w-full flex justify-center items-center my-10 bg-white-smoke">
                <div className={`${styles.responsive_container} flex flex-col justify-center items-center`}>
                    <div className='min-w-full flex justify-center items-center'>
                        <h1 className=' text-2xl font-extrabold text-true-blue my-5'>
                            Financial Accounting
                        </h1>
                    </div>
                    <div className='min-w-full flex justify-center items-center text-center mb-10'>
                        <p className=' font-light'>
                            Sales Management system is designed to make your B2B sales and distribution simpler and faster. The system can manage contacts, track deals and minimize tedious administration tasks of your product distribution and customer management. It has every essential step from communicating with customers to create delivery schedule.
                        </p>
                    </div>
                    <div className="flex flex-row min-w-full justify-center items-center mb-5">
                        <div className="flex-1">
                            <div className='relative' style={{ width: 540, height: 350 }}>
                                <Image
                                    src={'/product-4.jpg'}
                                    alt='product-image-1'
                                    fill
                                >
                                </Image>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h1 className=' text-xl font-bold text-true-blue'>
                                Features
                            </h1>
                            <div className='flex justify-center items-center'>
                                <ul className=' list-disc'>
                                    <li>
                                        Drill-down ledger’s detail
                                    </li>
                                    <li>
                                        Prevision for pulling ready-made chart of <br></br>accounts from Tally accounting system.
                                    </li>
                                    <li>
                                        Generating Balance sheet, P&L a/c, Trading or <br></br>Manufacturing a/c, Cash flow and all <br></br>type of vouchers.
                                    </li>
                                    <li>
                                        Self Service portal  & Mobile app.
                                    </li>
                                    <li>
                                        Integration for  other business system of Sales , <br></br>Purchase, Inventory and Payroll,.

                                    </li>
                                    <li>
                                        Customizable dashboard for analytics  to  <br></br>monitor financial health.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product - 5 */}
            <div className="min-w-full flex justify-center items-center my-10">
                <div className={`${styles.responsive_container} flex flex-col justify-center items-center`}>
                    <div className='min-w-full flex justify-center items-center'>
                        <h1 className=' text-2xl font-extrabold text-true-blue my-5'>
                            Label Industry ERP
                        </h1>
                    </div>
                    <div className='min-w-full flex justify-center items-center text-center mb-10'>
                        <p className=' font-light'>
                            A complete suite for Label industries.
                        </p>
                    </div>
                    <div className="flex flex-row min-w-full justify-center items-center">
                        <div className="flex-1">
                            <h1 className=' text-xl font-bold text-true-blue'>
                                Features
                            </h1>
                            <div className='flex justify-center items-center'>
                                <ul className=' list-disc'>
                                    <li>
                                        Maximum step involvement of factorial functional <br></br>activities for End to End Visibilities.
                                    </li>
                                    <li>
                                        Real time analytics & Reporting.
                                    </li>
                                    <li>
                                        Interconnection of SCM,MRP and ERP.
                                    </li>
                                    <li>
                                        Complaint module for QC and Production.
                                    </li>
                                    <li>
                                        Barcode Enabled option.
                                    </li>
                                    <li>
                                        Commercial Import
                                    </li>
                                    <li>
                                        Commercial Export
                                    </li>
                                    <li>
                                        Chemical Inventory
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className='relative' style={{ width: 540, height: 350 }}>
                                <Image
                                    src={'/product-5.png'}
                                    alt='product-image-1'
                                    fill
                                >
                                </Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product - 6 */}
            <div className="min-w-full flex justify-center items-center my-10 bg-white-smoke">
                <div className={`${styles.responsive_container} flex flex-col justify-center items-center`}>
                    <div className='min-w-full flex justify-center items-center'>
                        <h1 className=' text-2xl font-extrabold text-true-blue my-5'>
                            Smart ERP
                        </h1>
                    </div>
                    <div className='min-w-full flex justify-center items-center text-center mb-10'>
                        <p className=' font-light'>
                            Our accounting system will allow your business to keep track of all types of financial transactions, including purchases (expenses), sales (invoices and income), liabilities (funding, accounts payable), etc. and is capable of generating comprehensive statistical reports that provide management or interested parties with a clear set of data to aid in the decision-making process. This automated system specifically takes care of all your finance and accounting modules.
                        </p>
                    </div>
                    <div className="flex flex-row min-w-full justify-center items-center mb-5">
                        <div className="flex-1">
                            <div className='relative' style={{ width: 540, height: 350 }}>
                                <Image
                                    src={'/product-6.png'}
                                    alt='product-image-1'
                                    fill
                                >
                                </Image>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h1 className=' text-xl font-bold text-true-blue'>
                                Features
                            </h1>
                            <div className='flex justify-center items-center'>
                                <ul className=' list-disc'>
                                    <li>
                                        Chart of accounts.
                                    </li>
                                    <li>
                                        User access management for specific ledger.
                                    </li>
                                    <li>
                                        Journal Management.
                                    </li>
                                    <li>
                                        Voucher Management (Post, Edit, delete).
                                    </li>
                                    <li>
                                        Money receipt.
                                    </li>
                                    <li>
                                        Cheque Management.
                                    </li>
                                    <li>
                                        Accounting reports.
                                    </li>
                                    <li>
                                        Customized reports.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product - 7 */}
            <div className="min-w-full flex justify-center items-center my-10">
                <div className={`${styles.responsive_container} flex flex-col justify-center items-center`}>
                    <div className='min-w-full flex justify-center items-center'>
                        <h1 className=' text-2xl font-extrabold text-true-blue my-5'>
                            Inventory Management
                        </h1>
                    </div>
                    <div className='min-w-full flex justify-center items-center text-center mb-10'>
                        <p className=' font-light'>
                            Apsis solutions ERP supports integration in all angles of the production processes. This production management will help you to plan, organize and control the processes the way you want your business to be scaled. This production management system minimizes the cost at every step of your production, helps in planning and analyzing your production lifecycle and gives you the full insights into your business.
                        </p>
                    </div>
                    <div className="flex flex-row min-w-full justify-center items-center">
                        <div className="flex-1">
                            <h1 className=' text-xl font-bold text-true-blue'>
                                Features
                            </h1>
                            <div className='flex justify-center items-center'>
                                <ul className=' list-disc'>
                                    <li>
                                        Centralize all product information in one place
                                    </li>
                                    <li>
                                        Plan and analyze your production lifecycle
                                    </li>
                                    <li>
                                        Distribute product data across multiple channels
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className='relative' style={{ width: 540, height: 350 }}>
                                <Image
                                    src={'/product-1.jpg'}
                                    alt='product-image-1'
                                    fill
                                >
                                </Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product - 8 */}
            <div className="min-w-full flex justify-center items-center mt-10 bg-white-smoke">
                <div className={`${styles.responsive_container} flex flex-col justify-center items-center`}>
                    <div className='min-w-full flex justify-center items-center'>
                        <h1 className=' text-2xl font-extrabold text-true-blue my-5'>
                            Fixed Asset Management
                        </h1>
                    </div>
                    <div className='min-w-full flex justify-center items-center text-center mb-10'>
                        <p className=' font-light'>
                            Apsis solutions ERP supports integration in all angles of the production processes. This production management will help you to plan, organize and control the processes the way you want your business to be scaled. This production management system minimizes the cost at every step of your production, helps in planning and analyzing your production lifecycle and gives you the full insights into your business.
                        </p>
                    </div>
                    <div className="flex flex-row min-w-full justify-center items-center mb-5">
                        <div className="flex-1">
                            <div className='relative' style={{ width: 540, height: 350 }}>
                                <Image
                                    src={'/product-2.jpg'}
                                    alt='product-image-1'
                                    fill
                                >
                                </Image>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h1 className=' text-xl font-bold text-true-blue'>
                                Features
                            </h1>
                            <div className='flex justify-center items-center'>
                                <ul className=' list-disc'>
                                    <li>
                                        Using Barcode/RFID/GPS Asset tracking <br></br>and monitoring
                                    </li>
                                    <li>
                                        Customizing depreciation method (Straight line/declined <br></br>balance/sum of year’s digit) to <br></br>track asset value.
                                    </li>
                                    <li>
                                        Acquisition to disposal considering Maintenance,<br></br> repairs & upgrade.
                                    </li>
                                    <li>
                                        Integration with accounts and finance.
                                    </li>
                                    <li>
                                        KPI & performance matrices dashboard related to Assets.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-w-full flex justify-center items-center my-10">
                <div className={`${styles.responsive_container} flex flex-col justify-center items-center`}>
                    <div className='min-w-full flex justify-center items-center'>
                        <h1 className=' text-2xl font-extrabold text-true-blue my-5'>
                            CTBL.POS
                        </h1>
                    </div>
                    <div className='min-w-full flex justify-center items-center text-center mb-10'>
                        <p className=' font-light'>
                            Apsis solutions ERP supports integration in all angles of the production processes. This production management will help you to plan, organize and control the processes the way you want your business to be scaled. This production management system minimizes the cost at every step of your production, helps in planning and analyzing your production lifecycle and gives you the full insights into your business.
                        </p>
                    </div>
                    <div className="flex flex-row min-w-full justify-center items-center">
                        <div className="flex-1">
                            <h1 className=' text-xl font-bold text-true-blue'>
                                Features
                            </h1>
                            <div className='flex justify-center items-center'>
                                <ul className=' list-disc'>
                                    <li>
                                        Real Time Inventory Monitoring.
                                    </li>
                                    <li>
                                        Integrated Sales and Accounting automatically <br></br>syncs sales with accounting.
                                    </li>
                                    <li>
                                        Interconnection of  Physical Inventory, <br></br> online stores and mobile app.
                                    </li>
                                    <li>
                                        Integration with payment gateway.
                                    </li>
                                    <li>
                                        Notification for stock  leveling status.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className='relative' style={{ width: 540, height: 350 }}>
                                <Image
                                    src={'/product-1.jpg'}
                                    alt='product-image-1'
                                    fill
                                >
                                </Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default page;