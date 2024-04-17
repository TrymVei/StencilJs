import { Component, h, Element, State } from '@stencil/core';

@Component({
  tag: 'tab-component',
  styleUrl: 'tab-component.scss',
  shadow: true,
})
export class TabComponent {
  @Element() host: HTMLDivElement;

  @State() tabsId: string[] = [];

  componentWillLoad() {
    Array.from(this.host.children).map(child => {
      if (child instanceof HTMLElement && child.id) {
        this.tabsId.push(child.id);
      }
    });
  }

  render() {
    return (
      <div>
        <div class="tabs">
          {this.tabsId.map(tabId => {
            return <a href={`#${tabId}`}>{tabId}</a>;
          })}
        </div>
        {Array.from(this.host.children).map(child => (
          <div innerHTML={child.outerHTML} />
        ))}
      </div>
    );
  }
}
