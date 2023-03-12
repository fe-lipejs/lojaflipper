<template>
    <div>{{ toqueIntensidade }} | Distância: {{ distancia }}px | {{ direcao }}</div>
    <div class="dots">
        <div ref="dot1" class="dot1 dot"></div>
        <div ref="dot2" class="dot2 dot "></div>
        <div ref="dot3" class="dot3 dot"></div>
        <div ref="dot4" class="dot4 dot dotted"></div>
    </div>
    <div class="slider" v-on:touchstart="handleToqueInicial" v-on:touchmove="handleToqueMovimento"
        v-on:touchend="handleToqueFinal">
        <div ref="Slider" class="slider-container">
            <div class="slider-item1 slider-item" ref="sliderItem">1</div>
            <div class="slider-item2 slider-item" ref="sliderItem">2</div>
            <div class="slider-item3 slider-item" ref="sliderItem">3</div>
            <div class="slider-item4 slider-item" ref="sliderItem">4</div>
        </div>
    </div>
</template>


<style scoped>
.slider {
    position: absolute;
    right: 50%;
    width: 500px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: grey;
}

.slider-container {
    /* transform: translateX(-400px); */

    display: flex;
    height: 200px;
    width: 380px;
    /* overflow: hidden; */
    transition: transform 0.3s ease-in-out;


}

.slider-item {
    flex: 0 0 100%;
    height: 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    margin: 10px;
}



.slider-item1 {}

.slider-item2 {
    background-color: orange
}

.slider-item3 {
    background-color: yellow
}

.slider-item4 {
    background-color: blue
}

.dots {
    display: flex;

}

.dot {
    width: 15px;
    height: 15px;
    margin: 4px;
    border: 1px solid grey;
    border-radius: 100%;
}

.dotted {
    background-color: rgb(23, 23, 23);
}
</style>


<script>
import $ from 'jquery';
import 'jquery-touchswipe';
export default {
    name: 'DestaqueSemana',
    data() {
        return {
            nome: 'Página Inicial',
            toqueInicial: null,
            toqueIntensidade: 0,
            distancia: null,
            direcao: 'right'

        };
    },
    mounted() {
        const myDivs = this.$refs.sliderItem;
        const count = myDivs.length;
       
        myDivs.forEach((div) => {
            console.log('X')
        });
    },
    methods: {
        handleToqueInicial(e) {
            this.toqueInicial = e.touches[0].clientX
        },
        handleToqueMovimento(e) {
            const intesidade = e.touches[0].clientX - this.toqueInicial
            this.distancia = intesidade // determina a distancia que o toque teve


            //determina quantos ou o quanto elemento será arrastado
            /*   if (this.distancia > (0) && this.distancia <= 20) {
                  if (this.direcao == 'left') {
                      this.$refs.Slider.style.transform = 'translateX(-' + this.toqueIntensidade +this.distancia+'px)';
                  } else {
                      this.$refs.Slider.style.transform = 'translateX(+' + this.toqueIntensidade+this.distancia+ 'px)';
                  }
              }
   */

        },
        handleToqueFinal(e) {
            if (this.distancia < 0) {
                // converte a distancia negativa em positiva e determina o lado que irá girar
                this.distancia = this.distancia * (-1)
                this.direcao = 'left'
            } else {
                this.direcao = 'right'
            }


            //determina quantos ou o quanto elemento será arrastado
            if (this.distancia > (60)) {
                if (this.direcao == 'left') {
                    this.toqueIntensidade -= 400
                } else {
                    this.toqueIntensidade += 400
                }
            }

            if (this.toqueIntensidade < -1200) {
                this.toqueIntensidade = -1200
                setTimeout(() => { this.$refs.Slider.style.transform = 'translateX(-1400px)'; }, 100)
                setTimeout(() => { this.$refs.Slider.style.transform = 'translateX(-1200px)'; }, 250)

            } if (this.toqueIntensidade > 0) {
                this.toqueIntensidade = 0

                setTimeout(() => { this.$refs.Slider.style.transform = 'translateX(200px)'; }, 100)
                setTimeout(() => { this.$refs.Slider.style.transform = 'translateX(0px)'; }, 250)

            }
            this.$refs.Slider.style.transform = 'translateX(' + this.toqueIntensidade + 'px)';
            //--------------------------------------------------------------------

            $('.dot1').addClass('dotted');

            const count = this.$refs.sliderItem
            console.log(count)


        }

    }

}


</script>