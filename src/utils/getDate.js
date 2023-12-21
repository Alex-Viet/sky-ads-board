export const formatDate = (date) => {
  const dateObj = new Date(date);

  if (isNaN(dateObj)) {
    return '';
  } else {
    if (date.indexOf('T') === -1) {
      const localDate = dateObj
        .toLocaleString('ru', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
        .split(' ');

      return localDate[1] + ' ' + localDate[2];
    } else {
      return dateObj.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    }
  }
};
