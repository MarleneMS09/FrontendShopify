document.addEventListener('DOMContentLoaded', function() {



    const quickViewButtons = document.querySelectorAll('.has-tip a');

     // Select all Quick View buttons
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();  // Previene la acción predeterminada del enlace
            const modalId = event.currentTarget.getAttribute('data-reveal-id');
            openQuickViewModal(modalId);
        });
    });

      // Function to open the Quick View modal
    function openQuickViewModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    }


    // Function to close the Quick View modal
    function closeQuickViewModal(modal) {
        modal.style.display = 'none';
    }

    // Closes the modal when the close button is clicked or outside the modal
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('close-reveal-modal') || event.target.classList.contains('reveal-modal')) {
            const openModals = document.querySelectorAll('.reveal-modal.expand[style="display: block;"]');
            openModals.forEach(modal => closeQuickViewModal(modal));
        }
    });
});
