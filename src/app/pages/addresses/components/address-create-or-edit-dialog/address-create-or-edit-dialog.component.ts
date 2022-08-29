import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AddressDetails } from 'src/app/core/api/server/data.interface';
import { ForceNumberModule } from 'src/app/shared/behavior/force-number/force-number.module';
import { isNegativeValidator } from 'src/app/shared/utils/validators/is-negative.validator';
import { isNumberValidator } from 'src/app/shared/utils/validators/number.validator';
import { AddressesPageStore } from '../../addresses-page.store';

@UntilDestroy()
@Component({
  selector: 'app-address-create-or-edit-dialog',
  templateUrl: './address-create-or-edit-dialog.component.html',
  styleUrls: ['./address-create-or-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ForceNumberModule,
    MatSlideToggleModule,
  ],
})
export class AddressCreateOrEditDialogComponent implements OnInit {
  get isEditMode(): boolean {
    return !!this.data;
  }

  get title(): string {
    return this.isEditMode ? 'Modifier une adresse' : 'Ajouter une adresse';
  }

  form: FormGroup = new FormGroup({
    id: new FormControl<number | null>(null),
    nom: new FormControl<string>('', Validators.required),
    numero: new FormControl<number | null>(null, [
      Validators.required,
      isNegativeValidator,
      isNumberValidator,
    ]),
    rue: new FormControl<string>('', Validators.required),
    zip: new FormControl<number | null>(null, [
      Validators.required,
      isNegativeValidator,
      isNumberValidator,
    ]),
    ville: new FormControl<string>('', Validators.required),
    active: new FormControl<boolean>(false),
    isSuccursal: new FormControl<boolean>(true),
  });

  constructor(
    private readonly store: AddressesPageStore,
    @Inject(MAT_DIALOG_DATA) public data?: AddressDetails
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    if (this.isEditMode) {
      this.store.editAddress(this.form.value);
    } else {
      this.store.createAddress(this.form.value);
    }
  }
}
