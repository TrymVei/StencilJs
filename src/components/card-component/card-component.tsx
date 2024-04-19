import { Component, Prop, h, getAssetPath } from '@stencil/core';

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
   * Image source
   */
  @Prop() imageSrc = 'card1';

  /**
   * Image alt
   */
  @Prop() imageAlt: string;

  /**
   * Card description
   */
  @Prop() description: string;

  render() {
    const imageSrc = getAssetPath(`../assets/card/${this.imageSrc}.jpg`);

    return (
      <div class="card">
        <h3 class="card__title">{this.title}</h3>
        <img class="card__image" src={imageSrc} alt={this.imageAlt} />
        <p class="card__description">{this.description}</p>
      </div>
    );
  }
}
