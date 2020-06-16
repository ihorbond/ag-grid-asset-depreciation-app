import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { AssetService } from '../../services/asset.service';
import { Asset } from '../../models/asset';

@Component({
  selector: 'kod-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  @ViewChild(AgGridAngular, { static: true }) agGrid: AgGridAngular;
 /*/ columnDefs = [
      {headerName: 'Make', field: 'make', sortable: true, filter: true,filterParams: {
          buttons: ['reset', 'apply'],
        },checkboxSelection: true , editable: true },
      {headerName: 'Model', field: 'model', sortable: true, filter: true , filterParams: {
          buttons: ['reset', 'apply']}, editable: true  },
      {headerName: 'Price', field: 'price', sortable: true, filter: true ,filterParams: {
          buttons: ['reset', 'apply']}, editable: true}
  ];*/
  
  private propTypes: Asset[];

  columnDefs = [
    { headerName: 'Make', field: 'make', editable: true, rowGroup: true },
    { headerName: 'Life', field: 'model', editable: true }
  ];

  autoGroupColumnDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };
  
  rowData: any;

  constructor(
    private http: HttpClient,
    private _assetService: AssetService) {
  }

  ngOnInit() {
    this._assetService.getAll().subscribe((proptypes) => {
      this.propTypes = proptypes;
      console.log("prop types", this.propTypes);
    });


    this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}