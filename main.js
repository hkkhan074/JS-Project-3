(function(){
    const button=document.querySelector('.click');
    const generator=()=>{
            var randomNumber=Math.floor(Math.random()*16777215);
            var randomCode= "#"+randomNumber.toString(16);
            document.querySelector('body').style.backgroundColor= randomCode;
            document.querySelector('body').style.transition= "0.4s all";
            document.querySelector('#color_code').innerText=randomCode;
            document.querySelector('.copy').addEventListener('click',function(e){
                navigator.clipboard.writeText(randomCode);
                document.querySelector('.copy').innerText="Copied";
                document.querySelector('.copy').style.transition="0.3s all";
            })
            document.querySelector('.copy').innerText="Copy";
            document.querySelector('.copy').style.transition="0.3s all";

        }
    button.addEventListener('click',generator);

}())