const getRandomIndex = (list: any[]): number =>
  Math.round((list.length - 1) * Math.random());

export default getRandomIndex;
