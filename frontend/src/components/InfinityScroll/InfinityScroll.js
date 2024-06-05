import './InfinityScroll.css'
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

import BankOfAmerica from '../../resources/bank/BankOfAmerica.png';
import BankOfChina from '../../resources/bank/BankOfChina.png';
import HSBC from '../../resources/bank/HSBC.png';
import JPMorgan1 from '../../resources/bank/JPMorgan.png';

const InfinityScroll = () => {

    const banks = [
        BankOfAmerica,
        BankOfChina,
        HSBC,
        JPMorgan1,
        BankOfChina,
        HSBC
        
      ];
      

  return (
    // <div className='wrapper'>
    //     <h2 className='text'>With Great Outcomes.</h2>
    //     <h2 className='note'>Our customers have gotten offers from awesome companies.</h2>
    //     <div className='marquee'>
    //       <div className='marqueeGroup'>
    //         {banks.map((bank) => (
    //           <div className='imgGroup'>
    //             <img className='img' src={bank} />
    //           </div>
    //         ))}
    //       </div>
          
    //     </div>
    // </div>
    <div className="containor">
        <Marquee fade={true}>
            {banks.map((bank) => (
                <div className='imgGroup'>
                    <img className='img' src={bank} />
                </div>
                ))}
        </Marquee>
    </div>
  )
}

export default InfinityScroll