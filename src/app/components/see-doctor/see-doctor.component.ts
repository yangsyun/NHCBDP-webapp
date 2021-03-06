import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-see-doctor',
  templateUrl: './see-doctor.component.html',
  styleUrls: ['./see-doctor.component.scss']
})
export class SeeDoctorComponent implements OnInit {


  dimoTypes = [];
  settings = {
    actions: {
      add: false,
      delete: false,
      edit: false
    },
    columns: {
      name: {
        title: '字段名称'
      },
      type: {
        title: '字段类型'
      },
      desc: {
        title: '描述'
      },
      size: {
        title: '大小'
      },
      nullable: {
        title: '是否为空'
      },
      default: {
        title: '默认'
      },
    }
  };

  constructor(private router1: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {
    // this.router1.params.subscribe(params => {
      // this.dataService.getCECDataJDKA(params['dataName']).subscribe(response => {
      //   this.dimoTypes = response;
      //   console.log(response);
      // });
      this.dataService.getCECDataJDKA4().subscribe(response => {
        this.dimoTypes = response;
        console.log(response);
      });
    // });
  }


}
