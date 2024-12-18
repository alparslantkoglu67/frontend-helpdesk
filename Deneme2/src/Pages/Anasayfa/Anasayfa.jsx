import React from 'react';

const Anasayfa = () => {
    const user = {
        username: 'erkan.yildirim',
        loginTime: '01.11.2024 14:01:45',
        ip: '213.153.171.3',
        email: 'erkan.yildirim@arvento.com',
        activities: [
            { type: 'Sisteme Giriş (Firma)', action: 'Kullanıcı: erkan.yildirim', date: '01.11.2024 14:01:45' },
            { type: 'Sisteme Giriş (Firma)', action: 'Kullanıcı: erkan.yildirim', date: '01.11.2024 10:31:27' },
            { type: 'Sistemden Çıkış', action: 'Kullanıcı: erkan.yildirim', date: '31.10.2024 15:34:32' },
            // Daha fazla aktivite burada olabilir
        ],
    };

    return (
        <div className=' justify-content-center align-items-center' >
            <table className="table table-striped table-bordered text-center" >
                <tbody>
                    <tr>
                        <td id="tdUsername" align="center"><b>Kullanıcı:</b> {user.username}</td>
                    </tr>
                    <tr>
                        <td id="tdGirisTarihi" align="center"><b>Sisteme Giriş:</b> {user.loginTime}</td>
                    </tr>
                    <tr>
                        <td id="tdIP" align="center"><b>IP:</b> {user.ip}</td>
                    </tr>
                    <tr>
                        <td id="tdEmail" align="center"><b>Email:</b> {user.email}</td>
                    </tr>
                    <tr>
                        <td align="center">
                            <button
                                className="btn btn-primary"
                                onClick={() => alert('Email güncelleme fonksiyonu!')}
                                style={{ marginRight: "100px", width: '700px', marginLeft: "100px", }}
                            >
                                Güncelle
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="bg-secondary text-light" id="tdKullaniciAktivite" align="center" style={{ fontWeight: 'bold' }}>
                            Kullanım Durumu
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <table className="table table-striped">
                                <thead>
                                    <tr style={{ fontWeight: 'bold', backgroundColor: '#dddddd' }} height="30">
                                        <th className='bg-primary text-light'>Kullanıcı Adı</th>
                                        <th className='bg-primary text-light'>Tür</th>
                                        <th className='bg-primary text-light'>İşlem</th>
                                        <th className='bg-primary text-light'>Kayıt Tarihi</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {user.activities.map((activity, index) => (
                                        <tr key={index}>
                                            <td>{user.username}</td>
                                            <td>{activity.type}</td>
                                            <td>{activity.action}</td>
                                            <td>{activity.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Anasayfa;
