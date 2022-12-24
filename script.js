document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter')
    const ticketContainer = document.querySelector('.ticket-container')

    filters.forEach(filter => {
        filter.addEventListener('click', selectedFilter)
    });

    function selectedFilter(e) {
        let filter = e.target.classList[1]
        if (ticketContainer.classList.length > 1) {
            ticketContainer.classList.remove(ticketContainer.classList[1])
        }
        ticketContainer.classList.add(filter)
    }
})