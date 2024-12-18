import React from 'react';
import { Table, InputGroup, FormControl, Button } from 'react-bootstrap';
import AracListesi from './SubFiles/AracListesi.jsx'
import VeriListesi from './SubFiles/VeriListesi.jsx';

const data = [
    { id: 1, name: "MELTEM KİMYA VE TEKSTİL SANAYİ İTHALAT İHRACAT VE TİCARET A.Ş." },
    { id: 2, name: "CUMALİ SABIRLI" },
    { id: 3, name: "REMASTER ENTEGRE ATIK YÖNETİMİ PETROL TAŞIMA SANAYİ TİC. A.Ş." },
    { id: 4, name: "OVALAR TARIM GIDA İNŞAAT TURZİM PETROL NAKLİYE LİMİTED ŞİRKETİ." },
    { id: 5, name: "VAHİT YALÇIN" },
    { id: 6, name: "İBC GERİ DÖNÜŞÜM HURDA NAKLİYAT DIŞ TİCARET LİMİTED ŞİRKETİ" },
    { id: 7, name: "TOROSLAR ATIK DEPOLAMA GERİ DÖNÜŞÜM VE İNŞAAT LİMİTED ŞİRKETİ." },
    { id: 8, name: "ALİ AĞ - ÖZ METAL HURDA SANAYİ" },
    { id: 9, name: "Adana Büyükşehir Belediyesi-Merkez Bina" },
    { id: 10, name: "NEFES METAL NAKLİYAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ" },
    { id: 11, name: "DOĞU KİMYA SANAYİ VE ELEKTRONİK OTOMOTİV TİCARET LİMİTED ŞİRKETİ" },
    { id: 12, name: "YÖREM MÜHENDİSLİK BİLİŞİM VE ORGANİZASYON A.Ş." }
];
const VehicleList = () => {
    const vehicles = [
        { licensePlate: '16ABC103', deviceNo: '177563', state: 'Onaylı' },
        { licensePlate: '16AKM773', deviceNo: '28F33D7E0C00005B', state: 'Onaylı' },
        { licensePlate: '16AND648', deviceNo: '123456', state: 'Onaylı' }, // Diğer araçlar buraya eklenebilir
    ];
}


const Firmalar = () => {
    return (
        <div>

            <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginBottom: '20rem', width: '50%' }}>
                <div className="card bg-secondary   mb-3" style={{ width: '400px' }}>
                    <h4 className="text-light  ">Firma / Transporter Listesi</h4>
                </div>



                <table className="table  table-hover table-striped" >

                    <thead >

                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginLeft: '60rem', marginTop: '-52rem' }}>
                <div className="card bg-secondary mb-2" style={{ width: '400px' }}>
                    <h4 className="text-light">Araç Listesi</h4>
                </div>
                <AracListesi />
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ marginTop: '20rem' }}>
                <div className="card bg-secondary mb-2" style={{ width: '400px' }}>
                    <h4 className="text-light">Veri Listesi</h4>
                </div>
                <VeriListesi />
            </div>



        </div >

    );
};

export default Firmalar;
