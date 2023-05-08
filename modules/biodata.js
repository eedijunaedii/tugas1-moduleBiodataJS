const biodata = {
  nama: 'Edi Junaedi',
  tempatLahir: 'Bandung',
  tanggalLahir: '13 Desember 2002',
  alamat: 'Jalan terusan kopo katapang',
};

function getNama() {
  return biodata.nama;
}

function getTempatLahir() {
  return biodata.tempatLahir;
}

function getTanggalLahir() {
  return biodata.tanggalLahir;
}

function getAlamat() {
  return biodata.alamat;
}

module.exports = {
  getNama,
  getTempatLahir,
  getTanggalLahir,
  getAlamat,
};
