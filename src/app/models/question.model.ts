export class Question{
    Sno:number;
    Question:string;
    Option1:string;
    Option2:string;
    Option3:string;
    Option4:string;
    Testmodel:string;
    Answer:string;
    Mark:number;
    constructor(qsNo?,qques?,qop1?,qop2?,qop3?,qop4?,qtest?,qans?,qmark?){
        this.Sno=qsNo;
        this.Question=qques;
        this.Option1=qop1;
        this.Option2=qop2;
        this.Option3=qop3;
        this.Option4=qop4;
        this.Testmodel=qtest;
        this.Answer=qans;
        this.Mark=qmark;
    }

}