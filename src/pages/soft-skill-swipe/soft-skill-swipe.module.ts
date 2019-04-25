import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoftSkillSwipePage } from './soft-skill-swipe';
import { SwipeCardsModule } from 'ng2-swipe-cards';
import {MatInputModule} from '@angular/material';
import { BarRatingModule } from 'ngx-bar-rating'

@NgModule({
  declarations: [
    SoftSkillSwipePage,
  ],
  imports: [
    MatInputModule,
    SwipeCardsModule,
    IonicPageModule.forChild(SoftSkillSwipePage),
    BarRatingModule,
    
  ],
  exports: [
    SoftSkillSwipePage
  ],
  entryComponents:[]
})
export class SoftSkillSwipePageModule {}
