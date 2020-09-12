import jsonData from './jsonData.js';
import setTable from './setTable.js';
let currentCompare = 'start';
export default function replaceItem() {
    let arr = [];
    thead.innerHTML = '';
    switch (currentCompare) {
      case 'start':
        currentCompare = 'idUp';
        arr = jsonData.slice().sort((a, b) => (a.id < b.id && -1) || (a.id > b.id && 1) || 0);
        thead.innerHTML = `
        <tr>
          <td width=50px>id&#8595</td>
          <td width=150px>title</td>
          <td width=50px>year</td>
          <td width=50px>imdb</td>
        </tr>`
        setTable(arr);
        break;
      case 'idUp':
        currentCompare = 'idDown';
        arr = jsonData.slice().sort((a, b) => (a.id < b.id && 1) || (a.id > b.id && -1) || 0);
        thead.innerHTML = `
        <tr>
          <td width=50px>id&#8593</td>
          <td width=150px>title</td>
          <td width=50px>year</td>
          <td width=50px>imdb</td>
        </tr>`
        setTable(arr);
        break;
      case 'idDown':
        currentCompare = 'titleUp';
        arr = jsonData.slice().sort((a, b) => (a.title < b.title && -1) || (a.title > b.title && 1) || 0);
        thead.innerHTML = `
        <tr>
          <td width=50px>id</td>
          <td width=150px>title&#8595</td>
          <td width=50px>year</td>
          <td width=50px>imdb</td>
        </tr>`
        setTable(arr);
        break;
      case 'titleUp':
        currentCompare = 'titleDown';  
        arr = jsonData.slice().sort((a, b) => (a.title < b.title && 1) || (a.title > b.title && -1) || 0);
        thead.innerHTML = `
        <tr>
          <td width=50px>id</td>
          <td width=150px>title&#8593</td>
          <td width=50px>year</td>
          <td width=50px>imdb</td>
        </tr>`
        setTable(arr);
        break;
      case 'titleDown':
        currentCompare = 'yearUp';
        arr = jsonData.slice().sort((a, b) => (a.year < b.year && -1) || (a.year > b.year && 1) || 0);
        thead.innerHTML = `
        <tr>
          <td width=50px>id</td>
          <td width=150px>title</td>
          <td width=50px>year&#8595</td>
          <td width=50px>imdb</td>
        </tr>`
        setTable(arr);
        break;
      case 'yearUp':
        currentCompare = 'yearDown';  
        arr = jsonData.slice().sort((a, b) => (a.year < b.year && 1) || (a.year > b.year && -1) || 0);
        thead.innerHTML = `
        <tr>
          <td width=50px>id</td>
          <td width=150px>title</td>
          <td width=50px>year&#8593</td>
          <td width=50px>imdb</td>
        </tr>`
        setTable(arr);
        break;
      case 'yearDown':
        currentCompare = 'imdbUp';
        arr = jsonData.slice().sort((a, b) => (a.imdb < b.imdb && -1) || (a.imdb > b.imdb && 1) || 0);
        thead.innerHTML = `
        <tr>
          <td width=50px>id</td>
          <td width=150px>title</td>
          <td width=50px>year</td>
          <td width=50px>imdb&#8595</td>
        </tr>`
        setTable(arr);
        break;
      case 'imdbUp':
        currentCompare = 'start';  
        arr = jsonData.slice().sort((a, b) => (a.imdb < b.imdb && 1) || (a.imdb > b.imdb && -1) || 0);
        thead.innerHTML = `
        <tr>
          <td width=50px>id</td>
          <td width=150px>title</td>
          <td width=50px>year</td>
          <td width=50px>imdb&#8593</td>
        </tr>`
        setTable(arr);
        break;
    }
  }
  