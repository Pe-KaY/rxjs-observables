import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, of, interval, take , concat, throwError} from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjs-observable';


  // Create an observable using of
  observable$ = of("1","8","6");
  // using from with an array
  arrayOfColors$ = from(["red", "green", "blue"]);
  // Using interval
  interval$ = interval(1000).pipe(take(5));
  // Using concat
  concat$ = concat(this.arrayOfColors$, this.observable$);
  // Throw error
  throwError$ = concat(
    of(1, 2, 3),          
    throwError('Something went wrong!')  
  );

  ngOnInit() {
    // logs observable values using of
    this.observable$.subscribe({
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => console.log("using of completed successfully")
    });
    // logs observable values using from
    this.arrayOfColors$.subscribe({
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => console.log("using from completed successfully")
    });
    // logs observable values using interval
    this.interval$.subscribe({
      next: value => console.log(`value: ${value} Timestamp: ${new Date().toLocaleTimeString()}`),
      error: err => console.error(err),
      complete: () => console.log(" interval completed successfully")
    });
    // logs observable values using concat
    this.concat$.subscribe({
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => console.log("concat completed successfully")
    });
    // logs observable values using throwError
    this.throwError$.subscribe({
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => console.log("throwError completed successfully")
    });
  }

}
