import React from 'react'
import PosterCard from './PosterCard'
import "./index.css"
import PickUpForm from '../../templates/pickUpForm'
import InfoCard from '../../templates/infoCard'

export const Home = () => {
    const infoList = [
        {
            title: "Transportation",
            points: [
                "Transportation by road should be in fully closed hard walled secured trucks, equipped with a mobile phone and an internal strapping system.  A supply of clean PU Foam, bubble wrap and acid free tissue should be carried.",
                "The cargo area of the truck should be clean and free of any loose objects/particles.",
                "Works should be crated for transportation, as per Museum specifications.",
                "Crates should be strapped or wedged so that they cannot move about when in transit.",
                "There should be a minimum of two UAPL staff  with the works in transit, at all times, other than when the shipments are on board vessel or on the aircraft or accompanied by a courier designated by the lender/Museum/Art Gallery/Organiser.",
                "Loading/Unloading of works into the trucks in strong wind or rain is to be avoided, unless required in an emergency."
            ]
        },
        {
            title: "Airport Supervision",
            points: [
                "To handle successful fine art consignment is to have maximum control on the consignment starting from packing, handling, transportation and handover to airlines.",
                "The key is to go one step more and oversee the handling at airport, witnessing the palletizing / de-palletizing of the consignment.",
                "Permissions for overseeing the handling at airport can be obtained at the time of filing the documents at Customs (depending on the security situation at each city).",
                "Professional Art handlers for examination & x-ray handling of crates."
            ]
        }
    ]
    return (
        <div className='d-flex justify-content-between flex-wrap'>
            <div>
                <PosterCard />
                <div className='d-flex flex-wrap gap-1 px-1'>
                    {infoList.map(io => <InfoCard {...io} />)}
                </div>
            </div>
            <div className='pickUpForm-container'>
                <PickUpForm />
            </div>
        </div>
    )
}
