export class Eduqation {
    Title:string;
    Img:string;
    Pakulteti:string;
    Pograma:string;
    Years:string;


    constructor(title:string,img:string,pakulteti:string,programa:string,yers:string) {
        this.Title = title;
        this.Img = img;
        this.Pakulteti = pakulteti;
        this.Pograma = programa;
        this.Years = yers;
    }
}


export class workCArd {
    Link:string;
    Img:string;
    Title:string

    constructor(link:string,img:string,title:string) {
        this.Link = link;
        this.Img = img;
        this.Title = title;
    }
}

export class  Form {
    Name:string;
    Surname:string;
    Email:string;
    Text:string;


    constructor() {
        this.Name = "";
        this.Surname = "";
        this.Email = "";
        this.Text = "";
    }
}