import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

const CihazHattiSorgulama = () => {
    const [deviceNo, setDeviceNo] = useState('');

    const handleDeviceNoChange = (e) => {
        setDeviceNo(e.target.value);
    };

    const handleQueryClick = () => {
        alert(`IMSI: ${deviceNo}`);
    };

    return (
        <div>




            <divvv className="container-fluid bg-light" style={{}}>
                <div className="row" style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <div className="col-1">
                        <b style={{ marginTop: '1rem' }}>IMSI :</b>
                    </div>
                    <Form.Control
                        type="text"
                        value={deviceNo}
                        onChange={handleDeviceNoChange}
                        placeholder="IMSI giriniz"
                        style={{ width: '400px' }}
                    />
                </div>
                <div className="row" style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <div className="col-1" >
                        <button variant="primary" onClick={handleQueryClick} id="btnQuery" className="bttn1" style={{ width: '200px' }}>
                            Sorgula
                        </button>

                    </div>

                </div>







            </divvv>
        </div>

    );
};

export default CihazHattiSorgulama;
