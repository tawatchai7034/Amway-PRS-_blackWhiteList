import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { Router } from '@angular/router';

interface DetailNode {
  name: string;
  children?: DetailNode[];
}

const TREE_DATA: DetailNode[] = [
  {
    name: '[10000] เครื่องไม่ทำงาน(พัดลมไม่ทำงาน)(0)',
    children: [{name: 'ฐานเครื่องไดรฟ์'}]
  },
  {
    name: '[10001] ปิดเครื่องเอง(และเปิดใหม่)อัตโนมัติ(0)',
    children: [{name: 'อะไหล่ 1'}, {name: 'อะไหล่ 2'}, {name: 'อะไหล่ 3'}],
  },
  
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */

@Component({
  selector: 'app-receive-shopper-detail',
  templateUrl: './receive-shopper-detail.component.html',
  styleUrls: ['./receive-shopper-detail.component.sass']
})
export class ReceiveShopperDetailComponent implements OnInit {

 
  
 
  bsValue = new Date();
  private _transformer = (node: DetailNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length >= 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
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

  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA
    
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  
  
  dtOptions: DataTables.Settings = {};
 
  public date = new Date();
  
  onConfirm(){
    this.router.navigate(['/pages/shopper-view'])
  }
 
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',   
      processing: true,
      searching:false,
      scrollX:true,
      scrollY:'250px',
      dom:'frtip',
      "ordering": false,
      'columnDefs': 
      [
        {'targets': [0],title: "อุปกรณ์",'orderable': false,},
        {'targets': [1],title: "Serial Number",className:'center','orderable': false,},
        {'targets': [2],title: "การชำรุด",className:'center','orderable': false,},
        {'targets': [3],title: "อาการเหลือง",className:'center','orderable': false,},
        {'targets': [4],title: "หมายเหตุ",className:'center','orderable': false,}, 
    ]
    };
   
  }

}
