import { ChangeDetectionStrategy, Component } from "@angular/core";
import { UploadResult } from './xlsx-file-upload/xlsx-file-upload.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public uploaderContent: BehaviorSubject<string> = new BehaviorSubject('please drop file in');
  public xlsxUploaded(result: UploadResult) {

    this.uploaderContent.next(JSON.stringify(result));
  }
}
