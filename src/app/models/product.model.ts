import { Highlights } from "app/models/ingredient.model";

export class Product {
  public id: string;
  public name: string;
  public description: string;
  public price: number;
  public Highlights: Highlights[];

  public updateFrom(src: Product): void {
    this.id = src.id;
    this.name = src.name;
    this.description = src.description;
    this.price = src.price;
    this.Highlights = src.Highlights.map((i) => {
      let ingredient = new Highlights();
      ingredient.updateFrom(i);
      return ingredient;
    });
  }
}
