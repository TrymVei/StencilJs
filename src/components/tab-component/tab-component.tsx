import { Component, h, Element, State } from '@stencil/core';

@Component({
  tag: 'tab-component',
  styleUrl: 'tab-component.scss',
  shadow: true,
})
export class TabComponent {
  @Element() host: HTMLDivElement;

  @State() tabsId: string[] = [];

  componentDidRender() {
    Array.from(this.host.children).map(child => {
      if (child instanceof HTMLElement && child.id) {
        this.tabsId.push(child.id);
      }
    });
  }

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
