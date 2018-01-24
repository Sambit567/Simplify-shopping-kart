export class Highlights {
  public name: string;
  public percentage: number;

  public updateFrom(src: Highlights): void {
    this.name = src.name;
    this.percentage = src.percentage;
  }
}
