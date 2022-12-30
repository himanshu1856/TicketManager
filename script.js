document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter')
    const ticketContainer = document.querySelector('.ticket-container')
    const openModal = document.querySelector('.open-modal')
    const closeModal = document.querySelector('.close-modal')

    let modalCheck = false;

    openModal.addEventListener('click', openTickedModal)
    closeModal.addEventListener('click', closeTicketModal)

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

    function openTickedModal(e) {
        if (modalCheck) {
            return
        }
        console.log('outside open if')
        let ticketModal = document.createElement('div')
        ticketModal.classList.add('ticket-modal')

        ticketModal.innerHTML = `
            <div class="ticket-text" contentEditable="true" spellcheck="false">Enter Your Text !</div>
            <div class="ticket-filters">
            <div class="ticket-filter red selected-filter"></div>
            <div class="ticket-filter blue"></div>
            <div class="ticket-filter green"></div>
            <div class="ticket-filter pink"></div>
            </div>
            `;

        document.querySelector('body').append(ticketModal)
        modalCheck = true

        let ticketTextDiv = document.querySelector('.ticket-text')
        ticketTextDiv.addEventListener('click', (e) => {
            e.target.textContent = ""
        })

        let ticketFilters = ticketModal.querySelectorAll(".ticket-filter");
        for (let i = 0; i < ticketFilters.length; i++) {
            ticketFilters[i].addEventListener("click", function (e) {
                if (e.target.classList.contains("selected-filter")) {
                    return;
                }
                document.querySelector(".selected-filter").classList.remove("selected-filter");
                e.target.classList.add("selected-filter");
            });
        }

    }

    function handleKeyPress() {

    }

    function closeTicketModal(e) {
        if (modalCheck) {
            document.querySelector('.ticket-modal').remove()
            modalCheck = false
        }
    }
})