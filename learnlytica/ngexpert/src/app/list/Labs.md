
If Lab 
- Creat if component 
- *ngIf with treu and false -- and inspect inside dom
- same now bind condition with property of class --> .ts 

--------------------------------------
list component *ngFor --> title 
<span></span>


- Creat switch component 
- Use switch case inside forloop on counrty code
- casee text-color based on bootstapclass 

---------------------------------------------
[ngStyle] = "{color: getcolor(code) }"
--------------------------------------------

ng g c parent-list
ng g c child-item

.1 [] to send data P ---> C  
   
   1. [proName] ? ===> .html -- will of parent component
   2. @Input() ===> .ts file --- child component

   ngOnInit() {
       alert(label);
       alert(config);
   }
 
 .html --> {{label}}  {{config  | json}}


 ------------------------------------------------

Child need to send data to parent 
configUpdated - {
  couseName: 'MEAN',
  started_date: '12/12/2021'
}
Parent need to show this data inside html --> 
--------------------------------------------------

Create parent child communiction with help of 
3 input prama
2 output 

I/O Pram name you choose of your choice 
Job List and Job component
Please do this LAB those --> Take help from team if anyonce facing issues

---------------------------------------------------------------------------

https://dz8fbjd9gwp2s.cloudfront.net/courses/61aa193f0cf272b4d2eef49a/61aa193f0cf272b4d2eef49a_scaled_cover.jpg?v=1



