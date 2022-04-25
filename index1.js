// Get red wines from samples apis.com and output a list of ingredient in the latt
const getRedWinelist = () => {
    fetch('https://api.sampleapis.com/wines/reds')
    .then(resp => resp.json())
    .then(data => displayData(data));
}
