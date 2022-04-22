export type Ratings = {
  current: number;
  potential: number;
};

export const getEmptyRatings = (): Ratings => ({
  current: 0.0,
  potential: 0.0,
});
