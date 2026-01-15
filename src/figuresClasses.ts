type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number = 0,
    private b: number = 0,
    private c: number = 0,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Value cannot be negative');
    }

    if (
      this.a + this.b <= this.c ||
      this.b + this.c <= this.a ||
      this.a + this.c <= this.b
    ) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) * 0.5;
    const s: number = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(s * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number = 0,
  ) {
    if (radius <= 0) {
      throw new Error('Value cannot be negative');
    }
  }

  getArea(): number {
    const s: number = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number = 0,
    public height: number = 0,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Value cannot be negative');
    }
  }

  getArea(): number {
    const s: number = this.width * this.height;

    return Math.round(s * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
