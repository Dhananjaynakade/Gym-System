/**
 * Flowless JS - Global AJAX Handler for Gym System
 */

$(document).ready(function() {
    // Inject Loading Overlay
    $('body').append('<div id="loading-overlay"><div class="spinner"></div></div>');

    // Handle AJAX Form Submissions
    $(document).on('submit', 'form[data-flowless="true"]', function(e) {
        e.preventDefault();
        
        const $form = $(this);
        const url = $form.attr('action');
        const formData = $form.serialize() + '&ajax=1';
        
        showLoading();

        $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            dataType: 'json',
            success: function(response) {
                hideLoading();
                if (response.status === 'success') {
                    Swal.fire({
                        title: 'Success!',
                        text: response.message,
                        icon: 'success',
                        confirmButtonText: 'Great!',
                        confirmButtonColor: '#764ba2'
                    }).then((result) => {
                        if (response.redirect) {
                            window.location.href = response.redirect;
                        } else {
                            // Optional: Clear form or reload table
                            if ($form.attr('id') === 'memberRegistrationForm') {
                                $form[0].reset();
                            }
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: response.message || 'An unexpected error occurred.',
                        icon: 'error',
                        confirmButtonColor: '#ff5f6d'
                    });
                }
            },
            error: function(xhr, status, error) {
                hideLoading();
                Swal.fire({
                    title: 'System Error',
                    text: 'Unable to process request. Please check your connection.',
                    icon: 'warning',
                    confirmButtonColor: '#ff5f6d'
                });
                console.error(error);
            }
        });
    });

    // Handle Delete Actions with Confirmation
    $(document).on('click', '.btn-delete-flowless', function(e) {
        e.preventDefault();
        const url = $(this).attr('href');
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff5f6d',
            cancelButtonColor: '#2e363f',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = url; // Standard redirect for now, can be AJAXed later
            }
        });
    });

    function showLoading() {
        $('#loading-overlay').addClass('active');
    }

    function hideLoading() {
        $('#loading-overlay').removeClass('active');
    }
});
