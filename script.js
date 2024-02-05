var maths = document.getElementsByClassName('maths');
var phy = document.getElementsByClassName('phy');
var cs = document.getElementsByClassName('cs');
var rollno = document.querySelector('#rollno');
var btn = document.querySelector('.btn');

const subjects = [
    {
        math:"null",
        physics:"null",
        cscience:"null",
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
 
        if(rollno.value === '')
        {
            alert('Enter the rollno');
        }

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
