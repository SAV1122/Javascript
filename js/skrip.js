function dataPerson(){
    let form = document.getElementById('frm');
    let nama = form.nama.value;
    let pekerjaan = form.pekerjaan.value;
    let hobby = form.hobby.value;
    let input = 'Nama : ' + nama + '<br> Pekerjaan : ' + pekerjaan + '<br> Hobby : ' +hobby ;
    let no_input = 'Maaf nama dan kelas anda belum terisi';
    let hasil = (nama && pekerjaan && hobby !== '') ? input : no_input;
    document.getElementById('hasil').innerHTML = hasil;
}

    //Tugasnya adalah lengkapi kode berikut dan tampilkan hasilnya ada pada html
    //1. Isian nama
    //2. Isian pekerjaan
    //3. Isian hobby