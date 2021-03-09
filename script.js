// class User {
//     constructor(yName, yEmail, ySubject, yMessage){
//         this.yName = yName;
//         this.yEmail = yEmail;
//         this.ySubject = ySubject;
//         this.yMessage = yMessage;
//     }
// }


    let yName = document.getElementsByClassName("yName").value;
    let yEmail = document.getElementsByClassName("yEmail").value;
    let yMessage = document.getElementsByClassName("yMessage").value;



// let info = "";

// $(function(){
    if(yName != null && yEmail != null && yMessage != null){
    $(`.subButton `).on(`click`, function(){
        document.forms['contact-form'].reset()
    })
}
// })

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 80) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});