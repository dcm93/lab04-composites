interface IDomElement {
  print();
}

export abstract class divTag{
  protected content:string;
  protected symbol:string;
  private leaves: pTag[];
  printContent(){
    console.log(" " + this.symbol + this.content) + '\n</div>\n';
  }
  constructor(content:string, symbol:string){
    this.content = content;
    this.symbol = symbol;
  }
 
  addTag(){
  }
  removeTag(){
  }
}

export class pTag extends divTag{
  constructor(content:string, symbol:string){
    super(content, symbol);
  }
  //Override 
  printContent(){
    console.log("   " +super.symbol + super.content + '\n</p>\n');
  }

}

export class htmlTag extends divTag{
  private components:divTag[];
  constructor(content:string, symbol:string){
    super(content, symbol);
  }

  printContent(){
    console.log(super.symbol + super.content + "\n</html>\n")
  }


}




//leaf is p 
// component is div
//composite is html

