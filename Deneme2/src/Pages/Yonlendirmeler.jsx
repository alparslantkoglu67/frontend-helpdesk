import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './MainPage.jsx'

//
import Anasayfa from './Anasayfa/Anasayfa.jsx';
//
import KullaniciSorgulama from './Sorgulama/KullaniciSorgulama.jsx';
import AracArama from './Sorgulama/AracArama.jsx';
import AUXVDMSorgulama from './Sorgulama/AUXVDMSorgulama.jsx';
import CihazHattiSorgulama from './Sorgulama/CihazHattiSorgulama.jsx';
import CihazSorgulama from './Sorgulama/CihazSorgulama.jsx';
import KontakAcildiKapandi from './Sorgulama/KontakAcildiKapandi.jsx';
import SicaklikSensoru from './Sorgulama/SicaklikSensoru.jsx';
import TakografMontaj from './Sorgulama/TakografMontaj.jsx';
import WebServisSorgulama from './Sorgulama/WebServisSorgulama.jsx';
//
import YakitSeviyeSensoru from './Kalibrasyon/YakitSeviyeSensoru.jsx';
//
import Bildirim from './MotatHelper/Bildirim.jsx';
import Firmalar from './MotatHelper/Firmalar.jsx';
import Sorgulama from './MotatHelper/Sorgulama.jsx';
import TabletHareketleri from './MotatHelper/TabletHareketleri.jsx';
import YukBosaltma from './MotatHelper/YukBosaltma.jsx';
//
import SunucuLoglari from './ArventoHaberlesme/SunucuLoglari.jsx';
import CihazDurumlari from './ArventoHaberlesme/CihazDurumlari.jsx';
//
import CihazSunucuEslestirmeleri from './KYonetimi/CihazSunucuEslestirmeleri.jsx';
import KullaniciCihazEslestirmeleri from './KYonetimi/KullaniciCihazEslestirmeleri.jsx';
import KullaniciGruplari from './KYonetimi/KullaniciGruplari.jsx';
import KullaniciRaporYetkileri from './KYonetimi/KullaniciRaporYetkileri.jsx';
import YetkiSeviyeleri from './KYonetimi/YetkiSeviyeleri.jsx';
//
import KullaniciGorusveOneri from './KGorusOneri/KullaniciGorusveOneri.jsx';
//
import EPostaKaraListesi from './EPosta/EPostaKaraListesi.jsx';
import EPostaOnayListesi from './EPosta/EPostaOnayListesi.jsx';
import EPostsAlarmGonderimGecmisi from './EPosta/EPostsAlarmGonderimGecmisi.jsx';
import PeriyodikRaporGonderimGecmisi from './EPosta/PeriyodikRaporGonderimGecmisi.jsx';
import PeriyodikRaporTanimlari from './EPosta/PeriyodikRaporTanimlari.jsx';
//
import SMSKaraListesi from './SMS/SMSKaraListesi.jsx';
import SMSAlarmTanimlari from './SMS/SMSAlarmTanimlari.jsx';
import SMSAlarmGonderimGecmisi from './SMS/SMSAlarmGonderimGecmisi.jsx';
//
import HelpDeskKullanicilar from './HelpDesk/HelpDeskKullanicilar.jsx';
import HelpDeskKullaniciAktiviteleri from './HelpDesk/HelpDeskKullaniciAktiviteleri.jsx';
import HelpDeskSifreDegistir from './HelpDesk/HelpDeskSifreDegistir.jsx';
//
import Cikis from './Cikis/Cikis.jsx';













