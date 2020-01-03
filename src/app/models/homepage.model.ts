export class Homepage {
    Sno:number;
   Testmodel:string;
    Question:string;
    Option1:string;
    Option2:string;
    Option3:string;
    Option4:string;
    Answer:string;
    Mark:number;
    Qno:number;
    constructor(hsno?,hquestion?,hoption1?,hoption2?,hoption3?,hoption4?,answer?,mark?,testmodel?,mqno?)
    {
   this.Sno = hsno;
   this.Question = hquestion;
   this.Option1= hoption1;
   this.Option2 = hoption2;
   this.Option3 = hoption3;
   this.Option4 = hoption4;
   this.Answer = answer;
   this.Mark = mark;
   this.Testmodel=testmodel;
   this.Qno = mqno;
    }
   }