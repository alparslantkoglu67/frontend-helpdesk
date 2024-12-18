import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

const TakografMontaj = () => {
    const [cihazNo, setCihazNo] = useState('');
    const [queryResult, setQueryResult] = useState({
        tachoSetup: 'Yok',
        tachoOnline: 'Yok',
        tachoDownload: 'Yok',
    });

    const handleCihazNoChange = (e) => {
        setCihazNo(e.target.value);
    };

    const handleQueryClick = () => {
        // Sorgulama işlemi burada yapılacak (örneğin API çağrısı)
        // Şu an sadece test için mevcut sonuçlar güncelleniyor.
        setQueryResult({
            tachoSetup: 'Var ✓',
            tachoOnline: 'Yok X',
            tachoDownload: 'Var ✓',
        });
    };

    return (
        <div>



            <div className="container-fluid " style={{ backgroundColor: '#ffffff', }}>
                <div className="row justify-content-center align-items-center" >
                    <div className="col-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '3rem' }}><p style={{ marginTop: '1rem' }}>Cihaz No</p></div>
                    <div className="col-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '3rem' }}> <Form.Control
                        type="text"
                        value={cihazNo}
                        onChange={handleCihazNoChange}
                        placeholder="Cihaz No giriniz"
                        id="TextCihazNo"
                        style={{ width: '200px' }}


                    /></div>
                </div>
                <div className="row bg bg-none" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                        <Button variant="primary" onClick={handleQueryClick} id="ButtonSorgula" style={{ width: '500px' }}>
                            Sorgula
                        </Button>

                    </div>
                </div>








            </div>

            <br />

            {/* Sorgulama Sonuçları */}
            <div className="table table-striped table-hover" style={{ backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <tbody>
                    <tr style={{ fontWeight: 'bold', backgroundColor: '#eeeeee' }}>
                        <td id="tdTachoSetupHeader">Takograf Montaj</td>
                        <td id="tdTachoSetup">{queryResult.tachoSetup}</td>
                    </tr>
                    <tr style={{ fontWeight: 'bold', backgroundColor: '#eeeeee' }}>
                        <td id="tdTachoOnlineHeader">Takograf Gerçek Zamanlı Veri Modülü</td>
                        <td id="tdTachoOnline">{queryResult.tachoOnline}</td>
                    </tr>
                    <tr style={{ fontWeight: 'bold', backgroundColor: '#eeeeee' }}>
                        <td id="tdTachoDownloadHeader">Takograf Dosya İndirme Modülü</td>
                        <td id="tdTachoDownload">{queryResult.tachoDownload}</td>
                    </tr>
                </tbody>
            </div>
        </div>

    );
};

export default TakografMontaj;
