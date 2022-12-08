import star from "../img/star.jpg"
import arrow from "../img/arrow.jpg"
import Project from "../components/Project"
import { useState } from "react"

function Design(){

    const[rotacao, setRotacao] = useState(0)

    return(
        <div>
            <div class=" ml-[200px] mt-[100px]">
                <div class="flex">
                    <img class="h-[225px] w-[221px] mr-[86px] animate-spin-slow" src={star} alt=""/>
                    <div class="mt-[26px] w-[423px]">
                        <label class="text-[30px]">Eu acredito em um mundo tecnológico mais humano, compreensivo, <br /> inovador & <br /> criativo.</label>
                        <br />
                        <br />
                        <b class="text-[30px]">Arrasta pra baixo e vem ver meu trabalho ;)</b>
                    </div>
                </div>
                <img class="w-[223px] h-[225px] float-right mr-[53px]" src={arrow} alt="" />
                <div class='mt-[288px]'>
                    <Project src="https://i.ytimg.com/vi/2CFDQKVj3mg/maxresdefault.jpg" width='542px' height='703px'/>
                </div>
            </div>
        </div>
    )
}

export default Design