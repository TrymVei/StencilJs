import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.scss',
  shadow: true,
})
export class CardComponent {
  /**
   * Card title
   */
  @Prop() title: string;

  /**
   * Card image
   */
  @Prop() Image: HTMLImageElement;

  /**
   * Card description
   */
  @Prop() description: string;

  render() {
    return (
      <div>
        <h3>{this.title}</h3>
        <img src={this.Image.src} alt={this.Image.alt} />
        <p>{this.description}</p>
      </div>
    );
  }
}
