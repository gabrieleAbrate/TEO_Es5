const verdura = [
    'carciofo',
    'cavolfiore',
    'carota',
    'piselli',
    'broccoli',
    'cavolo rosso'    
];

const calciatori = [
    {
        cognomi: 'Messi',
        squadra: 'Inter Miami',
    },
    {
        cognomi: 'Ronaldo',
        squadra: 'Al-Nhss',
    },
    {
        cognomi: 'Lautaro',
        squadra: 'Inter Milano',
    }
];

const cani = {
    'pastore tedesco': [
        'rex',
        'benny',
        'max'
    ],
    'corgi': [
        'marco',
        'polo',
        'gin',
        'elisabetta'
    ],
    'dalmata': [
        'pongo',
        'gigi',
        'pippo'
    ]
};

window.onload = init;

async function init(){
    // creare delle card con immagine e nome sotto
    // for(let item of verdura){

    //     let risposta = await fetch(`https://www.google.com/search?q=${item}+immagine`);
    //     let dati = risposta.text();
    //     console.table(dati);

    //     document.body.innerHTML += `
    //         <div>
    //             <img src="" alt="">
    //             <p>${item}</p>
    //         </div>
    //     `;
    // }

    // let risposta = await fetch('http://localhost:1337/saluto?nome=marco');
    let risposta = await fetch('http://localhost:1337/saluto2', {
        method: 'POST',
        body: 'marco'
    });
    let testo = await risposta.text();
    alert(testo);
}