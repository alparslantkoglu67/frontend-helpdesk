import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VeriListesi = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const data = [
        {
            TKN: '241170718113',
            TDN: '241132513215',
            tibbiAtik: false,
            agırlikMetodu: 'Yükleme Yapıldı',
        },
        {
            TKN: '241108552211',
            TDN: '241137747624',
            tibbiAtik: false,
            agırlikMetodu: 'Yükleme Yapıldı',
        },
        {
            TKN: '241135411743',
            TDN: '241105183128',
            tibbiAtik: false,
            agırlikMetodu: 'Yükleme Yapıldı',
        },
    ];

    const filteredData = data.filter(item =>
        item.TKN.includes(searchTerm) || item.TDN.includes(searchTerm)
    );

    return (
        <div className="p-4">

            <div className="p-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <table className="table table-bordered">
                <thead >
                    <tr >
                        <th className="bg-primary text-light">TKN</th>
                        <th className="bg-primary text-light">TDN</th>
                        <th className="bg-primary text-light">Tıbbi Atık</th>
                        <th className="bg-primary text-light">Ağırlık Metodu</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {filteredData.length > 0 ? (
                        filteredData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.TKN}</td>
                                <td>{row.TDN}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <input type="checkbox" checked={row.tibbiAtik} />
                                </td>
                                <td>{row.agırlikMetodu}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">Veri bulunamadı.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default VeriListesi;
