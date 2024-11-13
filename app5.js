const daftarKaryawan = [
    {
        nama:"Devyn Ramirez",
        masaKerja:10,
        NIK:11,
        gaji: 7000000
    },
    {
        nama:"Harmony Duncan",
        masaKerja:5,
        NIK:22,
        gaji: 4000000
    },
    {
        nama:"Clarissa Burgess",
        masaKerja:8,
        NIK:33,
        gaji: 7000000
    },
    {
        nama:"Reilly Blanchard",
        masaKerja:7,
        NIK:44,
        gaji: 7000000
    },
    {
        nama:"Zion Brooks",
        masaKerja:4,
        NIK:55,
        gaji: 4000000
    },
    {
        nama:"Jovanny Mays",
        masaKerja:10,
        NIK:66,
        gaji: 7000000
    },
    {
        nama:"Cindy chase",
        masaKerja:9,
        NIK:77,
        gaji: 7000000
    },
    {
        nama:"Kristin Mcdaniel",
        masaKerja:8,
        NIK:88,
        gaji: 7000000
    },
    {
        nama:"Macey Sanford",
        masaKerja:9,
        NIK:99,
        gaji: 7000000
    },
    {
        nama:"Alfredo Faulkner",
        masaKerja:10,
        NIK:100,
        gaji: 7000000
    }

]

let mode = 'tambah'

// menampilkan nama karyawan
const namKaryawan = () => {

    const tblKaryawan = document.getElementById("tblKaryawan")
    tblKaryawan.innerHTML = `<tr><th scope="col">No</th><th scope="col">Nama</th><th scope="col">Masa Kerja</th><th scope="col">Umur</th><th scope="col">Gaji</th></tr`

    for(let index in daftarKaryawan) {
        console.log(`${parseInt(index) + 1}. ${daftarKaryawan[index].nama} masa kerja ${daftarKaryawan[index].masaKerja} NIK ${daftarKaryawan[index].NIK} gaji ${daftarKaryawan[index].gaji}`)

        tblKaryawan.innerHTML += `<tr><th>${parseInt(index) + 1}</th><td>${daftarKaryawan[index].nama}</td><td>${daftarKaryawan[index].masaKerja}</td><td>${daftarKaryawan[index].NIK}</td><td>${daftarKaryawan[index].gaji}</td><td><button type="button" class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[index].nama}')">Delate</button></td>><td><button type="button" class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[index].nama}')">Edit</button></td></tr>`
    }
}

// menambah karyawan
const karyawanBaru = () => {
    const nama = document.getElementById("txtNama").value 
    const masaKerja = document.getElementById("masKer").value
    const NIK = document.getElementById("txtNik").value 
    const gaji = document.getElementById("txtGaji").value 

    const karyawanBaru = {
        nama: nama,
        NIK: NIK,
    }
    if(mode == 'tambah') {
        daftarKaryawan.push(karyawanBaru)
    } else {
        daftarKaryawan[mode] = karyawanBaru
    }
     document.getElementById("txtNama").value = ''
     document.getElementById("masKer").value = ''
     document.getElementById("txtNik").value = ''
     document.getElementById("txtGaji").value = ''

    mode = 'tambah'
     namKaryawan()
    // daftarKaryawan.push(karyawanBaru)
}

const cariIndex = (nama) => {
    for(let i = 0; i < daftarKaryawan.length; i++) {
        if(daftarKaryawan[i].nama == nama){
            return i;
        }
    }
}

const hapusKaryawan = (target) => {
    const indexDihapus = cariIndex(target);
    daftarKaryawan.splice(indexDihapus, 1)

    console.log(target)
    console.log(indexDihapus)
    namKaryawan()
}

const editKaryawan = (target) => {
    const indexEdit = cariIndex(target)
    const editKaryawan = daftarKaryawan[indexEdit]

     document.getElementById("txtNama").value = editKaryawan.nama; 
     document.getElementById("masKer").value = editKaryawan.masaKerja;
     document.getElementById("txtNik").value = editKaryawan.NIK;
     document.getElementById("txtGaji").value = editKaryawan.gaji;
    
    // // console.log(target)
    // // console.log(indexEdit)
    // // console.log(daftarKaryawan[indexEdit])

    mode = indexEdit


    const namaBaru = prompt('Masukan Nama Baru')
    const NIKBaru= prompt('Masukan NIK')
    

    daftarKaryawan[indexEdit] = {
        nama: namaBaru,
        NIK: NIKBaru
    }

    const cancel = (target) => {
     document.getElementById("txtNama").value = ''
     document.getElementById("masKer").value = ''
     document.getElementById("txtNik").value = ''
     document.getElementById("txtGaji").value = ''

     mode = 'tambah'
    }
}