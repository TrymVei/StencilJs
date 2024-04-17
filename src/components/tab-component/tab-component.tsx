import { Component, h, Element, State } from '@stencil/core';
import { Tab } from '../../utils/types/tab';

@Component({
  tag: 'tab-component',
  styleUrl: 'tab-component.scss',
  shadow: true,
})
export class TabComponent {
  @Element() host: HTMLDivElement;

  @State() tabs: Tab[] = [];

  /*
   * Get the innerHTML of the first child of a tab
   * @param childId: string - The id of the tab
   * @returns string | null - The innerHTML of the first child of the tab or null if the tab does not exist
   */
  private getTabTitle(childId: string): string | null {
    const childElement = document.getElementById(childId);
    return childElement ? childElement.children.item(0).innerHTML : null;
  }

  /*
   * Conver a tab to an object with the name and id of the tab
   * @param name: string - The name of the tab. Usually the innerHTML of the first child of the tab.
   * @param id: string - The id of the tab
   * @returns Tab - An object with the name and id of the tab
   */
  private convertToTabObject(name: string, id: string): Tab {
    return {
      name,
      id,
    };
  }

  componentWillLoad() {
    Array.from(this.host.children).map(child => {
      if (child instanceof HTMLElement && child.id) {
        const id = child.id;
        const title = this.getTabTitle(id);
        const tabObject = this.convertToTabObject(title, id);
        this.tabs.push(tabObject);
      }
    });
  }

  render() {
    return (
      <div>
        <div class="tabs">
          {this.tabs.map((tab: Tab) => {
            return <a href={`#${tab.id}`}>{tab.name}</a>;
          })}
        </div>
        {Array.from(this.host.children).map(child => (
          <div innerHTML={child.outerHTML} />
        ))}
      </div>
    );
  }
}
