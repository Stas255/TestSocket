$(function () {
    var socket = io.connect();

    var message = $("#message");
    var send_message = $("#send_message");
    var chatroom = $("#chatroom");

    send_message.click(function() {
        socket.emit("new_message", { message: message.val()});
    });
    
    socket.on("print_message", data => {
        message.val("");
        chatroom.append("<div class='message" + data.message + "</div>");
    });

});