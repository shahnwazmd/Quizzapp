import { Component, OnInit, OnDestroy } from '@angular/core';

interface Question {
  question: string;
  options: string[];
  answer: number;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit, OnDestroy {
  questions: Question[] =
   [
  {
    "question": "What is the primary difference between a Component and a Directive in Angular?",
    "options": [
      "Components have a template, while directives manipulate the DOM.",
      "Directives always have a template, while components do not.",
      "Components are used for structural changes, directives for attribute changes.",
      "There is no functional difference; they are interchangeable."
    ],
    "answer": 0
  },
  {
    "question": "Explain the concept of Two-Way Data Binding in Angular and provide an example.",
    "options": [
      "Data flows only from the component to the view.",
      "Data flows only from the view to the component.",
      "Data synchronization between the component property and the view element, often using `[(ngModel)]`.",
      "Data binding exclusively relies on event listeners."
    ],
    "answer": 2
  },
  {
    "question": "What is the purpose of the `@Input()` decorator in Angular?",
    "options": [
      "To emit events from a child component to its parent.",
      "To pass data from a parent component to its child component.",
      "To inject services into a component.",
      "To define the selector of a component."
    ],
    "answer": 1
  },
  {
    "question": "What is the purpose of the `@Output()` decorator and `EventEmitter` in Angular?",
    "options": [
      "To receive data from a parent component.",
      "To perform calculations within a component.",
      "To emit custom events from a child component to its parent.",
      "To declare a component as a service."
    ],
    "answer": 2
  },
  {
    "question": "Which Angular lifecycle hook is called only once after the component's input properties have been initialized?",
    "options": [
      "ngOnChanges()",
      "ngDoCheck()",
      "ngOnInit()",
      "ngAfterViewInit()"
    ],
    "answer": 2
  },
  {
    "question": "When would you typically use the `ngOnChanges()` lifecycle hook?",
    "options": [
      "To clean up resources before component destruction.",
      "To detect changes in objects or arrays not detected by default change detection.",
      "To respond to changes in `@Input()` properties.",
      "To perform custom initialization logic after the view is rendered."
    ],
    "answer": 2
  },
  {
    "question": "What is the main advantage of using Angular Services for data management and logic sharing?",
    "options": [
      "Services tightly couple components, making them easier to manage.",
      "Services are primarily for styling and template manipulation.",
      "Services promote code reusability and maintainability by separating concerns.",
      "Services are responsible for direct DOM manipulation."
    ],
    "answer": 2
  },
  {
    "question": "Explain the concept of Dependency Injection (DI) in Angular.",
    "options": [
      "A technique for passing data between unrelated components.",
      "A design pattern where classes receive their dependencies from external sources rather than creating them.",
      "A way to manage state within a single component.",
      "A mechanism for handling asynchronous operations."
    ],
    "answer": 1
  },
  {
    "question": "What is the role of `HttpClientModule` in an Angular application?",
    "options": [
      "To manage application routing and navigation.",
      "To provide functionality for making HTTP requests to external APIs.",
      "To handle form validation and submission.",
      "To define the structure of a component's view."
    ],
    "answer": 1
  },
  {
    "question": "How do you handle asynchronous operations in Angular, particularly with HTTP requests?",
    "options": [
      "Using callbacks and nested functions.",
      "Exclusively using Promises for all asynchronous tasks.",
      "Leveraging Observables from RxJS and the `async` pipe.",
      "Angular doesn't support asynchronous operations."
    ],
    "answer": 2
  },
  {
    "question": "What is the purpose of a Pipe in Angular, and how do you use it?",
    "options": [
      "To define routing paths for the application.",
      "To transform data for display in templates using the `|` symbol.",
      "To create reusable components for UI elements.",
      "To manage HTTP requests and responses."
    ],
    "answer": 1
  },
  {
    "question": "Differentiate between a `Pure` and `Impure` pipe in Angular.",
    "options": [
      "Pure pipes are executed on every change detection cycle, while impure pipes are not.",
      "Pure pipes are faster because they only re-execute if their input changes, while impure pipes run more often.",
      "Impure pipes are only for filtering arrays, while pure pipes are for all other data transformations.",
      "There is no performance difference between pure and impure pipes."
    ],
    "answer": 1
  },
  {
    "question": "How do you conditionally render an element in an Angular template?",
    "options": [
      "Using the `ngFor` directive.",
      "Using the `ngSwitch` directive.",
      "Using the `*ngIf` structural directive.",
      "Using property binding with `[hidden]`."
    ],
    "answer": 2
  },
  {
    "question": "What is the `router-outlet` in Angular routing, and what is its purpose?",
    "options": [
      "A service for managing router guards.",
      "A directive that marks where the router should display the component for the active route.",
      "A module for configuring routing parameters.",
      "A method for navigating between routes programmatically."
    ],
    "answer": 1
  },
  {
    "question": "When would you use `RouterModule.forRoot()` versus `RouterModule.forChild()` when setting up routing?",
    "options": [
      "forRoot() is for lazy-loaded modules, forChild() is for the root module.",
      "forRoot() is used only in the app module, forChild() in feature modules.",
      "forRoot() is for feature modules, forChild() is for the root module.",
      "There is no difference in their usage or purpose."
    ],
    "answer": 1
  },
  {
    "question": "Explain the difference between Template-Driven Forms and Reactive Forms in Angular.",
    "options": [
      "Template-Driven Forms are suitable for complex forms, while Reactive Forms are for simple ones.",
      "Template-Driven Forms are defined programmatically, Reactive Forms declaratively in the template.",
      "Reactive Forms offer more control and are better for dynamic forms, while Template-Driven Forms are simpler for basic forms.",
      "Template-Driven Forms rely on `FormBuilder`, Reactive Forms on `ngModel`."
    ],
    "answer": 2
  },
  {
    "question": "What is the purpose of the `FormGroup` and `FormControl` classes in Reactive Forms?",
    "options": [
      "FormGroup manages a collection of FormControls, while FormControl represents an individual input field.",
      "FormGroup is for creating custom validators, while FormControl handles asynchronous operations.",
      "FormGroup is for template-driven forms, while FormControl is for reactive forms.",
      "They are only used for styling form elements."
    ],
    "answer": 0
  },
  {
    "question": "What does the `ng serve` command do in an Angular project?",
    "options": [
      "Builds the application for production deployment.",
      "Generates new components, services, or modules.",
      "Compiles the application and serves it on a local development server.",
      "Runs unit tests for the application."
    ],
    "answer": 2
  },
  {
    "question": "Which Angular CLI command would you use to generate a new component?",
    "options": [
      "ng create component my-component",
      "ng add component my-component",
      "ng generate component my-component",
      "ng new component my-component"
    ],
    "answer": 2
  },
  {
    "question": "What is the purpose of `ViewEncapsulation` in Angular?",
    "options": [
      "To prevent components from being styled by external CSS.",
      "To isolate a component's CSS styles from other components in the application.",
      "To define the layout and structure of a component's template.",
      "To manage data binding between parent and child components."
    ],
    "answer": 1
  }

  ];
//initial stage
  currentQuestionIndex = 0;
  timer =0;
  intervalId: any;
  score = 0;
  quizFinished= false;
  selectOptionIndex:number | null =null;
  answerChecked=false;
  //constructor() { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timer = 10;
    this.intervalId = setInterval(() => {
      if(this.timer>0){
        this.timer--;
      }
      else{
        clearInterval(this.intervalId);
        //this.answerChecked=true;
      }
    }, 1000);
  }
  selectAnswer(optionIndex: number) {
    if(this.answerChecked) return;
    this.selectOptionIndex=optionIndex;
    this.answerChecked=true;

    if (optionIndex == this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }

    clearInterval(this.intervalId);
    // setTimeout(()=>{
    //   this.nextQuestion();

    // },1000)

  }

  nextQuestion() {
    clearInterval(this.intervalId);
    this.selectOptionIndex=null;
    this.answerChecked=false;
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.startTimer();
    } else {
      this.quizFinished = true;
    }
  }
   prevQuestion(){
    clearInterval(this.intervalId);
    if(this.currentQuestionIndex>0){
      this.currentQuestionIndex--;
      this.selectOptionIndex=null;
      this.answerChecked=false;
      this.startTimer();
    }
   }

restartQuiz() {
  this.currentQuestionIndex = 0;
  this.score = 0;
  this.quizFinished = false;
  this.selectOptionIndex=null;
  this.answerChecked=false;
  this.startTimer();
}

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  
}
