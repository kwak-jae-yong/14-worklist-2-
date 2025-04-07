const projectList = document.querySelectorAll('.project-lst>li');

projectList.forEach((project) => {
    const content = project.querySelector('.content');


    project.addEventListener('click', (e) => {
        e.preventDefault()

        // if(content){

            if (project.classList.contains('Click')) {
                
                console.log('content ');
                
                project.classList.remove('Click');
            }
            else{
                project.classList.add('Click');
                
            }
        // }

    });


});


// 
projectList.forEach((project) => {
    const content = project.querySelector('.content');


});