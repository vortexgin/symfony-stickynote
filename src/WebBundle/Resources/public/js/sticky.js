var noteTPL = '' +
    '<div class="panel panelis panel-default col col-md-2 col-xs-12" style="{{position}}">' +
    '<div class="panel-heading">' +
    '<input type="hidden" name="id">' +
    '<input type="text" name="name" class="form-control" placeholder="Title">' +
    '<a href="#" class="move"><i class="fa fa-arrows-alt"></i></a>' +
    '<a href="#" class="close"><i class="fa fa-window-close"></i></a>' +
    '</div>' +
    '<div class="panel-body">' +
    '<textarea name="message" class="form-control" rows="3" placeholder="Content"></textarea>' +
    '</div>' +
    '<div class="panel-footer hide">' +
    '<span class="updated"></span>' +
    '<button class="save btn btn-primary">Save</button>' +
    '</div>' +
    '</div>';

var noteZindex = 1;

function deleteNote() {
    $(this).parent('.panel-heading').parent('.panel').hide("puff", {
        percent: 133
    }, 250);
};

function saveNote() {
    if($(this).hasClass('panel')){
        var id = $(this).find('input[name=id]'),
            name = $(this).find('input[name=name]'),
            message = $(this).find('textarea[name=message]'), 
            position = {
                top: $(this).offset().top, 
                left: $(this).offset().left
            }, 
            needReload = false;
    }else{
        var id = $(this).parent('.panel-footer').parent('.panel').find('input[name=id]'),
            name = $(this).parent('.panel-footer').parent('.panel').find('input[name=name]'),
            message = $(this).parent('.panel-footer').parent('.panel').find('textarea[name=message]'), 
            position = {
                top: $(this).parent('.panel-footer').parent('.panel').offset().top, 
                left: $(this).parent('.panel-footer').parent('.panel').offset().left
            },
            needReload = true;
    }
    
    var param = {
            name: name.val(),
            message: message.val(), 
            position: JSON.stringify(position)
        },
        method = 'POST',
        url = '/api/v1/sticky';

    if (!empty(id.val())) {
        method = 'PATCH';
        url += '/' + id.val();
    }
    $.ajax({
        url: url,
        method: method,
        data: param,
        beforeSend: function () {
            if(needReload){
                $("body").swidget().show();
            }
        },
        complete: function () {
            if(needReload){
                $("body").swidget().hide();
            }
        },
        success: function (data, textStatus, jqXHR) {
            if(needReload){
                toastr['success']('Save success');
            }
        },
        error: function (jqXHR) {
            toastr['error'](jqXHR.responseJSON.message);
        }
    });
}

function loadNote() {
    $.ajax({
        url: '/api/v1/sticky',
        method: 'GET',
        beforeSend: function () {
            $("body").swidget().show();
        },
        complete: function () {
            $("body").swidget().hide();
        },
        success: function (data, textStatus, jqXHR) {
            data.sticky.forEach(function (element, index) {
                newNote(element);
            }, this);
        }
    });
}

function newNote(param) {
    var id = param.id || '',
        name = param.name || '',
        message = param.message || '',
        position = param.position || '{"top": 10, "left": 10}',
        updated = param.updated_at || param.created_at;

    if(!empty(position)){
        var objPosition = JSON.parse(position);
        if(objPosition.top != 10 && objPosition.left != 10){
            console.log(noteTPL);
            noteTPL = noteTPL.replace('{{position}}', 'top:' + objPosition.top + '; left:' + objPosition.left);
            console.log(noteTPL);            
        }
    }
        
    var newNote = $(noteTPL).hide().appendTo("#board").show("fade", 300)
        .attr('id', 'sticky-' + id)
        .draggable()
        .on('dragstart', function () {
            $(this).css('z-index', ++noteZindex);
        })
        .on('dragstop', saveNote);
    newNote.find('input[name=id]').val(id);
    newNote.find('input[name=name]').val(name);
    newNote.find('textarea[name=message]').val(message);
    if(!empty(updated)){
        newNote.find('.updated').html('<i>Last updated</i><br />' + updated);
    }

    newNote.find('.close').click(deleteNote);
    newNote.find('.save').click(saveNote);
    $('.panel-heading input, .panel-body textarea').focus(activeNote);
};

function activeNote() {
    var footer = $(this).parent().parent('.panel').find('.panel-footer');
    if (footer.hasClass('hide')) {
        footer.removeClass('hide');
    }
}

function deactiveNote() {
    var footer = $(this).find('.panel-footer');
    if (!footer.hasClass('hide')) {
        footer.addClass('hide');
    }
}



$(document).ready(function () {
    $("body").shieldLoadingPanel({
        text: "loading..."
    });
    $("#board").height($(document).height());
    $("#addNew").click(newNote);

    loadNote();
    return false;
});