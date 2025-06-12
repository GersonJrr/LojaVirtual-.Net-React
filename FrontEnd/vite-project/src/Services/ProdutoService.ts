const URL = 'https://localhost:7145/api/Produtos';

async function chamarApi() {
    const resp = await fetch(URL);
    if(resp.status === 200){
        const obj = await resp.json();
        console.log(obj);
    }
}

chamarApi()