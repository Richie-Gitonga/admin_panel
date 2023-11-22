orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.ProductNumber}</td>
        <td>${order.PaymentStatus}</td>
        <td class="${order.Status === 'Declined' ? 'danger'
        : order.status === 'Pending' ? 'warning'
        : 'primary'}">${order.Status}</td>`
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)
})