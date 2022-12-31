function data(url) {
  fetch(url)
    .then((datas) => {
      // console.log(datas);
      return datas.json();
    })
    .then((response) => {
      console.log(response);
      let myTable = document.getElementById("table");
      let countriesDetails = response.Countries;
      let globalDetail = response.Global;
      myTable.innerHTML = `<tr>
      <th>Country</th>
      <th>NewConfirmed</th>
      <th>NewDeaths</th>
      <th>NewRecovered</th>
      <th>TotalConfirmed</th>
      <th>TotalDeaths</th>
      <th>TotalRecovered</th>
      </tr>`;
      for (let i = 0; i <= countriesDetails.length; i++) {
        myTable.innerHTML += `
        <tr>
        <td>${countriesDetails[i].Country}</td>
        <td>${countriesDetails[i].NewConfirmed}</td>
        <td>${countriesDetails[i].NewDeaths}</td>
        <td>${countriesDetails[i].NewRecovered}</td>
        <td>${countriesDetails[i].TotalConfirmed}</td>
        <td>${countriesDetails[i].TotalDeaths}</td>
        <td>${countriesDetails[i].TotalRecovered}</td>
        </tr>`;
        let createId = document.querySelectorAll("td")[i];
        createId.setAttribute(`id`, `td_${i}`);
      }
    });
}
data("https://api.covid19api.com/summary");
