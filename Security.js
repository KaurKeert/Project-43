class Security {

    constructor(){

        // Add code to create the input and button elements

        this.input1=createInput("Code1")
        this.input1.position(100,90)
        this.input1.style('background','lightgrey')
   
        this.b1=createButton("Check")
        this.b1.position(100,120)
        this.b1.style('background','lightgrey')
   
        this.input2=createInput("Code3")
        this.input2.position(700,180)
        this.input2.style('background','lightgrey')
   
        this.b2=createButton("Check")
        this.b2.position(700,210)
        this.b2.style('background','lightgrey')
   
        this.input3=createInput("Code2")
        this.input3.position(100,290)
        this.input3.style('background','lightgrey')
   
        this.b3=createButton("Check")
        this.b3.position(100,330)
        this.b3.style('background','lightgrey')

  

    }

    display(){
        this.b1.mousePressed(()=>{
            if(system.authenticate(inputCode1,this.input1.value())){
                this.b1.hide()
                this.input1.hide()
                 score++
           
            }
             })


             this.b2.mousePressed(()=>{
                if(system.authenticate(inputCode2,this.input2.value())){
                    this.b2.hide()
                    this.input2.hide()
                     score++
               
                }
                 })


                 this.b3.mousePressed(()=>{
                    if(system.authenticate(inputCode3,this.input3.value())){
                        this.b3.hide()
                        this.input3.hide()
                         score++
                   
                    }
                     })
    }

 
}


