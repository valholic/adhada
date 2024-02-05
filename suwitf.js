function getPilihanComputer(){
    const comp = Math.random();
    if(comp < 0.34) return 'Batu';
    if(comp >= 0.34 && comp <= 0.67) return 'Gunting';
    return 'Kertas';
};

function getHasil(comp, player){
    if(player === comp) return 'Draw';
    if(player === 'Batu') return (comp === 'Kertas')? 'Lose' : 'Win';
    if(player === 'Kertas') return hasil = (comp === 'Gunting')? 'Lose' : 'Win';
    if(player === 'Gunting') return hasil = (comp === 'Batu')? 'Lose' : 'Win';
};



function putar(){
    const imgKomputer = document.querySelector('.containerbot img');
    const gambar = ['Batu', 'Gunting', 'Kertas'];
    let x = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'IMG/' + gambar[x++] + '.png');
        if(x == gambar.length) x = 0;
    }, 100);
};



const pilihan = document.querySelectorAll('li img');
const result = document.querySelector('.result span');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        result.innerHTML = '';
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.id;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function(){
            const komputer = document.querySelector('.containerbot img');
            komputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            const tampilHasil = document.querySelector('.result span');
            tampilHasil.innerHTML = hasil;
        }, 1000);
    });
});






//Ringkasan dari semua kode di bawah ada di atas, ingat hal diatas dapat dilakukan karena kita dapat melooping setiap value yang ada di array pilihan, jangan lupa utk manfaatin array

// const pBatu = document.getElementById('Batu');
// const pGunting = document.getElementById('Gunting');
// const pKertas = document.getElementById('Kertas');

// pBatu.addEventListener('click', function(){
    // const pilihanComputer = getPilihanComputer();
    // const pilihanPlayer = pBatu.id;
    // const hasil = getHasil(pilihanComputer, pilihanPlayer);

    // const komputer = document.querySelector('.containerbot img');
    // komputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    // const tampilHasil = document.querySelector('.result span');
    // tampilHasil.innerHTML = hasil;
// });

// pGunting.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGunting.id;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const komputer = document.querySelector('.containerbot img');
//     komputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const tampilHasil = document.querySelector('.result span');
//     tampilHasil.innerHTML = hasil;
// });


// pKertas.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pKertas.id;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const komputer = document.querySelector('.containerbot img');
//     komputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const tampilHasil = document.querySelector('.result span');
//     tampilHasil.innerHTML = hasil;
// });