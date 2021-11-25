<template>
<div>
  <div>
    <div class="char-sheet__container">
      <div class="character__wrapper">
        <div class="char-sheet">

          <header class="char-sheet__header">
            <h1 class="char-sheet__name">
              <input name="name" type="text" class="big char-sheet__input" autocomplete="new" value="">
              <span class="char-sheet__label absolute">имя персонажа</span>
            </h1>
            <div class="char-sheet-info">
              <div class="char-sheet__info-section">
                <p class="char-sheet__info-box">
                  <input name="charClass" type="text" class="small char-sheet__input" autocomplete="new" value="">
                  <span class="char-sheet__label absolute">класс и уровень</span>
                </p>
                <p class="char-sheet__info-box">
                  <input name="background" type="text" class="small char-sheet__input" list="list_of_background" autocomplete="new" value="">
                  <datalist id="list_of_background">
                    <option value="Blue"></option>
                    <option value="Brown"></option>
                    <option value="Orange"></option>
                  </datalist>
                  <span class="char-sheet__label absolute">предыстория</span>
                </p>
                <p class="char-sheet__info-box">
                  <input name="playerName" type="text" class="small char-sheet__input" autocomplete="new" value="">
                  <span class="char-sheet__label absolute">имя игрока</span>
                </p>
              </div>
              <div class="char-sheet__info-section">
                <p class="char-sheet__info-box">
                  <input name="race" type="text" class="small char-sheet__input" list="list_of_race" autocomplete="new" value="">
                  <datalist id="list_of_race">
                    <option value="Blue"></option>
                    <option value="Brown"></option>
                    <option value="Orange"></option>
                  </datalist>
                  <span class="char-sheet__label absolute">раса</span>
                </p>
                <p class="char-sheet__info-box">
                <input name="alignment" type="text" class="small char-sheet__input" list="list_of_worldview" autocomplete="new" value="">
                  <datalist id="list_of_worldview">
                    <option value="Blue"></option>
                    <option value="Brown"></option>
                    <option value="Orange"></option>
                  </datalist>
                  <span class="char-sheet__label absolute">мировоззрение</span>
                </p><p class="char-sheet__info-box">
                <input name="experience" type="number" class="small char-sheet__input"  list="list_of_experience" autocomplete="new" value="">
                  <datalist id="list_of_experience">
                      <option value="Blue"></option>
                      <option value="Brown"></option>
                      <option value="Orange"></option>
                  </datalist>
                <span class="char-sheet__label absolute">опыт</span>
              </p>
              </div>
            </div>
          </header>
          <section class="char-sheet__body">
            <div class="char-sheet__body-column">
              <div class="char-sheet__stats-skills">
                <div class="char-sheet__stats char-sheet__stats-default">
                  <div class="stat-block">
                    <p class="stat-block__label">Сила</p>
                    <button type="button" class="roller active">
                      <p class="stat-block__modifier">+0</p>
                    </button>
                    <input class="stat-block__score" type="number" value="10">
                  </div>
                  <div class="stat-block">
                  <p class="stat-block__label">Ловкость</p>
                  <button type="button" class="roller active">
                    <p class="stat-block__modifier">+0</p>
                  </button>
                  <input class="stat-block__score" type="number" value="10">
                </div>
                  <div class="stat-block">
                    <p class="stat-block__label small">Телосложение</p>
                    <button type="button" class="roller active">
                      <p class="stat-block__modifier">+0</p>
                    </button>
                    <input class="stat-block__score" type="number" value="10" />
                  </div>
                  <div class="stat-block">
                    <p class="stat-block__label">Интеллект</p>
                    <button type="button" class="roller active">
                      <p class="stat-block__modifier">+0</p>
                    </button>
                    <input class="stat-block__score" type="number" value="10">
                  </div>
                  <div class="stat-block">
                    <p class="stat-block__label">Мудрость</p>
                    <button type="button" class="roller active">
                      <p class="stat-block__modifier">+0</p>
                    </button><input class="stat-block__score" type="number" value="10">
                  </div>
                  <div class="stat-block">
                    <p class="stat-block__label">Харизма</p>
                    <button type="button" class="roller active">
                      <p class="stat-block__modifier">+0</p>
                    </button>
                    <input class="stat-block__score" type="number" value="10">
                  </div>
                </div>
                <div class="char-sheet__skills">
                  <div class="modifier-block">
                    <div class="modifier-block__wrap">
                      <p class="modifier-block__modifier square">
                        <label class="inspiration " for="inspiration-check">
                          <input class="inspiration__check" id="inspiration-check" type="checkbox">
                        </label>
                      </p>
                    </div>
                    <p class="modifier-block__label">вдохновение</p>
                  </div>
                  <div class="modifier-block">
                    <div class="modifier-block__wrap">
                      <button class="text-block__controls-button no-print" data-sign="+" type="button">+</button>
                      <p class="modifier-block__modifier round">+2</p>
                      <button class="text-block__controls-button no-print" data-sign="-" type="button">−</button>
                    </div>
                    <p class="modifier-block__label">Бонус владения</p>
                  </div>
                  <div class="saves-block">
                    <div class="char-skill">
                      <label class="checkdot char-skill__check" for="checkdot-str">
                        <input class="checkdot__input" id="checkdot-str" type="checkbox" name="str"><span class="checkdot__marker"></span></label>
                      <button type="button" class="roller active">
                        <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0">
                      </button>
                      <p class="char-skill__label">Сила </p>
                    </div>
                    <div class="char-skill">
                      <label class="checkdot char-skill__check" for="checkdot-dex">
                        <input class="checkdot__input" id="checkdot-dex" type="checkbox" name="dex"><span class="checkdot__marker"></span></label>
                      <button type="button" class="roller active">
                        <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0">
                      </button>
                      <p class="char-skill__label">Ловкость </p>
                    </div>
                    <div class="char-skill">
                      <label class="checkdot char-skill__check" for="checkdot-con">
                        <input class="checkdot__input" id="checkdot-con" type="checkbox" name="con"><span class="checkdot__marker"></span></label>
                      <button type="button" class="roller active">
                        <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0">
                      </button>
                      <p class="char-skill__label">Телосложение </p>
                    </div>
                    <div class="char-skill">
                      <label class="checkdot char-skill__check" for="checkdot-int">
                        <input class="checkdot__input" id="checkdot-int" type="checkbox" name="int"><span class="checkdot__marker"></span></label>
                      <button type="button" class="roller active">
                        <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0">
                      </button>
                      <p class="char-skill__label">Интеллект </p>
                    </div>
                    <div class="char-skill">
                      <label class="checkdot char-skill__check" for="checkdot-wis">
                        <input class="checkdot__input" id="checkdot-wis" type="checkbox" name="wis"><span class="checkdot__marker"></span></label>
                      <button type="button" class="roller active">
                        <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0">
                      </button>
                      <p class="char-skill__label">Мудрость </p>
                    </div>
                    <div class="char-skill">
                      <label class="checkdot char-skill__check" for="checkdot-cha">
                        <input class="checkdot__input" id="checkdot-cha" type="checkbox" name="cha"><span class="checkdot__marker"></span></label>
                      <button type="button" class="roller active">
                        <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0">
                      </button>
                      <p class="char-skill__label">Харизма </p>
                    </div>
                    <span class="char-sheet__label centered">Спасброски</span>
                  </div>
                  <div class="saves-block">
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-acrobatics">
                      <input class="checkdot__input" id="checkdot-acrobatics" type="checkbox" name="acrobatics" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Акробатика <span class="char-skill__label-base">(Лов)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-investigation">
                      <input class="checkdot__input" id="checkdot-investigation" type="checkbox" name="investigation" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Анализ <span class="char-skill__label-base">(Инт)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-athletics">
                      <input class="checkdot__input" id="checkdot-athletics" type="checkbox" name="athletics" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Атлетика <span class="char-skill__label-base">(Сил)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-perception">
                      <input class="checkdot__input" id="checkdot-perception" type="checkbox" name="perception" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Восприятие <span class="char-skill__label-base">(Муд)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-survival">
                      <input class="checkdot__input" id="checkdot-survival" type="checkbox" name="survival" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Выживание <span class="char-skill__label-base">(Муд)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-performance">
                      <input class="checkdot__input" id="checkdot-performance" type="checkbox" name="performance" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Выступление <span class="char-skill__label-base">(Хар)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-intimidation">
                      <input class="checkdot__input" id="checkdot-intimidation" type="checkbox" name="intimidation" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Запугивание <span class="char-skill__label-base">(Хар)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-history">
                      <input class="checkdot__input" id="checkdot-history" type="checkbox" name="history" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> История <span class="char-skill__label-base">(Инт)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-sleight of hand">
                      <input class="checkdot__input" id="checkdot-sleight of hand" type="checkbox" name="sleight of hand" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Ловкость рук <span class="char-skill__label-base">(Лов)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-arcana">
                      <input class="checkdot__input" id="checkdot-arcana" type="checkbox" name="arcana" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Магия <span class="char-skill__label-base">(Инт)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-medicine">
                      <input class="checkdot__input" id="checkdot-medicine" type="checkbox" name="medicine" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Медицина <span class="char-skill__label-base">(Муд)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-deception">
                      <input class="checkdot__input" id="checkdot-deception" type="checkbox" name="deception" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Обман <span class="char-skill__label-base">(Хар)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-nature">
                      <input class="checkdot__input" id="checkdot-nature" type="checkbox" name="nature" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Природа <span class="char-skill__label-base">(Инт)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-insight">
                      <input class="checkdot__input" id="checkdot-insight" type="checkbox" name="insight" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Проницательность <span class="char-skill__label-base">(Муд)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-religion">
                      <input class="checkdot__input" id="checkdot-religion" type="checkbox" name="religion" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Религия <span class="char-skill__label-base">(Инт)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-stealth">
                      <input class="checkdot__input" id="checkdot-stealth" type="checkbox" name="stealth" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Скрытность <span class="char-skill__label-base">(Лов)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-persuasion">
                      <input class="checkdot__input" id="checkdot-persuasion" type="checkbox" name="persuasion" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Убеждение <span class="char-skill__label-base">(Хар)</span> </p>
                  </div>
                  <div class="char-skill small">
                    <label class="checkdot char-skill__check" for="checkdot-animal handling">
                      <input class="checkdot__input" id="checkdot-animal handling" type="checkbox" name="animal handling" /><span class="checkdot__marker"></span></label>
                    <button type="button" class="roller active">
                      <input class="char-skill__modifier" type="text" max="15" min="-9" value="+0" /> </button>
                    <p class="char-skill__label"> Уход за животными <span class="char-skill__label-base">(Муд)</span> </p>
                  </div>
                    <span class="char-sheet__label centered">навыки</span>
                  </div>
                </div>
              </div>
              <div class="modifier-block">
                <div class="modifier-block__wrap">
                  <p class="modifier-block__modifier ellipsis">10</p>
                </div>
                <p class="modifier-block__label">пассивная мудрость (Восприятие)</p>
              </div>
              <div class="text-block  ">
                <div data-gramm="false" role="textbox" class="text-block__textarea" data-slate-editor="true" data-slate-node="value" contenteditable="true" zindex="-1" style="position: relative; outline: none; white-space: pre-wrap; overflow-wrap: break-word; font-size: 7px; line-height: 12px; background: repeating-linear-gradient(rgb(255, 255, 255) 1px, rgb(255, 255, 255) 12px, rgb(218, 218, 218) 1px, rgb(218, 218, 218) 13px);">
                  <div data-slate-node="element" style="position: relative;">
                    <span data-slate-node="text">
                      <span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;">
                        <span data-slate-zero-width="n" data-slate-length="0">
                          <br>
                        </span>
                        </span>
                    </span>
                  </div>
                </div>
                <div class="text-block__label-wrap">
                  <input class="char-sheet__label centered " value="Прочие владения и языки">
                </div>
                <div class="text-block__controls"><span class="text-block__font-size">7</span>
                  <button class="text-block__controls-button" data-sign="+" type="button">+</button>
                  <button class="text-block__controls-button" data-sign="-" type="button">−</button>
                </div>
              </div>

            </div>
          </section>

        </div>

      </div>
    </div>
  </div>
