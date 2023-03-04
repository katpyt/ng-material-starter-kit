import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { map, Observable } from 'rxjs';
import { InfluencerModel } from '../../models/influencer.model';
import { InfluencerService } from '../../services/influencer.service';

interface InfluencerNode {
  name: string;
  children?: InfluencerNode[];
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}



@Component({
  selector: 'app-influencer-nested-tree',
  styleUrls: ['./influencer-nested-tree.component.scss'],
  templateUrl: './influencer-nested-tree.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfluencerNestedTreeComponent {
  readonly list$: Observable<InfluencerModel[]> = this._influencerService.getAll();
  
  
  private _transformer = (node: InfluencerNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  
  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  
  // const TREE_DATA: InfluencerNode[] = this.list$.forEach(

  // )
    

  constructor(private _influencerService: InfluencerService) {
    //this.dataSource.data = this.list$;
  }

  hasChild = (_: number, node:FlatNode) => node.expandable;
}
