import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const YukBosaltma = () => {
    const [uatfNo, setUatfNo] = useState('');
    const [truckPlate, setTruckPlate] = useState('');

    const handleQuery = () => {
        // Sorgulama işlemini burada yapabilirsiniz
        console.log('UATF No:', uatfNo);
    };

    return (
        <div>


            <div className='d-flex flex-column justify-content-center align-items-center'>

                <td id="tdRightFrame">

                    <div className="loadpanel"></div>
                    <div id="popup"></div>
                    <div className="NotEmptyUatfSection" id="NotEmptyUatfSection" style={{}}>
                        <div className="unloadQueryTitle">Boşaltılacak yüke ait UATF numarasını giriniz</div>
                        <form className="unloadQueryGroup dx-form dx-widget" role="form">
                            <div className="form-group">
                                <label htmlFor="uatfNo" style={{ marginTop: '5px' }}>UATF No: <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="uatfNo"
                                    placeholder="UATF No giriniz"
                                    value={uatfNo}
                                    onChange={(e) => setUatfNo(e.target.value)}
                                    required
                                    style={{ marginLeft: '7rem', marginTop: '-1.6rem', width: '250px' }}
                                />
                            </div>
                            <div className="form-group text-right">
                                <button type="button" className="btn btn-primary" onClick={handleQuery}>
                                    Sorgula
                                </button>
                            </div>
                        </form>
                        <div className="LoadTopGroup" id="LoadTopGroup" style={{ display: 'none' }}>
                            <div className="LoadInfoSection">
                                <div className="LoadInfoTitle">Yüklemeye Ait Bilgiler</div>
                                <div className="LoadInfoForm" id="LoadInfoForm"></div>
                            </div>
                            <div className="CurrentInfoSection">
                                <div className="CurrentInfoTitle">Sistem Üzerindeki Mevcut Cihaz - Çekici - Dorse Durumu</div>
                                <div className="CurrentInfoForm" id="CurrentInfoForm"></div>
                            </div>
                        </div>
                        <div className="LoadBottomGroup" id="LoadBottomGroup" style={{ display: 'none' }}>
                            <div className="UnloadText">Boşaltma Bilgilerini Giriniz</div>
                            <div className="UnloadForm" id="UnloadForm"></div>
                        </div>
                    </div>
                    <div className="EmptyUatfSection" id="EmptyUatfSection" style={{ display: 'none' }}>
                        <div className="unloadQueryTitle">Kontrol Etmek İstediğiniz Çekici Plakasını Giriniz</div>
                        <div className="unloadQueryGroup" id="unloadTruckQueryGroup">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Çekici Plakasını giriniz"
                                value={truckPlate}
                                onChange={(e) => setTruckPlate(e.target.value)}
                            />
                        </div>
                        <div className="LoadInfoSection" id="LoadEmptyGroup" style={{ display: 'none' }}>
                            <div className="LoadInfoTitle">Boşaltma Bilgilerini Giriniz</div>
                            <div className="LoadInfoForm" id="UnloadEmptyForm"></div>
                        </div>
                        <div className="CurrentInfoSection" id="UnloadCurrentInfoSection" style={{ display: 'none' }}>
                            <div className="CurrentInfoTitle">Sistem Üzerindeki Mevcut Cihaz - Çekici - Dorse Durumu</div>
                            <div className="CurrentInfoForm" id="CurrentInfoEmptyUatfForm"></div>
                        </div>
                    </div>
                </td>
            </div>
        </div>
    );
};

export default YukBosaltma;
