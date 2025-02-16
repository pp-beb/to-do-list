import './box.css';
export function Box() {

    function add() {
        document.getElementById("inputBox").style.visibility = "visible";
    }

    function e() {
       
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        document.getElementById('inputBox').style.visibility = "hidden";

        if (document.getElementById('slot1').innerText===""){
            document.getElementById('slot1').innerText = document.getElementById('inputTxt').value;
            document.getElementById('slot1A').style.visibility = "visible";
            }
    
            else if(document.getElementById('slot2').innerText===""){
                document.getElementById('slot2').innerText = document.getElementById('inputTxt').value;
                document.getElementById('slot2A').style.visibility = "visible";
                }

                else if(document.getElementById('slot3').innerText===""){
                    document.getElementById('slot3').innerText = document.getElementById('inputTxt').value;
                    document.getElementById('slot3A').style.visibility = "visible";
                    }

                    else if(document.getElementById('slot4').innerText===""){
                        document.getElementById('slot4').innerText = document.getElementById('inputTxt').value;
                        document.getElementById('slot4A').style.visibility = "visible";
                        }

                        else if(document.getElementById('slot5').innerText===""){
                            document.getElementById('slot5').innerText = document.getElementById('inputTxt').value;
                            document.getElementById('slot5A').style.visibility = "visible";
                            }
                            else{
                                document.getElementById('alert').style.visibility="visible";
                            }

                document.getElementById('inputTxt').value = "";
    }

function ticked1(){
    document.getElementById('tick1').style.backgroundColor="lightgreen";
    document.getElementById('cross1').style.backgroundColor="transparent";
}
function ticked2(){
    document.getElementById('tick2').style.backgroundColor="lightgreen";
    document.getElementById('cross2').style.backgroundColor="transparent";
}
function ticked3(){
    document.getElementById('tick3').style.backgroundColor="lightgreen";
    document.getElementById('cross3').style.backgroundColor="transparent";
}
function ticked4(){
    document.getElementById('tick4').style.backgroundColor="lightgreen";
    document.getElementById('cross4').style.backgroundColor="transparent";
}
function ticked5(){
    document.getElementById('tick5').style.backgroundColor="lightgreen";
    document.getElementById('cross5').style.backgroundColor="transparent";
}

function crossed1(){
    document.getElementById('tick1').style.backgroundColor="transparent";
    document.getElementById('cross1').style.backgroundColor="lightcoral";
}
function crossed2(){
    document.getElementById('tick2').style.backgroundColor="transparent";
    document.getElementById('cross2').style.backgroundColor="lightcoral";
}
function crossed3(){
    document.getElementById('tick3').style.backgroundColor="transparent";
    document.getElementById('cross3').style.backgroundColor="lightcoral";
}
function crossed4(){
    document.getElementById('tick4').style.backgroundColor="transparent";
    document.getElementById('cross4').style.backgroundColor="lightcoral";
}
function crossed5(){
    document.getElementById('tick5').style.backgroundColor="transparent";
    document.getElementById('cross5').style.backgroundColor="lightcoral";
}

function binned5(){
    document.getElementById('slot5').innerText="";
    document.getElementById('slot5A').style.visibility="hidden";
    document.getElementById('alert').style.visibility="hidden";
    document.getElementById('tick5').style.removeProperty('background-color');
    document.getElementById('cross5').style.removeProperty('background-color');
}

function binned4(){
    document.getElementById('slot4').innerText=document.getElementById('slot5').innerText;
    document.getElementById('tick4').style.backgroundColor=document.getElementById('tick5').style.backgroundColor;
    document.getElementById('cross4').style.backgroundColor=document.getElementById('cross5').style.backgroundColor;
    document.getElementById('slot5').innerText="";
    document.getElementById('slot5A').style.visibility="hidden";
    document.getElementById('tick5').style.removeProperty('background-color');
    document.getElementById('cross5').style.removeProperty('background-color');
    if(document.getElementById('slot4').innerText===""){
        document.getElementById('slot4A').style.visibility="hidden";
        document.getElementById('tick4').style.removeProperty('background-color');
    document.getElementById('cross4').style.removeProperty('background-color');
    }
    document.getElementById('alert').style.visibility="hidden";
}

function binned3(){
    document.getElementById('slot3').innerText=document.getElementById('slot4').innerText;
    document.getElementById('tick3').style.backgroundColor=document.getElementById('tick4').style.backgroundColor;
    document.getElementById('cross3').style.backgroundColor=document.getElementById('cross4').style.backgroundColor;
    document.getElementById('slot4').innerText=document.getElementById('slot5').innerText;
    document.getElementById('tick4').style.backgroundColor=document.getElementById('tick5').style.backgroundColor;
    document.getElementById('cross4').style.backgroundColor=document.getElementById('cross5').style.backgroundColor;
    document.getElementById('slot5').innerText="";
    document.getElementById('slot5A').style.visibility="hidden";
    document.getElementById('tick5').style.removeProperty('background-color');
    document.getElementById('cross5').style.removeProperty('background-color');
    if(document.getElementById('slot4').innerText===""){
        document.getElementById('slot4A').style.visibility="hidden";
        document.getElementById('tick4').style.removeProperty('background-color');
    document.getElementById('cross4').style.removeProperty('background-color');
    }
    if(document.getElementById('slot3').innerText===""){
        document.getElementById('slot3A').style.visibility="hidden";
        document.getElementById('tick3').style.removeProperty('background-color');
    document.getElementById('cross3').style.removeProperty('background-color');
    }
    document.getElementById('alert').style.visibility="hidden";
}

function binned2(){
    document.getElementById('slot2').innerText=document.getElementById('slot3').innerText;
    document.getElementById('tick2').style.backgroundColor=document.getElementById('tick3').style.backgroundColor;
    document.getElementById('cross2').style.backgroundColor=document.getElementById('cross3').style.backgroundColor;
    document.getElementById('slot3').innerText=document.getElementById('slot4').innerText;
    document.getElementById('tick3').style.backgroundColor=document.getElementById('tick4').style.backgroundColor;
    document.getElementById('cross3').style.backgroundColor=document.getElementById('cross4').style.backgroundColor;
    document.getElementById('slot4').innerText=document.getElementById('slot5').innerText;
    document.getElementById('tick4').style.backgroundColor=document.getElementById('tick5').style.backgroundColor;
    document.getElementById('cross4').style.backgroundColor=document.getElementById('cross5').style.backgroundColor;
    document.getElementById('slot5').innerText="";
    document.getElementById('slot5A').style.visibility="hidden";
    document.getElementById('tick5').style.removeProperty('background-color');
    document.getElementById('cross5').style.removeProperty('background-color');
    if(document.getElementById('slot4').innerText===""){
        document.getElementById('slot4A').style.visibility="hidden";
        document.getElementById('tick4').style.removeProperty('background-color');
    document.getElementById('cross4').style.removeProperty('background-color');
    }
    if(document.getElementById('slot3').innerText===""){
        document.getElementById('slot3A').style.visibility="hidden";
        document.getElementById('tick3').style.removeProperty('background-color');
    document.getElementById('cross3').style.removeProperty('background-color');
    }
    if(document.getElementById('slot2').innerText===""){
        document.getElementById('slot2A').style.visibility="hidden";
        document.getElementById('tick2').style.removeProperty('background-color');
    document.getElementById('cross2').style.removeProperty('background-color');
    }
    document.getElementById('alert').style.visibility="hidden";
}

function binned1(){
    document.getElementById('slot1').innerText=document.getElementById('slot2').innerText;
    document.getElementById('tick1').style.backgroundColor=document.getElementById('tick2').style.backgroundColor;
    document.getElementById('cross1').style.backgroundColor=document.getElementById('cross2').style.backgroundColor;
    document.getElementById('slot2').innerText=document.getElementById('slot3').innerText;
    document.getElementById('tick2').style.backgroundColor=document.getElementById('tick3').style.backgroundColor;
    document.getElementById('cross2').style.backgroundColor=document.getElementById('cross3').style.backgroundColor;
    document.getElementById('slot3').innerText=document.getElementById('slot4').innerText;
    document.getElementById('tick3').style.backgroundColor=document.getElementById('tick4').style.backgroundColor;
    document.getElementById('cross3').style.backgroundColor=document.getElementById('cross4').style.backgroundColor;
    document.getElementById('slot4').innerText=document.getElementById('slot5').innerText;
    document.getElementById('tick4').style.backgroundColor=document.getElementById('tick5').style.backgroundColor;
    document.getElementById('cross4').style.backgroundColor=document.getElementById('cross5').style.backgroundColor;
    document.getElementById('slot5').innerText="";
    document.getElementById('slot5A').style.visibility="hidden";
    document.getElementById('tick5').style.removeProperty('background-color');
    document.getElementById('cross5').style.removeProperty('background-color');
    if(document.getElementById('slot4').innerText===""){
        document.getElementById('slot4A').style.visibility="hidden";
        document.getElementById('tick4').style.removeProperty('background-color');
    document.getElementById('cross4').style.removeProperty('background-color');
    }
    if(document.getElementById('slot3').innerText===""){
        document.getElementById('slot3A').style.visibility="hidden";
        document.getElementById('tick3').style.removeProperty('background-color');
    document.getElementById('cross3').style.removeProperty('background-color');
    }
    if(document.getElementById('slot2').innerText===""){
        document.getElementById('slot2A').style.visibility="hidden";
        document.getElementById('tick2').style.removeProperty('background-color');
    document.getElementById('cross2').style.removeProperty('background-color');
    }
    if(document.getElementById('slot1').innerText===""){
        document.getElementById('slot1A').style.visibility="hidden";
        document.getElementById('tick1').style.removeProperty('background-color');
    document.getElementById('cross1').style.removeProperty('background-color');
    }
    document.getElementById('alert').style.visibility="hidden";
}
    return (
        <div>
            <div className="container">
                <div className="title">To-Do list</div>
                <div className="addIcon" id="addIcon" onClick={add}>+</div>
                <div className="input" id="input">
                    <form className="inputBox" id="inputBox" autoComplete="off" onSubmit={handleSubmit}>
                        <input type="text" id="inputTxt" onChange={e}></input>
                    </form>
                </div>
                <div id="slot1A" className="slot1A">
                    <div id="slot1" className="slot1"></div>
                    <div className="tick1" id="tick1" onClick={ticked1}>✔</div>
                    <div className="cross1" id="cross1" onClick={crossed1}>✖</div>
                    <div className="bin1" id="bin1" onClick={binned1}>🗑️</div>
                </div>
                <div id="slot2A" className="slot2A">
                    <div id="slot2" className="slot2"></div>
                    <div className="tick2" id="tick2" onClick={ticked2}>✔</div>
                    <div className="cross2" id="cross2" onClick={crossed2}>✖</div>
                    <div className="bin2" id="bin2" onClick={binned2}>🗑️</div>
                </div>
                <div id="slot3A" className="slot3A">
                    <div id="slot3" className="slot3"></div>
                    <div className="tick3" id="tick3" onClick={ticked3}>✔</div>
                    <div className="cross3" id="cross3" onClick={crossed3}>✖</div>
                    <div className="bin3" id="bin3" onClick={binned3}>🗑️</div>
                </div>
                <div id="slot4A" className="slot4A">
                    <div id="slot4" className="slot4"></div>
                    <div className="tick4" id="tick4" onClick={ticked4}>✔</div>
                    <div className="cross4" id="cross4" onClick={crossed4}>✖</div>
                    <div className="bin4" id="bin4" onClick={binned4}>🗑️</div>
                </div>
                <div id="slot5A" className="slot5A">
                    <div id="slot5" className="slot5"></div>
                    <div className="tick5" id="tick5" onClick={ticked5}>✔</div>
                    <div className="cross5" id="cross5" onClick={crossed5}>✖</div>
                    <div className="bin5" id="bin5" onClick={binned5}>🗑️</div>
                </div>
            </div>
            <div id="alert" className="alert"><h3>All slots are full. Delete or Refresh</h3></div>
            <a href="https://www.prithakkoirala.com.np" target="_blank" className="credits">
                <h6>PRITHAK 2025</h6>
            </a>

        </div>
    );
}
