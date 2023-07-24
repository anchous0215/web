function addNInput(n){
    if(n<=0)
        n = 1;

    form = document.getElementById("formex");

    head = document.getElementsByTagName("h1")[0];

    for (let i = 0; i<n; i++){
        input = document.createElement("input");
        input.type = "text";

        input.addEventListener("focus", function(){
            this.classList.add("red");
        });

        input.addEventListener("blur", function(){
            this.classList.remove("red");
        });

        input.addEventListener("input", function(){
            ins = form.getElementsByTagName("input");
            let sum = 0;

            for (let i = 0; i<ins.length; i++){
                if(!isNaN(ins[i].value)){
                    sum+=Number(ins[i].value);
                }
            }

            head.textContent = sum;
        });

        form.appendChild(input);
    }
}

addNInput(5)