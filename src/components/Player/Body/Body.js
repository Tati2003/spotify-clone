import React from 'react';
import "./Body.css";
import Header from './Header/Header';

function Body({ spotify }) {
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className='body_info'>
                <img
                    src='https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/iG67DMPYE_s0jM8BFswFwQcg3Jnn7KroRSku10NyXMCLLZkAUsh2bTKY44fpWXThJwXCDPylDI_IjDsgHkdtfadls8d_gke0LG3moPrU92U5uvPcNMmS_J69Mjxv91zlNG7PJ5gfkxIvS3WvRUfS32uk1UM_3S11KVr9-nK2hzSf2LbPPnD80Bm36eBl5yhfIJExJvyyVLjh_iDRy-hngQ==/NjE6NDM6MDFUMDItNjAtMw=='
                    alt=''
                />
                <div className='body_infoText'>
                    <strong>
                        PLAYLIST
                    </strong>
                    <h2>
                        Discover Weekly
                    </h2>
                    <p>
                        description...
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Body