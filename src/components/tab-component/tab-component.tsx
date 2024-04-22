import { Component, h, Element, State, Listen } from '@stencil/core';
import { Tab } from '../../utils/types/tab';

@Component({
  tag: 'tab-component',
  styleUrl: 'tab-component.scss',
  shadow: true,
})
export class TabComponent {
  @Element() host: HTMLDivElement;

  @State() tabs: Tab[] = [];
  @State() activeTab: number = 0;

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

  private setActiveTab(index: number) {
    this.activeTab = index;
  }

  private handleTabClick(e: Event, index: number) {
    e.preventDefault();
    this.setActiveTab(index);
  }

  private setTabIndexes(index: number) {
    return index === this.activeTab ? '0' : '-1';
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

  // Functions for handling arrow key navigation
  @Listen('keydown')
  handleGlobalKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.handleArrowKey(this.activeTab, -1); // Move to the previous tab
    } else if (event.key === 'ArrowRight') {
      this.handleArrowKey(this.activeTab, 1); // Move to the next tab
    } else if (event.key === 'Home') {
      this.setActiveTab(0); // Move to the first tab
      this.focusOnTab(0);
    } else if (event.key === 'End') {
      this.setActiveTab(this.tabs.length - 1); // Move to the last tab
      this.focusOnTab(this.tabs.length - 1);
    }
  }

  private focusOnTab(index: number) {
    const tab = this.host.shadowRoot.querySelector(`#anchor${index}`) as HTMLElement;
    if (tab) {
      tab.focus();
    }
  }

  private handleArrowKey(currentIndex: number, direction: number) {
    const numTabs = this.tabs.length;

    // Calculate the new index
    let newIndex = currentIndex + direction;

    // Wrap around if the index exceeds the number of tabs
    if (newIndex < 0) {
      newIndex = numTabs - 1;
    } else if (newIndex >= numTabs) {
      newIndex = 0;
    }

    // Set the active tab
    this.setActiveTab(newIndex);
    // Focus on the new tab
    this.focusOnTab(newIndex);
  }

  render() {
    return (
      <div>
        <div class="tabs">
          <ul role="tablist">
            {this.tabs.map((tab: Tab, index: number) => {
              return (
                <li role="presentation">
                  <a role="tab" id={`anchor${index}`} tabindex={this.setTabIndexes(index)} aria-controls={tab.id} href={`#${tab.id}`} onClick={e => this.handleTabClick(e, index)}>
                    {tab.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {Array.from(this.host.children).map((child: HTMLElement, index: number) => (
          <div role="tabpanel" style={{ display: this.activeTab == index ? 'block' : 'none' }} innerHTML={child.outerHTML} />
        ))}
      </div>
    );
  }
}
