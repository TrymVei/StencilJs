import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'tab-component',
  styleUrl: 'tab-component.scss',
})
export class TabComponent {
  private getText() { }

  render() {
    return (
      <div>
        <button>Om oss</button>
      </div>
    );
  }
}
