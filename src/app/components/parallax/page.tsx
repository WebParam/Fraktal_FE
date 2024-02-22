'use client';
import '../parallax/parallax.css';

import { Parallax } from 'react-scroll-parallax';

export default function Parallaxx() {
  return (
<Parallax speed={5} scale={[0.5, 1.2]}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center',   width: '100%', height: '400px', backgroundColor: '#f7faf9'}}>

         

          <div style={{fontSize: '2rem'}}>I am a...</div>

           <div className='button-container'>
              <a href='./fraktional-gig' className="button-1">
                      Developer looking for a gig
                </a>
                <a href='./fraktional-dev' className="button-1">
                      Business looking for a developer
                </a>
           </div>

                   

      </div>
    </Parallax>
  );
}