function adjustChatLayout() {
  var chatContainer = document.querySelector('.chat-container');
  if (chatContainer) {
    var width = window.innerWidth;
    if (width <= 320) {
      chatContainer.style.padding = '10px';
    } else if (width <= 375) {
      chatContainer.style.padding = '12px';
    } else if (width <= 768) {
      chatContainer.style.padding = '15px';
    }
  }
}
window.addEventListener('resize', adjustChatLayout);
adjustChatLayout();
