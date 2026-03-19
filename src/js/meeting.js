function adjustMeetingLayout() {
  var meetingCards = document.querySelectorAll('.meeting-card');
  if (meetingCards.length > 0) {
    meetingCards.forEach(function(card) {
      var width = window.innerWidth;
      if (width <= 320) {
        card.style.padding = '10px';
      } else if (width <= 375) {
        card.style.padding = '12px';
      } else if (width <= 768) {
        card.style.padding = '15px';
      }
    });
  }
}
window.addEventListener('resize', adjustMeetingLayout);
adjustMeetingLayout();
