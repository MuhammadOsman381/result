var maths = document.querySelector('.maths');
var phy = document.querySelector('.phy');
var cs = document.querySelector('.cs');
var rollno = document.querySelector('#rollno');
var btn = document.querySelector('.btn');

const subjects = [
    {

    },
    {
        math:"50",
        physics:"60",
        cscience:"70",
    },
    {
        math:"40",
        physics:"20",
        cscience:"10",
    },
    {
        math:"80",
        phyics:"90",
        cscience:"100",
    }
];

   
btn.addEventListener('click',function(){
 
        for(let i=0; i<=subjects.length; i++)
        {
            if(rollno.value === i)
            {
                maths.innerHTML = subjects[i].math;
                phy.innerHTML = subjects[i].physics;
                cs.innerHTML = subjects[i].cscience;
            }
        }
})
