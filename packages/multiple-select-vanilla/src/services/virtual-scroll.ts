import Constants from '../constants.js';
import type { HtmlStruct, VirtualCache, VirtualScrollOption } from '../models/interfaces.js';
import { convertItemRowToHtml, emptyElement } from '../utils/domUtils.js';

export class VirtualScroll {
  protected clusterRows?: number;
  protected cache: VirtualCache;
  protected scrollEl: HTMLElement;
  protected blockHeight?: number;
  protected clusterHeight?: number;
  protected contentEl: HTMLElement;
  protected parentEl: HTMLElement | null;
  protected itemHeight?: number;
  protected lastCluster: number;
  protected scrollTop: number;
  dataStart!: number;
  dataEnd!: number;
  rows: HtmlStruct[];
  destroy: () => void;
  callback: () => void;
  sanitizer?: (dirtyHtml: string) => string;

  constructor(options: VirtualScrollOption) {
    this.rows = options.rows;
    this.scrollEl = options.scrollEl;
    this.contentEl = options.contentEl;
    this.parentEl = options.contentEl?.parentElement;
    this.callback = options.callback;

    this.cache = {} as VirtualCache;
    this.scrollTop = this.scrollEl.scrollTop;

    this.initDOM(this.rows);

    this.scrollEl.scrollTop = this.scrollTop;
    this.lastCluster = 0;

    const onScroll = () => {
      if (this.lastCluster !== (this.lastCluster = this.getNum())) {
        this.initDOM(this.rows);
        this.callback();
      }
    };

    this.scrollEl.addEventListener('scroll', onScroll, false);
    this.destroy = () => {
      this.scrollEl.removeEventListener('scroll', onScroll, false);
      emptyElement(this.contentEl);
    };
  }

  reset(rows: HtmlStruct[]) {
    this.lastCluster = 0;
    this.cache = {} as any;
    emptyElement(this.contentEl);
    this.initDOM(rows);
  }

  protected initDOM(rows: HtmlStruct[]) {
    if (typeof this.clusterHeight === 'undefined') {
      this.cache.scrollTop = this.scrollEl.scrollTop;
      const firstRowElm = convertItemRowToHtml(rows[0]);

      this.contentEl.appendChild(firstRowElm);
      this.contentEl.appendChild(firstRowElm);
      this.contentEl.appendChild(firstRowElm);
      this.cache.data = [rows[0]];
      this.getRowsHeight();
    }

    const data = this.initData(rows, this.getNum());
    const dataChanged = this.checkChanges('data', data.rows);
    const topOffsetChanged = this.checkChanges('top', data.topOffset);
    const bottomOffsetChanged = this.checkChanges('bottom', data.bottomOffset);

    emptyElement(this.contentEl);

    if (dataChanged && topOffsetChanged) {
      if (data.topOffset) {
        this.contentEl.appendChild(this.getExtra('top', data.topOffset));
      }
      data.rows.forEach(h => this.contentEl.appendChild(convertItemRowToHtml(h)));

      if (data.bottomOffset) {
        this.contentEl.appendChild(this.getExtra('bottom', data.bottomOffset));
      }
    } else if (bottomOffsetChanged && this.contentEl.lastChild) {
      (this.contentEl.lastChild as HTMLElement).style.height = `${data.bottomOffset}px`;
    }
  }

  protected getRowsHeight() {
    if (typeof this.itemHeight === 'undefined') {
      // make sure parent is not hidden before reading item list height
      const prevParentDisplay = this.parentEl?.style.display || '';
      if (this.parentEl && (prevParentDisplay === '' || prevParentDisplay === 'none')) {
        this.parentEl.style.display = 'block';
      }
      const nodes = this.contentEl.children;
      const node = nodes[Math.floor(nodes.length / 2)];
      this.itemHeight = (node as HTMLElement).offsetHeight;
      if (this.parentEl) {
        this.parentEl.style.display = prevParentDisplay;
      }
    }
    this.blockHeight = this.itemHeight * Constants.BLOCK_ROWS;
    this.clusterRows = Constants.BLOCK_ROWS * Constants.CLUSTER_BLOCKS;
    this.clusterHeight = this.blockHeight * Constants.CLUSTER_BLOCKS;
  }

  protected getNum() {
    this.scrollTop = this.scrollEl.scrollTop;
    const blockSize = (this.clusterHeight || 0) - (this.blockHeight || 0);
    if (blockSize) {
      return Math.floor(this.scrollTop / blockSize) || 0;
    }
    return 0;
  }

  protected initData(rows: HtmlStruct[], num: number) {
    if (rows.length < Constants.BLOCK_ROWS) {
      return {
        topOffset: 0,
        bottomOffset: 0,
        rowsAbove: 0,
        rows,
      };
    }
    const start = Math.max((this.clusterRows! - Constants.BLOCK_ROWS) * num, 0);
    const end = start + this.clusterRows!;
    const topOffset = Math.max(start * this.itemHeight!, 0);
    const bottomOffset = Math.max((rows.length - end) * this.itemHeight!, 0);
    const thisRows: HtmlStruct[] = [];
    let rowsAbove = start;
    if (topOffset < 1) {
      rowsAbove++;
    }
    for (let i = start; i < end; i++) {
      rows[i] && thisRows.push(rows[i]);
    }

    this.dataStart = start;
    this.dataEnd = end;

    return {
      topOffset,
      bottomOffset,
      rowsAbove,
      rows: thisRows,
    };
  }

  protected checkChanges<T extends keyof VirtualCache>(type: T, value: VirtualCache[T]) {
    const changed = value !== this.cache[type];
    this.cache[type] = value;
    return changed;
  }

  protected getExtra(className: string, height: number) {
    const tag = document.createElement('li');
    tag.className = `virtual-scroll-${className}`;
    if (height) {
      tag.style.height = `${height}px`;
    }
    return tag;
  }
}
