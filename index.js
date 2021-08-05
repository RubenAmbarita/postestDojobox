var buku1 = [];

var jumlah_input = prompt("Masukkan JUMLAH buku yang akan ada input ");
document.write("DAFTAR BUKU YANG ANDA INPUT TADI : " + '<br>');
var alert_index_buku = prompt("Masukkan harus DUA NO INDEX(1 - 5) BUKU yang akan anda PINJAM ");
var alert_index_buku2 = prompt("Masukkan harus DUA NO INDEX(1 - 5) BUKU yang akan anda PINJAM ");

tambah_buku(jumlah_input);

function tambah_buku(parameter1){
    for (var x = 1; x<=parameter1; x++){
    buku = prompt("Masukkan nama buku anda sebanyak jumlah yang anda input sebelumnya ");
    document.write(x + '. ' + buku + '<br>');
    buku1.push(buku);
}
}

document.write("Susunan Buku setelah anda pinjam berdasarkan no index " + '<br>');

function pinjam(alert_index_buku,alert_index_buku2){
    delete buku1[alert_index_buku];
    delete buku1[alert_index_buku2];
    console.log(buku1);
    document.write(buku1 + '<br>');
}
    

