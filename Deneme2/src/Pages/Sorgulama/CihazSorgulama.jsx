import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CihazSorgulama = () => {
    return (
        <div className="p-4" style={{ marginLeft: '2rem' }}>

            {/* Arama Kriterleri Tablosu */}

            <div className="row ">
                <div className="col  " style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', }}>

                    <table className="table table-bordered " style={{ width: '300px' }}>
                        <thead>
                            <tr>
                                <th colSpan="2" className="text-center bg-secondary text-light">Arama Kriterleri</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="font-weight-bold bg-secondary text-white mt-5">
                                <td>Cihaz No</td>
                                <td>
                                    <input type="radio" name="SelectQueryType" value="radioDeviceNo" defaultChecked />
                                </td>
                            </tr>
                            <tr className="font-weight-bold bg-secondary text-white">
                                <td>IMEI No</td>
                                <td>
                                    <input type="radio" name="SelectQueryType" value="radioIMEI" />
                                </td>
                            </tr>
                            <tr className="font-weight-bold bg-secondary text-white">
                                <td>Plaka</td>
                                <td>
                                    <input type="radio" name="SelectQueryType" value="radioPlaka" />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="col  text-center" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', }}>

                    <table className="table table-bordered " style={{ width: '300px' }}>
                        <tbody>
                            <tr className="font-weight-bold bg-secondary text-white">
                                <td>Cihaz No</td>
                                <td>
                                    <input type="text" name="TextCihazNo" />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="text-center">
                                    <button className="btn btn-primary" onClick={() => console.log('Sorgula')}>Sorgula</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>









            {/* Cihaz No Tablosu */}


            {/* Sunucu Bilgileri Tablosu */}
            <table className="table table-bordered table-striped bg-light" style={{ marginTop: '4rem' }}>
                <tbody>
                    <tr className="font-weight-bold bg-secondary text-white">
                        <td><strong>Arvento Sunucu Adı</strong></td>
                        <td className="text-primary">arvento11</td>
                    </tr>
                    <tr className="font-weight-bold bg-secondary text-white">
                        <td><strong>APN</strong></td>
                        <td className="text-primary">internet</td>
                    </tr>
                    <tr className="font-weight-bold bg-secondary text-white">
                        <td><strong>2. APN</strong></td>
                        <td></td>
                    </tr>
                    <tr className="font-weight-bold bg-secondary text-white">
                        <td><strong>Sunucu Adresi</strong></td>
                        <td className="text-primary">Arvento Dummy Device Server (192.168.1.54:47116)</td>
                    </tr>
                    <tr className="font-weight-bold bg-secondary text-white">
                        <td><strong>Kullanıcılar</strong></td>
                        <td className="text-primary">arvento, arventodemo, atakan.arslan...</td>
                    </tr>
                    <tr className="font-weight-bold bg-secondary text-white">
                        <td><strong>Abonelik Durumu</strong></td>
                        <td>Aktif</td>
                    </tr>
                    <tr className="font-weight-bold bg-secondary text-white">
                        <td><strong>Tarih/Saat</strong></td>
                        <td className="text-danger">01.11.2024 15:23:09</td>
                    </tr>
                    <tr className="font-weight-bold bg-secondary text-white">
                        <td><strong>GSM Durumu</strong></td>
                        <td className="text-danger">Anlık Konum Alınamadı!</td>
                    </tr>
                    <tr className="font-weight-bold text-white">
                        <td><strong>GPS Durumu</strong></td>
                        <td>-</td>
                    </tr>
                    <tr className="font-weight-bold  text-white">

                        <td ><strong>Son Konum Bilgisi</strong></td>
                        <td>
                            <table className="table table-sm table-bordered">
                                <tbody>
                                    <tr>
                                        <td><b>Cihaz No</b></td>
                                        <td>test103</td>
                                    </tr>
                                    <tr>
                                        <td><b>Tarih/Saat</b></td>
                                        <td>01.11.2024 15:23:09</td>
                                    </tr>
                                    <tr>
                                        <td><b>Enlem</b></td>
                                        <td>40,187267</td>
                                    </tr>
                                    <tr>
                                        <td><b>Boylam</b></td>
                                        <td>28,707275</td>
                                    </tr>
                                    <tr>
                                        <td><b>Hız</b></td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td><b>Adres</b></td>
                                        <td>Gölyazı Mh., Nilüfer, Bursa, Türkiye</td>
                                    </tr>
                                    <tr>
                                        <td><b>Yakıt Seviyesi %</b></td>
                                        <td>""</td>
                                    </tr>
                                    <tr>
                                        <td><b>Sıcaklık Sensörü 1</b></td>
                                        <td>""</td>
                                    </tr>
                                    <tr>
                                        <td><b>Sıcaklık Sensörü 1</b></td>
                                        <td>""</td>
                                    </tr>
                                    <tr>
                                        <td><b>Sıcaklık Sensörü 1</b></td>
                                        <td>""</td>
                                    </tr>
                                    <tr>
                                        <td><b>Sıcaklık Sensörü 1</b></td>
                                        <td>""</td>
                                    </tr>
                                    <tr>
                                        <td><b>Nem</b></td>
                                        <td>""</td>
                                    </tr>
                                    <tr>
                                        <td><b>Akü Voltajı</b></td>
                                        <td>""</td>
                                    </tr>
                                    <tr>
                                        <td><b>Acil Durum</b></td>
                                        <td>""</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="font-weight-bold bg-secondary text-white">
                        <td><strong>Cihaz Tipi</strong></td>
                        <td>DUMMY_DEVICE</td>
                    </tr>
                    <tr>
                        <td><strong>IMSI</strong></td>
                        <td id="tdIMSI"></td>
                    </tr>
                    <tr>
                        <td><strong>IMEI</strong></td>
                        <td id="tdIMEI"></td>
                    </tr>
                    <tr>
                        <td><strong>Cihaz Modeli</strong></td>
                        <td id="tdModel">Dummy Device</td>
                    </tr>
                    <tr>
                        <td><strong>Yazılım Versiyonu</strong></td>
                        <td id="tdSWVer"></td>
                    </tr>
                    <tr>
                        <td><strong>Donanım Versiyonu</strong></td>
                        <td id="tdHWver"></td>
                    </tr>
                    <tr>
                        <td><strong>Smart-Hub Versiyonu</strong></td>
                        <td id="tdSmartHub"></td>
                    </tr>
                    <tr>
                        <td><strong>Aktivasyon Tarihi</strong></td>
                        <td id="tdAktivasyonTarihi">16.11.2015 17:59:52</td>
                    </tr>
                    <tr id="trCihazGSM">
                        <td><strong>Cihaz GSM No</strong></td>
                        <td id="tdCihazGSM">-</td>
                    </tr>
                    <tr>
                        <td><strong>Bayi Adı</strong></td>
                        <td id="tdBayiAdi"></td>
                    </tr>
                    <tr>
                        <td><strong>Teknik Servis</strong></td>
                        <td id="tdTeknikServis">-</td>
                    </tr>
                    <tr>
                        <td><strong>Cihaz Hata Kodu</strong></td>
                        <td id="tdCihazHataKodu"></td>
                    </tr>
                    <tr>
                        <td ><strong>Sensör Bilgileri</strong></td>
                        <td id="tdSensor">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="bg-primary text-light">Input No</th>
                                        <th className="bg-primary text-light">Bağlantı Tipi</th>
                                        <th className="bg-primary text-light">Input Tipi</th>
                                        <th className="bg-primary text-light">Açıklama</th>
                                        <th className="bg-primary text-light">Kayıt Tarihi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Sensör verilerini buraya ekleyebilirsiniz */}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr id="trBuzzer">
                        <td ><strong>Buzzer</strong></td>
                        <td id="tdBuzzer">Yok</td>
                    </tr>
                    <tr id="trServiceAuxVDM">
                        <td><strong>AUX-VDM</strong></td>
                        <td id="tdServiceAuxVDM"> - </td>
                    </tr>
                    <tr>
                        <td><strong>CAN Bus Programlama</strong></td>
                        <td id="tdCanBus">Yok</td>
                    </tr>
                    <tr id="trServiceAuxVDMStatus">
                        <td><strong>VDMOBD Cihazı Sokete Takılı Olma Durumu</strong></td>
                        <td id="tdServiceAuxVDMStatus">-</td>
                    </tr>
                    <tr>
                        <td><strong>OBD Programlama</strong></td>
                        <td id="tdOBD">Yok</td>
                    </tr>
                    <tr>
                        <td><strong>Sürücü Tanıma Birimi</strong></td>
                        <td id="tdHasSC">Yok</td>
                    </tr>
                    <tr id="trTrailerId">
                        <td><strong>Dorse ID</strong></td>
                        <td id="tdTrailerId">-</td>
                    </tr>
                    <tr>
                        <td ><strong>Araç Program Durumları</strong></td>
                        <td id="tdProg">
                            <table className="table table-bordered  ">
                                <tbody>
                                    <tr>
                                        <td>Cihaz No</td>
                                        <td>test103</td>
                                    </tr>
                                    <tr>
                                        <td>Durumu</td>
                                        <td>Programlandı</td>
                                    </tr>
                                    <tr>
                                        <td>Dururken (sn)</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Hareketliyken (sn)</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Mesafe (km)</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Yön Değişimine Göre Programlama (derece)</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Hız Alarmı (km/s)</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Hız Alarmı Süre (sn)</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Duraklama Alarmı (sn)</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Rölanti Alarmı (sn)</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Hareket Alarmı</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Ani Hızlanma (Hız / sn)</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Ani Yavaşlama (Hız / sn)</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Araç Durdurma Programlandı</strong></td>
                        <td id="tdAracDurdurma">Yok</td>
                    </tr>
                    <tr>
                        <td><strong>Operator List</strong></td>
                        <td id="tdOperatorList">Yok</td>
                    </tr>
                    <tr id="trServiceFuelPercent">
                        <td><strong>Yakıt Seviyesi (%)</strong></td>
                        <td id="tdServiceFuelPercent">-</td>
                    </tr>
                    <tr id="trServiceFuelLevel">
                        <td><strong>Yakıt Seviyesi (litre)</strong></td>
                        <td id="tdServiceFuelLevel">-</td>
                    </tr>
                    {/* Sıcaklık sensörleri, Nem Sensörü, Akü Voltajı */}
                    <tr id="trServiceTemperature1">
                        <td><strong>Sıcaklık Sensörü 1</strong></td>
                        <td id="tdServiceTemperature1">-</td>
                    </tr>
                    <tr id="trServiceTemperature2">
                        <td><strong>Sıcaklık Sensörü 2</strong></td>
                        <td id="tdServiceTemperature2">-</td>
                    </tr>
                    <tr id="trServiceTemperature3">
                        <td><strong>Sıcaklık Sensörü 3</strong></td>
                        <td id="tdServiceTemperature3">-</td>
                    </tr>
                    <tr id="trServiceTemperature4">
                        <td><strong>Sıcaklık Sensörü 4</strong></td>
                        <td id="tdServiceTemperature4">-</td>
                    </tr>
                    <tr id="trServiceTemperatureIDs">
                        <td><strong>Sıcaklık Sensörü ID Bilgi</strong></td>
                        <td id="tdServiceTemperatureIDs">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="bg-primary text-light ">Sensör Input</th>
                                        <th className="bg-primary text-light  ">Sensör ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Sensör ID verilerini buraya ekleyebilirsiniz */}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr id="trServiceHumidity">
                        <td><strong>Nem Sensör</strong></td>
                        <td id="tdServiceHumidity">-</td>
                    </tr>
                    <tr id="trServicePowerLevel">
                        <td><strong>Akü Voltajı</strong></td>
                        <td id="tdServicePowerLevel">-</td>
                    </tr>
                    <tr style={{ backgroundColor: '#eeeeee', }} id="trLastPackets">
                        <td ><strong>Son Durum Bilgileri</strong></td>
                        <td id="tdLastPackets">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="bg-primary text-light  ">Bilgi</th>
                                        <th className="bg-primary text-light  ">Kayıt Tarihi</th>
                                        <th className="bg-primary text-light  ">Durum</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Acil Durum Alarmı</td>
                                        <td>22.10.2024 15:55:24</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Hız Alarmı</td>
                                        <td>21.10.2024 13:56:02</td>
                                        <td>220</td>
                                    </tr>
                                    <tr>
                                        <td>Konum Bilgisi</td>
                                        <td>01.11.2024 15:13:52</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr style={{ backgroundColor: '#eeeeee' }} id="trOnOffSensors">
                        <td id="tdOnOffSensorsHeader"><strong>Sensör Bilgileri</strong></td>
                        <td id="tdOnOffSensors">-</td>
                    </tr>
                    <tr style={{ backgroundColor: '#eeeeee' }} id="trTachoOnline">
                        <td id="tdTachoOnlineHeader"><strong>Takograf Gerçek Zamanlı Veri Modülü</strong></td>
                        <td id="tdTachoOnline">Yok</td>
                    </tr>
                    <tr style={{ backgroundColor: '#eeeeee' }} id="trTachoDownload">
                        <td id="tdTachoDownloadHeader"><strong>Takograf Dosya İndirme Modülü</strong></td>
                        <td id="tdTachoDownload">Yok</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgb(238, 238, 238)' }} id="trServiceEmergency">
                        <td id="tdServiceEmergencyHeader"><strong>Acil Durum</strong></td>
                        <td id="tdServiceEmergency">-</td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
};

export default CihazSorgulama;
