import React from 'react'
import "./home.scss";
import teamLogo from "../../img/teamLogo.png";
import teamLogo2 from "../../img/img.png";
export const Home = () => {
  const [state, setState] = React.useState("a");
  const [state1, setState1] = React.useState("bb");
  return (
    <main>
      <div className="main container">
        <div>

      
      <div className='btn_box'>
      <button style={state === "a" ? {backgroundColor:"#469264", color:"#FFF", padding:"10px" , borderRadius:"8px"} : {}} onClick={() => setState("a")}>
        <img src={teamLogo} alt={teamLogo} />
        Italiya. Seriya A</button>
      <button style={state === "b" ? {backgroundColor:"#469264", color:"#FFF", padding:"10px" , borderRadius:"8px" } : {}} onClick={() => setState("b")}>
      <img src={teamLogo} alt={teamLogo} />
        Italiya. Seriya A2</button>
      <button style={state === "c" ? {backgroundColor:"#469264", color:"#FFF", padding:"10px" , borderRadius:"8px"} : {}} onClick={() => setState("c")}>
      <img src={teamLogo} alt={teamLogo} />
        Italiya. Seriya A3</button>
      <button style={state === "d" ? {backgroundColor:"#469264", color:"#FFF", padding:"10px" , borderRadius:"8px"} : {}} onClick={() => setState("d")}>
      <img src={teamLogo} alt={teamLogo} />
        Italiya. Seriya A4</button>
      <button style={state === "v" ? {backgroundColor:"#469264", color:"#FFF", padding:"10px" , borderRadius:"8px"} : {}} onClick={() => setState("v")}>
      <img src={teamLogo} alt={teamLogo} />
        Italiya. Seriya A5</button>
      </div>
      <div>
        {state === "a" ? (
          <div className='match_wrap'>
            <div className="matchs">
            <div className="match">
              <div>
                <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
                <p className='match1_text'>3</p>
              </div>
              :
              <div>
                <p>0</p>
              <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
              </div>

            </div>
            <div className="watch">11.11.2021 23:59</div>
            </div>

            <div className="matchs">
            <div className="match">
              <div>
                <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
                <p className='match1_text'>3</p>
              </div>
              :
              <div>
                <p>0</p>
              <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
              </div>

            </div>
            <div className="watch">11.11.2021 23:59</div>
            </div>
    <div className="matchs">
            <div className="match">
              <div>
                <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
                <p className='match1_text'>3</p>
              </div>
              :
              <div>
                <p>0</p>
              <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
              </div>

            </div>
            <div className="watch">11.11.2021 23:59</div>
            </div>
          
            <div className="matchs">
            <div className="match">
              <div>
                <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
                <p className='match1_text'>3</p>
              </div>
              :
              <div>
                <p>0</p>
              <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
              </div>

            </div>
            <div className="watch">11.11.2021 23:59</div>
            </div>

            <div className="matchs">
            <div className="match">
              <div>
                <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
                <p className='match1_text'>3</p>
              </div>
              :
              <div>
                <p>0</p>
              <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
              </div>

            </div>
            <div className="watch">11.11.2021 23:59</div>
            </div>

            <div className="matchs">
            <div className="match">
              <div>
                <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
                <p className='match1_text'>3</p>
              </div>
              :
              <div>
                <p>0</p>
              <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
              </div>

            </div>
            <div className="watch">11.11.2021 23:59</div>
            </div>

    <div className="matchs">
            <div className="match">
              <div>
                <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
                <p className='match1_text'>3</p>
              </div>
              :
              <div>
                <p>0</p>
              <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
              </div>

            </div>
            <div className="watch">11.11.2021 23:59</div>
            </div>


            <div className="matchs">
            <div className="match">
              <div>
                <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
                <p className='match1_text'>3</p>
              </div>
              :
              <div>
                <p>0</p>
              <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
              </div>

            </div>
            <div className="watch">11.11.2021 23:59</div>
            </div>


            <div className="matchs">
            <div className="match">
              <div>
                <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
                <p className='match1_text'>3</p>
              </div>
              :
              <div>
                <p>0</p>
              <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
              </div>

            </div>
            <div className="watch">11.11.2021 23:59</div>
            </div>

            <div className="matchs">
            <div className="match">
              <div>
                <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
                <p className='match1_text'>3</p>
              </div>
              :
              <div>
                <p>0</p>
              <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
              </div>

            </div>
            <div className="watch">11.11.2021 23:59</div>
            </div>


          </div>
        ) : state === "b" ? (
          <div> 
              <div className='match_wrap'>
          <div className="matchs">
          <div className="match">
            <div>
              <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
              <p className='match1_text'>3</p>
            </div>
            :
            <div>
              <p>0</p>
            <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
            </div>

          </div>
          <div className="watch">11.11.2021 23:59</div>
          </div>

          <div className="matchs">
          <div className="match">
            <div>
              <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
              <p className='match1_text'>3</p>
            </div>
            :
            <div>
              <p>0</p>
            <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
            </div>

          </div>
          <div className="watch">11.11.2021 23:59</div>
          </div>
  <div className="matchs">
          <div className="match">
            <div>
              <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
              <p className='match1_text'>3</p>
            </div>
            :
            <div>
              <p>0</p>
            <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
            </div>

          </div>
          <div className="watch">11.11.2021 23:59</div>
          </div>
        
          <div className="matchs">
          <div className="match">
            <div>
              <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
              <p className='match1_text'>3</p>
            </div>
            :
            <div>
              <p>0</p>
            <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
            </div>

          </div>
          <div className="watch">11.11.2021 23:59</div>
          </div>

          <div className="matchs">
          <div className="match">
            <div>
              <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
              <p className='match1_text'>3</p>
            </div>
            :
            <div>
              <p>0</p>
            <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
            </div>

          </div>
          <div className="watch">11.11.2021 23:59</div>
          </div>

          <div className="matchs">
          <div className="match">
            <div>
              <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
              <p className='match1_text'>3</p>
            </div>
            :
            <div>
              <p>0</p>
            <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
            </div>

          </div>
          <div className="watch">11.11.2021 23:59</div>
          </div>

  <div className="matchs">
          <div className="match">
            <div>
              <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
              <p className='match1_text'>3</p>
            </div>
            :
            <div>
              <p>0</p>
            <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
            </div>

          </div>
          <div className="watch">11.11.2021 23:59</div>
          </div>


          <div className="matchs">
          <div className="match">
            <div>
              <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
              <p className='match1_text'>3</p>
            </div>
            :
            <div>
              <p>0</p>
            <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
            </div>

          </div>
          <div className="watch">11.11.2021 23:59</div>
          </div>


          <div className="matchs">
          <div className="match">
            <div>
              <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
              <p className='match1_text'>3</p>
            </div>
            :
            <div>
              <p>0</p>
            <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
            </div>

          </div>
          <div className="watch">11.11.2021 23:59</div>
          </div>

          <div className="matchs">
          <div className="match">
            <div>
              <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
              <p className='match1_text'>3</p>
            </div>
            :
            <div>
              <p>0</p>
            <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
            </div>

          </div>
          <div className="watch">11.11.2021 23:59</div>
          </div>

          
        </div></div>
        ) : state === "c" ? (
          <div>C</div>
        ) : state === "d" ? (
          <div>D</div>
        )  : state === "v" ? (
          <div>V</div>
        ): (
          <div>A</div>
        )}
      </div>
    </div>




    <div className='last'>    
<div className='btn_box'>
<button style={state1 === "aa" ? {backgroundColor:"#469264", color:"#FFF", padding:"10px" , borderRadius:"8px"} : {}} onClick={() => setState1("aa")}>
  <img src={teamLogo2} alt={teamLogo2} />
  Italiya. Seriya A</button>
<button style={state1 === "bb" ? {backgroundColor:"#469264", color:"#FFF", padding:"10px" , borderRadius:"8px" } : {}} onClick={() => setState1("bb")}>
<img src={teamLogo2} alt={teamLogo} />
  Italiya. Seriya A2</button>
<button style={state1 === "cc" ? {backgroundColor:"#469264", color:"#FFF", padding:"10px" , borderRadius:"8px"} : {}} onClick={() => setState1("cc")}>
<img src={teamLogo2} alt={teamLogo} />
  Italiya. Seriya A3</button>
<button style={state1 === "dd" ? {backgroundColor:"#469264", color:"#FFF", padding:"10px" , borderRadius:"8px"} : {}} onClick={() => setState1("dd")}>
<img src={teamLogo2} alt={teamLogo} />
  Italiya. Seriya A4</button>
<button style={state1 === "vv" ? {backgroundColor:"#469264", color:"#FFF", padding:"10px" , borderRadius:"8px"} : {}} onClick={() => setState1("vv")}>
<img src={teamLogo2} alt={teamLogo} />
  Italiya. Seriya A5</button>
</div>
<div>
  {state1 === "aa" ? (
    <div className='match_wrap'>
      <div className="matchs">
      <div className="match">
        <div>
          <img src={teamLogo2} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
          <p className='match1_text'>3</p>
        </div>
        :
        <div>
          <p>0</p>
        <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
        </div>

      </div>
      <div className="watch">11.11.2021 23:59</div>
      </div>

      <div className="matchs">
      <div className="match">
        <div>
          <img src={teamLogo2} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
          <p className='match1_text'>3</p>
        </div>
        :
        <div>
          <p>0</p>
        <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
        </div>

      </div>
      <div className="watch">11.11.2021 23:59</div>
      </div>
<div className="matchs">
      <div className="match">
        <div>
          <img src={teamLogo2} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
          <p className='match1_text'>3</p>
        </div>
        :
        <div>
          <p>0</p>
        <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
        </div>

      </div>
      <div className="watch">11.11.2021 23:59</div>
      </div>
    
      <div className="matchs">
      <div className="match">
        <div>
          <img src={teamLogo2} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
          <p className='match1_text'>3</p>
        </div>
        :
        <div>
          <p>0</p>
        <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
        </div>

      </div>
      <div className="watch">11.11.2021 23:59</div>
      </div>

      <div className="matchs">
      <div className="match">
        <div>
          <img src={teamLogo2} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
          <p className='match1_text'>3</p>
        </div>
        :
        <div>
          <p>0</p>
        <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
        </div>

      </div>
      <div className="watch">11.11.2021 23:59</div>
      </div>

      <div className="matchs">
      <div className="match">
        <div>
          <img src={teamLogo2} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
          <p className='match1_text'>3</p>
        </div>
        :
        <div>
          <p>0</p>
        <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
        </div>

      </div>
      <div className="watch">11.11.2021 23:59</div>
      </div>

<div className="matchs">
      <div className="match">
        <div>
          <img src={teamLogo2} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
          <p className='match1_text'>3</p>
        </div>
        :
        <div>
          <p>0</p>
        <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
        </div>

      </div>
      <div className="watch">11.11.2021 23:59</div>
      </div>


      <div className="matchs">
      <div className="match">
        <div>
          <img src={teamLogo2} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
          <p className='match1_text'>3</p>
        </div>
        :
        <div>
          <p>0</p>
        <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
        </div>

      </div>
      <div className="watch">11.11.2021 23:59</div>
      </div>


      <div className="matchs">
      <div className="match">
        <div>
          <img src={teamLogo2} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
          <p className='match1_text'>3</p>
        </div>
        :
        <div>
          <p>0</p>
        <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
        </div>

      </div>
      <div className="watch">11.11.2021 23:59</div>
      </div>

      <div className="matchs">
      <div className="match">
        <div>
          <img src={teamLogo2} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
          <p className='match1_text'>3</p>
        </div>
        :
        <div>
          <p>0</p>
        <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
        </div>

      </div>
      <div className="watch">11.11.2021 23:59</div>
      </div>


    </div>
  ) : state1 === "bb" ? (
    <div> 
        <div className='match_wrap'>
    <div className="matchs">
    <div className="match">
      <div>
        <img src={teamLogo2} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
        <p className='match1_text'>3</p>
      </div>
      :
      <div>
        <p>0</p>
      <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
      </div>

    </div>
    <div className="watch">11.11.2021 23:59</div>
    </div>

    <div className="matchs">
    <div className="match">
      <div>
        <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
        <p className='match1_text'>3</p>
      </div>
      :
      <div>
        <p>0</p>
      <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
      </div>

    </div>
    <div className="watch">11.11.2021 23:59</div>
    </div>
<div className="matchs">
    <div className="match">
      <div>
        <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
        <p className='match1_text'>3</p>
      </div>
      :
      <div>
        <p>0</p>
      <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
      </div>

    </div>
    <div className="watch">11.11.2021 23:59</div>
    </div>
  
    <div className="matchs">
    <div className="match">
      <div>
        <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
        <p className='match1_text'>3</p>
      </div>
      :
      <div>
        <p>0</p>
      <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
      </div>

    </div>
    <div className="watch">11.11.2021 23:59</div>
    </div>

    <div className="matchs">
    <div className="match">
      <div>
        <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
        <p className='match1_text'>3</p>
      </div>
      :
      <div>
        <p>0</p>
      <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
      </div>

    </div>
    <div className="watch">11.11.2021 23:59</div>
    </div>

    <div className="matchs">
    <div className="match">
      <div>
        <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
        <p className='match1_text'>3</p>
      </div>
      :
      <div>
        <p>0</p>
      <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
      </div>

    </div>
    <div className="watch">11.11.2021 23:59</div>
    </div>

<div className="matchs">
    <div className="match">
      <div>
        <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
        <p className='match1_text'>3</p>
      </div>
      :
      <div>
        <p>0</p>
      <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
      </div>

    </div>
    <div className="watch">11.11.2021 23:59</div>
    </div>


    <div className="matchs">
    <div className="match">
      <div>
        <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
        <p className='match1_text'>3</p>
      </div>
      :
      <div>
        <p>0</p>
      <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
      </div>

    </div>
    <div className="watch">11.11.2021 23:59</div>
    </div>


    <div className="matchs">
    <div className="match">
      <div>
        <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
        <p className='match1_text'>3</p>
      </div>
      :
      <div>
        <p>0</p>
      <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
      </div>

    </div>
    <div className="watch">11.11.2021 23:59</div>
    </div>

    <div className="matchs">
    <div className="match">
      <div>
        <img src={teamLogo} alt={teamLogo} /> <p className='match1_text'>Barcelona </p>
        <p className='match1_text'>3</p>
      </div>
      :
      <div>
        <p>0</p>
      <p> Liverpoll</p><img src={teamLogo} alt={teamLogo} /> 
      </div>

    </div>
    <div className="watch">11.11.2021 23:59</div>
    </div>

    
  </div></div>
  ) : state1 === "cc" ? (
    <div>C</div>
  ) : state1 === "dd" ? (
    <div>D</div>
  )  : state1 === "vv" ? (
    <div>V</div>
  ): (
    <div></div>
  )}
</div>
</div>
      </div>
    </main>
  )
}