</div>

</template>


<script>
import axios from 'axios';

export default {
  name: 'DnD',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    getMessage() {
      const path = 'http://127.0.0.1:5000/ping';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>

<style scoped>
.stat-block {
    background: #fff;
    border: 1pt solid #000;
    border-radius: 2pt 2pt 0 0;
    margin-bottom: 16pt;
    padding: 1pt 2pt;
    text-align: center;
    width: 43pt;
}
.stat-block__label {
    font-size: 6pt;
    font-weight: 700;
    margin-bottom: 2pt;
    text-transform: uppercase;
}
.stat-block__score {
    background: #fff;
    border: 1pt solid #000;
    border-radius: 50%;
    display: block;
    font-size: 10pt;
    height: 18pt;
    margin: 3pt auto -9pt;
    padding: 1pt 4pt;
    text-align: center;
    width: 24pt;
}
.stat-block__label.small {
    font-size: 4.1pt;
}
.modifier-block__modifier {
    align-items: center;
    background: #fff;
    border: 2pt solid #000;
    border-radius: 3pt;
    display: flex;
    height: 25pt;
    justify-content: center;
    margin: 0;
    position: relative;
    width: 25pt;
}
.modifier-block {
    align-items: center;
    display: flex;
    margin: 0 0 5pt;
}

.inspiration {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
}
.modifier-block__label {
    border: 1.4pt solid #000;
    border-radius: 0 2pt 2pt 0;
    flex: 1 1;
    font-size: 6pt;
    font-weight: 700;
    margin: 0 0 0 -6pt;
    padding: 3pt 5pt 3pt 10pt;
    text-align: center;
    text-transform: uppercase;
}
.modifier-block__wrap .text-block__controls-button {
    border: 1px solid #000;
    cursor: pointer;
    left: 50%;
    margin: 0;
    opacity: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: opacity .1s,top .1s,bottom .1s;
    z-index: 10;
}
.modifier-block__modifier.round {
    border-radius: 50%;
}
.text-block__controls-button {
    align-items: center;
    background: #fff;
    border: 1px solid transparent;
    border-radius: 50%;
    display: flex;
    font-family: Georgia;
    font-size: 12px;
    height: 13px;
    justify-content: center;
    margin: 0 2px;
    min-width: 13px;
    padding: 0;
    width: 13px;
}
.saves-block {
    border: 1pt solid #000;
    border-radius: 2pt;
    margin-bottom: 10pt;
    padding: 5pt 2pt 2pt 5pt;
    position: relative;
    width: 100%;
}

.char-skill {
    align-items: center;
    display: flex;
    margin-bottom: 2pt;
    height: 16pt;
}
.char-skill__check {
    margin: 0 6pt 0 0;
}
.roller.active {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.checkdot__input {
    display: none;
}
.checkdot__marker {
    background: #fff;
    border: 1pt solid #4c453f;
    border-radius: 50%;
    cursor: pointer;
    display: block;
    height: 7px;
    min-width: 7px;
    outline: none;
    padding: 0;
    position: relative;
    transition: background .2s;
    width: 7px;
}
input[type="text" i] {
    padding: 1px 2px;
}
.char-skill__modifier {
    border: 0;
    border-bottom: 1pt solid #4c453f;
    display: inline-block;
    font-size: 9pt;
    height: 11.5pt;
    line-height: 11pt;
    margin: 0;
    min-width: 10.3pt;
    outline: none;
    padding: 0;
    width: 10.3pt;
}
.char-skill__label {
    font-size: 8pt;
    margin-bottom: 0;
    margin-left: 6pt;
}
* {
    box-sizing: inherit;
}
.char-sheet {
    display: flex;
    flex-direction: column;
    font-size: 13pt;
    margin: 12px 12px 30px;
    max-width: 700px;
    min-height: 100vh;
    padding: 0 0 1mm;
    width: 100%;
}
.char-sheet__stats-skills .modifier-block:nth-of-type(2):before {
  background: #4c453f;
  border-left: 1pt solid #4c453f;
  content: "";
  display: block;
  height: 14pt;
  left: 4px;
  position: absolute;
  top: 20pt;
}
.char-sheet__label {
  font-family: Open Sans,sans-serif;
  font-size: 8pt;
  font-weight: 400;
  margin-bottom: 0;
  text-transform: uppercase;
}
.char-skill.small {
    margin-bottom: 1.5pt;
}
.char-skill.small .char-skill__label {
    font-size: 7pt;
}
.char-sheet__stats-skills {
  display: flex;
  margin-bottom: 7pt;
}

.text-block {
    background: #fff;
    border: 1pt solid #000;
    border-radius: 2pt;
    color: #000;
    display: flex;
    flex: 1 1;
    flex-direction: column;
    overflow: hidden;
    padding: 3pt 2pt;
    position: relative;
}
.text-block__label-wrap {
    background: #fff;
    bottom: 0;
    left: 50%;
    padding-bottom: 3px;
    position: absolute;
    transform: translate(-50%);
    width: 100%;
}
.text-block__controls {
    align-items: center;
    background: #eaeaea;
    border-radius: 5pt 0 1pt 0;
    bottom: 0;
    display: flex;
    height: 23px;
    padding: 2px 3px;
    position: absolute;
    right: 0;
}
.text-block__font-size {
    background: #eaeaea;
    border-radius: 5pt 0 0 1pt;
    font-size: 14px;
    left: 1px;
    opacity: 0;
    padding: 1px 5px 2px;
    position: absolute;
    top: 0;
    transform: translateX(0);
    transition: opacity .1s,transform .2s;
}
.text-block__controls-button {
    align-items: center;
    background: #fff;
    border: 1px solid transparent;
    border-radius: 50%;
    display: flex;
    font-family: Georgia;
    font-size: 12px;
    height: 13px;
    justify-content: center;
    margin: 0 2px;
    min-width: 13px;
    padding: 0;
    width: 13px;
}
.char-sheet__body {
  display: flex;
  flex: 1 1;
  margin: 0 -4pt;
}
.char-sheet__body-column {
  display: flex;
  flex-direction: column;
  height: 668pt;
  justify-content: flex-start;
  margin: 0 4pt;
  width: 33%;
}


.char-sheet__body .char-sheet__label {
  font-weight: 700;
}

p *:last-child {
    margin-bottom: 0;
}
.char-sheet__label.min {
  font-size: 5pt;
}
.char-sheet__name {
  border-bottom: 1pt solid #000;
  flex: 0 1;
  font-size: 14pt;
  margin: 0 9pt 0 0;
  min-width: 169pt;
  padding: 3pt 9pt;
  position: relative;
}
.more-block__heading {
  display: block;
  font-family: Open Sans,sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 12px;
  width: 100%;
}
.char-sheet__info-box {
  display: flex;
  font-size: 10pt;
  margin: 0 2pt;
  position: relative;
  width: 32%;
}
.char-sheet__stats {
  background: #eaeaea;
  border-radius: 30pt;
  margin-right: 3pt;
  padding: 24pt 2pt 8pt;
}
.char-sheet__stats_aime {
  border-radius: 15pt;
  padding: 15pt 2pt 0;
}
.char-sheet__skills {
  flex: 1 1;
}

</style>
