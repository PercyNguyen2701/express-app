import Rectangle from '../models/rectangle.model.js';

export async function calculatePerimeter(req, res) {
  const { width, height } = req.body;

  if (!width || !height) {
    return res.status(400).json({ error: 'Width and height are required' });
  }

  const rectangle = new Rectangle(width, height);

  const perimeter = awaitrectangle.getPerimeter();
  res.render('rectangle', { type: 'Perimeter', result: perimeter });
}

export async function calculateArea(req, res) {
  const { width, height } = req.body;

  if (!width || !height) {
    return res.status(400).json({ error: 'Width and height are required' });
  }

  const rectangle = new Rectangle(width, height);

  const area = rectangle.getArea();

  res.render('rectangle', { type: 'Perimeter', result: area });
}

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
