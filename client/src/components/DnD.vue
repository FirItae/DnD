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
              <div class="char-sheet__body-column">
                <
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
.text-block-dop{
  position: relative;
  outline: none;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  font-size: 9px;
  line-height: 14px;
  background: repeating-linear-gradient(rgb(255, 255, 255) 1px, rgb(255, 255, 255) 14px, rgb(218, 218, 218) 1px, rgb(218, 218, 218) 15px);

}
</style>
