document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.datepicker');
  let options = {
    i18n: {
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      weekdaysAbbrev: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    },
    autoClose: true,
    defaultDate: new Date(),
    setDefaultDate: true,
    disableWeekends: false,
    firstDay: 1,
    
  }
  let instances = M.Datepicker.init(elems, options);
});

