   //define a tasks array, using Let to hold tasks submitted by the user.
   let tasksArray = []; 
 
   //set an event listener for a submission event on the create-task-form
    document.getElementById("create-task-form").addEventListener("submit", (e)=>{
        e.preventDefault();
        const form = e.target;
        const formFields = form.elements;
        const task = formFields.newTaskDescription.value;
   

        //formhandler adds the submitted task to tasksArray and adds a Dom li element to the tasks list. 
        function formHandler (item, array){  
            array.push(item);
            const tasksList = document.querySelector("ul#tasks");
            let taskListItem = document.createElement("li");
            taskListItem.id = item;
            taskListItem.className = "listItem";
            let deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "x";                
            taskListItem.innerHTML = `${array.indexOf(item) + 1}. ${item}`;
            taskListItem.appendChild(deleteBtn)
            console.log(taskListItem);
            console.log(item)
            return tasksList.appendChild(taskListItem);
             
       } 
       formHandler(task, tasksArray); 


       function displayTasks (array) {
    
             for(const item of array) { 
                const tasksList = document.querySelector("ul#tasks");
                tasksList.innerHTML = null;
                let taskListItem = document.createElement("li");
                taskListItem.id = item;
                taskListItem.className = "listItem";
                let deleteBtn = document.createElement("button");
                deleteBtn.innerHTML = "x";                
                taskListItem.innerHTML = `${array.indexOf(item) + 1}. ${item}`;
                taskListItem.appendChild(deleteBtn)
                console.log(taskListItem);
                console.log(item)
                return tasksList.appendChild(taskListItem);
            };
        
    }
    let buttons = document.querySelectorAll("button");
    
    for (const button of buttons){
        tasksArray;
        button.addEventListener("click", (e)=> {
            e.preventDefault();
            
            console.log("i have been clicked");
            let taskTodelete = e.target.parentElement.id;
            console.log(tasksArray.splice(tasksArray.indexOf(taskTodelete),1));
            tasksArray.splice(tasksArray.indexOf(taskTodelete),1);
            
            e.target.parentElement.remove();
            return displayTasks(tasksArray);
            
        })
        
    }
    });
   
   