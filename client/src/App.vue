
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {

}
.more-block {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0 -14px;
  width: 100%;
}
@media screen and (min-width:920px) {
  .more-block {
    justify-content: space-between;
  }
}

.more-block__item {
  background: #fff;
  border-radius: 8px;
  box-shadow: -2px -2px 5px rgba(255,255,255,.6),2px 2px 10px rgba(0,0,0,.2);
  display: block;
  margin-bottom: 14px;
  max-width: 100%;
  padding: 7px 9px 10px;
  width: 100%;
}
@media screen and (min-width:920px) {
  .more-block__item {
    max-width: 332px;
  }
}
.more-block__item-image {
  border-radius: 3px;
  margin-bottom: 7px;
  width: 100%;
}
@media screen and (min-width:920px) {
  .more-block__item-image {
    height: 156px;
  }
}
.more-block__item-title {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #000;
  display: -webkit-box;
  font-family: "PT Serif",serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  overflow: hidden;
}

@media print {
  .char-sheet {
    break-after: always;
    break-inside: avoid;
    margin: 0;
    page-break-after: always;
    page-break-before: always;
  }
}
.char-sheet-info .char-sheet__name {
  margin: 0 8pt 0 0;
  min-width: 172pt;
}
.char-sheet-notes .char-sheet__undertext,.char-sheet-spells .char-sheet__undertext {
  opacity: 0;
  pointer-events: none;
  position: relative;
  top: -20pt;
}
@media print {
  .char-sheet-notes .char-sheet__undertext,.char-sheet-spells .char-sheet__undertext {
    opacity: 1;
  }
}
.char-sheet-notes .char-sheet__undertext {
  top: -10pt;
}
.char-sheet-spells .char-sheet__header {
  height: auto;
}
.har-sheet__container {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 200vh;
}
.char-sheet__disclaimer {
  margin-top: 32px;
  max-width: 700px;
  width: 100%;
}
.char-sheet__disclaimer-beta {
  color: #4776e6;
}
@media print {
  .char-sheet__disclaimer {
    display: none;
  }
}
.char-sheet__header {
  align-items: center;
  display: flex;
  height: 70.5pt;
  margin-bottom: 20pt;
}
.char-sheet__header.spells {
  margin-bottom: 35pt;
}
.char-sheet__label.absolute {
  bottom: 0;
  left: 0;
  position: absolute;
  transform: translateY(100%);
}
.char-sheet__name .char-sheet__label {
  margin-left: 9pt;
  transform: translateY(calc(100% + 2pt));
}
.char-sheet__name .char-sheet__input {
  border: 0;
  padding: 0;
  width: 100%;
}
.char-sheet__info {
  border: 1pt solid #000;
  border-radius: 2pt;
  flex: 1 1;
  padding: 4pt 10pt;
}
.char-sheet__info-section {
  align-items: center;
  border-bottom: 1pt solid #eaeaea;
  display: flex;
  margin-bottom: 15pt;
}

.char-sheet__info .char-sheet__input {
  border: 0;
  padding: 0;
  width: 100%;
}
.char-sheet__info .char-sheet__info-box {
  font-size: 9.3pt;
}
.char-sheet__devider {
  height: 5pt;
}
.char-sheet__undertext {
  break-after: always;
  break-before: avoid;
  color: #a4a4a4;
  font-size: 6pt;
  margin-bottom: 3pt;
  text-align: center;
}
.char-sheet__undertext-link {
  border-bottom: 1px solid #839ddc;
  color: #839ddc;
}
@media print {
  .char-sheet__undertext-link {
    border-bottom: 0;
    color: #a4a4a4;
  }
}
.char-sheet__undertext-print {
  display: none;
}
@media print {
  .char-sheet__undertext-print {
    display: inline-block;
  }
}
.char-sheet__print {
  align-items: center;
  background: linear-gradient(90deg,#4776e6,#8e54e9 51%,#4776e6);
  border-radius: 50%;
  bottom: 80px;
  box-shadow: 1px 1px 2px 1px rgba(0,0,0,.2);
  cursor: pointer;
  display: flex;
  height: 45px;
  justify-content: center;
  position: fixed;
  right: 84px;
  width: 45px;
  z-index: 999;
}
@media print {
  .char-sheet__print {
    display: none;
  }
}
.char-sheet__print svg {
  min-width: 24px;
}
@media screen and (max-width:799px) {
  .char-sheet__container {
    display: none;
  }
}
.char-sheet__more {
  padding: 12px;
  width: 100%;
}
.char-sheet__more .more-block {
  margin-top: 0;
}
.char-sheet__more .more-block__heading {
  display: none;
}
@media screen and (min-width:800px) {
  .char-sheet__more {
    display: none;
  }
}
.char-sheet input::-webkit-inner-spin-button,.char-sheet input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.char-sheet input[type=number] {
  -moz-appearance: textfield;
}
.char-sheet__enable-rolls {
  align-items: center;
  display: flex;
  margin-bottom: 6px;
}
.char-sheet__enable-rolls-box {
  margin-left: 8px;
}
.char-sheet__template-wrap {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 14px;
}
.character__wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.character__wrapper_disabled:after {
  background: #fff;
  bottom: 30px;
  box-shadow: 1px 1px 2px 1px rgba(0,0,0,.2);
  content: "Похоже, что редактор персонажа открыт сразу в нескольких вкладках.";
  display: block;
  left: 50%;
  max-width: 780px;
  padding: 30px;
  position: fixed;
  text-align: center;
  transform: translateX(-50%);
  white-space: pre-wrap;
  width: 100%;
  z-index: 9999;
}
.character__wrapper_disabled:before {
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  background: rgba(255,255,255,.8);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 67px;
  width: 100vw;
  z-index: 9998;
}
@media print {
  .no-print {
    display: none!important;
  }
}
input {
  border-radius: 0;
}

</style>
