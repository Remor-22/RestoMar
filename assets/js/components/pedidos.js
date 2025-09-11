document.addEventListener('DOMContentLoaded', () => {
    const productosGrid = document.getElementById('productosGrid');
    const pedidoForm = document.getElementById('pedidoForm');
    const pedidoLista = document.querySelector('.pedido-lista');
    const totalPedido = document.getElementById('totalPedido');
    const hiddenTotal = document.getElementById('hiddenTotal');
    let total = 0;

    // Función para agregar un producto al pedido
    const agregarProducto = (nombre, precio) => {
        const item = document.createElement('div');
        item.classList.add('pedido-item');
        item.innerHTML = `
            <span>${nombre}</span>
            <span>Bs. ${precio}</span>
            <input type="hidden" name="productos[]" value="${nombre} - Bs. ${precio}">
            <button class="remove-btn">&times;</button>
        `;
        pedidoLista.appendChild(item);

        // Actualizar el total
        total += precio;
        totalPedido.textContent = `Bs. ${total}`;
        hiddenTotal.value = total;

        // Eliminar producto del pedido
        item.querySelector('.remove-btn').addEventListener('click', () => {
            total -= precio;
            totalPedido.textContent = `Bs. ${total}`;
            hiddenTotal.value = total;
            item.remove();
        });
    };

    // Agregar funcionalidad a los botones de productos
    productosGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-btn')) {
            const card = e.target.closest('.producto-card');
            const nombre = card.querySelector('h3').textContent;
            const precio = parseFloat(card.querySelector('.precio').textContent.replace('Bs. ', ''));
            agregarProducto(nombre, precio);
        }
    });

    // Enviar el pedido
    pedidoForm.addEventListener('submit', (e) => {
        if (total === 0) {
            e.preventDefault();
            alert('Por favor, agrega productos al pedido antes de enviarlo.');
        }
    });
});