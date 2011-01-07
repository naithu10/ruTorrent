﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE ==
 * 
 * File Name: tr.js
 * 	Turkish language file.
 * 
 * File Author:
 * 		Turgay Yıldıran (votkalivirgul@gmail)
 */
 
 var theUILang =
 {
 //all used
 kbs				: "kB/s",
 
 
 //Settings window
 
 General			: "Genel",
 Downloads			: "İndirilenler",
 Connection			: "Bağlantı",
 BitTorrent			: "BitTorrent",
 Queueing			: "Kuyruk Ayarları",
 Scheduler			: "Zamanlama Çizelgesi",
 Advanced			: "Gelişmiş",
 Disk_Cache			: "Disk Önbelleği",
 Enable_Web_Interface : "Web Arayüzünü Etkinleştir",
 Authent			: "Doğrulama",
 Username			: "Kullanıcı Adı",
 Password			: "Şifre",
 Enable_Guest_acc	: "Misafir hesabını kullanıcı adıyla etkinleştir",
 Connectivity		: "Bağlanabilirlik",
 Alt_list_port		: "Alternatif dinleme portu (varsayılan bittorent portudur)",
 Rest_access		: "Aşağıdaki IP numaralarının erişimini engelle (Birden fazla girdiyi virgülle ayırın)",
 User_Interface		: "Kullanıcı Arayüzü",
 Confirm_del_torr	: "Torrent(ler)i silerken uyar",
 Update_GUI_every	: "Arayüz yenileme süresi",
 ms					: "ms",
 Alt_list_bckgnd	: "Liste arkaplan rengi",
 Show_speed			: "Hızı Göster",
 Don_t				: "Gösterme",
 In_status_bar		: "Durum Çubuğunda",
 In_title_bar		: "Başlık Çubuğunda",
 Show_cat_start		: "Açılışta kategorileri göster",
 Show_det_start		: "Açılışta ayrıntıları göster",
 Restor_def			: "Varsayılan ayarlara dön",
 When_add_torrent	: "Torrent Eklerken",
 Dnt_start_down_auto: "İndirmeyi otomatik başlatma",
 Other_sett			: "Diğer Ayarlar",
 Append_ut_incompl	: "Tamamlanmamış dosyalara .!ut uzantısını ekle",
 Prealloc_all_files	: "Her dosyanın yerini önceden ayır",
 Prev_stnd_w_act_con: "Eğer aktif torrent(ler) varsa askıda kalma",
 Listening_Port		: "Dinleme Portu",
 Port_f_incom_conns	: "Gelen bağlantılar için kullanılan port",
 Random_Port		: "Rastgele port",
 Rnd_port_torr_start: "rTorrent her açılışında rastgele port seç",
 En_UPnP_mapp		: "UPnP port haritalama aktif",
 Add_torr_mustdie_f	: "rTorrent'i Windows Güvenlik Duvarı Özel Durumlar'a Ekle (Windows XP SP2 veya daha yüksek versiyonlar için)",
 Proxy_Server		: "Vekil Sunucu",
 Type				: "Tür",
 none				: "(hiçbiri)",
 Proxy				: "Vekil",
 Port				: "Port",
 Use_proxy_4_p2p_con: "Kişiden-kişiye bağlantılarda vekil sunucu kullan",
 Bandwidth_Limiting : "Bandgenişliği Sınırlandırma",
 Global_max_upl		: "En yüksek gönderme değeri",
 unlimited			: "sınırsız",
 Alt_down_r_downl	: "İndirilmiyorken gönderme hızı",
 Glob_max_downl		: "En yüksek indirme değeri",
 Num_of_conn		: "Bağlantı Sayısı",
 Glob_max_conn		: "En yüksek bağlantı sayısı",
 Max_conn_peer_torr	: "Torrent başına en yüksek eş bağlantı sayısı",
 Num_upl_slots		: "Torrent başına gönderme yuva sayısı",
 Extra_ulslots		: "Gönderme hızı < %90 olduğunda ek gönderme yuvaları kullan",
 Add_bittor_featrs	: "İsteğe Bağlı BitTorrent Özellikleri",
 En_DHT_ntw			: "DHT ağını etkinleştir",
 Ask_scrape			: "İzleyiciden kullanıcı bilgilerini iste",
 En_DHT_new_torrs	: "Yeni torrentler için DHT'yi etkinleştir",
 Peer_exch			: "Eş Değişimi",
 Ip_report_track	: "İzleyiciye bildirilecek IP/Sunucu adı",
 Protocol_enc		: "Protokol Şifreleme",
 Outgoing			: "Giden",
 Disabled			: "Devre dışı",
 Enabled			: "Etkin",
 Forced				: "Zorlu",
 All_inc_legacy_conn: "Gelen kalıntı bağlantılara izin ver",
 Queue_sett			: "Kuyruk Ayarları",
 Max_n_act_torrs	: "En fazla aktif torrent sayısı (indirme veya gönderme)",
 Max_num_act_downl	: "En fazla aktif indirme sayısı",
 Seed_while			: "Kaynak [Varsayılan değerler]",
 Ratio_is			: "Ratio",
 or_time_is			: " % ya da kaynak süresi ",
 Ignore				: "(Yoksay)",
 nin_min			: "90 dakika",
 two_h				: "2 saat",
 three_h			: "3 saat",
 four_h				: "4 saat",
 five_h				: "5 saat",
 six_h				: "6 saat",
 seven_h			: "7 saat",
 eight_h			: "8 saat",
 nine_h				: "9 saat",
 ten_h				: "10 saat",
 twelve_h			: "12 saat",
 sixteen_h			: "16 saat",
 twenty_h			: "20 saat",
 tw_four_h			: "24 saat",
 thirty_h			: "30 saat",
 thirty_six_h		: "36 saat",
 forty_eight_h		: "48 saat",
 sixty_h			: "60 saat",
 sev_two_h			: "72 saat",
 nin_six_h			: "96 saat",
 Seed_prior			: "Gönderme görevleri indirme görevlerinden daha yüksek önceliğe sahip",
 When_torr_reach	: "Torrent gönderme hedefine ulaştığında",
 Limit_upl_rate		: "Gönderme hızı sınırı (kB/s): [0: dur]",
 En_shedul			: "Zamanlayıcı Etkin",
 Shed_sett			: "Zamanlayıcı Ayarları",
 Lim_upl_rate		: "Sınırlı gönderme hızı",
 Lim_dow_rate		: "Sınırlı indirme hızı",
 Dis_DHT_when_t_off	: "Kapanırken DHT'yi devre dışı bırak ",
 Disc_cahe			: "Disk Önbelleği",
 Disc_cahe_bla_bla	: "Disk önbelleği sık kullanılan verileri bellekte tutmakta kullanılır, böylece sabit diske yazma ve sabit diskten okumayı azaltır. rTorrent normalde önbelleği otomatik ayarlar, bu durumu değiştirmek istiyorsanız bu ayarları değiştirebilirsiniz.",
 Overwr_d_cahe_au	: "Otomatik önbellek boyutunun üzerine yaz ve boyutu elle ayarla",
 MB					: "MB",
 Red_mem_usage		: "Önbellek gerekli değilken bellek kullanımını düşür",
 Adv_cache_sett		: "Gelişmiş Önbellek Ayarları",
 En_cach_disc		: "Disk'e Yazarken Önbellek Aktif",
 Wr_out_ever_2_min	: "Dokunulmamış blokları her 2 dakikada bir yaz",
 Wr_immed			: "Biten parçaları hemen yaz",
 En_cah_disc_read	: "Disk'ten Okumalar İçin Önbellek Aktif",
 Turn_off_w_read	: "Eğer gönderme hızı yavaşsa önbellek okumayı kapat",
 Rem_old_from_cahe	: "Eski blokları önbellekten sil",
 Increase_autom_cach: "Önbellek boşaltılırken otomatik önbellek boyutunu arttır",
 Advanced			: "Gelişmiş",
 Advanced_label		: "Gelişmiş Seçenekler [UYARI: Değiştirmeyin!]",
 Cancel				: "İptal",
 uTorrent_settings	: "rTorrent Ayarları",
 
// Main window
 Doesnt_support		: "ruTorrent tarayıcınızı desteklemiyor.",
 Name				: "Dosya İsmi",
 Status				: "Durum",
 Size				: "Boyut",
 Done				: "Tamamlandı",
 Downloaded			: "İndirilmiş",
 Uploaded			: "Gönderilmiş",
 Ratio				: "Ratio",
 DL					: "DL",
 UL					: "UL",
 ETA				: "Kalan Süre",
 Label				: "Etiket",
 Peers				: "Eşler",
 Seeds				: "Ortaklar",
 Avail				: "Ulaşıl.",
 Remaining			: "Kalan",
 Priority			: "Öncelik",
 Download			: "Yükleme",
 Upload				: "Gönderme",
 Not_torrent_file	: "Bu geçerli bir torrent dosyası değildir.",
 Pausing			: "Duraklatılıyor",
 Seeding			: "Ortalanıyor",
 Downloading		: "Yükleniyor",
 Checking			: "Kontrol ediliyor",
 Error				: "Hata",
 Queued				: "Sırada",
 Finished			: "Tamamlandı",
 Stopped			: "Durdu",
 Request_timed_out	: "İstek zaman aşımına uğradı.",
 
 Force_Start		: "Zorlu Başlat",
 Start				: "Başlat",
 Pause				: "Duraklat",
 Stop				: "Durdur",
 Force_recheck		: "Tekrar Kontrol Et",
 New_label			: "Yeni etiket...",
 Remove_label		: "Etiketi kaldır",
 Labels				: "Etiketler",
 Remove				: "Kaldır",
 Delete_data		: "Veriyi Sil",
 Remove_and			: "Kaldır Ve",
 Details			: "Ayrıntılar...",
 Properties			: "Özellikler...",
 of					: "tanesine", 		//this two creates line 
 connected			: "içinden bağlı",	//  XX of YY connected
 High_priority		: "Yüksek",
 Normal_priority	: "Normal",
 Low_priority		: "Düşük",
 Dont_download		: "İndirme",
 Shure_restore_UI	: "Kullanıcı arayüzünü yenilemek istediğinize emin misiniz?",
 Reloading			: "Yeniden yükleniyor...",
 Name				: "İsim",
 Date_				: "Tarih",
 Files				: "Dosyalar",
 Logger				: "Rapor",
 
 s					: "s",    // part of "KB/s"
 bytes				: "bytes",
 KB					: "KB",
 MB					: "MB",
 GB					: "GB",
 TB					: "TB",
 PB					: "PB",
 
 // main WND s
 Loading			: "Bekleyiniz...",
 Torrent_file		: "Torrent dosyası",
 Torrent_URL		: "Torrent URL",
 Cookies			: "Cookie'ler",
 RSS_Downloader		: "RSS Yükleyici",
 Torrent_properties	: "Torrent Özellikleri",
 Trackers			: "İzleyiciler",
 Max_down_rate		: "En yüksek indirme değeri",
 Max_upl_rate		: "En yüksek yükleme değeri",
 Bandwidth_sett		: "Bandgenişliği Özellikleri",
 Number_ul_slots	: "Gönderme yuva sayısı",
 Override_default	: "Varsayılan ayarların üzerine yaz",
 Initial_seed		: "Öncelikli Kaynak",
 Enable_DHT			: "DHT Etkin",
 Peer_ex			: "Eş Değişimi",
 About				: "Hakkında",
 Enter_label_prom	: "Seçtiğiniz torrentler için yeni bir etiket giriniz",
 Remove_torrents	: "Torrent(ler)i Kaldır",
 Rem_torrents_prompt: "Torrent(ler)i kaldırmak istediğinizden emin misiniz?",
 All				: "Toplam",
 Active				: "Aktif",
 Inactive			: "Pasif",
 No_label			: "Etiket Yok",
 Transfer			: "Aktarım",
 Time_el			: "Geçen Süre",
 Remaining			: "Kalan",
 Share_ratio		: "Ratio Oranı",
 Down_speed			: "İndirme Hızı",
 Down_limit			: "İnd. Sınırı",
 Ul_speed			: "Yükleme Hızı",
 Ul_limit			: "Yük. Sınırı",
 Wasted				: "Boşa Giden",
 Tracker			: "İzleyici",
 Track_URL			: "İzleyici URL",
 Track_status		: "İzleyici Durumu",
 Update_in			: "Sonraki Güncelleme",
 DHT_status			: "DHT Durumu",
 Save_as			: "Kaydedilen Yer",
 Tot_size			: "Toplam Boyut",
 Created_on			: "Oluşturulma Tarihi",
 Comment			: "Yorum",
 
 
 //buttons
 add_button			: "Dosya Ekle",
 add_url			: "URL Ekle",
 ok				: "   Tamam   ",
 Cancel				: " İptal ",
 no				: "   Hayır   ",
 
 mnu_add			: "Torrent Ekle",
 mnu_remove			: "Kaldır",
 mnu_start			: "Başlat",
 mnu_pause			: "Duraklat",
 mnu_stop			: "Durdur",
 mnu_rss			: "RSS Yükleyici",
 mnu_settings			: "Ayarlar",
 mnu_search			: "Arama",
 mnu_lang			: "Dil",
 
 //Other variables added by spide
 torrent_add			: "Torrent Ekle", /*Caption of torrent add box*/
 time_w				: "h ", /*for x weeks*/
 time_d				: "g ", /*for x days remaining*/
 time_h				: "s ", /*for x hours remaining*/
 time_m				: "d ", /*for x minutes remaining*/
 time_s				: "n ", /*for x seconds remaining*/

 //Novik's addition
 Base_directory    		: "Klasör",
 Number_Peers_min		: "En az eş sayısı",
 Number_Peers_max		: "En fazla eş sayısı",
 Tracker_Numwant		: "İstenen eş sayısı",
 Number_Peers_For_Seeds_min	: "En az ortak sayısı",
 Number_Peers_For_Seeds_max	: "En fazla ortak sayısı",
 Enable_port_open		: "Dinleme Portunu açın",
 dht_port			: "UDP portunu DHT için kullanın",
 Ather_Limiting			: "Diğer sınırlandırmalar",
 Number_dl_slots		: "İndirme yuva sayısı",
 Glob_max_memory		: "En fazla hafıza kullanımı",
 Glob_max_files			: "En fazla açık dosya sayısı", 
 Glob_max_http			: "En fazla açık http bağlantı sayısı",
 Glob_max_sockets		: "En fazla açık socket sayısı",
 Ather_sett			: "Diğer",
 Directory_For_Dl		: "Yüklemeler için varsayılan klasör",
 Check_hash			: "Yüklemeden sonra dosya doğrulaması yap",
 Hash				: "Doğrulama",
 IsOpen				: "Açık",
 DisableTracker			: "Devre dışı",
 EnableTracker			: "Etkin",
 ClientVersion			: "İstemci",
 Flags				: "Bayrak",
 ReqTimeout			: "Talep zaman aşımı",
 GetTrackerMessage		: "İzleyiciden mesaj aldınız",
 Help				: "Yardım",
 PHPDoesnt_enabled		: "Web sunucunuz PHP desteği sağlamıyor. Bunu düzeltiniz ve tekrar deneyiniz.",
 Speed				: "Hız",
 Dont_add_tname			: "Torrent ismiyle klasör ismi aynı olmasın",
 Free_Disk_Space		: "Boş disk alanı",
 badXMLRPCVersion		: "rTorrent, i8 desteği olmayan eski bir xmlrpc-c kütüphanesi versiyonuyla derlenmiş. Versiyon en az 1.11 olmalıdır. Bazı özellikler çalışmayacaktır.",
 badLinkTorTorrent		: "rTorrent bağlantısında hata. rTorrent'in çalıştığından emin olun. rTorrent ayar dosyası config.php'deki $scgi_port ve $scgi_host ayarlarını kontrol edin.",
 badUploadsPath			: "Web sunucu 'torrents' klasörüne okuma/yazma/çalıştırma erişimi vermemektedir. Bu durumda ruTorrent'e torrent ekleyemezsiniz. Chomod ayarlarını kontrol ediniz.",
 badSettingsPath		: "Web sunucu 'settings' klasörüne okuma/yazma/çalıştırma erişimi vermemektedir. Bu durumda ruTorrent ayarlarını değiştiremezsiniz. Chmod ayarlarını kontrol ediniz.",
 mnu_help			: "Hakkında",
 badUploadsPath2		: " rTorrent kullanıcısının torrent klasöründe okuma/çalıştırma yetkisi yoktur. Bu durumda torrent ekleyemezsiniz. Chmod ayarlarını kontrol ediniz.",
 View				: "Görünüm",
 AsList				: "liste olarak",
 AsTree				: "ağaç yapısı olarak",
 Group				: "Grup",
 SuperSeed			: "Öncelikli-Kaynak",
 badTestPath			: "rTorrent kullanıcısının ./test.sh dosyasına okuma/çalıştırma yetkisi yoktur. ruTorrent çalışmayacaktır. Chmod ayarlarını kontrol ediniz.",
 badSettingsPath2		: "rTorrent kullanıcısının settings klasöründe okuma/yazma/çalıştırma yetkisi yoktur. Chmod ayarlarını kontrol ediniz.",
 scrapeDownloaded		: "Yüklenen",
 Total				: "Toplam",
 PCRENotFound			: "PHP'nin PCRE modülü yüklü değildir. ruTorrent çalışmayacaktır.",
 addTorrentSuccess		: "torrent başarıyla rTorrent'ten geçmiştir.",
 addTorrentFailed		: "Hata: torrent, rTorrent'ten geçememiştir.",
 pnlState			: "Durum",
 newLabel			: "Yeni Etiket",
 enterLabel			: "Etiket Girin",
 UIEffects			: "Show effects for UI elements",
 Plugins			: "Plugins",
 plgName			: "Name",
 plgStatus			: "Status",
 plgLoaded			: "Loaded",
 plgDisabled			: "Disabled",
 plgVersion			: "Version",
 plgAuthor			: "Author",
 plgDescr			: "Description",
 mnu_go				: "Go",
 pluginCantStart		: "plugin can't start for unknown reason.",
 doFastResume			: "Fast resume",
 innerSearch			: "Local torrents",
 removeTeg			: "Remove tag",
 errMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Plugin will not work.",
 warnMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Some functionality will be unavailable.",
 plgShutdown			: "Shutdown",
 limit				: "Sınırı",
 speedList			: "Speed popup list (comma-separated)",
 ClearButton			: "Clear",
 dontShowTimeouts		: "Ignore message about timeouts",
 fullTableRender		: "Full render of large tables",
 showScrollTables		: "Show table contents while scrolling",
 idNotFound			: "rTorrent's user can't access 'id' program. Some functionality will be unavailable.",
 gzipNotFound			: "Web-server can't access 'gzip' program. ruTorrent will not work.",
 cantObtainUser			: "ruTorrent can't detect the uid or rtorrent user. Some functionality will be unavailable.",
 retryOnErrorTitle		: "If rtorrent is not available try again after",
 retryOnErrorList		: { 0: "Don't try again", 30: "30 sec", 60: "1 min", 120: "2 min", 300: "5 min", 900: "15 min" },
 statNotFound			: "rTorrent's user can't access 'stat' program. Some functionality will be unavailable.",
 statNotFoundW			: "Web-server user can't access 'stat' program. Some functionality will be unavailable.",
 badrTorrentVersion		: "This version of rTorrent doesn't support this plugin. Plugin will not work. rTorrent version must be >=",
 badPHPVersion                  : "This version of PHP doesn't support this plugin. Plugin will not work. PHP version must be >=",
 rTorrentExternalNotFoundError	: "Plugin will not work. rTorrent's user can't access external program",
 rTorrentExternalNotFoundWarning: "Some functionality will be unavailable. rTorrent's user can't access external program",
 webExternalNotFoundError	: "Plugin will not work. Web-server user can't access external program",
 webExternalNotFoundWarning	: "Some functionality will be unavailable. Web-server user can't access external program",
 rTorrentBadScriptPath		: "Plugin will not work. rTorrent's user can't access file for read/execute",
 rTorrentBadPHPScriptPath	: "Plugin will not work. rTorrent's user can't access file for read",
 dependenceError		: "Plugin will not work. It require existence of plugin(s)",
 peerAdd			: "Add peer...",
 peerBan			: "Ban",
 peerKick			: "Kick",
 peerSnub			: "Snub",
 peerDetails			: "Details",
 peerUnsnub			: "Unsnub",
 peerAddLabel			: "Enter IP/Hostname[:port]",
 noTorrentList			: "Torrent list not yet available, connection to rtorrent not established."
 };
