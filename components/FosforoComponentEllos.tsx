import Image from 'next/image';
import { useContext } from 'react';
import { AnotadorContext } from '@/context/AppContext';

export  function FosforoComponentEllos(){

    const {pointsEllos , pointsNos} = useContext(AnotadorContext);


    return(
        <div>
            <Image
            src={`/fosforos/fosforos-${pointsEllos}.png`}
            width={120}
            height={120}
            alt="fosforo"
            />
        </div>
    )
}

