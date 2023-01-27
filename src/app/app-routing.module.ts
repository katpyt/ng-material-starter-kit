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
import { SubjectModelInMemoryCryptoComponent } from './components/subject-model-in-memory-crypto/subject-model-in-memory-crypto.component';
import { SubjectModelInMemoryUserComponent } from './components/subject-model-in-memory-user/subject-model-in-memory-user.component';
import { DetailsAgePredictionComponent } from './components/details-age-prediction/details-age-prediction.component';
import { SubjectStringExternalSnackbarProductComponent } from './components/subject-string-external-snackbar-product/subject-string-external-snackbar-product.component';
import { DetailsCatFactsComponent } from './components/details-cat-facts/details-cat-facts.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ListComponentModule } from './components/list/list.component-module';
import { SubjectVoidInMemoryRandomNumberComponentModule } from './components/subject-void-in-memory-random-number/subject-void-in-memory-random-number.component-module';
import { SubjectVoidInMemoryRandomNamesComponentModule } from './components/subject-void-in-memory-random-names/subject-void-in-memory-random-names.component-module';
import { SubjectVoidExternalUsersComponentModule } from './components/subject-void-external-users/subject-void-external-users.component-module';
import { SubjectVoidExternalRandomCatFactComponentModule } from './components/subject-void-external-random-cat-fact/subject-void-external-random-cat-fact.component-module';
import { SubjectVoidExternalDeleteCountryComponentModule } from './components/subject-void-external-delete-country/subject-void-external-delete-country.component-module';
import { ProductListRefreshDataLastexcerciseComponentModule } from './components/product-list-refresh-data-lastexcercise/product-list-refresh-data-lastexcercise.component-module';
import { SubjectModelInMemoryCryptoComponentModule } from './components/subject-model-in-memory-crypto/subject-model-in-memory-crypto.component-module';
import { SubjectModelInMemoryUserComponentModule } from './components/subject-model-in-memory-user/subject-model-in-memory-user.component-module';
import { DetailsAgePredictionComponentModule } from './components/details-age-prediction/details-age-prediction.component-module';
import { SubjectStringExternalSnackbarProductComponentModule } from './components/subject-string-external-snackbar-product/subject-string-external-snackbar-product.component-module';
import { FirstDialogComponentModule } from './components/first-dialog/first-dialog.component-module';
import { DetailsCatFactsComponentModule } from './components/details-cat-facts/details-cat-facts.component-module';
import { DetailsProductComponentModule } from './components/details-product/details-product.component-module';

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
    { path: 'refresh-products', component: ProductListRefreshDataLastexcerciseComponent },
    { path: 'crypto', component: SubjectModelInMemoryCryptoComponent },
    { path: 'subject-model-in-memory-user', component: SubjectModelInMemoryUserComponent },
    { path: 'age', component: DetailsAgePredictionComponent },
    { path: 'age/:name', component: DetailsAgePredictionComponent },
    { path: 'subject-string-external-snackbar-product', component: SubjectStringExternalSnackbarProductComponent },
    { path: 'cat-facts', component: DetailsCatFactsComponent },
    { path: 'product/:id', component: DetailsProductComponent }
  ]), ProductListComponentModule, ListComponentModule, SubjectVoidInMemoryRandomNumberComponentModule, SubjectVoidInMemoryRandomNamesComponentModule, SubjectVoidExternalUsersComponentModule, SubjectVoidExternalRandomCatFactComponentModule, SubjectVoidExternalDeleteCountryComponentModule, ProductListRefreshDataLastexcerciseComponentModule, SubjectModelInMemoryCryptoComponentModule, SubjectModelInMemoryUserComponentModule, DetailsAgePredictionComponentModule, SubjectStringExternalSnackbarProductComponentModule, FirstDialogComponentModule, DetailsCatFactsComponentModule, DetailsProductComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
