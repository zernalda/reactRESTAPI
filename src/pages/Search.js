import React, { Component } from 'react';
import Nirvana from '../assets/nirvana.png'

class Search extends Component {

    state = {
        data: ''
      }

    componentDidMount() {
        fetch('http://demo2948679.mockable.io/')
        .then(response => response.json())
        .then(res => 
            this.setState({
              data: res.project
            //   data: ''
            })
          )
    }
    
    render() {
        const {data} = this.state;
        console.log("data ini isi state pro: " + JSON.stringify(data));
        return (
            <div className="col" style={{ minHeight:"550px", margin:"5px 0"}}>
                <div className="col" style={{}}>
                    <input style={{minWidth:'100%', borderRadius:'20px'}} placeholder="Input artist, song, or playlist" />
                </div>

                {/* list */}
                {data ?
                    data.slice(0,3).map(datas => {
                        const {id,desc, status} = datas
                        return (

                            <div className="container col-10" style={{marginTop:'10px'}}>
                                <div className="row" style={{ marginTop:'10px'}}>
                                    <div className="col-3" style={{padding:'20px'}}>
                                        <div style={{}}>
                                            <img height="50px" width="50px" src={Nirvana} />
                                        </div>
                                    </div>
                                    <div className="col-9" style={{padding:'20px'}}>
                                        <div style={{margin:'1'}}>{id}</div>
                                        <div style={{margin:'1'}}>{desc}</div>
                                        <div style={{margin:'1'}}>{status}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    :
                    <div>
                        <h2>Pick up your Artist / song</h2>
                    </div>
                    }
                <div className="queue-style">
                    {data? 
                        <button className='btn-danger' style={{borderRadius:'20px'}}>queue</button>
                        : null
                    }
                </div>
            </div>
           
        );
    }
}


export default Search;