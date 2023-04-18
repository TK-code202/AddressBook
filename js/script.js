//User Interface Logic

$(document).ready(function() {
    //To Open Form
    $(".view").click(function() {
        $(".none").hide();
        $(".formOne").show();

    });

    $(".formOne").submit(function (event){
        // Add Contacts
        const firstNameInput = $("input#first-name").val();
        const middleNameInput = $("input#middle-name").val();
        const lastNameInput = $("input#last-name").val();
        const numberInput = $("input#tel-number").val();
        const addressInput = $("input#address").val();
        const emailInput = $("input#email").val();

        $(".name1").text(firstNameInput);
        $(".name2").text(middleNameInput);
        $(".name3").text(lastNameInput);
        $(".number").text(numberInput);
        $(".email").text(emailInput);
        $(".address").text(addressInput);

        $(".formOne").hide();
        $(".viewOne").show();
        
        event.preventDefault();
    });

    //Switch Contact View
    $(".clickable").click(function() {
        $(".viewOne").slideToggle(1000);
        $(".hiddenInfo").slideToggle(1000);
    });
    
    //Delete Contact
    $(".remove").click(function() {
        $(".hiddenInfo").hide();
        $(".none").show();
    });
});