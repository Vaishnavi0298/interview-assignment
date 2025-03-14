import { Component, EventEmitter, Input, IterableDiffers, Output } from '@angular/core';
import { DualListComponent } from 'angular-dual-listbox';

@Component({
  selector: 'app-dual-list',
  templateUrl: './dual-list.component.html',
  styleUrl: './dual-list.component.scss'
})
export class DualListBoxComponent extends DualListComponent {


  @Input() sourceName = '';
  @Input() targetName = '';
  
  @Output() selectChange = new EventEmitter();
  @Output() override destinationChange = new EventEmitter<any[]>();
  constructor(differs: IterableDiffers) {
    super(differs);
  }

  moveAll() {
    this.selectAll(this.available);
    this.moveItem(this.available, this.confirmed);
  }

  removeAll() {
    this.selectAll(this.confirmed);
    this.moveItem(this.confirmed, this.available);
  }

  // Override function in DualListComponent to add custom selectChange event.
  override selectItem(list: Array<any>, item: any) {
    debugger
    const pk = list.filter((e: any) => {
      return Object.is(e, item);
    });
    if (pk.length > 0) {
      // Already in list, so deselect.
      for (let i = 0, len = pk.length; i < len; i += 1) {
        const idx = list.indexOf(pk[i]);
        if (idx !== -1) {
          list.splice(idx, 1);
          this.selectChange.emit({ key: item._id, selected: false });
        }
      }
    } else {
      list.push(item);
      this.selectChange.emit({ key: item._id, selected: true });
    }
  }

  override isAllSelected(list: any) {
    return list.sift.length === 0; // This is incorrect
  }

  override moveItem(from: any, to: any) {
    if (from.pick.length === 0) return; // Ensure something is selected
  
    from.pick.forEach((item: any) => {
      const index = from.sift.indexOf(item);
      if (index !== -1) {
        from.sift.splice(index, 1); // Remove from source
        to.sift.push(item); // Add to target
      }
    });
  
    from.pick = [];
    to.pick = [];
  
    // Manually trigger the event with the updated target list
    this.destinationChange.emit(to.sift);
    
    console.log("Items moved. Updated confirmed list:", to.sift);
  }
}
