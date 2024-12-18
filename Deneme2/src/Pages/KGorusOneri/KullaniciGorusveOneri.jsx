import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const KullaniciGorusveOneri = () => {
    const [kullaniciAdi, setKullaniciAdi] = useState('');
    const [gonderen, setGonderen] = useState('');
    const [email, setEmail] = useState('');
    const [telefon, setTelefon] = useState('');
    const [konu, setKonu] = useState('');
    const [icerik, setIcerik] = useState('');
    const [kayitlar, setKayitlar] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const yeniKayit = {
            kullaniciAdi,
            gonderen,
            email,
            telefon,
            konu,
            icerik,
            tarih: new Date().toLocaleString(),
        };
        setKayitlar([...kayitlar, yeniKayit]);
        // Formu temizle
        setKullaniciAdi('');
        setGonderen('');
        setEmail('');
        setTelefon('');
        setKonu('');
        setIcerik('');
    };

    return (
        <div>

            <div className="d-flex flex-column justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className=" mb-3" >
                            <div style={{ marginLeft: '15rem', marginRight: '15rem' }}>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formKullaniciAdi" className="mb-3">
                                        <Form.Label>Kullanıcı Adı</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={kullaniciAdi}
                                            onChange={(e) => setKullaniciAdi(e.target.value)}
                                            placeholder="Kullanıcı Adı"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formGonderen" className="mb-3">
                                        <Form.Label>Gönderen</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={gonderen}
                                            onChange={(e) => setGonderen(e.target.value)}
                                            placeholder="Gönderen"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Label>E-Posta</Form.Label>
                                        <Form.Control
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="E-Posta"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formTelefon" className="mb-3">
                                        <Form.Label>Telefon No</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={telefon}
                                            onChange={(e) => setTelefon(e.target.value)}
                                            placeholder="Telefon No"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formKonu" className="mb-3">
                                        <Form.Label>Konu</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={konu}
                                            onChange={(e) => setKonu(e.target.value)}
                                            placeholder="Konu"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formIcerik" className="mb-3">
                                        <Form.Label>İçerik</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            value={icerik}
                                            onChange={(e) => setIcerik(e.target.value)}
                                            placeholder="İçerik"
                                        />
                                    </Form.Group>
                                    <div className='d-flex flex-column justify-content-center align-items-center'><Button variant="primary" type="submit" style={{ width: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        Kaydet
                                    </Button></div>

                                </Form>
                            </div>
                        </div>

                        <Table striped bordered hover style={{ width: '1200px' }}>
                            <thead>
                                <tr>
                                    <th className="bg-secondary text-light  ">Kullanıcı Adı</th>
                                    <th className="bg-secondary text-light  ">Gönderen</th>
                                    <th className="bg-secondary text-light  ">E-Posta</th>
                                    <th className="bg-secondary text-light  ">Telefon No</th>
                                    <th className="bg-secondary text-light  ">Konu</th>
                                    <th className="bg-secondary text-light  ">İçerik</th>
                                    <th className="bg-secondary text-light  ">Kayıt Tarihi</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {kayitlar.map((kayit, index) => (
                                    <tr key={index}>
                                        <td>{kayit.kullaniciAdi}</td>
                                        <td>{kayit.gonderen}</td>
                                        <td>{kayit.email}</td>
                                        <td>{kayit.telefon}</td>
                                        <td>{kayit.konu}</td>
                                        <td>{kayit.icerik}</td>
                                        <td>{kayit.tarih}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default KullaniciGorusveOneri;