function Yonlendirmeler() {
    return (
        <Routes>
            {/*ANASAYFA ROUTELARI */}
            <Route path="/anasayfa/anasayfa" element={<Anasayfa />} />
            {/*SORGULAMA İŞLEMLERİ ROUTELARI */}

            <Route path="/sorgulama/kullanici-sorgulama" element={<KullaniciSorgulama />} />
            <Route path="/sorgulama/cihaz-sorgulama" element={<CihazSorgulama />} />
            <Route path="/sorgulama/kontak-acildi-kapandi" element={<KontakAcildiKapandi />} />
            <Route path="/sorgulama/arac-arama" element={<AracArama />} />
            <Route path="/sorgulama/cihaz-hatti-sorgulama" element={<CihazHattiSorgulama />} />
            <Route path="/sorgulama/takograf-montaj" element={<TakografMontaj />} />
            <Route path="/sorgulama/aux-vdm-sorgulama" element={<AUXVDMSorgulama />} />
            <Route path="/sorgulama/web-servis-sorgulama" element={<WebServisSorgulama />} />
            <Route path="/sorgulama/sicaklik-sensoru-sorgulama" element={<SicaklikSensoru />} />

            {/*KALİBRASYON İŞLEMLERİ ROUTELARI */}
            <Route path="/kalibrasyon/yakit-seviye-sensoru" element={<YakitSeviyeSensoru />} />

            {/*MOTAT HELPER İŞLEMLERİ ROUTELARI */}
            <Route path="/motathelper/bildirim" element={<Bildirim />} />
            <Route path="/motathelper/firmalar" element={<Firmalar />} />
            <Route path="/motathelper/sorgulama" element={<Sorgulama />} />
            <Route path="/motathelper/tablet-hareketleri" element={<TabletHareketleri />} />
            <Route path="/motathelper/yuk-bosaltma" element={<YukBosaltma />} />

            {/*ARVENTO HABERLEŞME SUNUCUSU İŞLEMLERİ ROUTELARI */}
            <Route path="/arventohaberlesme/sunucu-loglari" element={<SunucuLoglari />} />
            <Route path="/arventohaberlesme/cihaz-durumlari" element={<CihazDurumlari />} />

            {/*KULLANCI YÖNETİMİ ROUTELARI */}
            <Route path="/kyonetimi/cihaz-sunucu-eslestirmeleri" element={<CihazSunucuEslestirmeleri />} />
            <Route path="/kyonetimi/cihaz-eslestirmeleri" element={<KullaniciCihazEslestirmeleri />} />
            <Route path="/kyonetimi/kullanici-gruplari" element={<KullaniciGruplari />} />
            <Route path="/kyonetimi/kullanici-rapor-yetkileri" element={<KullaniciRaporYetkileri />} />
            <Route path="/kyonetimi/yetki-seviyeleri" element={<YetkiSeviyeleri />} />

            {/*KULLANCI GÖRÜŞ VE ÖNERİ ROUTELARI */}
            <Route path="/kgorusoneri/kullanici-gorus-ve-oneri" element={<KullaniciGorusveOneri />} />

            {/*E-POSTA İŞLEMLERİ ROUTELARI */}
            <Route path="/eposta/eposta-onay-listesi" element={<EPostaOnayListesi />} />
            <Route path="/eposta/eposta-kara-listesi" element={<EPostaKaraListesi />} />
            <Route path="/eposta/periyodik-rapor-tanimlari" element={<PeriyodikRaporTanimlari />} />
            <Route path="/eposta/periyodik-rapor-gonderim-gecmisi" element={<PeriyodikRaporGonderimGecmisi />} />
            <Route path="/eposta/eposta-alarm-gonderim-gecmisi" element={<EPostsAlarmGonderimGecmisi />} />

            {/*SMS İŞLEMLERİ ROUTELARI */}
            <Route path="/sms/sms-kara-listesi" element={<SMSKaraListesi />} />
            <Route path="/sms/sms-alarm-tanimlari" element={<SMSAlarmTanimlari />} />
            <Route path="/sms/sms-alarm-gonderim-gecmisi" element={<SMSAlarmGonderimGecmisi />} />

            {/*HELPDESK İŞLEMLER ROUTELARI */}
            <Route path="/helpdesk/helpdesk-kullanicilar" element={<HelpDeskKullanicilar />} />
            <Route path="/helpdesk/helpdesk-kullanici-aktiviteleri" element={<HelpDeskKullaniciAktiviteleri />} />
            <Route path="/helpdesk/helpdesk-sifre-degistir" element={<HelpDeskSifreDegistir />} />

            {/*ÇIKIŞ  ROUTELARI */}
            <Route path="/cikis/cikis" element={<Cikis />} />

            <Route path="/mainpage" element={<MainPage />} />



















        </Routes>
    )
}

export default Yonlendirmeler