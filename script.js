const expandButton = document.getElementById('expand-button');
const sidebar = document.getElementById('sidebar');

expandButton.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
});