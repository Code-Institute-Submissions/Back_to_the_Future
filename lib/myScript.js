// To get me started with JavaScript form validation I used the following resources:
// 	- https://www.w3schools.com/js/js_validation.asp
// 	- https://www.tutorialspoint.com/javascript/javascript_form_validations.htm

// I then wrote my own code below taking what I had learnt from the above links.

function formValidation() {
	if(document.contactForm.fname.value == "") {
		alert("Your first name must be entered");
		document.contactForm.focus();
		return false();
	} else if(document.contactForm.sname.value == "") {
		alert("Your surname must be entered");
		document.contactForm.focus();
		return false();
	} else if(document.contactForm.email.value == "") {
		alert("Your email must be entered");
		document.contactForm.focus();
		return false();
	} else {
		alert("Thank you for contacting me")
	}
}

//  Can I use the below?

// $(document).ready(function() {
// 	$("button").click(function() {
// 		if(document.contactForm.fname.value == "") {
// 			alert("Your first name must be entered");
// 			document.contactForm.focus();
// 			return false();
// 		} else if(document.contactForm.sname.value == "") {
// 			alert("Your surname must be entered");
// 			document.contactForm.focus();
// 			return false();
// 		} else if(document.contactForm.email.value == "") {
// 			alert("Your email must be entered");
// 			document.contactForm.focus();
// 			return false();
// 		} else {
// 			alert("Thank you for contacting me")
// 		}
// 	})
// })