export const getFirefoxColors = (theme: string) => {
  switch (theme) {
    case '#61CAFF':
      return ['#004e75', '#069'];
    case '#F6BA39':
      return ['#704e05', '#926607'];
    case '#8D3682':
      return ['#55204e', '#6f2a66'];
    case '#303772':
      return ['#232753', '#2d336c'];
    default:
      return ['', ''];
  }
};