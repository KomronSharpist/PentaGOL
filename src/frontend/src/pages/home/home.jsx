import React from "react";
import "./home.scss";
import teamLogo from "../../img/teamLogo.png";
import teamLogo2 from "../../img/img.png";
import vector from "../../img/vektor.png";
import news from "../../img/news.png";
import { Link } from "react-router-dom";
export const Home = () => {
  const [state, setState] = React.useState("a");
  const [state1, setState1] = React.useState("bb");
  const [click, setclick] = React.useState(true);
  return (
    <main>
      <div className="main container">
        <section>
          <div>
            <div className="btn_box">
              <button
                style={
                  state === "a"
                    ? {
                        backgroundColor: "#469264",
                        color: "#FFF",
                        padding: "10px",
                        borderRadius: "8px",
                      }
                    : {}
                }
                onClick={() => setState("a")}
              >
                <img src={teamLogo} alt={teamLogo} />
                Italiya. Seriya A
              </button>
              <button
                style={
                  state === "b"
                    ? {
                        backgroundColor: "#469264",
                        color: "#FFF",
                        padding: "10px",
                        borderRadius: "8px",
                      }
                    : {}
                }
                onClick={() => setState("b")}
              >
                <img src={teamLogo} alt={teamLogo} />
                Italiya. Seriya A2
              </button>
              <button
                style={
                  state === "c"
                    ? {
                        backgroundColor: "#469264",
                        color: "#FFF",
                        padding: "10px",
                        borderRadius: "8px",
                      }
                    : {}
                }
                onClick={() => setState("c")}
              >
                <img src={teamLogo} alt={teamLogo} />
                Italiya. Seriya A3
              </button>
              <button
                style={
                  state === "d"
                    ? {
                        backgroundColor: "#469264",
                        color: "#FFF",
                        padding: "10px",
                        borderRadius: "8px",
                      }
                    : {}
                }
                onClick={() => setState("d")}
              >
                <img src={teamLogo} alt={teamLogo} />
                Italiya. Seriya A4
              </button>
              <button
                style={
                  state === "v"
                    ? {
                        backgroundColor: "#469264",
                        color: "#FFF",
                        padding: "10px",
                        borderRadius: "8px",
                      }
                    : {}
                }
                onClick={() => setState("v")}
              >
                <img src={teamLogo} alt={teamLogo} />
                Italiya. Seriya A5
              </button>
            </div>
            <div>
              {state === "a" ? (
                <div className="match_wrap">
                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>
                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>
                </div>
              ) : state === "b" ? (
                <div>
                  <div className="match_wrap">
                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>
                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>
                  </div>
                </div>
              ) : state === "c" ? (
                <div>C</div>
              ) : state === "d" ? (
                <div>D</div>
              ) : state === "v" ? (
                <div>V</div>
              ) : (
                <div>A</div>
              )}
            </div>
          </div>

          <div className="last">
            <div className="btn_box">
              <button
                style={
                  state1 === "aa"
                    ? {
                        backgroundColor: "#469264",
                        color: "#FFF",
                        padding: "10px",
                        borderRadius: "8px",
                      }
                    : {}
                }
                onClick={() => setState1("aa")}
              >
                <img src={teamLogo2} alt={teamLogo2} />
                Italiya. Seriya A
              </button>
              <button
                style={
                  state1 === "bb"
                    ? {
                        backgroundColor: "#469264",
                        color: "#FFF",
                        padding: "10px",
                        borderRadius: "8px",
                      }
                    : {}
                }
                onClick={() => setState1("bb")}
              >
                <img src={teamLogo2} alt={teamLogo} />
                Italiya. Seriya A2
              </button>
              <button
                style={
                  state1 === "cc"
                    ? {
                        backgroundColor: "#469264",
                        color: "#FFF",
                        padding: "10px",
                        borderRadius: "8px",
                      }
                    : {}
                }
                onClick={() => setState1("cc")}
              >
                <img src={teamLogo2} alt={teamLogo} />
                Italiya. Seriya A3
              </button>
              <button
                style={
                  state1 === "dd"
                    ? {
                        backgroundColor: "#469264",
                        color: "#FFF",
                        padding: "10px",
                        borderRadius: "8px",
                      }
                    : {}
                }
                onClick={() => setState1("dd")}
              >
                <img src={teamLogo2} alt={teamLogo} />
                Italiya. Seriya A4
              </button>
              <button
                style={
                  state1 === "vv"
                    ? {
                        backgroundColor: "#469264",
                        color: "#FFF",
                        padding: "10px",
                        borderRadius: "8px",
                      }
                    : {}
                }
                onClick={() => setState1("vv")}
              >
                <img src={teamLogo2} alt={teamLogo} />
                Italiya. Sjygyjgeriya A5
              </button>
            </div>
            <div>
              {state1 === "aa" ? (
                <div className="match_wrap">
                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo2} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo2} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>
                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo2} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo2} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo2} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo2} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo2} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo2} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo2} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>

                  <div className="matchs">
                    <div className="match">
                      <div>
                        <img src={teamLogo2} alt={teamLogo} />{" "}
                        <p className="match1_text">Barcelona </p>
                        <p className="match1_text">3</p>
                      </div>
                      :
                      <div>
                        <p>0</p>
                        <p> Liverpoll</p>
                        <img src={teamLogo} alt={teamLogo} />
                      </div>
                    </div>
                    <div className="watch">11.11.2021 23:59</div>
                  </div>
                </div>
              ) : state1 === "bb" ? (
                <div>
                  <div className="match_wrap">
                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo2} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>
                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>

                    <div className="matchs">
                      <div className="match">
                        <div>
                          <img src={teamLogo} alt={teamLogo} />{" "}
                          <p className="match1_text">Barcelona </p>
                          <p className="match1_text">3</p>
                        </div>
                        :
                        <div>
                          <p>0</p>
                          <p> Liverpoll</p>
                          <img src={teamLogo} alt={teamLogo} />
                        </div>
                      </div>
                      <div className="watch">11.11.2021 23:59</div>
                    </div>
                  </div>
                </div>
              ) : state1 === "cc" ? (
                <div>C</div>
              ) : state1 === "dd" ? (
                <div>D</div>
              ) : state1 === "vv" ? (
                <div>V</div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="middle">
            <div className="imgs_box">
              <Link to={"article/{data.id}"}>
                <div className="middle_main">
                  <h1>
                    Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga
                    olib boradi: bo'g'inlar oldidagi barcha maketlar
                  </h1>
                  <p>2 soat oldin</p>
                </div>
              </Link>
              <div className="box_imgs">
                <div className="nextimg">
                  <h3>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h3>
                  <p>2 soat oldin</p>
                </div>
                <div className="nextimg">
                  <h3>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h3>
                  <p>2 soat oldin</p>
                </div>
                <div className="nextimg">
                  <h3>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h3>
                  <p>2 soat oldin</p>
                </div>
                <div className="nextimg">
                  <h3>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h3>
                  <p>2 soat oldin</p>
                </div>
                <div className="nextimg">
                  <h3>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h3>
                  <p>2 soat oldin</p>
                </div>
                <div className="nextimg">
                  <h3>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h3>
                  <p>2 soat oldin</p>
                </div>
              </div>
            </div>

            <div className="contex_box">
              <h2>Jadval</h2>
              <button onClick={() => setclick(!click)}>
                <p>Italiya A seriya</p>
                <button>
                  {click ? (
                    <img src={vector} alt={vector} />
                  ) : (
                    <p className="arr">^</p>
                  )}
                </button>
              </button>

              {click ? (
                <div>
                  <div className="komand">
                    <div>
                      <p>№</p>
                      <p>Команда</p>
                    </div>
                    <div>
                      <p>И</p>
                      <p>O</p>
                    </div>
                  </div>

                  <div className="score1">
                    <div>
                      <p>1</p>
                      <img src={teamLogo2} alt={teamLogo2} />
                      <p>Barcelona</p>
                    </div>
                    <div>
                      <p>15</p>
                      <p>14</p>
                    </div>
                  </div>
                  <div className="score2">
                    <div>
                      <p>1</p>
                      <img src={teamLogo2} alt={teamLogo2} />
                      <p>Barcelona</p>
                    </div>
                    <div>
                      <p>15</p>
                      <p>14</p>
                    </div>
                  </div>

                  <div className="score1">
                    <div>
                      <p>1</p>
                      <img src={teamLogo2} alt={teamLogo2} />
                      <p>Barcelona</p>
                    </div>
                    <div>
                      <p>15</p>
                      <p>14</p>
                    </div>
                  </div>
                  <div className="score2">
                    <div>
                      <p>1</p>
                      <img src={teamLogo2} alt={teamLogo2} />
                      <p>Barcelona</p>
                    </div>
                    <div>
                      <p>15</p>
                      <p>14</p>
                    </div>
                  </div>

                  <div className="score1">
                    <div>
                      <p>1</p>
                      <img src={teamLogo2} alt={teamLogo2} />
                      <p>Barcelona</p>
                    </div>
                    <div>
                      <p>15</p>
                      <p>14</p>
                    </div>
                  </div>
                  <div className="score2">
                    <div>
                      <p>1</p>
                      <img src={teamLogo2} alt={teamLogo2} />
                      <p>Barcelona</p>
                    </div>
                    <div>
                      <p>15</p>
                      <p>14</p>
                    </div>
                  </div>

                  <div className="score1">
                    <div>
                      <p>1</p>
                      <img src={teamLogo2} alt={teamLogo2} />
                      <p>Barcelona</p>
                    </div>
                    <div>
                      <p>15</p>
                      <p>14</p>
                    </div>
                  </div>
                  <div className="score2">
                    <div>
                      <p>1</p>
                      <img src={teamLogo2} alt={teamLogo2} />
                      <p>Barcelona</p>
                    </div>
                    <div>
                      <p>15</p>
                      <p>14</p>
                    </div>
                  </div>

                  <div className="score1">
                    <div>
                      <p>1</p>
                      <img src={teamLogo2} alt={teamLogo2} />
                      <p>Barcelona</p>
                    </div>
                    <div>
                      <p>15</p>
                      <p>14</p>
                    </div>
                  </div>
                  <div className="score2">
                    <div>
                      <p>1</p>
                      <img src={teamLogo2} alt={teamLogo2} />
                      <p>Barcelona</p>
                    </div>
                    <div>
                      <p>15</p>
                      <p>14</p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="news">
            <div className="news_title">So'ngi yangiliklar</div>

            <ul className="news_content_wrap">
              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>


            </ul>

            <div className="allsee">
            Barchasi ko’rish
            </div>
          </div>

          <div className="news">
            <div className="news_title">Barcha yangiliklar</div>

            <ul className="news_content_wrap">
 

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>

              <li>
                <img src={news} alt={news} />
                <h2>
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </h2>
                <p className="news_text">
                  Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini
                  aytdi
                </p>
                <p className="data_news">12.05.2021 12:54</p>
              </li>


            </ul>

            <div className="allsee">
            Barchasi ko’rish
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
