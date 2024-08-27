const baseUrl = 'https://bluegill-top-dog.ngrok-free.app/v1'
export const layanan =  fetch(`${baseUrl}/Jasa/Get_List_Jasa`, {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors' 
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
})
.then(({data}) => {
    return data
})
.catch(error => {
    console.error('Error fetching data:', error);
});


export const detail_jasa = (idjasa) => fetch(`${baseUrl}/Jasa/Get_Detail_Jasa_Filter?idjasa=${idjasa}`, {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors' 
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
})
.then(({data}) => {
    return data
})
.catch(error => {
    console.error('Error fetching data:', error);
});

export const banner =  fetch(`${baseUrl}/BannerAbout/ListBannerAbout`, {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors' 
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
})
.then((data) => {
    const {judul_jasa, deskripsi_jasa} = data.data[0]
    return {judul_jasa, deskripsi_jasa}
})
.catch(error => {
    console.error('Error fetching data:', error);
});

export const info =  fetch(`${baseUrl}/Information/ListInformation`, {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors' 
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
})
.then(({data}) => {
    return data
})
.catch(error => {
    console.error('Error fetching data:', error);
});


export const bannerpic =  fetch(`${baseUrl}/Gambar/ListGambarFilter?idgambar=1`, {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors' 
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
})
.then(({data}) => {
    return data
})
.catch(error => {
    console.error('Error fetching data:', error);
});