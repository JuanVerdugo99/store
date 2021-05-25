import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { PageNotFoundRouting } from './page-not-found.routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        PageNotFoundComponent
    ], 
    imports: [
        CommonModule,
        PageNotFoundRouting
    ]
})
export class PageNotFoundModule {}