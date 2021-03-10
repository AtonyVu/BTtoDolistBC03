import {listTaskk} from './listTask.js';
import getList from '../call/callAPI.js'
let query =(id)=>{
    return document.getElementById(id)
}
let inputTask =query("newTask");
let btnAdd =query("addItem");
let sortAC=query("two");
let sortCA=query("three");
let anima = document.getElementById("loading");
let  luan ;

let ulList =query("todo");
let List =query("completed");
 btnAdd.addEventListener("click",async function(event){
  event.preventDefault();
     let task =new listTaskk(parseInt(luan.length+1),inputTask.value,"uncomple");
   await  getList("ListTask","POST",task);
      load();
});


  const  load = async ()=> {
    ulList.innerHTML='';
    List.innerHTML=''
       anima.style.display='block';
       luan = await getList("ListTask","GET",null).then((result)=>result.data);
       anima.style.display='none';
       
   
    for(var i in luan)
  {
    console.log(luan[i].status);
      if(luan[i].status=="uncomple")
      {
    ulList.innerHTML+=`<li> <span>${luan[i].textTask}</span> <div><a id='item"${i}"' href='#' onclick='Itemlist1(${luan[i].id},${i})'><i class='fa fa-check-circle'></i></a>  
    <a onclick='deletel(${luan[i].id})'>   <i class="fa fa-trash-alt ma10" ></i> </a>
    </div> 
    </li>`
      }
      else {
        List.innerHTML+=`<li> <span>${luan[i].textTask}</span> <div><a id='item"${i}"' href='#' onclick='Itemlist1(${luan[i].id}.${i})'><i class='fa fa-check-circle colorcom'></i></a>  
        <a onclick='deletel(${luan[i].id})'>   <i class="fa fa-trash-alt ma10" ></i> </a>
        </div> 
        </li>`
      }
  }
  
}
// const load1 = ()=> {

   
//     List.innerHTML='';
//     for(var i in comList.list)
//   {

    
//   }
  
// }

// sortAC.addEventListener("click",function(){
//     doList.list.sort();
//     comList.list.sort();
//     load();
//     load1();
// });
// sortCA.addEventListener("click",function(){
//     doList.list.sort().reverse();
//     comList.list.sort().reverse();
//     load();
//     load1();
// });

const Itemlist1 =async (id,i) =>
{
    let change ={...luan[i]};
  
    if(luan[i].status=='comple')
    {
        change.status="uncomple";
        
    }
    else
    {
        change.status="comple";
    }
   
    await getList("ListTask/"+id,"PUT",change);

    
     await load();
}
const deletel = async (id) =>
{
 
  
   
   await getList("ListTask/"+id,"DELETE",null);

     load();
    
}
window.Itemlist1=Itemlist1;
window.deletel=deletel;
load();

