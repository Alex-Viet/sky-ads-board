export const formatDate = (date) => {
  const dateObj = new Date(date);

  if (isNaN(dateObj)) {
    return '';
  } else {
    if (date.indexOf('T') === -1) {
      return dateObj.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
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
