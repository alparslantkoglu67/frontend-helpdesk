import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EPostsAlarmGonderimGecmisi = () => {
    return (

        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="row mb-3">
                <div className="col">
                    <form>
                        <div className="row">
                            <div className="col-md-3">
                                <label>Başlangıç Tarihi</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value="04.11.2024"
                                        readOnly
                                        id="CalendarPopup1_textBox"
                                        onClick={() => {/* Calendar popup function */ }}
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => {/* Calendar popup function */ }}
                                        style={{ height: '25px' }}

                                    >
                                        <div style={{ marginTop: '-1rem' }}><p>... </p></div>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label>Bitiş Tarihi</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value="04.11.2024"
                                        readOnly
                                        id="CalendarPopup2_textBox"

                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"

                                        style={{ height: '25px' }}

                                    >
                                        <div style={{ marginTop: '-1rem' }}><p>... </p></div>

                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label>E-Posta</label>
                                <input type="email" className="form-control" id="txtEmail" />
                            </div>
                            <div className="col-md-3 d-flex align-items-end" style={{ marginBottom: '1rem' }}>
                                <button type="submit" className="btn btn-primary" >Ara</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th className="bg-secondary text-light ">E-Posta</th>
                        <th className="bg-secondary text-light  ">Başlık</th>
                        <th className="bg-secondary text-light ">Mesaj</th>
                        <th className="bg-secondary text-light ">Kayıt Tarihi</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {/* Veri satırlarını burada haritalayarak ekleyebilirsiniz */}
                    <tr>
                        <td>example@example.com</td>
                        <td>Örnek Başlık</td>
                        <td>Örnek mesaj içeriği.</td>
                        <td>04.11.2024</td>
                    </tr>
                    <tr>
                        <td>example@example.com</td>
                        <td>Örnek Başlık</td>
                        <td>Örnek mesaj içeriği.</td>
                        <td>04.11.2024</td>
                    </tr>
                    <tr>
                        <td>example@example.com</td>
                        <td>Örnek Başlık</td>
                        <td>Örnek mesaj içeriği.</td>
                        <td>04.11.2024</td>
                    </tr>
                    <tr>
                        <td>example@example.com</td>
                        <td>Örnek Başlık</td>
                        <td>Örnek mesaj içeriği.</td>
                        <td>04.11.2024</td>
                    </tr>
                    <tr>
                        <td>example@example.com</td>
                        <td>Örnek Başlık</td>
                        <td>Örnek mesaj içeriği.</td>
                        <td>04.11.2024</td>
                    </tr>
                    <tr>
                        <td>example@example.com</td>
                        <td>Örnek Başlık</td>
                        <td>Örnek mesaj içeriği.</td>
                        <td>04.11.2024</td>
                    </tr>
                    <tr>
                        <td>example@example.com</td>
                        <td>Örnek Başlık</td>
                        <td>Örnek mesaj içeriği.</td>
                        <td>04.11.2024</td>
                    </tr>

                </tbody>
            </table>
        </div>

    );
};

export default EPostsAlarmGonderimGecmisi;
