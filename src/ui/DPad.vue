<template>
  <div class="d-pad-container" :class="appliedClass">
    <nav class="d-pad">
      <!-- href below for pointer clickable tooltip -->
      <!-- .stop and .prevent below to prevent click and drag etc -->
      <!-- TODO add press and hold event and doubleclick event? Currently YAGNI territory -->
      <div
        class="up d-pad-btn"
        draggable="false"
        @mousedown.stop="upStart"
        @mouseup.stop="upEnd"
        @mouseleave.stop="upEnd"
        @touchstart.stop="upStart"
        @touchend.stop="upEnd"
        @touchcancel.stop="upEnd"
        @touchmove.prevent
      />
      <div
        class="right d-pad-btn"
        draggable="false"
        @mousedown.stop="rightStart"
        @mouseup.stop="rightEnd"
        @mouseleave.stop="rightEnd"
        @touchstart.stop="rightStart"
        @touchend.stop="rightEnd"
        @touchcancel.stop="rightEnd"
        @touchmove.prevent
      />
      <div
        class="down d-pad-btn"
        draggable="false"
        @mousedown.stop="downStart"
        @mouseup.stop="downEnd"
        @mouseleave.stop="downEnd"
        @touchstart.stop="downStart"
        @touchend.stop="downEnd"
        @touchcancel.stop="downEnd"
        @touchmove.prevent
      />
      <div
        class="left d-pad-btn"
        draggable="false"
        @mousedown.stop="leftStart"
        @mouseup.stop="leftEnd"
        @mouseleave.stop="leftEnd"
        @touchstart.stop="leftStart"
        @touchend.stop="leftEnd"
        @touchcancel.stop="leftEnd"
        @touchmove.prevent
      />
    </nav>
  </div>
</template>

<script>
const directions = ['up', 'down', 'left', 'right']

function removeItemAll(arr, value) {
  let i = 0
  while (i < arr.length) {
    if (arr[i] === value)
      arr.splice(i, 1)

    else
      i += 1
  }
  return arr
}

export default {
  name: 'DPad',
  props: {
    // pink, dark, outline, clear, blue, white, wire
    color: {
      type: String,
      default: '',
    },
    // allow up and left to be pressed at the same time for example.
    // setting to false makes only one directional button pressable at a time
    multiTouch: {
      type: Boolean,
      default: true,
    },
    // allow up and down to be pressed at the same time.
    // Active press is the current depressed button, most recently pressed on the "axis".
    // if set to false, up and left are still valid for example, but up and down is not.
    // setting is ignored if multiTouch is set to false
    multiDirection: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    lastButtonPressed: null,
    currentlyPressed: [],
    appliedClass: '',
  }),
  watch: {
  },
  mounted() {
    let classString = ''
    const colors = ['pink', 'dark', 'outline', 'clear',
      'blue', 'white', 'wire']
    if (colors.includes(this.color))
      classString += this.color

    classString += ` ${this.$vuetify.breakpoint}-d-pad`
    this.appliedClass = classString
  },
  methods: {
    // direction needs to be up/down/left/right
    buttonEnd(direction) {
      if (!directions.includes(direction)) {
        console.log('invalid direction')
        return
      }
      if (this.currentlyPressed.includes(direction)) {
        removeItemAll(this.currentlyPressed, direction)
        this.$emit(direction, false)
      }
    },
    // direction needs to be up/down/left/right
    buttonStart(direction) {
      if (!directions.includes(direction)) {
        // TODO Where to log error?
        console.log('invalid direction')
        return
      }
      // if the button is somehow already pressed no need to do anything
      // otherwise we would be reduntantly asserting the state or join
      // KEY CONCEPT: break before make for un-pressing buttons -
      // down goes low first before up goes high if multidirection is false for example
      if (!this.currentlyPressed.includes(direction)) {
        if (this.multiTouch === true) {
          if (this.multiDirection === true) {
            // don't have any rules for what can be pressed, make it pressed
            this.currentlyPressed.push(direction)
          }
          else {
            // have to check if something on the axis is pressed already
            // if it is, unpress it before proceed
            if (direction === 'up' && this.currentlyPressed.includes('down'))
              this.buttonEnd('down')
            else if (direction === 'down' && this.currentlyPressed.includes('up'))
              this.buttonEnd('up')
            else if (direction === 'left' && this.currentlyPressed.includes('right'))
              this.buttonEnd('right')
            else if (direction === 'right' && this.currentlyPressed.includes('left'))
              this.buttonEnd('left')

            this.currentlyPressed.push(direction)
          }
        }
        else {
          // multitouch false - only one event at a time
          // end all the currently pressed buttons
          this.currentlyPressed.forEach((e) => {
            this.buttonEnd(e)
          })
          this.currentlyPressed = [direction]
        }

        // always emit this event and set last button pressed as
        // d-pad functions on most recent button pressed.
        // No matter if multitouch or multidirection is active -
        // we handle what we had to turn off based on those rules above
        // but this always gets done below
        this.lastButtonPressed = direction
        this.$emit(direction, true)
      }
    },
    upStart() {
      this.buttonStart('up')
    },
    downStart() {
      this.buttonStart('down')
    },
    leftStart() {
      this.buttonStart('left')
    },
    rightStart() {
      this.buttonStart('right')
    },
    upEnd() {
      this.buttonEnd('up')
    },
    downEnd() {
      this.buttonEnd('down')
    },
    leftEnd() {
      this.buttonEnd('left')
    },
    rightEnd() {
      this.buttonEnd('right')
    },
  },
}
</script>

