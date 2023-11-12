class Biodata {
  #nama;
  #tanggalLahir;
  #alamat;
  #mobile;
  #email;

  constructor(nama, tanggalLahir, alamat, mobile, email) {
    this.#nama = nama;
    this.#tanggalLahir = new Date(tanggalLahir);
    this.#alamat = alamat;
    this.#mobile = mobile;
    this.#email = email;
  }

  getData() {
    return {
      nama: this.#nama,
      tanggalLahir: this.#tanggalLahir,
    };
  }
  getUmur() {
    return Math.floor(
      (new Date() - this.#tanggalLahir) / (1000 * 60 * 60 * 24 * 365)
    );
  }

  say() {
    console.log(
      `halo nama saya ${
        this.#nama
      }, umur saya ${this.getUmur()} tahun, alamat saya di ${this.#alamat}`
    );
  }
}

class Dokter extends Biodata {
  #alamatRs;
  #profesi;
  #pengalaman;
  constructor(
    nama,
    umur,
    alamat,
    mobile,
    email,
    alamatRs,
    profesi,
    pengalaman
  ) {
    super(nama, umur, alamat, mobile, email);
    this.#alamatRs = alamatRs;
    this.#profesi = profesi;
    this.#pengalaman = pengalaman;
  }

  say() {
    console.log(
      `halo nama saya ${this.getData().nama}, saya berprofesi sebagai ${
        this.#profesi
      } dan beroperasi di RS ${this.#alamatRs}`
    );
  }
}

class Ojol extends Biodata {
  #kendaraan;
  #profesi;
  #pengalaman;

  constructor(
    nama,
    tanggalLahir,
    alamat,
    mobile,
    email,
    kendaraan,
    profesi,
    pengalaman
  ) {
    super(nama, tanggalLahir, alamat, mobile, email);
    this.#kendaraan = kendaraan;
    this.#profesi = profesi;
    this.#pengalaman = pengalaman;
  }

  say() {
    console.log(
      `halo nama saya ${this.getData().nama}, saya berprofesi ${
        this.#profesi
      } dan kendaraan saya adalah ${this.#kendaraan}`
    );
  }
}

const fikri = new Dokter(
  'Fikri',
  '2003-11-22',
  'Malang',
  '081252233369',
  'fikri@gmail.com',
  'Araya',
  'Dokter Gigi',
  3
);

fikri.say();

const budi = new Ojol(
  'Dudi',
  '2003-11-22',
  'Malang',
  '081252233369',
  'fikri@gmail.com',
  'nmax',
  'ojol',
  3
);

budi.say()
