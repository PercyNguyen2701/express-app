import Square from '../models/square.model.js';

export async function calculateAll(req, res) {
  const { sidelength } = req.body;

  if (!sidelength) {
    return res.status(400).render('square', {
      error: 'Độ dài là bắt buộc!',
      sidelength,
    });
  }

  const square = new Square(sidelength);

  const perimeter = square.getPerimeter();
  const area = square.getArea();

  res.render('square', {
    sidelength,
    perimeter,
    area,
  });
}