<style lang="scss" scoped>
// CSS from https://gist.github.com/reVoniaC/38d0e1e3e3f785b856cebbe971fa7fdc
// https://codepen.io/tswone/pen/GLzZLd

//$dpad-radius: 17%;
$dpad-radius: 28%;
$dpad-radius-in: 20%;
//$dpad-fg: #ddd;
$dpad-fg: #f5f5f5;
$dpad-fg-hover: #eee;
//$dpad-bg: #fff;
$dpad-bg: transparent;
$arrowcolor: #aaa;
$tri-sml-a: 13px;
$tri-sml-b: 19px;
$tri-lrg-a: 13px;
$tri-lrg-b: 19px;
$dpad-arrow-shift: 5px;
$dpad-arrow-move: 35%;

.xl-d-pad {
  max-width: 400px;
  max-height: 400px;
}

.lg-d-pad {
  max-width: 300px;
  max-height: 300px;
}

.md-d-pad {
  max-width: 250px;
  max-height: 250px;
}

.sm-d-pad {
  max-width: 200px;
  max-height: 200px;
}

.xs-d-pad {
  max-width: 150px;
  max-height: 150px;
}

.d-pad-container {
  position: relative;
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  min-height: 112px;
  min-width: 112px;
}

.d-pad {
  position: relative;
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  min-height: 112px;
  min-width: 112px;
  border-radius: 48%; //to round off the outer edge of the buttons
  overflow: visible; //for box shadows, hidden to round edge of buttons
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 5%;
    transform: translate(-50%, -50%);
    width: 66.6%;
    height: 66.6%;
    //background: $dpad-fg;
    background: transparent;
  }
  &:after {
    content: '';
    position: absolute;
    display: none;
    z-index:2;
    width: 20%;
    height: 20%;
    top: 50%;
    left: 50%;
    background: $dpad-fg;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all .25s;
    cursor: pointer;
  }
  &:hover:after {
    width: 30%;
    height: 30%;
  }
  .d-pad-btn {
    border: rgb(118,118,118);
    box-shadow:
      0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%),
      0px 1px 5px 0px rgb(0 0 0 / 12%);
    display:block;
    position: absolute;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    width: 33.3%;
    height: 43%;
    line-height: 40%;
    color: #fff;
    background: $dpad-fg;
    text-align: center;
    &:hover {
      background: $dpad-fg-hover;
      cursor: pointer;
    }
    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-radius: 5px;
      border-style: solid;
      transition: all .25s;
    }
    &:after {
      content: '';
      position: absolute;
      width: 102%;
      height: 78%;
      background: $dpad-bg;
      border-radius: $dpad-radius-in;
    }
  }
  .d-pad-btn.left, .d-pad-btn.right {
    width: 43%;
    height: 33%;
    &:after {
      width: 78%;
      height: 102%;
    }
  }

  .d-pad-btn.up {
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: $dpad-radius $dpad-radius 50% 50%;
    &:hover {
      background: linear-gradient(0deg, $dpad-fg 0%, $dpad-fg-hover 50%);
    }
    &:after {
      left: 0;
      top: 0;
      transform: translate(-100%, 0);
      border-top-left-radius: 50%;
      pointer-events: none;
    }
    &:before {
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-width: 0 $tri-sml-a $tri-sml-b $tri-sml-a;
      border-color: transparent transparent $arrowcolor transparent;
    }
    &:active:before {
      border-bottom-color: #333;
    }
  }
  .d-pad-btn.up:hover:before { top: $dpad-arrow-move; }

  .d-pad-btn.down {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50% 50% $dpad-radius $dpad-radius;
    &:hover {
      background: linear-gradient(180deg, $dpad-fg 0%, $dpad-fg-hover 50%);
    }
    &:after {
      right: 0;
      bottom: 0;
      transform: translate(100%, 0);
      border-bottom-right-radius: 50%;
      pointer-events: none;
    }
    &:before {
      bottom: 40%;
      left: 50%;
      transform: translate(-50%, 50%);
      border-width: $tri-sml-b $tri-sml-a 0px $tri-sml-a;
      border-color: $arrowcolor transparent transparent transparent;
    }
    &:active:before {
      border-top-color: #333;
    }
  }
  .d-pad-btn.down:hover:before { bottom: $dpad-arrow-move; }

  .d-pad-btn.left {
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    border-radius: $dpad-radius 50% 50% $dpad-radius;
    &:hover {
      background: linear-gradient(-90deg, $dpad-fg 0%, $dpad-fg-hover 50%);
    }
    &:after {
      left: 0;
      bottom: 0;
      transform: translate(0, 100%);
      border-bottom-left-radius: 50%;
      pointer-events: none;
    }
    &:before {
      left: 40%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-width: $tri-sml-a $tri-sml-b $tri-sml-a 0;
      border-color: transparent $arrowcolor transparent transparent;
    }
    &:active:before {
      border-right-color: #333;
    }
  }
  .d-pad-btn.left:hover:before { left: $dpad-arrow-move; }

  .d-pad-btn.right {
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    border-radius: 50% $dpad-radius $dpad-radius 50%;
    &:hover {
      background: linear-gradient(90deg, $dpad-fg 0%, $dpad-fg-hover 50%);
    }
    &:after {
      right: 0;
      top: 0;
      transform: translate(0, -100%);
      border-top-right-radius: 50%;
      pointer-events: none;
    }
    &:before {
      right: 40%;
      top: 50%;
      transform: translate(50%, -50%);
      border-width: $tri-sml-a 0 $tri-sml-a $tri-sml-b;
      border-color: transparent transparent transparent $arrowcolor;
    }
    &:active:before {
      border-left-color: #333;
    }
  }
  .d-pad-btn.right:hover:before { right: $dpad-arrow-move; }
}
.d-pad.up .d-pad-btn.up:before { border-bottom-color: #333; }
.d-pad.down .d-pad-btn.down:before { border-top-color: #333; }
.d-pad.left .d-pad-btn.left:before { border-right-color: #333; }
.d-pad.right .d-pad-btn.right:before { border-left-color: #333; }

.dark {
  $c: #111;
  $c-h: #222;
  $c-t: rgba(255,255,255,.9);
  $c-t-a: #61e22d;
  .d-pad {
    .d-pad-btn { border-radius: 35%; }
    &:before, .d-pad-btn { background: #111; }
    .d-pad-btn.up:hover { background: linear-gradient(0deg, $c 0%, $c-h 50%); }
    .d-pad-btn.right:hover { background: linear-gradient(90deg, $c 0%, $c-h 50%); }
    .d-pad-btn.down:hover { background: linear-gradient(180deg, $c 0%, $c-h 50%); }
    .d-pad-btn.left:hover { background: linear-gradient(-90deg, $c 0%, $c-h 50%); }
    .d-pad-btn.up:before { border-bottom-color: $c-t; }
    .d-pad-btn.right:before { border-left-color: $c-t; }
    .d-pad-btn.down:before { border-top-color: $c-t; }
    .d-pad-btn.left:before { border-right-color: $c-t; }
    .d-pad-btn.up:active:before { border-bottom-color: $c-t-a; }
    .d-pad-btn.right:active:before { border-left-color: $c-t-a; }
    .d-pad-btn.down:active:before { border-top-color: $c-t-a; }
    .d-pad-btn.left:active:before { border-right-color: $c-t-a; }
  }
}

.pink {
  $c: #ff1285;
  $c-h: #f366aa;
  $c-t: rgba(255,255,255,.7);
  $c-t-a: rgba(255,255,255,1);
  .d-pad {
    &:before, .d-pad-btn { background: $c; }
    .d-pad-btn:after { border-radius: 30%; }
    .d-pad-btn.up:hover { background: linear-gradient(0deg, $c 0%, $c-h 50%); }
    .d-pad-btn.right:hover { background: linear-gradient(90deg, $c 0%, $c-h 50%); }
    .d-pad-btn.down:hover { background: linear-gradient(180deg, $c 0%, $c-h 50%); }
    .d-pad-btn.left:hover { background: linear-gradient(-90deg, $c 0%, $c-h 50%); }
    .d-pad-btn.up:before { border-bottom-color: $c-t; }
    .d-pad-btn.right:before { border-left-color: $c-t; }
    .d-pad-btn.down:before { border-top-color: $c-t; }
    .d-pad-btn.left:before { border-right-color: $c-t; }
    .d-pad-btn.up:active:before { border-bottom-color: $c-t-a; }
    .d-pad-btn.right:active:before { border-left-color: $c-t-a; }
    .d-pad-btn.down:active:before { border-top-color: $c-t-a; }
    .d-pad-btn.left:active:before { border-right-color: $c-t-a; }
  }
}

.clear {
  //$c: #fff;
  $c: #111;
  $c-h: #6ea248;
  $c-bg: #5f9837;
  //$c-t: #fff;
  $c-t: #111;
  $c-t-a: rgba(0,0,0,.6);
  .d-pad {
    border-radius: 0;
    .d-pad-btn { border: 1px solid $c; }
    &:before, .d-pad-btn { background: none; }
    .d-pad-btn:after { display: none; }
    .d-pad-btn.up:hover { background: linear-gradient(0deg, $c-bg 0%, $c-h 50%); }
    .d-pad-btn.right:hover { background: linear-gradient(90deg, $c-bg 0%, $c-h 50%); }
    .d-pad-btn.down:hover { background: linear-gradient(180deg, $c-bg 0%, $c-h 50%); }
    .d-pad-btn.left:hover { background: linear-gradient(-90deg, $c-bg 0%, $c-h 50%); }
    .d-pad-btn.up:before { border-bottom-color: $c-t; }
    .d-pad-btn.right:before { border-left-color: $c-t; }
    .d-pad-btn.down:before { border-top-color: $c-t; }
    .d-pad-btn.left:before { border-right-color: $c-t; }
    .d-pad-btn.up:active:before { border-bottom-color: $c-t-a; }
    .d-pad-btn.right:active:before { border-left-color: $c-t-a; }
    .d-pad-btn.down:active:before { border-top-color: $c-t-a; }
    .d-pad-btn.left:active:before { border-right-color: $c-t-a; }
  }
}

.outline {
  $c: #fff;
  $c-h: #efefef;
  $c-t: rgba(0,0,0,.1);
  .d-pad {
    border-radius: 0;
    .d-pad-btn { border: 1px solid $c-t; }
    &:after, &:before, .d-pad-btn { background: $c; }
    .d-pad-btn:after { display: none; }
    .d-pad-btn.up:hover { background: linear-gradient(0deg, $c 0%, $c-h 50%); }
    .d-pad-btn.right:hover { background: linear-gradient(90deg, $c 0%, $c-h 50%); }
    .d-pad-btn.down:hover { background: linear-gradient(180deg, $c 0%, $c-h 50%); }
    .d-pad-btn.left:hover { background: linear-gradient(-90deg, $c 0%, $c-h 50%); }
    .d-pad-btn.up:before { border-bottom-color: $c-t; }
    .d-pad-btn.right:before { border-left-color: $c-t; }
    .d-pad-btn.down:before { border-top-color: $c-t; }
    .d-pad-btn.left:before { border-right-color: $c-t; }
  }
}

.blue {
  $c: #1843ca;
  $c-h: #143cb9;
  $c-t: #ccc;
  $c-t-a: rgba(255,255,255,1);
  .d-pad {
    &:before, .d-pad-btn { background: $c; }
    &:after { display: block; background: $c-t; }
    .d-pad-btn:after { border-radius: 10%; }
    .d-pad-btn.up:hover { background: linear-gradient(0deg, $c 0%, $c-h 50%); }
    .d-pad-btn.right:hover { background: linear-gradient(90deg, $c 0%, $c-h 50%); }
    .d-pad-btn.down:hover { background: linear-gradient(180deg, $c 0%, $c-h 50%); }
    .d-pad-btn.left:hover { background: linear-gradient(-90deg, $c 0%, $c-h 50%); }
    .d-pad-btn.up:before { border-bottom-color: $c-t; }
    .d-pad-btn.right:before { border-left-color: $c-t; }
    .d-pad-btn.down:before { border-top-color: $c-t; }
    .d-pad-btn.left:before { border-right-color: $c-t; }
    .d-pad-btn.up:active:before { border-bottom-color: $c-t-a; }
    .d-pad-btn.right:active:before { border-left-color: $c-t-a; }
    .d-pad-btn.down:active:before { border-top-color: $c-t-a; }
    .d-pad-btn.left:active:before { border-right-color: $c-t-a; }
  }
}

.setbg.white {
  $c: #fff;
  $c-t: rgba(0,0,0,.1);
  $c-t-a: rgba(0,0,0,.6);
  $c-h: #143cb9;
  .d-pad {
    &:before, .d-pad-btn { background: $c; }
    &:after { display: block; background: $c-t; }
    .d-pad-btn:after { border-radius: 40%; background: #222; }
    .d-pad-btn.up:hover { background: $c; }
    .d-pad-btn.right:hover { background: $c; }
    .d-pad-btn.down:hover { background: $c; }
    .d-pad-btn.left:hover { background: $c; }
    .d-pad-btn.up:before { border-bottom-color: #0074D9; }
    .d-pad-btn.up:before { border-bottom-color: #0074D9; }
    .d-pad-btn.right:before { border-left-color: #FF851B; }
    .d-pad-btn.down:before { border-top-color: #3D9970; }
    .d-pad-btn.left:before { border-right-color: #FFDC00; }
    .d-pad-btn.up:active:before { border-bottom-color: $c-t-a; }
    .d-pad-btn.right:active:before { border-left-color: $c-t-a; }
    .d-pad-btn.down:active:before { border-top-color: $c-t-a; }
    .d-pad-btn.left:active:before { border-right-color: $c-t-a; }
  }
}

.wire {
  $c: #93b4ff;
  .d-pad {
    overflow: initial;
    border: 1px dashed $c;
    &:after { display: block; }
    &:after, &:before, .d-pad-btn, .d-pad-btn:after {
      background: none;
      border: 1px solid $c;
    }
    .d-pad-btn:after { border: 1px dashed $c; }
    .d-pad-btn.up:before { border-bottom-color: $c; }
    .d-pad-btn.right:before { border-left-color: $c; }
    .d-pad-btn.down:before { border-top-color: $c; }
    .d-pad-btn.left:before { border-right-color: $c; }
    .d-pad-btn:hover { background: none; }
  }
}

// set direction active state
.d-pad.up .d-pad-btn.up:before { border-bottom-color: #333; }
.d-pad.down .d-pad-btn.down:before { border-top-color: #333; }
.d-pad.left .d-pad-btn.left:before { border-right-color: #333; }
.d-pad.right .d-pad-btn.right:before { border-left-color: #333; }
</style>
