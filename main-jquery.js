// main-jquery.js

var tax = 0.06;
var cost_per_letter = 5;


$('#calculate').on(
    'click',
    function (e) {
        console.log('heyhey')
        e.preventDefault();
        //retrieve vaue of the name input field:
        var name_cost = $('input[name="name"]').val().length * cost_per_letter;
        console.log(name_cost);
        $('#lettersCostDisplay').html('$' + name_cost.toFixed(2));

        var special_chars_cost = $('input[name="specialChars"]').val().length * cost_per_letter;
        $('#specialCharsCostDisplay').html('$' + special_chars_cost.toFixed(2));

        var tax_cost = tax * (name_cost + special_chars_cost);
        $('#taxCostDisplay').html('$' + tax_cost.toFixed(2));

        var ship =
            parseFloat($('[name="shipping"]').val());
        console.log(ship);
        $('#shippingCostDisplay').html('$' + ship);

        var sub = name_cost + special_chars_cost + tax_cost;
        $('#subTotalDisplay').html('$' + sub.toFixed(2));

        var grand = name_cost + special_chars_cost + tax_cost + ship;
        $('#grandTotalDisplay').html('$' + grand.toFixed(2));
    }
);

//var name_display = $([name="name"]).html('#name').val();

//$('[name="name"]').on('input', function(e) {
//
//$('#name').html($('[name="name"]').val());
//   
//});
$('[name="name"]').on('input', function (e) {
    var name = $('input[name="name"]').val();
    if (name.length == 0) { //or: name == ''
        name = "Your name goes here!"
    }
    $('#name').html(name);
});


$('select[name="font-select"]').on('change', function (e) {
    console.log("ghodgjosj");
    var font_name = $('[name="font-select"]').val();
    console.log(font_name);
$('#name').css({'font-family': font_name});
});
