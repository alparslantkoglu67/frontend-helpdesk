import React from 'react';

const CihazSunucuEslestirmeleri = () => {
    return (
        <div>

            <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginTop: '5rem' }}>


                <table id="grid_DXMainTable" className="table table-bordered table-hover" style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th scope="col" className="bg-secondary text-light ">Cihaz No</th>
                            <th scope="col" className="bg-secondary text-light ">Sunucu Adı</th>
                            <th scope="col" className="bg-secondary text-light ">Sunucu IP</th>
                            <th scope="col" className="bg-secondary text-light ">Sunucu Port</th>
                            <th scope="col" className="bg-secondary text-light ">APN</th>
                            <th scope="col" className="bg-secondary text-light ">Aktif</th>
                            <th scope="col" className="bg-secondary text-light ">Sunucu Grubu</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* Burada veri satırlarını haritalamak için bir fonksiyon kullanabilirsiniz */}
                        {/* Örnek veri satırı */}
                        <tr>
                            <td>001</td>
                            <td>Sunucu1</td>
                            <td>192.168.1.1</td>
                            <td>8080</td>
                            <td>APN1</td>
                            <td>Evet</td>
                            <td>Grup1</td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Sunucu1</td>
                            <td>192.168.1.1</td>
                            <td>8080</td>
                            <td>APN1</td>
                            <td>Evet</td>
                            <td>Grup1</td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Sunucu1</td>
                            <td>192.168.1.1</td>
                            <td>8080</td>
                            <td>APN1</td>
                            <td>Evet</td>
                            <td>Grup1</td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Sunucu1</td>
                            <td>192.168.1.1</td>
                            <td>8080</td>
                            <td>APN1</td>
                            <td>Evet</td>
                            <td>Grup1</td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Sunucu1</td>
                            <td>192.168.1.1</td>
                            <td>8080</td>
                            <td>APN1</td>
                            <td>Evet</td>
                            <td>Grup1</td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Sunucu1</td>
                            <td>192.168.1.1</td>
                            <td>8080</td>
                            <td>APN1</td>
                            <td>Evet</td>
                            <td>Grup1</td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Sunucu1</td>
                            <td>192.168.1.1</td>
                            <td>8080</td>
                            <td>APN1</td>
                            <td>Evet</td>
                            <td>Grup1</td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Sunucu1</td>
                            <td>192.168.1.1</td>
                            <td>8080</td>
                            <td>APN1</td>
                            <td>Evet</td>
                            <td>Grup1</td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Sunucu1</td>
                            <td>192.168.1.1</td>
                            <td>8080</td>
                            <td>APN1</td>
                            <td>Evet</td>
                            <td>Grup1</td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Sunucu1</td>
                            <td>192.168.1.1</td>
                            <td>8080</td>
                            <td>APN1</td>
                            <td>Evet</td>
                            <td>Grup1</td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Sunucu1</td>
                            <td>192.168.1.1</td>
                            <td>8080</td>
                            <td>APN1</td>
                            <td>Evet</td>
                            <td>Grup1</td>
                        </tr>

                        {/* Daha fazla satır eklemek için yukarıdaki yapıyı kopyalayabilirsiniz */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CihazSunucuEslestirmeleri;
