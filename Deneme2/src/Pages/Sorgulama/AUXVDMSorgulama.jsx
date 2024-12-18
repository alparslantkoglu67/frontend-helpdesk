import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';

const AUXVDMSorgulama = () => {
    const [deviceNo, setDeviceNo] = useState('test103');
    const [loading, setLoading] = useState(false);
    const [auxVdmInfo, setAuxVdmInfo] = useState({
        device: '',
        auxVdm: '',
    });

    const handleQueryClick = () => {
        setLoading(true);
        // Simulate an API call
        setTimeout(() => {
            setAuxVdmInfo({
                device: 'Cihaz 123',
                auxVdm: 'AUX-VDM Verisi',
            });
            setLoading(false);
        }, 2000); // 2 saniye sonra sonuç gösteriliyor
    };

    return (
        <div>


            <div className="d-flex flex-column justify-content-start align-items-center" style={{ justifyContent: 'center', width: '100%' }}>

                <div style={{ width: '60%', }}>
                    <Form>
                        {/* Cihaz No Sorgulama Formu */}
                        <Form.Group controlId="TextDeviceNo">
                            <Form.Label>Cihaz No</Form.Label>
                            <Form.Control
                                type="text"
                                value={deviceNo}
                                onChange={(e) => setDeviceNo(e.target.value)}
                                placeholder="Cihaz No giriniz"
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="primary" onClick={handleQueryClick} id="btnQuery">
                                {loading ? (
                                    <>
                                        <Spinner animation="border" size="sm" /> Yükleniyor...
                                    </>
                                ) : (
                                    'Sorgula'
                                )}
                            </Button>
                        </div>
                    </Form>

                    <br />

                    {/* AUX-VDM Bilgisi */}
                    {auxVdmInfo.device && (
                        <div style={{ border: '0.5px solid black', padding: '10px', borderRadius: '5px' }}>
                            <h5>AUX-VDM Bilgisi</h5>
                            <div>
                                <strong>Cihaz: </strong>
                                <span>{auxVdmInfo.device}</span>
                            </div>
                            <div>
                                <strong>AUX-VDM: </strong>
                                <span>{auxVdmInfo.auxVdm}</span>
                            </div>
                        </div>
                    )}

                    {/* Eşleşme Yok Mesajı */}
                    {!auxVdmInfo.device && !loading && (
                        <div id="noMatchDiv" style={{ display: 'none' }}>
                            <p>Eşleşen cihaz bulunamadı.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AUXVDMSorgulama;
