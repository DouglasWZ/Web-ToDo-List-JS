document.addEventListener('DOMContentLoaded', function(){ //El DOMContentLoaded le indicamos que no ejecuta nada de JS hasta que todo el HTML se haya cargado por completo
    const title = document.getElementById('title');// le mandamos a la variable creada los datos traidos del id 'title'
    const description = document.getElementById('description'); //Alt + Cick permite marcar varios cursores a la vez
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    const btn = document.getElementById('add');

    //Imrime en consola los datos metidos en la caja de texto al hacer click en el boton
    /* btn.onclick = function (){
        console.log('Title', title.value);
        console.log('Description', description.value);
    }*/

    //Funcion para agregar a la tabla
    function addTodo(){
        if (title.value === '' || description.value === ''){
            alert.classList.remove('d-none')//Indicamos que remueva la clase desabilitada de la alerta
            alert.innerText = 'El titulo y la descripcion son necesarios'; // Sustituimos el texto de la alerta 'A simple danger alert—check it out!' por el que acabamos de escribir
            return;
        }
        alert.classList.add('d-none');
        const row = table.insertRow();
        row.innerHTML = ` 
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
                <button class="btn btn-danger mb-1 ml-1">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        `;
            /* alert.classList.remove('d-none')//Indicamos que remueva la clase desabilitada de la alerta */
    }
    btn.onclick = addTodo();
});



