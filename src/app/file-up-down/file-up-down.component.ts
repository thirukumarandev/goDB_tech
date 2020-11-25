import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-up-down',
  templateUrl: './file-up-down.component.html',
  styleUrls: ['./file-up-down.component.css']
})
export class FileUpDownComponent implements OnInit {
  fileCon = {
    uploadAPI: {
      url:"https://localhost:3000/posts"
    }
};
  constructor() { }

  ngOnInit(): void {
  }

}
