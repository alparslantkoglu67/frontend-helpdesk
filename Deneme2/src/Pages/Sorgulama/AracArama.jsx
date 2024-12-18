import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

const AracArama = () => {
    const [plaka, setPlaka] = useState('06cal06');
    const data = [
        { serverName: 'Server1', userGroup: 'Admin', deviceNo: '12345', plate: '06cal06', driver: 'Ercan Kalın', recordDate: '2024-11-03' },
        { serverName: 'Server2', userGroup: 'User', deviceNo: '67890', plate: '34abc34', driver: 'Ayşe Ölmez', recordDate: '2024-11-02' },
        { serverName: 'Server2', userGroup: 'User', deviceNo: '67890', plate: '34abc34', driver: 'Ayşe Ölmez', recordDate: '2024-11-02' },
        { serverName: 'Server2', userGroup: 'User', deviceNo: '67890', plate: '34abc34', driver: 'Ayşe Ölmezsssssssssssssssssssssssssssssssssssssssss', recordDate: '2024-11-02' },
        { serverName: 'Server2', userGroup: 'User', deviceNo: '67890', plate: '34abc34', driver: 'Ayşe Ölmez', recordDate: '2024-11-02' },
        { serverName: 'Server2', userGroup: 'User', deviceNo: '67890', plate: '34abc34', driver: 'Ayşe Ölmez', recordDate: '2024-11-02' },

        // Diğer veri satırlarını buraya ekleyebilirsiniz
    ];

    const handlePlakaChange = (e) => {
        setPlaka(e.target.value);
    };

    const handleShowClick = () => {
        alert(`Plaka: ${plaka}`);
    };

    return (
        <div>


            <div className="d-flex flex-column justify-content-center align-items-center">

                {/* Plaka Arama Formu */}
                < Table className="text-center d-flex align-items-start justify-content-center " style={{ width: '900px', background: 'white' }}>
                    <tbody >
                        <tr >


                            <td style={{ border: 'none' }}><div style={{ marginTop: '2rem', fontFamily: 'monospace', border: 'none' }}> Plaka :</div>
                            </td>

                            <td style={{ border: 'none' }}>
                                <Form.Control
                                    type="text"
                                    value={plaka}
                                    onChange={handlePlakaChange}
                                    placeholder="Plaka giriniz"
                                    style={{ marginTop: '1.5rem', width: '200px' }}
                                />
                            </td>
                            <td style={{ border: 'none' }}>
                                <Button
                                    variant="primary"
                                    onClick={handleShowClick}
                                    style={{ width: '200px' }}
                                >
                                    Göster
                                </Button>
                            </td>


                        </tr>

                    </tbody>
                </Table >

                {/* Tablo Başlıkları */}
                < div className="group-panel text-center mt-4" >
                    <hr />
                </div >

                {/* Veriler */}
                <div className="table table-striped table-hover d-flex " style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', }}>
                    <tbody className='text-center'>

                        <tr >

                            <th className="bg-secondary text-light" style={{ border: 'none' }}>Sunucu Adı</th>
                            <th className="bg-secondary text-light" style={{ border: 'none' }}>Kullanıcı Grubu</th>
                            <th className="bg-secondary text-light" style={{ border: 'none' }}>Cihaz No</th>
                            <th className="bg-secondary text-light" style={{ border: 'none' }}>Plaka</th>
                            <th className="bg-secondary text-light" style={{ border: 'none' }}>Sürücü</th>
                            <th className="bg-secondary text-light" style={{ border: 'none' }}>Kayıt Tarihi</th>

                        </tr>








                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.serverName}</td>
                                <td>{row.userGroup}</td>
                                <td>{row.deviceNo}</td>
                                <td>{row.plate}</td>
                                <td>{row.driver}</td>
                                <td>{row.recordDate}</td>
                            </tr>
                        ))}
                    </tbody>



                </div >
            </div >
        </div >
    );
};

export default AracArama;
