export class Testpage {
    Sno:number;
   Testmodel:string;
   Options;
   Scores:Number;
    Question:string;
    Option1:string;
    Option2:string;
    Option3:string;
    Option4:string;
    Answer:string;
    Mark:number;
    Qno:any;
    Flag:any;
    constructor(hsno?,hquestion?,hoption1?,hoption2?,hoption3?,hoption4?,answer?,mark?,testmodel?,hqno?,hOptions?,hflag?,scores?)
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
   this.Qno = hqno;
   this.Options = hOptions;
   this.Flag = hflag;
   this.Scores = scores;
    }
   }