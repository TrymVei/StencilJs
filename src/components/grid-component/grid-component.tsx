import { Component, h } from '@stencil/core';

@Component({
  tag: 'grid-component',
  styleUrl: 'grid-component.scss',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <div class="grid">
        <slot></slot>
      </div>
    );
  }
}
