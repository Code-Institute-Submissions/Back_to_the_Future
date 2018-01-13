$(document).ready(function() {
	$("#submitButton").on("click", function() {
		if(document.contactForm.fname.value == "") {
			$('#errorModal').modal("show");
			return false;
		} else if(document.contactForm.sname.value == "") {
			$('#errorModal').modal("show");
			return false;
		} else if(document.contactForm.email.value == "") {
			$('#errorModal').modal("show");
			return false;
		} else {
			$('#successModal').modal("show");
			return false;
		}
	})
})