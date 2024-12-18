import React from 'react'
import Yonlendirmeler from './Yonlendirmeler.jsx'

function Content() {
    return (
        <div className="container-fluid " style={{ paddingBottom: '5rem', paddingLeft: '2rem', paddingTop: '6rem', paddingRight: '2rem' }}>


            <div className='  flex-column justify-content-center align-items-center' style={{ height: '100vh', width: '100%' }}>

                <Yonlendirmeler />
            </div>
        </div>
    )
}

export default Content