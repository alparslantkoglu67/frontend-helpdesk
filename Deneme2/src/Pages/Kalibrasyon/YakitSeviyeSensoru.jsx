import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

const YakitSeviyeSensoru = () => {
    const [deviceId, setDeviceId] = useState('');
    const [depoBoy, setDepoBoy] = useState('');
    const [sensorUzunlugu, setSensorUzunlugu] = useState('');
    const [calibrationMessage, setCalibrationMessage] = useState('');
    const [tankType, setTankType] = useState('Bombeli');

    const handleTankTypeChange = (e) => {
        setTankType(e.target.value);
    };

    const handleCalibration = () => {
        setCalibrationMessage('Kalibrasyon işlemi başlatılıyor...');
    };

    return (
        <div className="p-4" style={{ display: '', marginLeft: '2rem' }}>

            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div style={{ marginLeft: '-35rem', width: '450px', marginTop: '3.5rem', }}>

                    <Table className="table table-hover table-striped" style={{ backgroundColor: '#000000', border: '2px ghostwhite solid' }}>
                        <thead>
                            <tr className="table-light" style={{ border: 'none' }} >
                                <th colSpan="2" className="text-light text-center bg-secondary" style={{ border: 'none' }}>Yakıt İlk Kalibrasyon Ekranı</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ border: 'none', }}>
                                <td ><strong>Cihaz</strong></td>
                                <td style={{ border: 'none' }}>
                                    <Form.Control
                                        type="text"
                                        value={deviceId}
                                        onChange={(e) => setDeviceId(e.target.value)}
                                        placeholder=""
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td ><strong>Depo Boy Ortadan (mm)</strong></td>
                                <td >
                                    <Form.Control
                                        type="text"
                                        value={depoBoy}
                                        onChange={(e) => setDepoBoy(e.target.value)}
                                        placeholder=""
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td ><strong>Sensör Uzunluğu (mm)</strong></td>
                                <td >
                                    <Form.Control
                                        type="text"
                                        value={sensorUzunlugu}
                                        onChange={(e) => setSensorUzunlugu(e.target.value)}
                                        placeholder=""
                                    />
                                </td>

                            </tr>
                            <tr>
                                <td ><strong>Tekrar Kalibrasyon Yap</strong></td>
                                <td >
                                    <Form.Check
                                        type="checkbox"
                                        id="CheckBoxEnableFuelCalibration"
                                        label=""
                                    />
                                </td>
                            </tr>
                            <tr  >


                                <td style={{ border: 'none', }}>
                                    <Button variant="primary" onClick={handleCalibration} style={{ marginLeft: '6rem' }}>
                                        Kalibre Et
                                    </Button>
                                </td>
                                <td style={{ border: 'none' }}></td>

                            </tr>
                            <tr >
                                <td colSpan="2" className="text-danger text-center">{calibrationMessage}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="p-4" style={{ width: '450px', marginLeft: '38rem', marginTop: '-26rem' }}>

                    <Form.Group controlId="cmbTankType">
                        <Form.Label className='text-danger' style={{ fontWeight: '700' }}>Depo Tipi</Form.Label>
                        <Form.Control as="select" value={tankType} onChange={handleTankTypeChange}>
                            <option>Bombeli</option>
                            <option>Dikdörtgen</option>
                            <option>Yatay Silindir</option>
                        </Form.Control>
                    </Form.Group>

                    {/* Bombeli Depo */}
                    {tankType === 'Bombeli' && (
                        <Table hover striped style={{ backgroundColor: '#ccccdc', }}>
                            <thead>
                                <tr className="table-light">
                                    <th colSpan="2" className="text-light text-center bg-secondary">Depo Ölçüleri (mm)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Depo Uzunluk (mm)</strong></td>
                                    <td><Form.Control type="text" id="BD_DU" /></td>
                                </tr>
                                <tr>
                                    <td><strong>Depo Boy Ortadan (mm)</strong></td>
                                    <td><Form.Control type="text" id="BD_DBO" /></td>
                                </tr>
                                <tr>
                                    <td><strong>Depo Boy Bombeden (mm)</strong></td>
                                    <td><Form.Control type="text" id="BD_DBB" /></td>
                                </tr>
                                <tr>
                                    <td><strong>Depo Boy Kenardan (mm)</strong></td>
                                    <td><Form.Control type="text" id="BD_DBK" /></td>
                                </tr>
                                <tr>
                                    <td><strong>Depo En Ortadan (mm)</strong></td>
                                    <td><Form.Control type="text" id="BD_DEO" /></td>
                                </tr>
                                <tr>
                                    <td><strong>Depo En Bombeden (mm)</strong></td>
                                    <td><Form.Control type="text" id="BD_DEB" /></td>
                                </tr>
                                <tr>
                                    <td><strong>Depo En Tepeden(mm)</strong></td>
                                    <td><Form.Control type="text" id="BD_DET" /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="text-center">
                                        <Button variant="primary" onClick={() => ShowCamberedFuelTankVolume()}>
                                            Hacmi Hesapla
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    )}


                    {/* Dikdörtgen Depo */}
                    {tankType === 'Dikdörtgen' && (
                        <Table striped bordered hover style={{ backgroundColor: '#ccccdc', }}>
                            <thead>
                                <tr className="table-light">
                                    <th colSpan="2" className="text-light text-center bg-secondary">Dikdörtgen Depo Ölçüleri</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Depo En (mm)</strong></td>
                                    <td><Form.Control type="text" id="DD_DE" /></td>
                                </tr>
                                <tr>
                                    <td><strong>Depo Boy (mm)</strong></td>
                                    <td><Form.Control type="text" id="DD_DB" /></td>
                                </tr>
                                <tr>
                                    <td><strong>Depo Uzunluk (mm)</strong></td>
                                    <td><Form.Control type="text" id="DD_DU" /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="text-center">
                                        <Button variant="primary" onClick={() => ShowRectangularFuelTankVolume()}>
                                            Hacmi Hesapla
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    )}

                    {/* Yatay Silindir Depo */}
                    {tankType === 'Yatay Silindir' && (
                        <Table striped bordered hover style={{ backgroundColor: '#ccccdc' }}>
                            <thead>
                                <tr className="table-light">
                                    <th colSpan="2" className="text-light text-center bg-secondary">Yatay Silindir Depo Ölçüleri</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Yarıçap (mm)</strong></td>
                                    <td><Form.Control type="text" id="YS_Y" /></td>
                                </tr>
                                <tr>
                                    <td><strong>Uzunluk (mm)</strong></td>
                                    <td><Form.Control type="text" id="YS_U" /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="text-center">
                                        <Button variant="primary" onClick={() => ShowHorizontalCylinderFuelTankVolume()}>
                                            Hacmi Hesapla
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    )}
                </div>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center mt-4' >
                <hr />

                <h3 className="font-weight-bold text-danger">Kalibrasyon İşlemleri</h3>
                <p style={{ fontFamily: 'monospace' }}>KALİBRASYON İŞLEMİNE BAŞLAMADAN ÖNCE LÜTFEN AŞAĞIDA BELİRTİLEN MADDELERİ DİKKATLE OKUYUNUZ.</p>
            </div>

            <div className="table ">
                <table className="table table-bordered mx-auto my-4 " style={{ width: '800px', border: 'none' }}>
                    <tbody >
                        <tr >
                            <td style={{ border: '1px white solid' }}>
                                <div className="card bg-light" style={{ width: '100%', color: 'black' }}>
                                    <div className="card-body" >
                                        <strong className='text-danger'>İLK KONTROL</strong>
                                        <p>Sensör için gerekli voltaj kaynağının bağlı olduğuna ve sensörden gelen konnektörlü data ucunun <strong><u>IMT 14</u></strong> araç takip cihazının <strong><u>RS232-2</u></strong> girişine takılı olduğuna emin olunuz.</p>


                                    </div>

                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />

                <div className="row my-4">
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="card bg-light" >
                            <div className="card-body ">
                                <strong>Depo Boy Ortadan (mm)</strong>
                                <p>Depo üst kısmında açılan delikten deponun iç yüksekliğini milimetre (mm) cinsinden ölçünüz.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="/src/assets/goruntu_1.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
                <hr />

                <div className="row my-4">
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="card bg-light" >
                            <div className="card-body">
                                <strong>Sensör Uzunluğu (mm)</strong>
                                <p>Sensörün <strong>dış çubuğundan</strong> tabana kadar olan uzunluk milimetre (mm) cinsinden ölçünüz.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="/src/assets/goruntu_2.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
                <hr />

                <div className="row my-4">
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="card bg-light" >
                            <div className="card-body">
                                <strong>Sensör Uzunluğu (mm)</strong>
                                <p>Sensor uzunluğu ölçülürken kesinlikle contanın üzerinden ölçü almayınız.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="/src/assets/goruntu_3.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
                <hr />

                <div className="row my-4">
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="card bg-light" >
                            <div className="card-body">
                                <strong>Sensör Uzunluğu (mm)</strong>
                                <p>Sensor uzunluğu ölçülürken öncelikle contayı çıkarınız. Sensor kutusunun tam dibinden başlayarak ölçümünüzü yapınız.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="/src/assets/goruntu_4.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
                <hr />

                <div className="row my-4">
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="card bg-light" >
                            <div className="card-body">
                                <strong>BOŞTA KALİBRASYON</strong>
                                <p>Sensor kalibrasyon esnasında deponun üzerinde dik bir şekilde durmalıdır. Sensorun metal kısmının aracın herhangi bir yerine değmemesi ve herhangi bir kimsenin veya nesnenin sensore temas etmemesi bu süreçte çok önemlidir.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="/src/assets/goruntu_5.jpg" alt="" className="img-fluid" />
                    </div>

                </div>
                <hr />
            </div>
        </div >


    );
};

export default YakitSeviyeSensoru;
