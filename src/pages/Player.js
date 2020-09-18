import React, { Component } from 'react';
import Cd from '../assets/compact-disc-solid.svg'


class Player extends Component {
    render() {
        return (
            <div className="col" style={{textAlign:'center', minHeight:"550px"}}>
                {/* <div className="col" style={{padding:'30px', borderRadius:'50%', backgroundColor:'tomato'}}> */}
                    <div style={{  borderRadius:'50%', margin:'0'}}>
                            <img className="rotate" src={Cd} width='400' height='400'/>
                    </div>
                    <div className= "col-6 artist-box">
                        <div className='col'>
                            <span>Nirvana</span>
                        </div>
                        <div className='col'>
                            <span>Smells like teen spirit</span>
                        </div>
                    </div>
                </div>
            // </div>
        );
    }
}

export default Player;