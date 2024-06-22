import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit, OnDestroy {
  private firstObservableSubscription: Subscription;

  ngOnInit(): void {
    // this.firstObservableSubscription = interval(1000).subscribe((count:number) => {
    //   console.info(count);
    // });

    const customObservable: Observable<number> = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count >= 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than three'));
        }
        count++;
      }, 1000);
    });

    this.firstObservableSubscription = customObservable
      .pipe(
        map((data: number) => {
          return 'round ' + (data + 1);
        })
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error.message);
        },
        complete: () => {
          console.log('Observable Completed');
        },
      });
  }

  ngOnDestroy(): void {
    this.firstObservableSubscription.unsubscribe();
  }
}
