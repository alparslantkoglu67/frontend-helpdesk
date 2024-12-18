import React from 'react';
import { Table, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CihazDurumlari = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (


        <div className='container-fluid'>
            <Table striped bordered responsive style={{ marginLeft: '0rem', width: '100%' }}>
                <thead >
                    <tr >
                        <th className="bg-primary text-light">Cihaz No</th>
                        <th className="bg-primary text-light">Kullanıcı Adı</th>
                        <th className="bg-primary text-light">Kullanıcı Grubu</th>
                        <th className="bg-primary text-light">Ana Grup</th>
                        <th className="bg-primary text-light">SWVer</th>
                        <th className="bg-primary text-light">HWVer</th>
                        <th className="bg-primary text-light">SWVerB</th>
                        <th className="bg-primary text-light">IMEI</th>
                        <th className="bg-primary text-light">IMSI</th>
                        <th className="bg-primary text-light">APN</th>
                        <th className="bg-primary text-light">IP</th>
                        <th className="bg-primary text-light">Smart-Hub Versiyonu</th>
                        <th className="bg-primary text-light">Filtreler</th>
                        <th className="bg-primary text-light">GSM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Form.Control as="textarea" rows={2} />
                        </td>
                        <td>
                            <Form.Control type="text" />
                        </td>
                        <td>
                            <Form.Control type="text" />
                        </td>
                        <td>
                            <Form.Control type="text" />
                        </td>
                        <td>
                            <Form.Control type="text" />
                        </td>
                        <td>
                            <Form.Control type="text" />
                        </td>
                        <td>
                            <Form.Control type="text" />
                        </td>
                        <td>
                            <Form.Control type="text" />
                        </td>
                        <td>
                            <Form.Control type="text" />
                        </td>
                        <td>
                            <Form.Control type="text" />
                        </td>
                        <td>
                            <Form.Control type="text" />
                        </td>
                        <td>
                            <Form.Control type="text" />
                        </td>
                        <td>
                            <Form.Control type="text" />
                        </td>
                        <td>
                            <Form.Control type="text" />
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover style={{ marginTop: '2rem' }}>
                <thead>
                    <tr>
                        <th className="bg-secondary text-light">Cihaz No</th>
                        <th className="bg-secondary text-light">Kullanıcı Grubu</th>
                        <th className="bg-secondary text-light">Ana Grup</th>
                        <th className="bg-secondary text-light">SWVer</th>
                        <th className="bg-secondary text-light">HWVer</th>
                        <th className="bg-secondary text-light">SWVerB</th>
                        <th className="bg-secondary text-light">IMEI</th>
                        <th className="bg-secondary text-light">IMSI</th>
                        <th className="bg-secondary text-light">APN</th>
                        <th className="bg-secondary text-light">IP</th>
                        <th className="bg-secondary text-light">Smart-Hub Versiyonu</th>
                        <th className="bg-secondary text-light">Son İletişim Tarihi</th>
                        <th className="bg-secondary text-light">Zaman Farkı (dak)</th>
                        <th className="bg-secondary text-light">Paket/Dakika</th>
                        <th className="bg-secondary text-light">Filtreler</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {/* Verileri buraya ekleyin */}
                    <tr>
                        <td>123456</td>
                        <td>Kullanıcı Grubu 1</td>
                        <td>Ana Grup 1</td>
                        <td>1.0</td>
                        <td>1.1</td>
                        <td>2.0</td>
                        <td>123456789012345</td>
                        <td>987654321012345</td>
                        <td>internet</td>
                        <td>192.168.1.1</td>
                        <td>3.0</td>
                        <td>01/01/2024</td>
                        <td>5</td>
                        <td>20</td>
                        <td>Filtre Uygulanmadı</td>
                    </tr>
                    <tr>
                        <td>848262</td>
                        <td>Kullanıcı Grubu 2</td>
                        <td>Ana Grup 2</td>
                        <td>1.3</td>
                        <td>1.4</td>
                        <td>2..3</td>
                        <td>12385212345</td>
                        <td>9875126265</td>
                        <td>internet</td>
                        <td>192.168.2.3</td>
                        <td>4.3</td>
                        <td>09/11/2024</td>
                        <td>3</td>
                        <td>24</td>
                        <td>Filtre Uygulandı</td>
                    </tr>
                    <tr>
                        <td>848262</td>
                        <td>Kullanıcı Grubu 2</td>
                        <td>Ana Grup 2</td>
                        <td>1.3</td>
                        <td>1.4</td>
                        <td>2..3</td>
                        <td>12385212345</td>
                        <td>9875126265</td>
                        <td>internet</td>
                        <td>192.168.2.3</td>
                        <td>4.3</td>
                        <td>09/11/2024</td>
                        <td>3</td>
                        <td>24</td>
                        <td>Filtre Uygulandı</td>
                    </tr>
                    <tr>
                        <td>848262</td>
                        <td>Kullanıcı Grubu 2</td>
                        <td>Ana Grup 2</td>
                        <td>1.3</td>
                        <td>1.4</td>
                        <td>2..3</td>
                        <td>12385212345</td>
                        <td>9875126265</td>
                        <td>internet</td>
                        <td>192.168.2.3</td>
                        <td>4.3</td>
                        <td>09/11/2024</td>
                        <td>3</td>
                        <td>24</td>
                        <td>Filtre Uygulandı</td>
                    </tr>
                    <tr>
                        <td>848262</td>
                        <td>Kullanıcı Grubu 2</td>
                        <td>Ana Grup 2</td>
                        <td>1.3</td>
                        <td>1.4</td>
                        <td>2..3</td>
                        <td>12385212345</td>
                        <td>9875126265</td>
                        <td>internet</td>
                        <td>192.168.2.3</td>
                        <td>4.3</td>
                        <td>09/11/2024</td>
                        <td>3</td>
                        <td>24</td>
                        <td>Filtre Uygulandı</td>
                    </tr>
                    <tr>
                        <td>848262</td>
                        <td>Kullanıcı Grubu 2</td>
                        <td>Ana Grup 2</td>
                        <td>1.3</td>
                        <td>1.4</td>
                        <td>2..3</td>
                        <td>12385212345</td>
                        <td>9875126265</td>
                        <td>internet</td>
                        <td>192.168.2.3</td>
                        <td>4.3</td>
                        <td>09/11/2024</td>
                        <td>3</td>
                        <td>24</td>
                        <td>Filtre Uygulandı</td>
                    </tr>
                    <tr>
                        <td>848262</td>
                        <td>Kullanıcı Grubu 2</td>
                        <td>Ana Grup 2</td>
                        <td>1.3</td>
                        <td>1.4</td>
                        <td>2..3</td>
                        <td>12385212345</td>
                        <td>9875126265</td>
                        <td>internet</td>
                        <td>192.168.2.3</td>
                        <td>4.3</td>
                        <td>09/11/2024</td>
                        <td>3</td>
                        <td>24</td>
                        <td>Filtre Uygulandı</td>
                    </tr>
                    <tr>
                        <td>848262</td>
                        <td>Kullanıcı Grubu 2</td>
                        <td>Ana Grup 2</td>
                        <td>1.3</td>
                        <td>1.4</td>
                        <td>2..3</td>
                        <td>12385212345</td>
                        <td>9875126265</td>
                        <td>internet</td>
                        <td>192.168.2.3</td>
                        <td>4.3</td>
                        <td>09/11/2024</td>
                        <td>3</td>
                        <td>24</td>
                        <td>Filtre Uygulandı</td>
                    </tr>
                    <tr>
                        <td>848262</td>
                        <td>Kullanıcı Grubu 2</td>
                        <td>Ana Grup 2</td>
                        <td>1.3</td>
                        <td>1.4</td>
                        <td>2..3</td>
                        <td>12385212345</td>
                        <td>9875126265</td>
                        <td>internet</td>
                        <td>192.168.2.3</td>
                        <td>4.3</td>
                        <td>09/11/2024</td>
                        <td>3</td>
                        <td>24</td>
                        <td>Filtre Uygulandı</td>
                    </tr>
                    <tr>
                        <td>848262</td>
                        <td>Kullanıcı Grubu 2</td>
                        <td>Ana Grup 2</td>
                        <td>1.3</td>
                        <td>1.4</td>
                        <td>2..3</td>
                        <td>12385212345</td>
                        <td>9875126265</td>
                        <td>internet</td>
                        <td>192.168.2.3</td>
                        <td>4.3</td>
                        <td>09/11/2024</td>
                        <td>3</td>
                        <td>24</td>
                        <td>Filtre Uygulandı</td>
                    </tr>

                    {/* Diğer veriler eklenebilir */}
                </tbody>
            </Table>
        </div >

    );
};

export default CihazDurumlari;
