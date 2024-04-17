import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'tab-component',
  styleUrl: 'tab-component.scss',
  shadow: true,
})
export class TabComponent {
  @Element() host: HTMLDivElement;

  render() {
    return (
      <div>
        {Array.from(this.host.children).map(child => (
          <div innerHTML={child.outerHTML} />
        ))}
      </div>
    );
  }
}
