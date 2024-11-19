import { LucideMapPinHouse, Mail, Phone } from "lucide-react";

import { 
    googleMapAddress,
    hotlineNumber,
    infraLeadNumber,
    softwareLeadNumber,
    contactEmail,
    currentAddress
} from '@/assets/index'

const ContactPage = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div style={{'width':'1280px','height': '600px'}} className="flex flex-row p-5">
                <div className="basis-3/4">
                    <iframe 
                    className="w-full h-full" 
                    src={googleMapAddress.src}
                    loading="lazy"></iframe>
                </div>
                <div className="flex flex-col p-5 justify-center text-saffron">
                    <h3 className=" mb-3 text-xl font-bold">
                        Contact Details
                    </h3>
                    <div className=" p-2 flex flex-row gap-3">
                        <Phone className=" h-5"></Phone>
                        <p className="text-md text-black">{hotlineNumber.number} [{hotlineNumber.title}]</p>
                    </div>
                    <div className=" p-2 flex flex-row gap-3">
                        <Phone className=" h-5"></Phone>
                        <p className="text-md text-black">{infraLeadNumber.number} [{infraLeadNumber.title}]</p>
                    </div>
                    <div className=" p-2 flex flex-row gap-3">
                        <Phone className=" h-5"></Phone>
                        <p className="text-md text-black">{softwareLeadNumber.number} [{softwareLeadNumber.title}]</p>
                    </div>
                    <div className=" p-2 flex flex-row gap-3">
                        <Mail className=" h-5"></Mail>
                        <p className="text-md text-black">{contactEmail.email}</p>
                    </div>
                    <div className=" p-2 flex flex-row gap-3">
                        <LucideMapPinHouse className=" h-5"></LucideMapPinHouse>
                        <div className="flex flex-col">
                            <p className="text-md text-black">{currentAddress.part1}</p>
                            <p className="text-md text-black">{currentAddress.part2}</p>
                            <p className="text-md text-black">{currentAddress.part3}</p>
                            <p className="text-md text-black">{currentAddress.part4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;