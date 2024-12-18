import React from 'react';
import { Table, InputGroup, FormControl, Button } from 'react-bootstrap';

const KontakAcildiKapandi = () => {
    return (
        <div>


            <div className="d-flex flex-column justify-content-center align-items-center" >

                <div className="row">
                    <div className="col-12" style={{ borderRight: '0px solid #D7D4D4', width: '100%' }}>
                        <div className="querydiv">
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">
                                    <i className="bi bi-search"></i>
                                </InputGroup.Text>
                                <FormControl
                                    placeholder="Cihaz/Device"
                                    aria-label="Cihaz/Device"
                                    aria-describedby="basic-addon1"
                                    maxLength="10"
                                />
                            </InputGroup>
                            <div style={{ width: '600px' }}>
                                <Button variant="primary" aria-label="Kontak Alarmları/Ignition Alarm" >
                                    Kontak Alarmları/Ignition Alarm
                                </Button>
                            </div>
                        </div>
                        <div id="grid" className="mt-4">
                            <div className="table table-striped table-hover d-flex " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

                                <tbody >
                                    <tr >
                                        <th className="bg bg-secondary text-light" >
                                            <td style={{ border: 'none' }}>Cihaz/Device</td>
                                            <td style={{ border: 'none' }}>Paket Tipi/Package Type</td>
                                            <td style={{ border: 'none' }}>Tarih/Date</td>
                                        </th>
                                    </tr>


                                    <tr>
                                        <td colSpan="3" className="text-center">
                                            No data
                                        </td>

                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="text-center">
                                            No data
                                        </td>

                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="text-center">
                                            No data
                                        </td>

                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="text-center">
                                            No data
                                        </td>

                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="text-center">
                                            No data
                                        </td>

                                    </tr>
                                </tbody>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default KontakAcildiKapandi;
