// process.argv ini mengembalikan array dari command line yang dimasukan setelah node script.js
// terdapat 2 nilai default yg pertama lokasi node exec file dan yang kedua lokasi path exec file yang kita eksekusi dengan node
// disini kita slice kedua nilai tersebut untuk mengosongkan array nya supaya array pertama bisa untuk cmd dan array kedua dst bisa buat parameter
const args = process.argv.slice(2);

// kita mengambil array pertama sebagai kata kunci command / parameter pertama
const cmd = args[0];

// buat switch untuk mecocokan commmand mana yang akan di eksekusi
switch (cmd) {
  case 'up':
    console.log('ini merupakan command up');
    break;
  case 'down':
    console.log('ini merupakan command down');
    break;
  case 'download':
    download();
    break;
  default:
    console.log('ini merupakan command default (tanpa memasukan cmd)');
}

// contoh parameter tak terhingga setelah url
function download() {
  // melakukan pengecekan jika parameter pertama dan kedua yaitu cmd 'download' dan url jika tidak ada maka akan berhenti
  if (args.length < 2) {
    console.log('masukan url terlebih dahulu');
    return;
  }
  const url = args[1];
  const optionObject = {};
  //   disini case kita jika terdapat option --key=value dll
  //   disini kita mulai dari array 2 karena 0 dan 1 sudh dipakai untuk cmd dan url
  for (let i = 2; i < args.length; i++) {
    // pisahkan --key=value dan mengembalikan array jadi setiap loop menghasilkan [key,value]
    const options = args[i].split('=');
    // ambil array 0 yaitu tiap2 key lalu hapus --
    const key = options[0].replace('--', '');
    // setelah itu masukan ke object hasilnya akan menjadi {key:value}
    optionObject[key] = options[1];
  }
  const { format, cookies } = optionObject;
  console.log(`Downloading from url : ${url}, metadata: ${format}, ${cookies}`);
}
