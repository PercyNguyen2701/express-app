import rectangle from '../models/rectangle.js';

export const calculatePerimeterAndArea = (req, res) => {
  const { width, height } = req.body;

  const perimeter = rectangle.getPerimeter(width, height);

  const area = rectangle.getArea(width, height);

  res.render('rectangle', { width, height, perimeter, area });
};
