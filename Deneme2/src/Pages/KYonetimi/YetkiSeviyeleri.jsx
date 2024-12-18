import React from 'react';

const YetkiSeviyeleri = () => {
    const permissions = [
        { level: 'Administrator', createdBy: 'SYSTEM', date: '07.04.2019 21:11:33' },
        { level: 'Definition + Configuration + Stop Vehicle + Route', createdBy: 'tupras', date: '01.05.2021 20:54:45' },
        { level: 'Definition + Configuration + Stop Vehicle + Route', createdBy: 'cihan9', date: '01.05.2021 20:54:41' },
        { level: 'Demo User', createdBy: 'SYSTEM', date: '07.04.2019 21:11:33' },
        { level: 'Power User', createdBy: 'SYSTEM', date: '07.04.2019 21:11:33' },
        { level: 'Report User', createdBy: 'SYSTEM', date: '07.04.2019 21:11:33' },
        { level: 'Restricted + Building', createdBy: 'SYSTEM', date: '07.04.2019 21:11:33' },
        { level: 'Restricted + DVR Watcher', createdBy: 'SYSTEM', date: '07.04.2019 21:11:33' },
        { level: 'Restricted Report User', createdBy: 'SYSTEM', date: '25.06.2019 15:00:00' },
        { level: 'Restricted + Route', createdBy: 'SYSTEM', date: '07.04.2019 21:11:33' },
        { level: 'Restricted + Stop Vehicle', createdBy: 'SYSTEM', date: '07.04.2019 21:11:33' },
        { level: 'Restricted User', createdBy: 'SYSTEM', date: '07.04.2019 21:11:33' },
        { level: 'Vehicle Tracking + Route History', createdBy: 'SYSTEM', date: '07.04.2019 21:11:33' },
        { level: 'Vehicle Tracking User', createdBy: 'SYSTEM', date: '07.04.2019 21:11:33' },
    ];

    return (
        <div>


            <div className="d-flex flex-column justify-content-center align-items-center">

                <table className="table table-bordered table-hover" style={{ backgroundColor: '#5555bb' }}>
                    <thead style={{ backgroundColor: '#dddddd' }}>
                        <tr>
                            <th className="bg-secondary text-light ">Yetki Seviyesi</th>
                            <th className="bg-secondary text-light ">Kaydeden</th>
                            <th className="bg-secondary text-light ">Kayıt Tarihi</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {permissions.map((permission, index) => (
                            <tr key={index} style={{ backgroundColor: '#eeeeee' }}>
                                <td>{permission.level}</td>
                                <td>{permission.createdBy}</td>
                                <td>{permission.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default YetkiSeviyeleri;
