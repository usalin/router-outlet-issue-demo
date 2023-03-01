import { SubmissionComponent } from "../components/submission/submission.component";
import { TasksComponent } from "../components/tasks/tasks.component";

export const ACCOUNT_ROUTES = [
    { path: '', redirectTo: 'submission', pathMatch: 'full' },
    { path: 'submission', component: SubmissionComponent },
    { path: 'tasks', outlet: 'secondary', component: TasksComponent }
];
