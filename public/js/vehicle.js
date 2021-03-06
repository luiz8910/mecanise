$(function () {

    $(".car_id").change(function () {

        const id = $(this).val();


        if(id)
        {
            var request = $.ajax({
                url: '/car_details/' + id,
                method: 'GET',
                dataType: 'json'
            });

            request.done(function (e) {

                if(e.status)
                {
                    console.log(e);

                    $("#brand").val(e.car.brand);

                    $("#version").val(e.car.version);

                    var append = '';

                    var diff = e.car.end_year - e.car.start_year;

                    $("#year option").remove();

                    if(diff > 0)
                    {

                        for(var i = 0; i < diff + 1; i++)
                        {
                            var year = parseInt(e.car.start_year) + i;

                            append += '<option value="'+year+'">'+year+'</option>';
                        }

                    }
                    else{
                        append += '<option value="'+e.car.start_year+'" selected>'+e.car.start_year+'</option>';
                    }

                    $("#year").append(append);
                }
                else{
                    sweet_alert_error(e.msg);
                }
            });

            request.fail(function (e) {

                console.log('fail');
                console.log(e);
            });
        }
    });

    $("#license_plate").keydown(function (e) {
        var value = $(this).val();

        console.log(e.which);

        $(this).val(value.toUpperCase());

        for (var i = 0; i < value.length; i++)
        {
            if(value.length < 4)
            {
                if(!$("#mercosul").is(":checked"))
                    if (e.which < 65 || e.which > 90)
                        if(e.which !== 8)
                            return false;


                if((value.length === 3) && (parseInt(e.which) !== 8))
                    $(this).val(value.toUpperCase() + '-');


            }
            else{

                if(!$("#mercosul").is(":checked"))
                    if((e.which < 48 || e.which > 57))
                        if(e.which < 96 || e.which > 105)
                            if(e.which !== 8)
                                return false;

            }

        }

    }).keyup(function (e) {

        var value = $(this).val();

        $(this).val(value.toUpperCase());

        if((value.length === 3) && (parseInt(e.which) !== 8))
            $(this).val(value.toUpperCase() + '-');

    }).blur(function () {

        var len = $(this).val().length;

        if(len > 0 && len < 8)
        {
            $("#span_license_plate_status").css('display', 'block');
            $("#input-license_plate").addClass('border-red');
        }
        else{
            $("#span_license_plate_status").css('display', 'none');
            $("#input-license_plate").removeClass('border-red');
        }
    });

    $("#color").select2();

    $("#owner_id").select2();

    $("#car_id").select2();

    hide_elements();
});

function new_owner()
{
    $("#span_name").css('display', 'none');
    $("#span_cel").css('display', 'none');

    var name = $("#modal_name").val();

    var cpf = $("#modal_cpf").val();

    var email = $("#modal_email").val();

    var cel = $("#modal_cel").val();

    var zip_code = $("#zip_code").val();

    var street = $("#street").val();

    var number = $("#number").val();

    var district = $("#district").val();

    var city = $("#city").val();

    var state = $("#state").val();

    name.removeClass('input-error');
    cel.removeClass('input-error');

    if (name === "")
    {
        name.addClass('input-error');

        $("#span_name").css('display', 'block');
        return false;
    }

    if(cel === "")
    {
        cel.addClass('input-error');

        $("#span_cel").css('display', 'block');
        return false;
    }

    var modal = $(".modal");



    $.ajax({
        url: '/person',
        method: 'POST',
        dataType: 'json',
        data:{
            'name': name,
            'cpf': cpf,
            'email': email,
            'cel': cel,
            'zip_code': zip_code,
            'street': street,
            'number': number,
            'district': district,
            'city': city,
            'state': state,
            'role_id': 4,
            'origin': 'json'
        },

    }).done(function (e) {

        if(e.status)
        {
            var append = '<option value="'+e.id+'" selected>'+name+'</option>';

            $("#owner_id").append(append);

            $("#new_owner").modal('hide');

            sweet_alert_success('O proprietário foi cadastrado com sucesso');
        }

    }).fail(function (e) {
        console.log('fail');
        console.log(e);

        $("#new_owner").modal('hide');

        sweet_alert_error();
    });
};

function hide_elements()
{
    $(".email").css('display', 'none');
}
