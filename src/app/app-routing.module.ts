import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Route } from '@angular/router';




import { DefaultComponent } from './components/default/default.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { AdmindetailsComponent } from './components/admindetails/admindetails.component';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { HomeComponent } from './components/home/home.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentdetailsComponent } from './components/paymentdetails/paymentdetails.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionrenderComponent } from './components/questionrender/questionrender.component';
import { ResultpageComponent } from './components/resultpage/resultpage.component';
import { ScoredetailsComponent } from './components/scoredetails/scoredetails.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TestpageComponent } from './components/testpage/testpage.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ExamenService } from './services/examen.service';
import { LoginSignUpComponent } from './components/login-sign-up/login-sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { PaymentRegistrationComponent } from './components/payment-registration/payment-registration.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { QuestionsComponent } from './components/question/questions/questions.component';
import { CancelresultComponent } from './components/cancelresult/cancelresult.component';


const myRoutes: Route[] = [
  { path: '', redirectTo: 'welcomepage', pathMatch: 'full' },
  {
    path: 'firstpage', component: FirstpageComponent,canActivate:[AuthGuard]
  },{path:'userpage',component:UserpageComponent,canActivate:[AuthGuard],
  children:[{path:'',redirectTo:'login',pathMatch:'full'},{
      	        path:'firstpage',component:FirstpageComponent,canActivate:[AuthGuard]
  },{
                  path:'login',component:LoginComponent,canActivate:[AuthGuard]
  },{
    path:'cancelresult',component:CancelresultComponent,canActivate:[AuthGuard]
  },{
                    path:'homepage/:model/:id',component:HomepageComponent,canActivate:[AuthGuard]
  },{
                      path:'paymentregistration',component:PaymentRegistrationComponent,canActivate:[AuthGuard]
  },{
    path:'loginsignup',component:LoginSignUpComponent,canActivate:[AuthGuard]}]
},{path:'signup',component:SignUpComponent},
  {
  path:'sigin',component:SignInComponent
  }
,
  
  {
    path: 'welcomepage', component: WelcomepageComponent
  }, {
    path:'paymentregistration',component:PaymentRegistrationComponent,canActivate:[AuthGuard]
},
  {
    path: 'homepage', component: HomepageComponent,canActivate:[AuthGuard]
  },{
    path:'login',component:LoginComponent,canActivate:[AuthGuard]
  },
  {
    path: "testpage/:Testmodel", component: TestpageComponent,canActivate:[AuthGuard], children: [
      {
        path: "questionrender/:Testmodel/:Sno/:Qno", component: QuestionrenderComponent,canActivate:[AuthGuard]
      }
    ]
  },
  {
    path:"resultspage",component:ResultpageComponent,canActivate:[AuthGuard]
  },{
    path:"forgotpassword",component:ForgotpasswordComponent
  },
  {
path:'adminhomepage',component:AdminHomepageComponent,children:[
  {path:'',redirectTo:'home',pathMatch:'full'},  
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdmindetailsComponent},
  {path:'users',component:UserdetailsComponent},
  {path:'payment',component:PaymentdetailsComponent},
  {path:'score',component:ScoredetailsComponent},
  {path:'ques',component:EditQuestionComponent},
  {path:'quest',component:QuestionsComponent}, 
  {path:'edit',component:QuestionComponent}
]
  },                        
                 
  {
    path:"**", component:DefaultComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
