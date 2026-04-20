
$(document).ready(function(){
	
	$("#form-wizard").formwizard({ 
		formPluginEnabled: true,
		validationEnabled: true,
		focusFirstInput : true,
		disableUIStyles : true,
	
		formOptions :{
			success: function(data){
				if(data.status == 'success'){
					Swal.fire({
						icon: 'success',
						title: 'Success!',
						text: data.message,
						confirmButtonColor: '#28b779'
					}).then((result) => {
						if (data.redirect) {
							window.location.href = data.redirect;
						}
					});
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Error!',
						text: data.message || 'Something went wrong.',
						confirmButtonColor: '#ee3333'
					});
				}
			},
			beforeSubmit: function(data){
				Swal.fire({
					title: 'Submitting...',
					text: 'Please wait while we add the staff member.',
					allowOutsideClick: false,
					didOpen: () => {
						Swal.showLoading();
					}
				});
			},
			dataType: 'json',
			resetForm: true
		},
		validationOptions : {
			rules: {
				username: "required",
				password: "required",
				password2: {
					equalTo: "#password"
				},
				email: { required: true, email: true },
				eula: "required"
			},
			messages: {
				username: "Please enter your name or username",
				password: "You must enter the password",
				password2: { equalTo: "Password don't match" },
				email: { required: "Please, enter your email", email: "Correct email format is name@domain.com" },
				eula: "You must accept the eula"
			},
			errorClass: "help-inline",
			errorElement: "span",
			highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).parents('.control-group').removeClass('error');
			}
		}
	});	
});
