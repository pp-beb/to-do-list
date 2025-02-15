import './box.css';
export function Box()
{

    function add(){
        document.getElementById("inputBox").style.visibility="visible";
    }

    function e(){
        document.getElementById('slot1').innerText=document.getElementById('inputTxt').value;
    }

    function handleSubmit(event) {
        event.preventDefault(); 
        document.getElementById('inputTxt').value="";
        document.getElementById('inputBox').style.visibility="hidden";
      }

    return(
        <div>
<div className="container">
<div className="title">To-Do list</div>
<div className="addIcon" id="addIcon" onClick={add}>+</div>
<div className="input" id="input">
<form  className="inputBox" id="inputBox" autocomplete="off" onSubmit={handleSubmit}>
    <input type="text" id="inputTxt" onChange={e}></input>
</form >
</div>
<div id="slot1" className="slot1"></div>
<div id="slot2" className="slot2"></div>
<div id="slot3" className="slot3"></div>
<div id="slot4" className="slot4"></div>
<div id="slot5" className="slot5"></div>
</div>
</div>
    )
}