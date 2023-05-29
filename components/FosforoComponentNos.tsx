import Image from 'next/image';
import { useContext } from 'react';
import { AnotadorContext } from '@/context/AppContext';

export  function FosforoComponentNos(){

    const {pointsNos} = useContext(AnotadorContext);


    return(
        <div className='drop-shadow-md'>
            {pointsNos ? <Image
            src={`/fosforos/fosforos-${pointsNos}.png`}
            width={60}
            height={60}
            alt="fosforo"
            />: <div></div> }
            
        </div>
    )
}

