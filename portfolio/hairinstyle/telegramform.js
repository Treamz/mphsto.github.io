$(document).ready(function () {
    $("form-element").submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        var message = $(formNm).find(".form-message");
        var formTitle = $(formNm).find(".form-title");
        $.ajax({
            type: "POST",
            url: 'https://www.nadyamaistrenko.com.ua/telegramform/php/send-message-to-telegram.php',
            data: formNm.serialize(),
            success: function (data) {
              // ����� ��������� �� �������� ��������
              message.html(data);
              formTitle.css("display","none");
              setTimeout(function(){
                formTitle.css("display","block");
                message.html('');
                $('input').not(':input[type=submit], :input[type=hidden]').val('');
              }, 3000);
            },
            error: function (jqXHR, text, error) {
                // ����� ��������� �� ������ ��������
                message.html(error);
                formTitle.css("display","none");
                setTimeout(function(){
                  formTitle.css("display","block");
                  message.html('');
                  $('input').not(':input[type=submit], :input[type=hidden]').val('');
                }, 3000);
            }
        });
        return false;
    });
});