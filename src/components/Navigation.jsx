import { Link } from 'react-router-dom';
import { Corvette } from './Corvette';
import { HondaNSX } from './HondaNSX';
import { KoegniseggCCX } from './KoegniseggCCX';
import { MclarenF1gtr } from './MclarenF1gtr';
import { PaganiUtopia } from './PaganiUtopia';
import { RimacNevera } from './RimacNevera';


export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
        <Link to='/chevrolet_corvette_c8' className='links'>
            <figure className='thumbnail-image-size'>
                <Corvette />
                <figcaption>Corvette C8</figcaption>    
            </figure>        
        </Link>
        <Link to='/honda_nsx' className='links'>
            <figure className='thumbnail-image-size'>
                <HondaNSX />
                <figcaption>Honda NSX</figcaption>    
            </figure>        
        </Link>
        <Link to='/koegnisegg_ccx' className='links'>
            <figure className='thumbnail-image-size'>
                <KoegniseggCCX />
                <figcaption>Koegnisegg CCX</figcaption>    
            </figure>        
        </Link>
        <Link to='/mclaren_f1gtr' className='links'>
            <figure className='thumbnail-image-size'>
                <MclarenF1gtr />
                <figcaption>McLaren F1 GTR</figcaption>    
            </figure>        
        </Link>
        <Link to='/pagani_utopia' className='links'>
            <figure className='thumbnail-image-size'>
                <PaganiUtopia />
                <figcaption>Pagani Utopia</figcaption>    
            </figure>        
        </Link>
        <Link to='/rimac_nevera' className='links'>
            <figure className='thumbnail-image-size'>
                <RimacNevera />
                <figcaption>Rimac Nevera</figcaption>    
            </figure>        
        </Link>
    </div>
  )
}
