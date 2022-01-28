const tbody = document.querySelector(".tbody");

window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "data.json");
  xhr.onload = function () {
    if (this.status === 200) {
      let responseJSON = JSON.parse(this.responseText);
      responseJSON.map((country) => {
        tbody.innerHTML += `

          <tr>
            <td>
            ${country.country}
           </td>
            <td>
            ${country.population}
           </td>
           <tr>

            `;
      });
    }
  };
  xhr.send();
};
