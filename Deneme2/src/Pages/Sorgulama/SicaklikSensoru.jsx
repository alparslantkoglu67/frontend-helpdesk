import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

const SicaklikSensoru = () => {
    const [deviceId, setDeviceId] = useState('');  // Cihaz No alanı için state ve setter fonksiyonu eklendi
    const [queryMade, setQueryMade] = useState(false);
    const [queryResult, setQueryResult] = useState({
        statusText: '',
        controlResult: 'Eşlenmiş Sensör Bulunamadı.'
    });

    const handleNewQueryClick = () => {
        // Yeni sorgulama işlemi başlatıldığında sonuçları sıfırlayabiliriz
        setQueryMade(false);
        setQueryResult({
            statusText: '',
            controlResult: ''
        });
    };

    return (
        <div className="p-4">

            <div style={{ width: '70%', border: '2px solid #D7D4D4', padding: '18px', borderRadius: '10px', marginLeft: '11rem' }}>
                <Form>
                    <Form.Group className="mb-3" controlId="deviceIdTextBox">
                        <Form.Label style={{ fontWeight: 900 }}>Cihaz No:</Form.Label>
                        <Form.Control
                            type="text"
                            value={deviceId}
                            onChange={(e) => setDeviceId(e.target.value)} // Input değiştiğinde state'i güncelle
                            placeholder="Cihaz No"
                            style={{ width: '300px', marginLeft: '20rem' }}
                        />
                    </Form.Group>

                    <div className="d-flex">
                        <Button variant="primary" onClick={() => setQueryMade(true)} style={{ marginRight: '1rem' }}>
                            Ara
                        </Button>
                        {queryMade && (
                            <Button variant="secondary" onClick={handleNewQueryClick} className="ml-3">
                                Yeni Sorgulama
                            </Button>
                        )}
                    </div>
                </Form>

                {queryMade && (
                    <div className="mt-4">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Durum</th>
                                    <th>Kontrol Sonucu</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ fontWeight: 'bold' }}>{queryResult.statusText}</td>
                                    <td style={{ fontWeight: 'bold', color: 'red' }}>{queryResult.controlResult}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                )}
            </div>
            <div className="p-4 mt-4">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between mb-3">
                            <button className="btn btn-primary" style={{ width: '40%' }}>
                                <i className="bi bi-plus"></i> Yeni Sensör Eşleştir
                            </button>
                            <button className="btn btn-danger" style={{ width: '40%' }}>
                                <i className="bi bi-trash"></i> Sil
                            </button>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>

                                        <th scope="col" className="text-center" >
                                            <div style={{ marginRight: '1px' }}><p>Seç</p>

                                                <input type="checkbox" aria-label="Select all" /></div>
                                        </th>
                                        <th scope="col">Cihaz No</th>
                                        <th scope="col">Sensör Tipi</th>
                                        <th scope="col">Sensör No</th>
                                        <th scope="col">Bağlantı Tipi</th>
                                        <th scope="col">Kaydeden</th>
                                        <th scope="col">Kayıt Tarihi</th>
                                        <th scope="col" className="text-center">Eylemler</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {/* Bu kısımda veri döngüsü ile satırları oluşturabilirsiniz */}
                                    <tr>
                                        <td className="text-center">
                                            <input type="checkbox" aria-label="Select" />
                                        </td>
                                        <td>1</td>
                                        <td>Sensör A</td>
                                        <td>SN-001</td>
                                        <td>WiFi</td>
                                        <td>Kullanıcı 1</td>
                                        <td>2024-01-01</td>
                                        <td className="text-center">
                                            <button className="btn btn-success btn-sm">
                                                Düzenle
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Daha fazla satır eklemek için yukarıdaki <tr> yapısını çoğaltın */}
                                </tbody>
                            </table>
                            {/* Veri yoksa gösterilecek mesaj */}
                            <div className="text-center" style={{ display: 'none' }}>
                                <p>Hiç veri bulunmamaktadır.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SicaklikSensoru;
