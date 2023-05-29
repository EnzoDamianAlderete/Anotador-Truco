import Image from 'next/image';
import { useContext } from 'react';
import { AnotadorContext } from '@/context/AppContext';

export  function FosforoComponentEllos(){

    const {pointsEllos} = useContext(AnotadorContext);


    return(
        <div className='drop-shadow-md'>
            {pointsEllos ? <Image
            src={`/fosforos/fosforos-${pointsEllos}.png`}
            width={60}
            height={60}
            alt="fosforo"
            /> : ""}
        </div>
    )
}

