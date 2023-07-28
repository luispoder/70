nomedoalunoarray=[];

function submit()
{
    var name1=document.getElementById("nomedoaluno1").value ;
   var name2=document.getElementById("nomedoaluno2").value ;
   var name3=document.getElementById("nomedoaluno3").value ;
   var name4=document.getElementById("nomedoaluno4").value ;
   nomedoalunoarray.push(name1);
   nomedoalunoarray.push(name2);
   nomedoalunoarray.push(name3);
   nomedoalunoarray.push(name4);
   console.log(nomedoalunoarray);
   document.getElementById("displayname").innerHTML=nomedoalunoarray;
   document.getElementById("botaoenviar").style.display="none";
   document.getElementById("botaoorganizar").style.display="inline-block";
}