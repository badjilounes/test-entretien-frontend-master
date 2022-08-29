import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class PaginatorConfiguration extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Éléments par page';
  override nextPageLabel = 'Page suivante';
  override previousPageLabel = 'Page précédente';
  ofLabel = 'sur';

  override getRangeLabel = (
    page: number,
    pageSize: number,
    totalResults: number
  ) => {
    let results = totalResults;
    if (!results) {
      return '0 sur 0';
    }
    results = Math.max(totalResults, 0);
    const startIndex = page * pageSize;
    const endIndex =
      startIndex < results
        ? Math.min(startIndex + pageSize, results)
        : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} ${this.ofLabel} ${results}`;
  };
}

export const APP_PAGINATOR_INITIALIZER = {
  provide: MatPaginatorIntl,
  useClass: PaginatorConfiguration,
};
