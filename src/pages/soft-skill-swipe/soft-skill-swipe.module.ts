import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoftSkillSwipePage } from './soft-skill-swipe';
import { SwipeCardsModule } from 'ng2-swipe-cards';

@NgModule({
  declarations: [
    SoftSkillSwipePage,
  ],
  imports: [
    SwipeCardsModule,
    IonicPageModule.forChild(SoftSkillSwipePage),
    
  ],
  exports: [
    SoftSkillSwipePage
  ]
})
export class SoftSkillSwipePageModule {}
