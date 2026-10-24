function updateCalendar() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["january", "february", "march", "april", "may",
        "june", "july", "august", "september", "october", "november", "december"];
    
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    const weekDays = ["monday", "tuesday", "wednesday", "thursday",
        "friday", "saturday", "sunday"];

    const startingDay = (getStartingDayOfMonth(year, now.getMonth()) + 6) % 7;

    const diasNoMes = new Date(year, now.getMonth() + 1, 0).getDate();

    
    document.getElementById('month').textContent = month;
    document.getElementById('year').textContent = year;

    const calendarGrid = document.getElementById('calendar-grid');
    calendarGrid.innerHTML = '';

    for (let i = 0; i < startingDay; i++) {
        const emptyBox = document.createElement('div');
        emptyBox.classList.add('day-box', 'empty');
        calendarGrid.appendChild(emptyBox);
    }

    for (let i = 1; i <= diasNoMes; i++) {
        // Criar uma caixa para o dia i
        const dayBox = document.createElement('div');
        dayBox.classList.add('day-box');
        dayBox.textContent = i;
        if (i === day) {
            dayBox.classList.add('today');
        }
        calendarGrid.appendChild(dayBox);
    }
}

function getStartingDayOfMonth(year, month) {
    const date = new Date(year, month, 1);
    return date.getDay();
}

updateCalendar();