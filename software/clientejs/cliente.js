document.addEventListener('DOMContentLoaded', (event) => {
    
    const mantenciones = [
        { id: 1, fecha: '2024-06-28', descripcion: 'Cambio de aceite' },
        { id: 2, fecha: '2024-05-20', descripcion: 'Revisión de frenos' },
        { id: 3, fecha: '2024-04-15', descripcion: 'Alineación y balanceo' }
    ];

    const tbody = document.getElementById('mantenciones-body');
    mantenciones.forEach(mantencion => {
        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = mantencion.id;
        tr.appendChild(tdId);

        const tdFecha = document.createElement('td');
        tdFecha.textContent = mantencion.fecha;
        tr.appendChild(tdFecha);

        const tdDescripcion = document.createElement('td');
        tdDescripcion.textContent = mantencion.descripcion;
        tr.appendChild(tdDescripcion);

        tbody.appendChild(tr);
    });

    const btnPrincipal = document.getElementById('btn-principal');
    btnPrincipal.addEventListener('click', () => {
        window.location.href = 'pagina_principal.html';  // Cambia 'pagina_principal.html' por la URL de tu página principal
    });
});