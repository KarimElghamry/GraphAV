const asyncTimout: (timout: number) => Promise<void> = (timout: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => resolve(), timout);
  });
};

export default asyncTimout;
