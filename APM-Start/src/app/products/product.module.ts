import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductResolverService } from '../products/product-resolver.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductEditInfoComponent } from '../products/product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from '../products/product-edit/product-edit-tags.component'
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'products',
        children: [
          {path:'', component: ProductListComponent},
          { path: ':id', component: ProductDetailComponent, resolve: { resolvedData: ProductResolverService } },
      {
        path: ':id/edit', component: ProductEditComponent, resolve: { resolvedData: ProductResolverService },
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: ProductEditInfoComponent },
          { path: 'tags', component: ProductEditTagsComponent },
        ]
      }
        ]
      },
      
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ]
})
export class ProductModule { }
