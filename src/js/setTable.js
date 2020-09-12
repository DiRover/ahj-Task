export default function setTable(arr) {
    table.innerHTML = '';
    for (const item of arr) {
      table.innerHTML += `<tr data-id="${item.id}" data-title="${item.title}" data-year="${item.imdb}" data-imdb="${item.year}">
        <td width=50px>#${item.id}</td>
        <td width=150px>${item.title}</td>
        <td width=50px>(${item.year})</td>
        <td width=50px>${item.imdb}</td>
      </tr>`
    }
  }