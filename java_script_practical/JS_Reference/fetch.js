function data(url) {
  fetch(url)
    .then((datas) => {
      // console.log(datas);
      return datas.json();
    })
    .then((response) => {
      console.log(response);
      let countriesDetails = response.Countries;
      let globalDetail = response.Global;
      for (let i = 0; i <= countriesDetails.length; i++) {
        objData = countriesDetails[i];
        objCountryName = objData.Country;
        objNewConfirmed = objData.NewConfirmed;
        objNewDeaths = objData.NewDeaths;
        objNewRecovered = objData.NewRecovered;
        objTotalConfirmed = objData.TotalConfirmed;
        objTotalDeaths = objData.TotalDeaths;
        objTotalRecovered = objData.TotalRecovered;
        document.write(objCountryName + "<br>");
      }
    });
}
data("https://api.covid19api.com/summary");
