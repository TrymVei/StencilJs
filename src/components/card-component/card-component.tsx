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
  @Prop() cardTitle: string;

  /**
   * Image source
   */
  @Prop() imageSrc = 'card1';

  /**
   * Image alt
   */
  @Prop() imageAlt: string;

  render() {
    const imageSrc = getAssetPath(`../assets/card/${this.imageSrc}.jpg`);

    return (
      <div class="card">
        <img class="card__image" src={imageSrc} alt={this.imageAlt} />
        <div class="card__content">
          <h3 class="card__title">{this.cardTitle}</h3>
          <p class="card__description">
            <slot></slot>
          </p>
        </div>
      </div>
    );
  }
}
