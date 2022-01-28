<template>
  <button class="ti-btn p-4" ref="tiBtn" v-on:click="animateRipple">
    <slot></slot>
    <transition-group>
		<span
        class="ripple rounded-full"
        v-bind:ref="'ripple-' + i"
        v-bind:key="'ripple' + i"
        v-for="(val, i) in ripples"
        v-bind:style="{'top': val.y + 'px', 'left': val.x + 'px'}"
        v-on:animationend="rippleEnd()">
		</span>
    </transition-group>
  </button>
</template>

<script>
export default {
  name: "rippleButton",
  data: function() {
    return {
      ripples: []
    }
  },
  methods: {
    animateRipple: function(e) {
      let el  = this.$refs.tiBtn;
      let pos = el.getBoundingClientRect();

      this.ripples.push({
        x: e.clientX - pos.left,
        y: e.clientY - pos.top,
      });
    },
    rippleEnd: function() {
      while(this.ripples.length > 0)
        this.ripples.pop()
    }
  },
}
</script>

<style scoped >

.ti-btn {
  width: 100%;
  color: var(--gray-bg);
  background-color: var(--accent-color);
  outline: 0;
  overflow: hidden;
  display: inline-block;
  position: relative;
  user-select: none;
  border-radius: 999px;
  box-shadow: 0 0 0 0 rgba(255,255,255, 0.5);
  transition: box-shadow 150ms ease-out;
}
  .ti-btn:focus {
     box-shadow: 0 0 0 3px var(--accent-color-lighter);
   }

.ripple {
  background-color: var(--black-principal);
  opacity: 0.2;
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;

  transform: translate(-50%, -50%) scale(0);


  animation: scale 500ms ease-out forwards;
}
@keyframes scale {
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}

</style>