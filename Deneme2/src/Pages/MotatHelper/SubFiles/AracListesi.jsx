import React from 'react';

const AracListesi = () => {
    const vehicles = [
        { licensePlate: '16ABC1033333333333333333333', deviceNo: '177563', state: 'Onaylıııııııııııııı' },
        { licensePlate: '16AKM773', deviceNo: '28F33D7E0C00005B', state: 'Onaylı' },
        { licensePlate: '16AND648', deviceNo: '123456', state: 'Onaylı' }, // Diğer araçlar buraya eklenebilir
    ];

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="vehicleGridGroup">
                <div className="vehicleGridInfo text-center">
                    Sadece kullanıcıya ait cihazlar görüntülenmektedir.
                </div>
                <div className="vehicleListGrid" >
                    <div className="dx-datagrid">
                        <div className="dx-toolbar">
                            <div className="dx-toolbar-items-container">
                                <div className="dx-toolbar-center" >
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ara..."
                                        aria-label="Search in data grid"
                                    />
                                </div>
                            </div>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="bg-primary text-light">Plaka / LicensePlate</th>
                                    <th className="bg-primary text-light">Cihaz No / Device No</th>
                                    <th className="bg-primary text-light">Durum / State</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {vehicles.map((vehicle, index) => (
                                    <tr key={index}>
                                        <td>{vehicle.licensePlate}</td>
                                        <td>{vehicle.deviceNo}</td>
                                        <td>{vehicle.state}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AracListesi;
