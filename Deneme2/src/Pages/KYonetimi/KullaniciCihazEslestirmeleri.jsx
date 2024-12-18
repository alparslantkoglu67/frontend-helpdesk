import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const KullaniciCihazEslestirmeleri = () => {
    const [idUser, setIdUser] = useState('erkan.yildirim');
    const [nodes1, setNodes1] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    const [deviceCount, setDeviceCount] = useState(54);

    const handleAddToList = () => {
        const selectedNodes = Array.from(document.getElementById('idUserNodes1').selectedOptions);
        setNodes2([...nodes2, ...selectedNodes.map(node => node.value)]);
        setNodes1(nodes1.filter(node => !selectedNodes.map(n => n.value).includes(node)));
    };

    const handleRemoveFromList = () => {
        const selectedNodes = Array.from(document.getElementById('idUserNodes2').selectedOptions);
        setNodes1([...nodes1, ...selectedNodes.map(node => node.value)]);
        setNodes2(nodes2.filter(node => !selectedNodes.map(n => n.value).includes(node)));
    };

    const handleShow = () => {
        // Implement show functionality here
        console.log("Göster butonuna basıldı.");
    };

    const handleSave = () => {
        // Implement save functionality here
        console.log("Kaydet butonuna basıldı.");
    };

    return (
        <div>


            <div className="d-flex flex-column justify-content-center align-items-center" >
                <h4 className="font-weight-bold text-danger">Kullanıcılar</h4>
                <input
                    type="text"
                    className="form-control"
                    value={idUser}
                    onChange={(e) => setIdUser(e.target.value)}
                    style={{ width: '300px' }}
                />
                <p><strong>Alt Kullanıcı Sayısı: 145</strong></p>
                <p><strong>Alt Kullanıcısı Olduğu Kullanıcılar: arventodemo, __arventoreporter__, atakan.arslan, ...</strong></p>

                <div className="mt-3">
                    <label className="font-weight-bold text-danger">Cihaz Filtreleme(Mobile terminal)</label>
                    <input type="text" className="form-control" />
                    <p><strong>-</strong></p>
                    <input type="text" className="form-control" />
                </div>
                <div className="mt-3">
                    <label className="font-weight-bold text-danger">Cihaz Filtreleme</label>
                    <input type="text" className="form-control" placeholder="Cihaz ismi" />
                </div>

                <button className="btn btn-primary mt-2" onClick={handleShow} style={{ width: '250px' }}>Göster</button>

                <table className="table table-bordered mt-4">
                    <thead>
                        <tr>
                            <th colSpan="4" className="text-center font-weight-bold">Kullanıcı Cihaz Eşleştirmeleri</th>
                        </tr>
                        <tr>
                            <th>Kullanıcı</th>
                            <th></th>
                            <th>Seçilen Cihazlar</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Kullanıcı:</b> {idUser}</td>
                            <td></td>
                            <td>
                                <select id="idUserNodes2" className="form-control" multiple size="10">
                                    {nodes2.map((node, index) => <option key={index} value={node}>{node}</option>)}
                                </select>
                            </td>
                            <td>
                                <button className="btn btn-success" onClick={handleAddToList}>Ekle &gt;&gt;</button>
                                <br /><br />
                                <button className="btn btn-danger" onClick={handleRemoveFromList}>&lt;&lt; Çıkar</button>
                            </td>

                        </tr>
                        <tr>
                            <td colSpan="2"></td>
                            <td><strong>{deviceCount} adet</strong></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="text-left" >
                                <button className="btn btn-primary" onClick={handleSave} style={{ width: '250px' }}>Kaydet</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default KullaniciCihazEslestirmeleri;
