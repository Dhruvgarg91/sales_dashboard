document.addEventListener('DOMContentLoaded', function () {
    const socket = io();
  
    // Function to update orders in the HTML
    function updateOrders(orders) {
      const tbody = document.querySelector('.recent-orders tbody');
      tbody.innerHTML = '';
  
      orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${order.productName}</td>
          <td>${order.productNumber}</td>
          <td>${order.payment}</td>
          <td class="${order.status.toLowerCase()}">${order.status}</td>
          <td class="primary">Details</td>
        `;
        tbody.appendChild(row);
      });
    }
  
    // Fetch initial orders
    fetch('/recent-orders')
      .then(response => response.json())
      .then(orders => updateOrders(orders))
      .catch(error => console.error('Error fetching orders:', error));
  
    // Listen for real-time updates
    socket.on('orderUpdated', (updatedOrder) => {
      fetch('/recent-orders')
        .then(response => response.json())
        .then(orders => updateOrders(orders))
        .catch(error => console.error('Error fetching updated orders:', error));
    });
  });
  