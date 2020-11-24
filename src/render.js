$(document).ready(function() {
    var taskNum = 0;
    //// Task-making related part
    $('#about').hide()
    $('#start').click(function() { 
         let title = '';
            let deadLine = $('#deadLine').val();
            let taskLevel = $('#taskLevel').val();
         let taskCont = $('#target').val() +'<br>';
         if ($('#title').val() == '') {title = 'Title'}
          else {title = $('#title').val() + '<br>';}
        

         let boxColor;
         if (taskLevel == 'No Rush') {boxColor = "#FFFF99"} else if (taskLevel == 'Moderate') {boxColor = '#fed8b1'} else if (taskLevel == 'Urgent') {boxColor = ' #ffcccb'}
            taskNum++;
            let deleteTask = `
           $('#task${taskNum}').hide();
            `;
            var fullTask=` 
        <style>
            #task${taskNum}{
            font-family: 'Montserrat', sans-serif;
          border-radius: 25px;
            }
        #task${taskNum}{
            background-color: ${boxColor};	
            padding: 50px;
            width: 400px;
            left: 75%;
              bottom: 55%;
            }
            </style>
        <div class="task" id='task${taskNum}' style="background-color: ${boxColor} ;"> 
                <p> ${title}
                    ${taskCont}
            -Task Level: ${taskLevel} <br>
               -Deadline: ${deadLine} <br> 
            <p> <br> <br> <br> <br>
               <button onclick="${deleteTask}">(x)</button>
        </div>`;
        document.getElementById('textspace').innerHTML+= fullTask;});
    $('#namet').click(function(){
        $('#about').show()
    });
    $('#abth').click(function() {
        $('#about').hide()
    });
    $('#tskh').click(function() {
        $('.task').hide()
    });

});			