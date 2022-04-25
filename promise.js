import fetch from 'node-fetch';
//const url = 'https://api.sampleapis.com/wines/reds'
// const getWine = () => {
//     fetch (url)
//     .then ((winedata) => winedata.json)
//     .then ((wineList) => {
//         const res = wineList.filter((winery) => winery.tiltle ==="Cartuxa");
//         console.log(
//             "There are", res[0].reviews)
//     }
//     );
    

//     }

// }

const url = 'https://api.sampleapis.com/wines/reds'
const getWineReviews = async () => {
    try {
        const data = await fetch(url)
        const wineList = await data.json()
        const cartuxaWine = wineList.filter((wine) => wine.winery === "Cartuxa");
        console.log(
            "These are ",
            cartuxaWine[0].rating.reviews
          );
        
    } catch (error) {
      console.error("This is the error", error);
    }
}

getWineReviews()