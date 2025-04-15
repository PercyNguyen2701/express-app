import Rectangle from '../models/rectangle.model.js';

export async function calculateAll(req, res) {
  const { width, height } = req.body;

  if (!width || !height) {
    return res.status(400).render('rectangle', {
      error: 'Chiều rộng và chiều cao là bắt buộc!',
      width,
      height,
    });
  }

  const rectangle = new Rectangle(width, height);

  const perimeter = rectangle.getPerimeter();
  const area = rectangle.getArea();

  res.render('rectangle', {
    width,
    height,
    perimeter,
    area,
  });
}
