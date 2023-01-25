import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateObservablesComponent } from './components/create-observables/create-observables.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ListComponent } from './components/list/list.component';
import { SubjectVoidInMemoryRandomNumberComponent } from './components/subject-void-in-memory-random-number/subject-void-in-memory-random-number.component';
import { SubjectVoidInMemoryRandomNamesComponent } from './components/subject-void-in-memory-random-names/subject-void-in-memory-random-names.component';
import { SubjectVoidExternalUsersComponent } from './components/subject-void-external-users/subject-void-external-users.component';
import { SubjectVoidExternalRandomCatFactComponent } from './components/subject-void-external-random-cat-fact/subject-void-external-random-cat-fact.component';
import { SubjectVoidExternalDeleteCountryComponent } from './components/subject-void-external-delete-country/subject-void-external-delete-country.component';
import { ProductListRefreshDataLastexcerciseComponent } from './components/product-list-refresh-data-lastexcercise/product-list-refresh-data-lastexcercise.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ListComponentModule } from './components/list/list.component-module';
import { SubjectVoidInMemoryRandomNumberComponentModule } from './components/subject-void-in-memory-random-number/subject-void-in-memory-random-number.component-module';
import { SubjectVoidInMemoryRandomNamesComponentModule } from './components/subject-void-in-memory-random-names/subject-void-in-memory-random-names.component-module';
import { SubjectVoidExternalUsersComponentModule } from './components/subject-void-external-users/subject-void-external-users.component-module';
import { SubjectVoidExternalRandomCatFactComponentModule } from './components/subject-void-external-random-cat-fact/subject-void-external-random-cat-fact.component-module';
import { SubjectVoidExternalDeleteCountryComponentModule } from './components/subject-void-external-delete-country/subject-void-external-delete-country.component-module';
import { ProductListRefreshDataLastexcerciseComponentModule } from './components/product-list-refresh-data-lastexcercise/product-list-refresh-data-lastexcercise.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'create-observables', component: CreateObservablesComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: '', component: ListComponent },
    { path: 'subject-void-in-memory-random-number', component: SubjectVoidInMemoryRandomNumberComponent },
    { path: 'subject-void-in-memory-random-names', component: SubjectVoidInMemoryRandomNamesComponent },
    { path: 'subject-void-external-users', component: SubjectVoidExternalUsersComponent },
    { path: 'subject-void-external-random-cat-fact', component: SubjectVoidExternalRandomCatFactComponent },
    { path: 'subject-void-external-delete-country', component: SubjectVoidExternalDeleteCountryComponent },
    { path: 'refresh-products', component: ProductListRefreshDataLastexcerciseComponent }
  ]), ProductListComponentModule, ListComponentModule, SubjectVoidInMemoryRandomNumberComponentModule, 
  SubjectVoidInMemoryRandomNamesComponentModule, SubjectVoidExternalUsersComponentModule, 
  SubjectVoidExternalRandomCatFactComponentModule, SubjectVoidExternalDeleteCountryComponentModule, ProductListRefreshDataLastexcerciseComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
