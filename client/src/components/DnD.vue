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

              <div class="text-block">
                <div data-gramm="false" class="text-block__textarea" zindex="-1" contenteditable="true"   style="position: relative; outline: none; white-space: pre-wrap; overflow-wrap: break-word; font-size: 12px; line-height: 20px;">
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
                <br>
                <div class="text-block__label-wrap">
                  <input class="char-sheet__label centered " value="Прочие владения и языки">
                </div>
              </div>

            </div>
            <div class="char-sheet__body-column">
              <div class="vitality-block">
                <div class="vitality-block__box no-back">
                  <svg class="vitality-block__shield" width="48"height="60" viewBox="0 0 48 60" fill="none">
                    <path d="M23.8494 0.802124L1.86096 12.5092V36.2236L9.39125 50.3321L23.8494 59.0374L38.0063 50.3321L46.139 36.2236V12.5092L23.8494 0.802124Z" fill="white"></path>
                    <path d="M46.8264 12.1484L24.2164 0.13221C23.881 -0.0463404 23.479 -0.0438346 23.1461 0.138475L1.16172 12.1546C0.801164 12.352 0.577545 12.7291 0.577545 13.1395V28.8356C0.590736 41.7383 8.25532 53.4111 20.1084 58.5803L23.1599 59.9066C23.445 60.0306 23.7698 60.0312 24.0556 59.9078L27.494 58.4268C39.5669 53.3697 47.4212 41.5841 47.4225 28.5243V13.1395C47.4225 12.7247 47.1932 12.3432 46.8264 12.1484ZM45.921 28.5C45.9185 40.6596 38.2441 52.2944 27.0029 57L23.6109 58.2L20.6968 57C9.66353 52.1885 2.09155 41.3562 2.07899 29.3457V13.2L23.6997 1.5L45.921 13.2V28.5Z" fill="black"></path>
                  </svg>
                  <input name="ac" type="number" class="vitality-block__box-value vitality-block__shield-input char-sheet__input" autocomplete="off" value="">
                  <p class="char-sheet__label centered min">КЗ</p>
                </div>
                <div class="vitality-block__box " style="box-sizing: inherit;">
                  <button type="button" class="roller active">
                    <input class="vitality-block__box-value" value="+0">
                  </button>
                  <p class="char-sheet__label centered min">Инициатива</p>
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
    font-size: 14px;
    height: 13px;
    justify-content: center;
    margin: 0 2px;
    min-width: 13px;
    padding: 0;
    width: 13px;
}
.text-block__textarea {
    background: repeating-linear-gradient(180deg,#fff 0px,#fff 17px,#dadada 0,#dadada 20px);;
    border: 0;
    flex: 1 1;
    font-size: 10px;
    padding: 0 2px;
    resize: none;
    width: 100%;
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
  font-size: 7pt;
  font-weight: 400;
  margin-bottom: 0;
  text-transform: uppercase;
}
.char-sheet__label.centered {
  display: block;
  text-align: center;
  width: 100%;
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
.char-sheet input[type=number] {
    -moz-appearance: textfield;
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
    overflow-y: auto

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
  height: 730pt;
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
.vitality-block {
    align-items: center;
    background: #eaeaea;
    border-radius: 8pt;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 5pt;
    padding: 4pt 4pt 8pt;
}
.vitality-block__box {
  background: #fff;
  border: 1pt solid #000;
  border-radius: 4pt;
  display: flex;
  flex-direction: column;
  height: 40pt;
  justify-content: center;
  position: relative;
  width: 44pt;
}
.vitality-block__box.no-back {
    background: none;
    border: 0;
    height: 48pt;
    margin-left: -3pt;
}
svg:not(:root) {
    overflow: hidden;
}
.vitality-block__shield {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.char-sheet input[type=number] {
    -moz-appearance: textfield;
}
.vitality-block__shield-input {
    margin-left: auto;
    margin-right: auto;
    width: 74%;
}
.vitality-block__box-value {
    background: none;
    border: 0;
    font-size: 9pt;
    margin-bottom: 4pt;
    margin-top: 6pt;
    position: relative;
    text-align: center;
    width: 60%;
}
.vitality-block__box .char-sheet__label {
    font-size: 7pt;
    position: relative;
}

</style>
