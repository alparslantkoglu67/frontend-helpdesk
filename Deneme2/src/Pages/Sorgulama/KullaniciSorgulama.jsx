import React from 'react';
import { Table, Button, InputGroup, FormControl } from 'react-bootstrap';

const KullaniciSorgulama = () => {
    return (
        <div>



            <div id="tdRightFrame" className="d-flex flex-column justify-content-center align-items-center" style={{ borderRight: '0px solid #D7D4D4' }}>


                <table className="flex-column justify-content-center align-items-center" style={{ width: '35rem', border: '1px white solid', borderStartEndRadius: '50px' }}>
                    <thead>
                        <tr className="bg-primary">
                            <th style={{ color: '#ffffff', fontFamily: 'revert', }}> <div className='text-center'>Kullanıcı Adı :</div></th>
                            <th>
                                <InputGroup >
                                    <FormControl
                                        type="text"
                                        id="TextUsername"
                                        placeholder="Kullanıcı Adı"
                                    // Odaktan çıkınca gölgeyi kaldır
                                    />
                                </InputGroup>
                            </th>
                        </tr>
                    </thead>
                </table>

                <table className='d-flex justify-content-center' >
                    <tbody>
                        <tr className="bg-light" style={{ border: 'none' }}>

                            <td>
                                <Button id="ButtonYeni" onClick={() => YeniSorgu()} variant="primary" className="mr-2" style={{ border: 'none', marginRight: '1rem' }}>
                                    Yeni Sorgulama
                                </Button>
                            </td>
                            <td></td>
                            <td>
                                <Button id="ButtonSorgula" onClick={() => UserQuery()} variant="secondary" style={{ border: 'none', marginLeft: '1rem' }}>
                                    Sorgula
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <Table style={{ marginTop: '2rem' }}>
                    <thead>
                        <tr className="bg-light text-danger">
                            <th className="bg-secondary text-light">Kullanıcı-Sunucu Bilgileri</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Table bordered striped hover >
                                    <tbody>
                                        <tr>
                                            <td><b>Kullanıcı Aktif / Pasif</b></td>
                                            <td>Aktif</td>
                                        </tr>
                                        <tr>
                                            <td><b>Ana Grup</b></td>
                                            <td>ARVENTO</td>
                                        </tr>
                                        <tr>
                                            <td><b>Açıklama</b></td>
                                            <td>YAZILIM TEST</td>
                                        </tr>
                                        <tr>
                                            <td><b>Kullanıcı Grubu</b></td>
                                            <td>YAZILIM TEST</td>
                                        </tr>
                                        <tr>
                                            <td><b>Kullanıcı Adı</b></td>
                                            <td>erkan.yildirim</td>
                                        </tr>
                                        <tr>
                                            <td><b>E-posta</b></td>
                                            <td>erkan.yildirim@arvento.com</td>
                                        </tr>
                                        <tr>
                                            <td><b>Kayıt Tarihi</b></td>
                                            <td>20.10.2016 08:45:11</td>
                                        </tr>
                                        <tr>
                                            <td><b>Saat Dilimi</b></td>
                                            <td>(UTC+03:00) Istanbul</td>
                                        </tr>
                                        <tr>
                                            <td><b>Sunucu</b></td>
                                            <td>arvento11</td>
                                        </tr>
                                        <tr>
                                            <td><b>Yetki Seviyesi</b></td>
                                            <td>YÖNETİCİ</td>
                                        </tr>
                                        <tr>
                                            <td><b>User Active</b></td>
                                            <td>True</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Table style={{ marginTop: '2rem' }}>
                    <thead>
                        <tr className="text-center ">
                            <th className="bg-secondary text-light">Kullanıcı-Araç Bilgileri</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Table bordered striped hover>
                                    <thead >
                                        <tr >
                                            <th className="bg-primary text-light" style={{ color: 'ghostwhite' }}>Kayıt No</th>
                                            <th className="bg-primary text-light" style={{ color: 'ghostwhite' }}>Cihaz No</th>
                                            <th className="bg-primary text-light" style={{ color: 'ghostwhite' }}>Plaka</th>
                                            <th className="bg-primary text-light" style={{ color: 'ghostwhite' }}>Sürücü</th>
                                            <th className="bg-primary text-light" style={{ color: 'ghostwhite' }}>Cihaz Aktif</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                        <tr>
                                            <td>1</td>
                                            <td>test103</td>
                                            <td>06cal06</td>
                                            <td>test0704</td>
                                            <td>Aktif</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>test103</td>
                                            <td>06cal06</td>
                                            <td>test0704</td>
                                            <td>Aktif</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>test103</td>
                                            <td>06cal06</td>
                                            <td>test0704</td>
                                            <td>Aktif</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>test103</td>
                                            <td>06cal06</td>
                                            <td>test0704</td>
                                            <td>Aktif</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>test103</td>
                                            <td>06cal06</td>
                                            <td>test0704</td>
                                            <td>Aktif</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>test103</td>
                                            <td>06cal06</td>
                                            <td>test0704</td>
                                            <td>Aktif</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>test103</td>
                                            <td>06cal06</td>
                                            <td>test0704</td>
                                            <td>Aktif</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>test103</td>
                                            <td>06cal06</td>
                                            <td>test0704</td>
                                            <td>Aktif</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>test103</td>
                                            <td>06cal06</td>
                                            <td>test0704</td>
                                            <td>Aktif</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>test103</td>
                                            <td>06cal06</td>
                                            <td>test0704</td>
                                            <td>Aktif</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>test103</td>
                                            <td>06cal06</td>
                                            <td>test0704</td>
                                            <td>Aktif</td>
                                        </tr>

                                        {/* Devam eden satırlar buraya eklenebilir */}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div >
        </div>
    );
};

export default KullaniciSorgulama;
