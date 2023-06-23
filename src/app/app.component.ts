import {
  Component,
  ViewChild,
  Inject,
  Renderer2,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import {
  LyResizingCroppingImages,
  ImgCropperConfig,
  ImgCropperEvent,
} from '@alyle/ui/resizing-cropping-images';

import { styles } from './app.styles';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  classes;
  croppedImg: string;
  @ViewChild(LyResizingCroppingImages) imgCropper: LyResizingCroppingImages;
  scale: number;
  myConfig: ImgCropperConfig = {
    width: 560,
    height: 650,
    fill: '#ff2997',
  };
  ngOnInit() {
    this.classes = this.theme.addStyleSheet(styles);
  }

  constructor(private theme: LyTheme2) {}

  /** on event */
  onCrop(e: ImgCropperEvent) {
    this.croppedImg = e.dataURL;
    console.log(e);
  }
  /** manual crop */
  getCroppedImg() {
    const img = this.imgCropper.crop();
    console.log(img);
    return img.dataURL;
  }
}
