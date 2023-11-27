const sideBar = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn')

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideBar.style.display = "block"
})

closeBtn.addEventListener('click', () => {
    sideBar.style.display = "none"
})

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
})

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