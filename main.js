var btn=document.getElementById("btn");
 var q=document.getElementById("q");
 
 var list =[
    {
        quote:`   <div class="" id="q">
        <div class="my-xxl-5">
            <p >${"You miss 100% of the shots you don't take."}</p>
           </div>
           <div class="my-xxl-5">
            <p >${"--Wayne Gretzy"}</p>
           </div>
     </div>`
      
    },
    {
        quote:`   <div class="" id="q">
        <div class="my-xxl-5">
            <p >${"ou only live once, but if you do it right, once is enough."}</p>
           </div>
           <div class="my-xxl-5">
            <p >${"-- Mae West"}</p>
           </div>
     </div>`
      
      },
      {
        quote:`   <div class="" id="q">
        <div class="my-xxl-5">
            <p >${"You know you're in love when you can't fall asleep because reality is finally better than your dreams."}</p>
           </div>
           <div class="my-xxl-5">
            <p >${"-― Dr. Seuss"}</p>
           </div>
     </div>`
       
      },
      {
        quote:`   <div class="" id="q">
        <div class="my-xxl-5">
            <p >${"In three words I can sum up everything I've learned about life: it goes on."}</p>
           </div>
           <div class="my-xxl-5">
            <p >${"-― Robert Frost"}</p>
           </div>
     </div>`
       
      },
      {
        quote:`   <div class="" id="q">
        <div class="my-xxl-5">
            <p >${"If you tell the truth, you don't have to remember anything."}</p>
           </div>
           <div class="my-xxl-5">
            <p >${"-― Mark Twain"}</p>
           </div>
     </div>`
      
      },
 ];

btn.onclick=function(){
   q.innerHTML=list[Math.floor(Math.random() * 5)].quote;
   
  
}
