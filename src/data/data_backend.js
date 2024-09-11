const baseUrl = 'https://next-pig-game.ngrok-free.app/v1'

const headers = {
    method: 'GET', 
    mode: 'cors', 
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning':'true'
    },
}

const response_func = response => {
    if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`); }
    return response.json(); 
}

const data = ({data}) => data 

const error_func = error => console.error('Error fetching data:', error)


export const layanan =  fetch(`${baseUrl}/Jasa/Get_List_Jasa`, headers)
.then(response_func)
.then(data)
.catch(error_func);


export const detail_jasa = (idjasa) => fetch(`${baseUrl}/Jasa/Get_Detail_Jasa_Filter?idjasa=${idjasa}`, headers)
.then(response_func)
.then(data)
.catch(error_func);

export const banner =  fetch(`${baseUrl}/BannerAbout/ListBannerAbout`, headers)
.then(response_func)
.then((data) => {
    const {judul_jasa, deskripsi_jasa} = data.data[0]
    return {judul_jasa, deskripsi_jasa}
})
.catch(error_func);

export const info =  fetch(`${baseUrl}/Information/ListInformation`, headers)
.then(response_func)
.then(data)
.catch(error_func);


export const bannerpic =  fetch(`${baseUrl}/Gambar/ListGambarFilter?idgambar=1`, headers)
.then(response_func)
.then(data)
.catch(error_func);

export const pictures =  fetch(`${baseUrl}/Gambar/ListGambar`, headers)
.then(response_func)
.then(data)
.catch(error_func);

export const testimoni =  fetch(`${baseUrl}/Testimoni/ListTestimoni`, headers)
.then(response_func)
.then(data)
.catch(error_func);
