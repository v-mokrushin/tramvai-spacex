export const getBackgroundImageStyle = (url: string) => ({
  backgroundImage: `url(${url})`,
});

export const getIsClient = () => typeof window !== 'undefined';

export const wait = (delay = 1500) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
