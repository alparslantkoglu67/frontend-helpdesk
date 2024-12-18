import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import SubNavbar from './SubNavbar.jsx';
import './MainPage.css';
import Content from './Content.jsx';

const MainPage = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [subnavbarName, setSubnavbarName] = useState("-");

  const location = useLocation();

  const toggleDropdown = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu);

  };

  const handleSubMenuClick = (menuName) => {
    setSubnavbarName(menuName);
  };

  const renderSubMenu = (menuName, items) => (
    activeMenu === menuName && (

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={`list-group-item submenu ${location.pathname === item.href ? 'active-submenu' : ''}`}
            onClick={() => handleSubMenuClick(item.label)}
          >
            <Link to={item.href}>{item.label}</Link>
          </li>

        ))}

      </ul>

    )
  );

  return (




    <div >

      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />{/* Navbar.jsx */}
      <SubNavbar subnavbarName={subnavbarName} isSidebarOpen={isSidebarOpen} />{/* SubNavbar.jsx */}




      <div>{/* Sidebar Açma Kapatma Butonu*/}
        <a onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? (
            /* Sidebar Açık */
            <div>
              <div className="toggle-button">
                <svg
                  className={`menu-icon ${isSidebarOpen ? 'open' : ''}`}
                  width="40px"
                  height="40px"
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(180)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="4.8"
                  >
                    <path
                      d="M21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15Z"
                      stroke="#000000"
                      strokeWidth="0.864"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M14.9707 2V22"
                      stroke="#000000"
                      strokeWidth="0.864"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M7.9707 9.43994L10.5307 11.9999L7.9707 14.5599"
                      stroke="#000000"
                      strokeWidth="0.864"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          ) : (
            /* Sidebar Kapalı */
            <div>
              <div className="toggle-button" >
                <svg
                  className={`menu-icon ${!isSidebarOpen ? 'close' : ''}`}
                  width="40px"
                  height="40px"
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="4.8"
                  >
                    <path
                      d="M21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15Z"
                      stroke="#000000"
                      strokeWidth="0.864"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M14.9707 2V22"
                      stroke="#000000"
                      strokeWidth="0.864"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M7.9707 9.43994L10.5307 11.9999L7.9707 14.5599"
                      stroke="#000000"
                      strokeWidth="0.864"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          )}
        </a>
      </div>



      <div className="container-fluid">

        {isSidebarOpen ? (
          //Sidebar Açıkken
          <div className="row align-items-start">
            <div className={`col-1 sdbar   ${isSidebarOpen ? 'open' : ''}`}>

              <div className="sidebar">


                {/* Anasayfa */}
                <ul className="list-group mt-2">
                  <li className="list-group-item" onClick={() => {
                    toggleDropdown('anasayfa')


                  }} style={{ cursor: 'pointer', }}>
                    <span className="">Anasayfa</span>
                  </li>
                </ul>
                {renderSubMenu('anasayfa', [
                  { label: 'Anasayfa (Açılış Sayfası)', href: '/anasayfa/anasayfa' },
                ])}

                {/* Sorgulama İşlemleri */}
                <ul className="list-group mt-2">
                  <li className="list-group-item" onClick={() => toggleDropdown('sorgulama')} style={{ cursor: 'pointer' }}>
                    <span className="">Sorgulama İşlemleri</span>
                  </li>
                </ul>
                {renderSubMenu('sorgulama', [
                  { label: 'Kullanıcı Sorgulama Ekranı', href: '/sorgulama/kullanici-sorgulama' },
                  { label: 'Cihaz Sorgulama Ekranı', href: '/sorgulama/cihaz-sorgulama' },
                  { label: 'Kontak Açıldı / Kapandı', href: '/sorgulama/kontak-acildi-kapandi' },
                  { label: 'Araç Arama', href: '/sorgulama/arac-arama' },
                  { label: 'Cihaz Hattı Sorgulama Ekranı', href: '/sorgulama/cihaz-hatti-sorgulama' },
                  { label: 'Takograf Montaj', href: '/sorgulama/takograf-montaj' },
                  { label: 'AUX - VDM Sorgulama', href: '/sorgulama/aux-vdm-sorgulama' },
                  { label: 'Web Servis Sorgulama Ekranı', href: '/sorgulama/web-servis-sorgulama' },
                  { label: 'Sıcaklık Sensörü Eşleştirme', href: '/sorgulama/sicaklik-sensoru-sorgulama' }
                ])}

                {/* Kalibrasyon İşlemleri */}
                <ul className="list-group mt-2">
                  <li className="list-group-item" onClick={() => toggleDropdown('kalibrasyon')} style={{ cursor: 'pointer' }}>
                    <span className="">Kalibrasyon İşlemleri</span>
                  </li>
                </ul>
                {renderSubMenu('kalibrasyon', [
                  { label: 'Yakıt Seviye Sensörü Kalibrasyonu', href: '/kalibrasyon/yakit-seviye-sensoru' },

                ])}
                {/* Motat Helper */}
                <ul className="list-group mt-2">
                  <li className="list-group-item" onClick={() => toggleDropdown('motathelper')} style={{ cursor: 'pointer' }}>
                    <span className="">Motat Helper</span>
                  </li>
                </ul>
                {renderSubMenu('motathelper', [
                  { label: 'Firmalar', href: '/motathelper/firmalar' },
                  { label: 'Sorgulama', href: '/motathelper/sorgulama' },
                  { label: 'Bildirim', href: '/motathelper/bildirim' },
                  { label: 'Yük Boşaltma', href: '/motathelper/yuk-bosaltma' },
                  { label: 'Tablet Hareketleri', href: '/motathelper/tablet-hareketleri' },
                ])}
                {/* Arvento Haberleşme Sunucusu */}
                <ul className="list-group mt-2">
                  <li className="list-group-item" onClick={() => toggleDropdown('haberlesme')} style={{ cursor: 'pointer' }}>
                    <span className="">Arvento Haberleşme Sunucusu</span>
                  </li>
                </ul>
                {renderSubMenu('haberlesme', [
                  { label: 'Arvento Haberleşme Sunucusu Logları', href: '/arventohaberlesme/sunucu-loglari' },
                  { label: 'Arvento Haberleşme Sunucusu Cihaz Durumları', href: '/arventohaberlesme/cihaz-durumlari' },

                ])}
                {/* Kullanıcı Yönetimi */}
                <ul className="list-group mt-2">
                  <li className="list-group-item" onClick={() => toggleDropdown('kyonetim')} style={{ cursor: 'pointer' }}>
                    <span className="">Kullanıcı Yönetimi</span>
                  </li>
                </ul>
                {renderSubMenu('kyonetim', [
                  { label: 'Kullanıcı Grupları', href: '/kyonetimi/kullanici-gruplari' },
                  { label: 'Kullanıcı Cihaz Eşleştirmeleri', href: '/kyonetimi/cihaz-eslestirmeleri' },
                  { label: 'Cihaz-Sunucu Eşleştirmeleri', href: '/kyonetimi/cihaz-sunucu-eslestirmeleri' },
                  { label: 'Yetki Seviyeleri', href: '/kyonetimi/yetki-seviyeleri' },
                  { label: 'Kullanıcı Rapor Yetkileri', href: '/kyonetimi/kullanici-rapor-yetkileri' },

                ])}
                {/* Görüş ve Öneri */}
                <ul className="list-group mt-2">
                  <li className="list-group-item" onClick={() => toggleDropdown('kgorus')} style={{ cursor: 'pointer' }}>
                    <span className="">Kullanıcı Görüş ve Önerileri</span>
                  </li>
                </ul>
                {renderSubMenu('kgorus', [
                  { label: 'Kullanıcı Görüş ve Önerileri', href: 'kgorusoneri/kullanici-gorus-ve-oneri' },

                ])}
                {/* E-posta İşlemleri */}
                <ul className="list-group mt-2">
                  <li className="list-group-item" onClick={() => toggleDropdown('eposta')} style={{ cursor: 'pointer' }}>
                    <span className="">E-Posta İşlemleri</span>
                  </li>
                </ul>
                {renderSubMenu('eposta', [
                  { label: 'E-Posta Onay Listesi', href: '/eposta/eposta-onay-listesi' },
                  { label: 'E-Posta Kara Listesi', href: '/eposta/eposta-kara-listesi' },
                  { label: 'Periyodik Rapor Tanımları', href: '/eposta/periyodik-rapor-tanimlari' },
                  { label: 'Periyodik Rapor Gönderim Geçmişi', href: '/eposta/periyodik-rapor-gonderim-gecmisi' },
                  { label: 'E-Posta Alarm Gönderim Geçmişi', href: '/eposta/eposta-alarm-gonderim-gecmisi' },

                ])}
                {/* SMS İşlemleri */}
                <ul className="list-group mt-2">
                  <li className="list-group-item" onClick={() => toggleDropdown('sms')} style={{ cursor: 'pointer' }}>
                    <span className="">SMS İşlemleri</span>
                  </li>
                </ul>
                {renderSubMenu('sms', [
                  { label: 'SMS Kara Listesi', href: '/sms/sms-kara-listesi' },
                  { label: 'SMS Alarm Tanımları', href: '/sms/sms-alarm-tanimlari' },
                  { label: 'SMS Alarm Gönderim Geçmişi', href: '/sms/sms-alarm-gonderim-gecmisi' },

                ])}
                {/* HELPDESK İşlemleri */}
                <ul className="list-group mt-2">
                  <li className="list-group-item" onClick={() => toggleDropdown('helpDesk')} style={{ cursor: 'pointer' }}>
                    <span className="">HelpDesk İşlemler</span>
                  </li>
                </ul>
                {renderSubMenu('helpDesk', [
                  { label: 'HelpDesk Kullanıcılar', href: '/helpdesk/helpdesk-kullanicilar' },
                  { label: 'HelpDesk Kullanıcı Aktiviteleri', href: '/helpdesk/helpdesk-kullanici-aktiviteleri' },
                  { label: 'HelpDesk Şifre Değiştir', href: 'helpdesk/helpdesk-sifre-degistir' },

                ])}
                {/* Çıkış */}
                <ul className="list-group mt-2">
                  <li className="list-group-item" onClick={() => toggleDropdown('cikis')} style={{ cursor: 'pointer' }}>
                    <span className="">Çıkış</span>
                  </li>
                </ul>
                {renderSubMenu('cikis', [
                  { label: 'Çıkış', href: '/cikis/cikis' },

                ])}
              </div>


            </div>
            <div className={`col-9 content  ${isSidebarOpen ? 'open' : ''}`} style={{ paddingTop: '3rem', }}>

              <div >
                <Content />

              </div>
            </div>
          </div>

        )

          :
          //Sidebar Kapalıyken
          (

            <div className="row">

              <div className={`col-1 sdbar  ${isSidebarOpen ? '' : 'close'}`}>

                <div className="sidebar">


                  {/* Anasayfa */}
                  <ul className="list-group mt-2">
                    <li className="list-group-item" onClick={() => {
                      toggleDropdown('anasayfa')


                    }} style={{ cursor: 'pointer', }}>
                      <span className="">Anasayfa</span>
                    </li>
                  </ul>
                  {renderSubMenu('anasayfa', [
                    { label: 'Anasayfa (Açılış Sayfası)', href: '/anasayfa/anasayfa' },
                  ])}

                  {/* Sorgulama İşlemleri */}
                  <ul className="list-group mt-2">
                    <li className="list-group-item" onClick={() => toggleDropdown('sorgulama')} style={{ cursor: 'pointer' }}>
                      <span className="">Sorgulama İşlemleri</span>
                    </li>
                  </ul>
                  {renderSubMenu('sorgulama', [
                    { label: 'Kullanıcı Sorgulama Ekranı', href: '/sorgulama/kullanici-sorgulama' },
                    { label: 'Cihaz Sorgulama Ekranı', href: '/sorgulama/cihaz-sorgulama' },
                    { label: 'Kontak Açıldı / Kapandı', href: '/sorgulama/kontak-acildi-kapandi' },
                    { label: 'Araç Arama', href: '/sorgulama/arac-arama' },
                    { label: 'Cihaz Hattı Sorgulama Ekranı', href: '/sorgulama/cihaz-hatti-sorgulama' },
                    { label: 'Takograf Montaj', href: '/sorgulama/takograf-montaj' },
                    { label: 'AUX - VDM Sorgulama', href: '/sorgulama/aux-vdm-sorgulama' },
                    { label: 'Web Servis Sorgulama Ekranı', href: '/sorgulama/web-servis-sorgulama' },
                    { label: 'Sıcaklık Sensörü Eşleştirme', href: '/sorgulama/sicaklik-sensoru-sorgulama' }
                  ])}

                  {/* Kalibrasyon İşlemleri */}
                  <ul className="list-group mt-2">
                    <li className="list-group-item" onClick={() => toggleDropdown('kalibrasyon')} style={{ cursor: 'pointer' }}>
                      <span className="">Kalibrasyon İşlemleri</span>
                    </li>
                  </ul>
                  {renderSubMenu('kalibrasyon', [
                    { label: 'Yakıt Seviye Sensörü Kalibrasyonu', href: '/kalibrasyon/yakit-seviye-sensoru' },

                  ])}
                  {/* Motat Helper */}
                  <ul className="list-group mt-2">
                    <li className="list-group-item" onClick={() => toggleDropdown('motathelper')} style={{ cursor: 'pointer' }}>
                      <span className="">Motat Helper</span>
                    </li>
                  </ul>
                  {renderSubMenu('motathelper', [
                    { label: 'Firmalar', href: '/motathelper/firmalar' },
                    { label: 'Sorgulama', href: '/motathelper/sorgulama' },
                    { label: 'Bildirim', href: '/motathelper/bildirim' },
                    { label: 'Yük Boşaltma', href: '/motathelper/yuk-bosaltma' },
                    { label: 'Tablet Hareketleri', href: '/motathelper/tablet-hareketleri' },
                  ])}
                  {/* Arvento Haberleşme Sunucusu */}
                  <ul className="list-group mt-2">
                    <li className="list-group-item" onClick={() => toggleDropdown('haberlesme')} style={{ cursor: 'pointer' }}>
                      <span className="">Arvento Haberleşme Sunucusu</span>
                    </li>
                  </ul>
                  {renderSubMenu('haberlesme', [
                    { label: 'Arvento Haberleşme Sunucusu Logları', href: '/arventohaberlesme/sunucu-loglari' },
                    { label: 'Arvento Haberleşme Sunucusu Cihaz Durumları', href: '/arventohaberlesme/cihaz-durumlari' },

                  ])}
                  {/* Kullanıcı Yönetimi */}
                  <ul className="list-group mt-2">
                    <li className="list-group-item" onClick={() => toggleDropdown('kyonetim')} style={{ cursor: 'pointer' }}>
                      <span className="">Kullanıcı Yönetimi</span>
                    </li>
                  </ul>
                  {renderSubMenu('kyonetim', [
                    { label: 'Kullanıcı Grupları', href: '/kyonetimi/kullanici-gruplari' },
                    { label: 'Kullanıcı Cihaz Eşleştirmeleri', href: '/kyonetimi/cihaz-eslestirmeleri' },
                    { label: 'Cihaz-Sunucu Eşleştirmeleri', href: '/kyonetimi/cihaz-sunucu-eslestirmeleri' },
                    { label: 'Yetki Seviyeleri', href: '/kyonetimi/yetki-seviyeleri' },
                    { label: 'Kullanıcı Rapor Yetkileri', href: '/kyonetimi/kullanici-rapor-yetkileri' },

                  ])}
                  {/* Görüş ve Öneri */}
                  <ul className="list-group mt-2">
                    <li className="list-group-item" onClick={() => toggleDropdown('kgorus')} style={{ cursor: 'pointer' }}>
                      <span className="">Kullanıcı Görüş ve Önerileri</span>
                    </li>
                  </ul>
                  {renderSubMenu('kgorus', [
                    { label: 'Kullanıcı Görüş ve Önerileri', href: 'kgorusoneri/kullanici-gorus-ve-oneri' },

                  ])}
                  {/* E-posta İşlemleri */}
                  <ul className="list-group mt-2">
                    <li className="list-group-item" onClick={() => toggleDropdown('eposta')} style={{ cursor: 'pointer' }}>
                      <span className="">E-Posta İşlemleri</span>
                    </li>
                  </ul>
                  {renderSubMenu('eposta', [
                    { label: 'E-Posta Onay Listesi', href: '/eposta/eposta-onay-listesi' },
                    { label: 'E-Posta Kara Listesi', href: '/eposta/eposta-kara-listesi' },
                    { label: 'Periyodik Rapor Tanımları', href: '/eposta/periyodik-rapor-tanimlari' },
                    { label: 'Periyodik Rapor Gönderim Geçmişi', href: '/eposta/periyodik-rapor-gonderim-gecmisi' },
                    { label: 'E-Posta Alarm Gönderim Geçmişi', href: '/eposta/eposta-alarm-gonderim-gecmisi' },

                  ])}
                  {/* SMS İşlemleri */}
                  <ul className="list-group mt-2">
                    <li className="list-group-item" onClick={() => toggleDropdown('sms')} style={{ cursor: 'pointer' }}>
                      <span className="">SMS İşlemleri</span>
                    </li>
                  </ul>
                  {renderSubMenu('sms', [
                    { label: 'SMS Kara Listesi', href: '/sms/sms-kara-listesi' },
                    { label: 'SMS Alarm Tanımları', href: '/sms/sms-alarm-tanimlari' },
                    { label: 'SMS Alarm Gönderim Geçmişi', href: '/sms/sms-alarm-gonderim-gecmisi' },

                  ])}
                  {/* HELPDESK İşlemleri */}
                  <ul className="list-group mt-2">
                    <li className="list-group-item" onClick={() => toggleDropdown('helpDesk')} style={{ cursor: 'pointer' }}>
                      <span className="">HelpDesk İşlemler</span>
                    </li>
                  </ul>
                  {renderSubMenu('helpDesk', [
                    { label: 'HelpDesk Kullanıcılar', href: '/helpdesk/helpdesk-kullanicilar' },
                    { label: 'HelpDesk Kullanıcı Aktiviteleri', href: '/helpdesk/helpdesk-kullanici-aktiviteleri' },
                    { label: 'HelpDesk Şifre Değiştir', href: 'helpdesk/helpdesk-sifre-degistir' },

                  ])}
                  {/* Çıkış */}
                  <ul className="list-group mt-2">
                    <li className="list-group-item" onClick={() => toggleDropdown('cikis')} style={{ cursor: 'pointer' }}>
                      <span className="">Çıkış</span>
                    </li>
                  </ul>
                  {renderSubMenu('cikis', [
                    { label: 'Çıkış', href: '/cikis/cikis' },

                  ])}
                </div>


              </div>

              <div className={`col-9 content  ${isSidebarOpen ? '' : 'close'}`} style={{ paddingTop: '3rem', }}>
                <Content />

              </div>





            </div>)}
      </div>
    </div >




























  );
};

export default MainPage;
