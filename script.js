
    const subjects = [
        {
            math: "null",
            physics: "null",
            cscience: "null",
            pakstudies:"null"
        },
        {
            math: "50",
            physics: "60",
            cscience: "70",
            pakstudies:"40"
        },
        {
            math: "40",
            physics: "20",
            cscience: "10",
            pakstudies:"60"
        },
        {
            math: "80",
            physics: "90",
            cscience: "100",
            pakstudies:"90"
        }
    ];
    


    var maths = document.querySelector('.maths');
    var phy = document.querySelector('.phy');
    var cs = document.querySelector('.cs');
    var ps = document.querySelector('.pakstudies');
    var fn = document.querySelector('.fathname');
    var mn = document.querySelector('.myname');
    var names = document.querySelector('.name');
    var button = document.querySelector('#btn');


    var key1 = 'key1';
    var key2 = 'key2';
    var key3 = 'key3';

    let rollno = document.querySelector('#rollno');



    if(button){
        button.addEventListener('click',function(){
            localStorage.setItem(key1, rollno.value);
            localStorage.setItem(key2, mn.value);
            localStorage.setItem(key3, fn.value);
        })
    }


    var value1 = localStorage.getItem(key1)

    maths.innerHTML = subjects[value1].math;
    phy.innerHTML = subjects[value1].physics;
    cs.innerHTML = subjects[value1].cscience;
    ps.innerHTML = subjects[value1].pakstudies;

    var value2 = localStorage.getItem(key2);
    

    var value3  = localStorage.getItem(key3);
   


    names.innerHTML = `
                        <p><strong>Name: </strong> ${value2}</p>
                        <p><strong>Father's Name: </strong> ${value3}</p>
                        <p><strong>Roll Number: </strong> ${value1}</p>`
                        
    


  

