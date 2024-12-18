import React from "react";

const KullaniciGruplari = () => {
    return (
        <div>

            <div className="d-flex flex-column justify-content-center align-items-center" >
                {/* Form Section */}
                <div className="row mb-3">
                    <div className="col-md-4" style={{ width: '250px', marginRight: '1rem' }}>
                        <button className="btn btn-primary" >Yeni Kayıt</button>
                    </div>
                    <div className="col-md-4" style={{ width: '150px', marginTop: '1.5rem' }}>
                        <select className="form-select" id="DropDownListServer" defaultValue="arvento11">
                            <option value="config">config</option>
                            <option value="arvento1">arvento1</option>
                            <option value="arvento11">arvento11</option>
                        </select>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="table-responsive" style={{ width: '550px' }}>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="bg-secondary text-light">#</th>
                                <th className="bg-secondary text-light ">Ana Grup</th>
                                <th className="bg-secondary text-light ">Kullanıcı Grubu</th>
                                <th className="bg-secondary text-light ">Kayıt Tarihi</th>
                                <th className="bg-secondary text-light ">Açıklama</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr>
                                <td>1</td>
                                <td>Grup 1</td>
                                <td>Kullanıcı Grubu 1</td>
                                <td>01/01/2024</td>
                                <td>Örnek Açıklama</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Grup 2</td>
                                <td>Kullanıcı Grubu 2</td>
                                <td>15/08/2022</td>
                                <td>arvento</td>
                            </tr>
                            {/* Diğer satırlar buraya eklenebilir */}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Section */}
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link">İlk</a>
                        </li>
                        <li className="page-item disabled">
                            <a className="page-link">Önceki</a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#2">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#3">3</a>
                        </li>
                        {/* Daha fazla sayfa numaraları buraya eklenebilir */}
                        <li className="page-item">
                            <a className="page-link" href="#next">Sonraki</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#last">Son</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default KullaniciGruplari;
