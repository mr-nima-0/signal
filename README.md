signal 
========
Implementasi Signal protocol untuk Node.js berbasis [signal-protocol-javascript] (https://github.com/hostinger-bot/signal).

[![npm](https://img.shields.io/npm/v/libsignal.svg)](https://www.npmjs.com/package/libsignal)
[![npm](https://img.shields.io/npm/l/libsignal.svg)](https://github.com/ForstaLabs/libsignal-node)


Ikhtisar
--------
Protokol yang memperhatikan kerahasiaan maju dan mengikuti lingkungan pesan sinkron dan asinkron.


PreKeys
--------
Protokol ini menggunakan konsep yang disebut 'PreKeys'. PreKey adalah ECPublicKey dan ID unik terkait yang disimpan bersama oleh server. PreKeys juga dapat ditandatangani.

Pada saat instalasi, klien menghasilkan satu PreKey yang ditandatangani, serta daftar besar unsigned PreKey, dan mengirimkan semuanya ke server.


Sesi
--------
Signal Protocol berorientasi pada sesi. Klien membuat "sesi", yang kemudian digunakan untuk semua operasi enkripsi / dekripsi selanjutnya. Tidak perlu pernah membongkar sesi setelah sesi telah dibuat.

Sesi dibuat dengan salah satu dari dua cara:

1. PreKeyBundles. Klien yang ingin mengirim pesan ke penerima dapat membuat sesi dengan mengambil PreKeyBundle untuk penerima itu dari server.
2. PreKeySignalMessages. Klien dapat menerima PreKeySignalMessage dari penerima dan menggunakannya untuk membuat sesi.


Negara
--------
Sesi yang dibuat mencakup banyak keadaan antara dua klien. Negara itu dipelihara dalam catatan yang dapat diandalkan yang perlu dijaga selama hidup sesi.

Negara ditempatkan di tempat-tempat berikut:

* Negara Identitas. Klien akan perlu memelihara status pasangan kunci identitas mereka sendiri, serta kunci identitas yang diterima dari klien lain.
* Negara PreKey. Klien perlu memelihara status PreKeys yang dihasilkan.
* Status PreKey Tertanda. Klien perlu memelihara status PreKeys yang ditandatangani mereka.
* Negara Sesi. Klien akan perlu memelihara status sesi yang telah mereka bentuk.


Lisensi
--------
Dilisensikan di bawah GPLv3: http://www.gnu.org/licenses/gpl-3.0.html

* Hak Cipta 2015-2016 Open Whisper Systems
* Recode BOTCAHX 2022-2023
* Hak Cipta 2017-2018 Forsta Inc
