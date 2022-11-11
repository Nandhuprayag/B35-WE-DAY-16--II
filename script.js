


let row=1;

function getData()
{
    event.preventDefault()
    let fname=document.getElementById('firstname').value;
    let lname=document.getElementById('lastname').value;
    let Address1=document.getElementById('Address1').value;
    let Address2=document.getElementById('Address2').value;
    let pin=document.getElementById('pin').value;
    let state=document.getElementById('state').value;
   let country=document.getElementById('country').value;

   let display=document.getElementById('display');

   let newRow=display.insertRow(row);

   let cell1=newRow.insertCell(0);
   let cell2=newRow.insertCell(1);
   let cell3=newRow.insertCell(2);
   let cell4=newRow.insertCell(3);
   let cell5=newRow.insertCell(4);
   let cell6=newRow.insertCell(5);
   let cell7=newRow.insertCell(6);
   let cell8=newRow.insertCell(7);

   cell1.innerHTML=fname;
   cell2.innerHTML=lname;
   cell3.innerHTML=`${Address1} ${Address2}`;
   cell4.innerHTML=pin;
   cell7.innerHTML=state;
   cell8.innerHTML=country;

   let gender=document.getElementsByName('gender');
   for(let i=0;i<gender.length;i++)
  {
   if(gender[i].checked === true)
   {
       cell5.innerHTML=gender[i].value
   }
  }
  
   let getCheckboxValue=document.getElementsByName('food');
   let food=[];

   for(let i=0;i<getCheckboxValue.length;i++)
   {
       if(getCheckboxValue[i].checked === true)
       {
           food.push(getCheckboxValue[i].value)
          
       }
   }


   if(food.length<2 )
   {
       alert('Please Select Minimum two for order')
   }else 
   {
       cell6.innerHTML=food;
   }
       row++

}