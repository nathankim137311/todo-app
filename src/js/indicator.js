
  ///////////////
 // Indicator //
///////////////

export default class Indicator {
    static redIndicator() {
        const todayContainer = document.getElementById('today-container');
        const todayDiv = document.createElement('div');
        todayDiv.classList.add('today-indicator');
        todayContainer.appendChild(todayDiv);
    }
}