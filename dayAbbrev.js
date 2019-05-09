const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

days.forEach(day => dayAbbreviations.push(day.slice(0, 2)));
